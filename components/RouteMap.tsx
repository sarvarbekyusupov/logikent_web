"use client";

import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Polyline } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { useLanguage } from "@/contexts/LanguageContext";

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
  china: { lat: 35.8617, lng: 104.1954, name: "China", city: "Beijing", code: "cn", flag: "🇨🇳" },
  turkey: { lat: 39.9334, lng: 32.8597, name: "Turkey", city: "Istanbul", code: "tr", flag: "🇹🇷" },
  russia: { lat: 62.5, lng: 95.0, name: "Russia", city: "Moscow", code: "ru", flag: "🇷🇺" },
  uae: { lat: 24.4539, lng: 54.3773, name: "UAE", city: "Dubai", code: "ae", flag: "🇦🇪" },
  eu: { lat: 50.1109, lng: 8.6821, name: "European Union", city: "Brussels", code: "eu", flag: "🇪🇺" },
  kazakhstan: { lat: 51.1605, lng: 71.4704, name: "Kazakhstan", city: "Almaty", code: "kz", flag: "🇰🇿" },
  belarus: { lat: 53.7098, lng: 27.9534, name: "Belarus", city: "Minsk", code: "by", flag: "🇧🇾" },
  india: { lat: 20.5937, lng: 78.9629, name: "India", city: "New Delhi", code: "in", flag: "🇮🇳" },
  tashkent: { lat: 41.2995, lng: 69.2401, name: "Uzbekistan", city: "Tashkent", code: "uz", flag: "🇺🇿" },
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

// Custom origin marker icon with flag image using crossOrigin
const createOriginIcon = (countryCode: string) => {
  // Use different flag source for EU
  const flagUrl = countryCode === "eu"
    ? "https://upload.wikimedia.org/wikipedia/commons/b/b7/Flag_of_Europe.svg"
    : `https://flagcdn.com/w40/${countryCode}.png`;

  return L.divIcon({
    className: "custom-origin-marker",
    html: `
      <div style="
        display: flex;
        align-items: center;
        justify-content: center;
        width: 50px;
        height: 38px;
        background: white;
        border-radius: 4px;
        border: 3px solid white;
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.4);
        position: relative;
        overflow: hidden;
        cursor: pointer;
      ">
        <img
          src="${flagUrl}"
          alt="${countryCode}"
          crossOrigin="anonymous"
          style="
            width: 100%;
            height: 100%;
            object-fit: cover;
            display: block;
            pointer-events: none;
          "
        />
      </div>
    `,
    iconSize: [50, 38],
    iconAnchor: [25, 19],
    popupAnchor: [0, -38],
  });
};

// Custom destination marker icon (Tashkent) with flag
const destinationIcon = L.divIcon({
  className: "custom-destination-marker",
  html: `
    <div style="
      display: flex;
      align-items: center;
      justify-content: center;
      width: 65px;
      height: 49px;
      background: white;
      border-radius: 4px;
      border: 4px solid white;
      box-shadow: 0 6px 20px rgba(0, 0, 0, 0.5);
      position: relative;
      overflow: hidden;
      animation: destination-pulse 2s ease-in-out infinite;
      cursor: pointer;
    ">
      <img
        src="https://flagcdn.com/w80/uz.png"
        alt="Uzbekistan Flag"
        crossOrigin="anonymous"
        style="
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          pointer-events: none;
        "
      />
    </div>
  `,
  iconSize: [65, 49],
  iconAnchor: [32, 24],
  popupAnchor: [0, -49],
});

export default function RouteMap() {
  const { t } = useLanguage();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);

    // Add custom CSS for animations
    const style = document.createElement("style");
    style.innerHTML = `
      @keyframes destination-pulse {
        0%, 100% {
          transform: scale(1);
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.4);
        }
        50% {
          transform: scale(1.1);
          box-shadow: 0 10px 35px rgba(0, 0, 0, 0.5);
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
        z-index: 10000 !important;
      }

      .custom-popup .leaflet-popup-tip {
        box-shadow: 0 8px 32px rgba(0,0,0,0.12);
        z-index: 10000 !important;
      }

      .custom-popup .leaflet-popup-content {
        margin: 0;
        padding: 16px 20px;
      }

      .custom-popup h3 {
        margin: 0 !important;
        font-size: 20px !important;
        font-weight: 700 !important;
        color: #1a202c !important;
        line-height: 1.2 !important;
      }

      .custom-popup p {
        margin: 0;
        font-size: 14px;
        color: #718096;
      }

      .leaflet-marker-icon {
        cursor: pointer !important;
        z-index: 1000 !important;
      }

      .leaflet-marker-pane {
        z-index: 1000 !important;
      }

      .leaflet-popup-pane {
        z-index: 9999 !important;
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
    { from: LOCATIONS.kazakhstan, to: LOCATIONS.tashkent, color: "#ec4899", label: "Kazakhstan Route" },
    { from: LOCATIONS.belarus, to: LOCATIONS.tashkent, color: "#14b8a6", label: "Belarus Route" },
    { from: LOCATIONS.india, to: LOCATIONS.tashkent, color: "#f97316", label: "India Route" },
  ];

  const originLocations = [
    { ...LOCATIONS.china, color: "#ef4444" },
    { ...LOCATIONS.turkey, color: "#f59e0b" },
    { ...LOCATIONS.russia, color: "#3b82f6" },
    { ...LOCATIONS.uae, color: "#10b981" },
    { ...LOCATIONS.eu, color: "#8b5cf6" },
    { ...LOCATIONS.kazakhstan, color: "#ec4899" },
    { ...LOCATIONS.belarus, color: "#14b8a6" },
    { ...LOCATIONS.india, color: "#f97316" },
  ];

  return (
    <section id="route-map" className="py-5 position-relative overflow-hidden" style={{ background: "linear-gradient(180deg, #f8fafc 0%, #ffffff 100%)" }}>
      {/* Background decoration */}
      <div style={{
        position: "absolute",
        top: 0,
        right: 0,
        width: "500px",
        height: "500px",
        background: "radial-gradient(circle, rgba(37, 99, 235, 0.05) 0%, transparent 70%)",
        pointerEvents: "none"
      }}></div>

      <div className="container position-relative" style={{ maxWidth: "1200px" }}>
        {/* Header */}
        <div className="row mb-5">
          <div className="col-12 text-center">
            <div className="d-inline-flex align-items-center gap-2 mb-3 px-4 py-2 rounded-pill" style={{
              background: "linear-gradient(135deg, rgba(37, 99, 235, 0.1), rgba(37, 99, 235, 0.05))",
              border: "1px solid rgba(37, 99, 235, 0.2)"
            }}>
              <i className="fas fa-globe-americas" style={{ color: "var(--primary-color)", fontSize: "16px" }}></i>
              <span style={{ fontSize: "13px", fontWeight: 700, color: "var(--primary-color)", letterSpacing: "1px" }}>
                {t("routes-section-badge")}
              </span>
            </div>
            <h2 className="section-title mb-3" style={{ fontSize: "48px", fontWeight: 900, color: "#1a202c", letterSpacing: "-1px" }}>
              {t("routes-title")}
            </h2>
            <p className="lead" style={{ fontSize: "19px", color: "#64748b", maxWidth: "650px", margin: "0 auto", lineHeight: "1.6" }}>
              {t("routes-subtitle")}
            </p>
          </div>
        </div>

        {/* Map */}
        <div className="row mb-5">
          <div className="col-12">
            <div style={{
              height: "600px",
              borderRadius: "24px",
              overflow: "hidden",
              boxShadow: "0 25px 80px rgba(0,0,0,0.12)",
              border: "6px solid white",
              position: "relative",
              cursor: "grab"
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
                attributionControl={false}
              >
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                {/* Origin markers */}
                {originLocations.map((location) => {
                  const countryCode = (location as any).code || "cn";

                  return (
                    <Marker
                      key={location.name}
                      position={[location.lat, location.lng]}
                      icon={createOriginIcon(countryCode)}
                    />
                  );
                })}

                {/* Tashkent marker */}
                <Marker
                  position={[LOCATIONS.tashkent.lat, LOCATIONS.tashkent.lng]}
                  icon={destinationIcon}
                />

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


        {/* CTA Section */}
        <div className="row mt-5">
          <div className="col-12">
            <div
              className="card border-0 text-center"
              style={{
                background: "linear-gradient(135deg, var(--primary-color), var(--secondary-color))",
                borderRadius: "20px",
                boxShadow: "0 20px 40px rgba(37, 99, 235, 0.15)"
              }}
            >
              <div className="card-body p-5">
                <h3 className="text-white fw-bold mb-3" style={{ fontSize: "28px" }}>
                  {t("routes-cta-title")}
                </h3>
                <p className="text-white mb-4" style={{ fontSize: "16px", opacity: 0.95, maxWidth: "600px", margin: "0 auto 24px" }}>
                  {t("routes-cta-description")}
                </p>
                <a
                  href="#contact"
                  className="btn btn-light btn-lg fw-bold px-5"
                  style={{
                    borderRadius: "50px",
                    fontSize: "16px",
                    color: "var(--primary-color)"
                  }}
                >
                  <i className="fas fa-paper-plane me-2"></i>
                  {t("routes-cta-button")}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
