import { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  return {
    title: "International Road Transport Services - Logikent",
    description: "Reliable road freight transportation with tent, refrigerator, and lowbed vehicles from/to Uzbekistan.",
  };
}

export default async function RoadTransportPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section
          className="py-5 position-relative"
          style={{
            backgroundImage: "url('/img/logikent/road-transport.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            minHeight: "300px"
          }}
        >
          <div style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "rgba(0, 0, 0, 0.5)"
          }}></div>
          <div className="container position-relative" style={{ maxWidth: "1200px" }}>
            <div className="row align-items-center" style={{ minHeight: "300px" }}>
              <div className="col-12 text-white">
                <h1 className="display-4 fw-bold mb-3" style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.5)" }}>International Road Transport</h1>
                <p className="lead mb-0" style={{ textShadow: "1px 1px 3px rgba(0,0,0,0.5)" }}>Tent, Refrigerator, Lowbed - Comprehensive road freight solutions</p>
              </div>
            </div>
          </div>
        </section>

        {/* Service Details */}
        <section className="py-5 bg-light">
          <div className="container" style={{ maxWidth: "1200px" }}>
            <div className="row">
              <div className="col-lg-8">
                {/* Main Title */}
                <div className="card border-0 shadow-sm mb-4">
                  <div className="card-body p-4">
                    <h2 className="mb-3" style={{ color: "var(--primary-color)" }}>Complete Road Transportation</h2>
                    <p className="text-muted mb-0">Reliable road freight services with diverse vehicle options for any cargo type</p>
                  </div>
                </div>

                {/* What We Offer */}
                <div className="card border-0 shadow-sm mb-4">
                  <div className="card-body p-4">
                    <h4 className="mb-4" style={{ color: "var(--primary-color)" }}>
                      <i className="fas fa-star me-2" style={{ color: "var(--accent-color)" }}></i>
                      What We Offer
                    </h4>
                    <div className="row g-4">
                      <div className="col-md-12">
                        <div className="d-flex align-items-start">
                          <div className="rounded-circle d-flex align-items-center justify-content-center me-3 flex-shrink-0" style={{ width: "50px", height: "50px", background: "rgba(40, 167, 69, 0.1)" }}>
                            <i className="fas fa-truck text-success"></i>
                          </div>
                          <div>
                            <h5 className="fw-bold mb-2">LTL/FTL road transport from/to Uzbekistan</h5>
                            <p className="text-muted mb-0">Less-than-truckload and full truckload options for any shipment size</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="d-flex align-items-start">
                          <div className="rounded-circle d-flex align-items-center justify-content-center me-3 flex-shrink-0" style={{ width: "50px", height: "50px", background: "rgba(40, 167, 69, 0.1)" }}>
                            <i className="fas fa-warehouse text-success"></i>
                          </div>
                          <div>
                            <h5 className="fw-bold mb-2">Warehousing and customs services</h5>
                            <p className="text-muted mb-0">Complete storage and customs clearance support included</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="d-flex align-items-start">
                          <div className="rounded-circle d-flex align-items-center justify-content-center me-3 flex-shrink-0" style={{ width: "50px", height: "50px", background: "rgba(40, 167, 69, 0.1)" }}>
                            <i className="fas fa-globe text-success"></i>
                          </div>
                          <div>
                            <h5 className="fw-bold mb-2">Cross-border cargo delivery</h5>
                            <p className="text-muted mb-0">Seamless transportation across international borders</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="d-flex align-items-start">
                          <div className="rounded-circle d-flex align-items-center justify-content-center me-3 flex-shrink-0" style={{ width: "50px", height: "50px", background: "rgba(40, 167, 69, 0.1)" }}>
                            <i className="fas fa-exclamation-triangle text-success"></i>
                          </div>
                          <div>
                            <h5 className="fw-bold mb-2">Oversized, dangerous, and temperature-sensitive cargo</h5>
                            <p className="text-muted mb-0">Specialized equipment for all types of cargo requirements</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Vehicle Types */}
                <div className="card border-0 shadow-sm mb-4">
                  <div className="card-body p-4">
                    <h4 className="mb-4" style={{ color: "var(--primary-color)" }}>
                      <i className="fas fa-truck-moving me-2" style={{ color: "var(--accent-color)" }}></i>
                      Vehicle Types
                    </h4>
                    <div className="row g-4">
                      <div className="col-md-6">
                        <div className="card h-100 border" style={{ backgroundColor: "#f8f9fa" }}>
                          <div className="card-body">
                            <div className="mb-3">
                              <div className="rounded-circle d-inline-flex align-items-center justify-content-center" style={{ width: "60px", height: "60px", background: "rgba(26, 77, 143, 0.1)" }}>
                                <i className="fas fa-truck-loading fa-2x" style={{ color: "var(--primary-color)" }}></i>
                              </div>
                            </div>
                            <h5 className="fw-bold mb-2">Tent Vehicles</h5>
                            <p className="text-muted small mb-0">Dry vans for general cargo protection</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="card h-100 border" style={{ backgroundColor: "#f8f9fa" }}>
                          <div className="card-body">
                            <div className="mb-3">
                              <div className="rounded-circle d-inline-flex align-items-center justify-content-center" style={{ width: "60px", height: "60px", background: "rgba(26, 77, 143, 0.1)" }}>
                                <i className="fas fa-temperature-low fa-2x" style={{ color: "var(--primary-color)" }}></i>
                              </div>
                            </div>
                            <h5 className="fw-bold mb-2">Refrigerator Trucks</h5>
                            <p className="text-muted small mb-0">Temperature-controlled for perishable goods</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="card h-100 border" style={{ backgroundColor: "#f8f9fa" }}>
                          <div className="card-body">
                            <div className="mb-3">
                              <div className="rounded-circle d-inline-flex align-items-center justify-content-center" style={{ width: "60px", height: "60px", background: "rgba(26, 77, 143, 0.1)" }}>
                                <i className="fas fa-truck-pickup fa-2x" style={{ color: "var(--primary-color)" }}></i>
                              </div>
                            </div>
                            <h5 className="fw-bold mb-2">Lowbed Trailers</h5>
                            <p className="text-muted small mb-0">For heavy and oversized equipment</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="card h-100 border" style={{ backgroundColor: "#f8f9fa" }}>
                          <div className="card-body">
                            <div className="mb-3">
                              <div className="rounded-circle d-inline-flex align-items-center justify-content-center" style={{ width: "60px", height: "60px", background: "rgba(26, 77, 143, 0.1)" }}>
                                <i className="fas fa-shield-alt fa-2x" style={{ color: "var(--primary-color)" }}></i>
                              </div>
                            </div>
                            <h5 className="fw-bold mb-2">Specialized Transport</h5>
                            <p className="text-muted small mb-0">For dangerous and hazardous materials</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Why Choose Us */}
                <div className="card border-0 shadow-sm mb-4">
                  <div className="card-body p-4">
                    <h4 className="mb-4" style={{ color: "var(--primary-color)" }}>
                      <i className="fas fa-trophy me-2" style={{ color: "var(--accent-color)" }}></i>
                      Why Choose Our Road Transport?
                    </h4>
                    <div className="row g-4">
                      <div className="col-md-6">
                        <div className="card h-100 border" style={{ backgroundColor: "#f8f9fa" }}>
                          <div className="card-body">
                            <div className="mb-3">
                              <div className="rounded-circle d-inline-flex align-items-center justify-content-center" style={{ width: "60px", height: "60px", background: "rgba(26, 77, 143, 0.1)" }}>
                                <i className="fas fa-map-marked-alt fa-2x" style={{ color: "var(--primary-color)" }}></i>
                              </div>
                            </div>
                            <h5 className="fw-bold mb-2">Extensive Network</h5>
                            <p className="text-muted small mb-0">Wide coverage across Central Asia and beyond</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="card h-100 border" style={{ backgroundColor: "#f8f9fa" }}>
                          <div className="card-body">
                            <div className="mb-3">
                              <div className="rounded-circle d-inline-flex align-items-center justify-content-center" style={{ width: "60px", height: "60px", background: "rgba(26, 77, 143, 0.1)" }}>
                                <i className="fas fa-tools fa-2x" style={{ color: "var(--primary-color)" }}></i>
                              </div>
                            </div>
                            <h5 className="fw-bold mb-2">Modern Fleet</h5>
                            <p className="text-muted small mb-0">Well-maintained vehicles for reliable service</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="card h-100 border" style={{ backgroundColor: "#f8f9fa" }}>
                          <div className="card-body">
                            <div className="mb-3">
                              <div className="rounded-circle d-inline-flex align-items-center justify-content-center" style={{ width: "60px", height: "60px", background: "rgba(26, 77, 143, 0.1)" }}>
                                <i className="fas fa-user-shield fa-2x" style={{ color: "var(--primary-color)" }}></i>
                              </div>
                            </div>
                            <h5 className="fw-bold mb-2">Experienced Drivers</h5>
                            <p className="text-muted small mb-0">Professional drivers with international experience</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="card h-100 border" style={{ backgroundColor: "#f8f9fa" }}>
                          <div className="card-body">
                            <div className="mb-3">
                              <div className="rounded-circle d-inline-flex align-items-center justify-content-center" style={{ width: "60px", height: "60px", background: "rgba(26, 77, 143, 0.1)" }}>
                                <i className="fas fa-headset fa-2x" style={{ color: "var(--primary-color)" }}></i>
                              </div>
                            </div>
                            <h5 className="fw-bold mb-2">24/7 Support</h5>
                            <p className="text-muted small mb-0">Round-the-clock tracking and customer service</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="col-lg-4">
                <div className="card border-0 shadow-sm mb-4 sticky-top" style={{ top: "100px" }}>
                  <div className="card-body">
                    <h5 className="fw-bold mb-4" style={{ color: "var(--primary-color)" }}>Our Services</h5>
                    <ul className="list-unstyled">
                      <li className="mb-3">
                        <Link href={`/${lang}/services/air-freight`} className="text-decoration-none text-muted">
                          <i className="fas fa-plane me-2"></i>Air Freight
                        </Link>
                      </li>
                      <li className="mb-3">
                        <Link href={`/${lang}/services/road-transport`} className="text-decoration-none fw-bold" style={{ color: "var(--primary-color)" }}>
                          <i className="fas fa-truck me-2"></i>Road Transport
                        </Link>
                      </li>
                      <li className="mb-3">
                        <Link href={`/${lang}/services/customs-clearance`} className="text-decoration-none text-muted">
                          <i className="fas fa-file-signature me-2"></i>Customs Clearance
                        </Link>
                      </li>
                      <li className="mb-3">
                        <Link href={`/${lang}/services/door-to-door`} className="text-decoration-none text-muted">
                          <i className="fas fa-door-open me-2"></i>Door-to-Door Delivery
                        </Link>
                      </li>
                      <li className="mb-3">
                        <Link href={`/${lang}/services/4pl-logistics`} className="text-decoration-none text-muted">
                          <i className="fas fa-cogs me-2"></i>4PL Logistics
                        </Link>
                      </li>
                      <li className="mb-4">
                        <Link href={`/${lang}/services/multimodal`} className="text-decoration-none text-muted">
                          <i className="fas fa-random me-2"></i>Multimodal Transport
                        </Link>
                      </li>
                    </ul>
                    <hr />
                    <div className="text-center">
                      <h5 className="fw-bold mb-3">Need a Quote?</h5>
                      <p className="text-muted small mb-3">Get a personalized quote for road transport</p>
                      <Link href={`/${lang}`} className="btn btn-outline-primary w-100 mb-2">
                        <i className="fas fa-home me-2"></i>Back to Home
                      </Link>
                      <a href={`/${lang}/#contact`} className="btn btn-primary w-100">Contact Us</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
