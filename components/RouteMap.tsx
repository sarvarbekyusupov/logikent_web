"use client";

import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, Polyline } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import dynamic from "next/dynamic";

// Fix for default marker icons in Next.js
if (typeof window !== "undefined") {
  delete (L.Icon.Default.prototype as any)._getIconUrl;
  L.Icon.Default.mergeOptions({
    iconRetinaUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png",
    iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png",
    shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png",
  });
}

// Country coordinates (using representative cities)
const LOCATIONS = {
  china: { lat: 35.8617, lng: 104.1954, name: "China", city: "Beijing", flag: "🇨🇳" },
  turkey: { lat: 39.9334, lng: 32.8597, name: "Turkey", city: "Istanbul", flag: "🇹🇷" },
  russia: { lat: 62.5, lng: 95.0, name: "Russia", city: "Moscow", flag: "🇷🇺" },
  uae: { lat: 24.4539, lng: 54.3773, name: "UAE", city: "Dubai", flag: "🇦🇪" },
  eu: { lat: 50.1109, lng: 8.6821, name: "European Union", city: "Frankfurt", flag: "🇪🇺" },
  tashkent: { lat: 41.2995, lng: 69.2401, name: "Uzbekistan", city: "Tashkent", flag: "🇺🇿" },
};

// Calculate curved path using quadratic Bezier curve
function calculateCurvedPath(
  start: [number, number],
  end: [number, number],
  curvature: number = 0.12
): [number, number][] {
  const points: [number, number][] = [];
  const numberOfPoints = 100;

  // Calculate midpoint
  const midLat = (start[0] + end[0]) / 2;
  const midLng = (start[1] + end[1]) / 2;

  // Calculate control point - always curve downward (southward)
  const lngDiff = end[1] - start[1];
  const latDiff = end[0] - start[0];

  // Control point offset - negative to curve southward/downward
  const controlLat = midLat - Math.abs(lngDiff) * curvature - 5;
  const controlLng = midLng + (latDiff * curvature) / 2;

  // Generate points along the Bezier curve
  for (let i = 0; i <= numberOfPoints; i++) {
    const t = i / numberOfPoints;
    const lat =
      (1 - t) * (1 - t) * start[0] +
      2 * (1 - t) * t * controlLat +
      t * t * end[0];
    const lng =
      (1 - t) * (1 - t) * start[1] +
      2 * (1 - t) * t * controlLng +
      t * t * end[1];
    points.push([lat, lng]);
  }

  return points;
}

// Custom origin marker icon
const createOriginIcon = (flag: string) => {
  return L.divIcon({
    className: "custom-origin-marker",
    html: `
      <div style="
        display: flex;
        align-items: center;
        justify-content: center;
        width: 44px;
        height: 44px;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        border-radius: 50%;
        border: 3px solid white;
        box-shadow: 0 4px 12px rgba(102, 126, 234, 0.4);
        font-size: 22px;
        position: relative;
      ">
        <span style="position: relative; z-index: 1;">${flag}</span>
      </div>
    `,
    iconSize: [44, 44],
    iconAnchor: [22, 22],
  });
};

// Custom destination marker icon (Tashkent)
const destinationIcon = L.divIcon({
  className: "custom-destination-marker",
  html: `
    <div style="
      display: flex;
      align-items: center;
      justify-content: center;
      width: 56px;
      height: 56px;
      background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
      border-radius: 50%;
      border: 4px solid white;
      box-shadow: 0 6px 20px rgba(245, 87, 108, 0.5);
      font-size: 26px;
      position: relative;
      animation: destination-pulse 2s ease-in-out infinite;
    ">
      <span style="position: relative; z-index: 1;">🇺🇿</span>
    </div>
  `,
  iconSize: [56, 56],
  iconAnchor: [28, 28],
});

export default function RouteMap() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);

    // Add custom CSS for animations
    const style = document.createElement("style");
    style.innerHTML = `
      @keyframes destination-pulse {
        0%, 100% {
          transform: scale(1);
          box-shadow: 0 6px 20px rgba(245, 87, 108, 0.5);
        }
        50% {
          transform: scale(1.08);
          box-shadow: 0 8px 30px rgba(245, 87, 108, 0.7);
        }
      }

      @keyframes dash-animation {
        to {
          stroke-dashoffset: -100;
        }
      }

      .leaflet-container {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
      }

      .custom-popup .leaflet-popup-content-wrapper {
        background: white;
        border-radius: 12px;
        padding: 0;
        box-shadow: 0 8px 32px rgba(0,0,0,0.12);
      }

      .custom-popup .leaflet-popup-tip {
        box-shadow: 0 8px 32px rgba(0,0,0,0.12);
      }

      .custom-popup .leaflet-popup-content {
        margin: 0;
        padding: 16px 20px;
      }

      .custom-popup h3 {
        margin: 0 0 8px 0;
        font-size: 18px;
        font-weight: 700;
        color: #1a202c;
      }

      .custom-popup p {
        margin: 0;
        font-size: 14px;
        color: #718096;
      }

      .curved-route {
        stroke-dasharray: 8, 12;
        animation: dash-animation 20s linear infinite;
      }

      .leaflet-control-attribution {
        background: rgba(255,255,255,0.9) !important;
        backdrop-filter: blur(10px);
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  if (!isClient) {
    return (
      <div className="d-flex justify-content-center align-items-center" style={{ height: "600px", background: "#f7fafc" }}>
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  // Define routes with colors
  const routes = [
    { from: LOCATIONS.china, to: LOCATIONS.tashkent, color: "#ef4444", label: "China Route" },
    { from: LOCATIONS.turkey, to: LOCATIONS.tashkent, color: "#f59e0b", label: "Turkey Route" },
    { from: LOCATIONS.russia, to: LOCATIONS.tashkent, color: "#3b82f6", label: "Russia Route" },
    { from: LOCATIONS.uae, to: LOCATIONS.tashkent, color: "#10b981", label: "UAE Route" },
    { from: LOCATIONS.eu, to: LOCATIONS.tashkent, color: "#8b5cf6", label: "EU Route" },
  ];

  const originLocations = [
    LOCATIONS.china,
    LOCATIONS.turkey,
    LOCATIONS.russia,
    LOCATIONS.uae,
    LOCATIONS.eu,
  ];

  return (
    <section id="route-map" className="py-5" style={{ background: "linear-gradient(180deg, #f7fafc 0%, #ffffff 100%)" }}>
      <div className="container" style={{ maxWidth: "1200px" }}>
        {/* Header */}
        <div className="row mb-5">
          <div className="col-12 text-center">
            <span className="badge bg-primary bg-opacity-10 text-primary mb-3 px-4 py-2" style={{ fontSize: "14px", fontWeight: 600, borderRadius: "50px" }}>
              Global Network
            </span>
            <h2 className="section-title mb-3" style={{ fontSize: "42px", fontWeight: 800, color: "#1a202c" }}>
              Our International Trade Routes
            </h2>
            <p className="lead" style={{ fontSize: "18px", color: "#718096", maxWidth: "700px", margin: "0 auto" }}>
              Connecting major business hubs across continents to Uzbekistan with efficient logistics solutions
            </p>
          </div>
        </div>

        {/* Map */}
        <div className="row mb-4">
          <div className="col-12">
            <div style={{
              height: "650px",
              borderRadius: "20px",
              overflow: "hidden",
              boxShadow: "0 20px 60px rgba(0,0,0,0.15)",
              border: "8px solid white"
            }}>
              <MapContainer
                center={[42, 58]}
                zoom={3}
                style={{ height: "100%", width: "100%", background: "#e8f4f8" }}
                scrollWheelZoom={false}
                zoomControl={true}
                doubleClickZoom={false}
                dragging={true}
                touchZoom={false}
                boxZoom={false}
                keyboard={false}
              >
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                {/* Origin markers */}
                {originLocations.map((location) => (
                  <Marker
                    key={location.name}
                    position={[location.lat, location.lng]}
                    icon={createOriginIcon(location.flag)}
                  >
                    <Popup className="custom-popup">
                      <div>
                        <h3>{location.flag} {location.name}</h3>
                        <p>{location.city}</p>
                      </div>
                    </Popup>
                  </Marker>
                ))}

                {/* Tashkent marker */}
                <Marker
                  position={[LOCATIONS.tashkent.lat, LOCATIONS.tashkent.lng]}
                  icon={destinationIcon}
                >
                  <Popup className="custom-popup">
                    <div>
                      <h3>🇺🇿 Uzbekistan</h3>
                      <p>Tashkent - Our Logistics Hub</p>
                    </div>
                  </Popup>
                </Marker>

                {/* Curved route lines */}
                {routes.map((route, index) => {
                  const curvedPath = calculateCurvedPath(
                    [route.from.lat, route.from.lng],
                    [route.to.lat, route.to.lng],
                    0.15
                  );

                  return (
                    <Polyline
                      key={index}
                      positions={curvedPath}
                      color={route.color}
                      weight={3.5}
                      opacity={0.85}
                      className="curved-route"
                    />
                  );
                })}
              </MapContainer>
            </div>
          </div>
        </div>

        {/* Route Cards */}
        <div className="row g-4 mt-4">
          {routes.map((route, index) => (
            <div key={index} className="col-12 col-md-6 col-lg-4">
              <div
                className="card border-0 shadow-lg h-100 transition-all"
                style={{
                  borderRadius: "20px",
                  overflow: "hidden",
                  background: "white",
                  transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)"
                }}
                onMouseEnter={(e) => {
                  const card = e.currentTarget;
                  card.style.transform = "translateY(-8px) scale(1.02)";
                  card.style.boxShadow = `0 25px 50px -12px ${route.color}40`;
                }}
                onMouseLeave={(e) => {
                  const card = e.currentTarget;
                  card.style.transform = "translateY(0) scale(1)";
                  card.style.boxShadow = "0 10px 15px -3px rgba(0, 0, 0, 0.1)";
                }}
              >
                {/* Header with gradient */}
                <div
                  className="p-4 position-relative"
                  style={{
                    background: `linear-gradient(135deg, ${route.color}15, ${route.color}05)`,
                    borderBottom: `3px solid ${route.color}`
                  }}
                >
                  <div className="d-flex align-items-center justify-content-between">
                    <div className="d-flex align-items-center">
                      <div
                        className="rounded-circle me-3"
                        style={{
                          width: "60px",
                          height: "60px",
                          background: `linear-gradient(135deg, ${route.color}, ${route.color}cc)`,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontSize: "28px",
                          boxShadow: `0 8px 20px ${route.color}50`,
                          border: "3px solid white"
                        }}
                      >
                        {route.from.flag}
                      </div>
                      <div>
                        <div
                          style={{
                            fontWeight: 800,
                            fontSize: "18px",
                            color: "#1a202c",
                            marginBottom: "2px",
                            letterSpacing: "-0.5px"
                          }}
                        >
                          {route.from.name}
                        </div>
                        <div style={{ fontSize: "14px", color: "#718096", fontWeight: 500 }}>
                          {route.from.city}
                        </div>
                      </div>
                    </div>
                    <div
                      className="badge rounded-3 px-3 py-2"
                      style={{
                        background: `${route.color}20`,
                        color: route.color,
                        fontWeight: 700,
                        fontSize: "12px",
                        border: `1px solid ${route.color}30`
                      }}
                    >
                      ROUTE {index + 1}
                    </div>
                  </div>
                </div>

                {/* Route visualization */}
                <div className="p-4">
                  <div className="d-flex align-items-center justify-content-between mb-3">
                    <div style={{ textAlign: "center", flex: 1 }}>
                      <div
                        style={{
                          width: "12px",
                          height: "12px",
                          borderRadius: "50%",
                          background: route.color,
                          margin: "0 auto",
                          boxShadow: `0 0 0 4px ${route.color}30`
                        }}
                      ></div>
                    </div>
                    <div className="grow mx-2" style={{ height: "3px", position: "relative" }}>
                      <div
                        style={{
                          width: "100%",
                          height: "100%",
                          background: `linear-gradient(90deg, ${route.color} 0%, ${route.color}40 100%)`,
                          borderRadius: "2px"
                        }}
                      ></div>
                    </div>
                    <div style={{ fontSize: "28px", color: route.color, fontWeight: 500 }}>
                      →
                    </div>
                    <div className="grow mx-2" style={{ height: "3px" }}>
                      <div
                        style={{
                          width: "100%",
                          height: "100%",
                          background: `linear-gradient(90deg, ${route.color}40 0%, #f5576c 100%)`,
                          borderRadius: "2px"
                        }}
                      ></div>
                    </div>
                    <div style={{ textAlign: "center", flex: 1 }}>
                      <div
                        className="rounded-circle d-flex align-items-center justify-content-center"
                        style={{
                          width: "32px",
                          height: "32px",
                          background: "linear-gradient(135deg, #f093fb, #f5576c)",
                          margin: "0 auto",
                          fontSize: "16px",
                          boxShadow: "0 4px 12px rgba(245, 87, 108, 0.4)",
                          border: "2px solid white"
                        }}
                      >
                        🇺🇿
                      </div>
                    </div>
                  </div>

                  {/* Destination info */}
                  <div className="d-flex align-items-center justify-content-between mt-4">
                    <div style={{ flex: 1 }}>
                      <div style={{ fontSize: "12px", color: "#a0aec0", fontWeight: 600, marginBottom: "4px" }}>
                        ORIGIN
                      </div>
                      <div style={{ fontSize: "14px", color: "#2d3748", fontWeight: 700 }}>
                        {route.from.name}
                      </div>
                    </div>
                    <div style={{ flex: 1, textAlign: "center" }}>
                      <div
                        className="d-inline-flex align-items-center justify-content-center"
                        style={{
                          width: "40px",
                          height: "40px",
                          borderRadius: "50%",
                          background: `${route.color}10`,
                          border: `2px dashed ${route.color}40`
                        }}
                      >
                        <span style={{ fontSize: "18px", color: route.color }}>→</span>
                      </div>
                    </div>
                    <div style={{ flex: 1, textAlign: "right" }}>
                      <div style={{ fontSize: "12px", color: "#a0aec0", fontWeight: 600, marginBottom: "4px" }}>
                        DESTINATION
                      </div>
                      <div style={{ fontSize: "14px", color: "#2d3748", fontWeight: 700 }}>
                        Uzbekistan
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
