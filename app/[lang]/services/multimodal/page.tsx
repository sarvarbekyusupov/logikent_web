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
    title: "Multimodal Transportation Services - Logikent",
    description: "Combined rail, road, and sea transport services with full cargo support, consolidation, and tracking.",
  };
}

export default async function MultimodalPage({
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
            backgroundImage: "url('/img/logikent/multimodal-transport.jpg')",
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
                <h1 className="display-4 fw-bold mb-3" style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.5)" }}>Multimodal Transportation</h1>
                <p className="lead mb-0" style={{ textShadow: "1px 1px 3px rgba(0,0,0,0.5)" }}>Rail, road, and sea combined transport (container-based)</p>
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
                    <h2 className="mb-3" style={{ color: "var(--primary-color)" }}>Flexible Multimodal Solutions</h2>
                    <p className="text-muted mb-0">Optimized transport combinations for efficient cargo delivery</p>
                  </div>
                </div>

                {/* What We Offer */}
                <div className="card border-0 shadow-sm mb-4">
                  <div className="card-body p-4">
                    <h4 className="mb-4" style={{ color: "var(--primary-color)" }}>
                      <i className="fas fa-star me-2" style={{ color: "var(--accent-color)" }}></i>
                      Our Services Include
                    </h4>
                    <div className="row g-4">
                      <div className="col-md-12">
                        <div className="d-flex align-items-start">
                          <div className="rounded-circle d-flex align-items-center justify-content-center me-3 flex-shrink-0" style={{ width: "50px", height: "50px", background: "rgba(40, 167, 69, 0.1)" }}>
                            <i className="fas fa-tasks text-success"></i>
                          </div>
                          <div>
                            <h5 className="fw-bold mb-2">Full cargo support: route booking, documentation, and schedule control</h5>
                            <p className="text-muted mb-0">Complete handling from origin to destination</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="d-flex align-items-start">
                          <div className="rounded-circle d-flex align-items-center justify-content-center me-3 flex-shrink-0" style={{ width: "50px", height: "50px", background: "rgba(40, 167, 69, 0.1)" }}>
                            <i className="fas fa-boxes text-success"></i>
                          </div>
                          <div>
                            <h5 className="fw-bold mb-2">Transit shipments and consolidation</h5>
                            <p className="text-muted mb-0">Efficient consolidation for cost-effective shipping</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="d-flex align-items-start">
                          <div className="rounded-circle d-flex align-items-center justify-content-center me-3 flex-shrink-0" style={{ width: "50px", height: "50px", background: "rgba(40, 167, 69, 0.1)" }}>
                            <i className="fas fa-satellite-dish text-success"></i>
                          </div>
                          <div>
                            <h5 className="fw-bold mb-2">Tracking and monitoring of cargo status</h5>
                            <p className="text-muted mb-0">Real-time visibility throughout the journey</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Transport Modes */}
                <div className="card border-0 shadow-sm mb-4">
                  <div className="card-body p-4">
                    <h4 className="mb-4" style={{ color: "var(--primary-color)" }}>
                      <i className="fas fa-random me-2" style={{ color: "var(--accent-color)" }}></i>
                      Transport Modes Combined
                    </h4>
                    <div className="row g-4">
                      <div className="col-md-4">
                        <div className="card h-100 border" style={{ backgroundColor: "#f8f9fa" }}>
                          <div className="card-body">
                            <div className="mb-3">
                              <div className="rounded-circle d-inline-flex align-items-center justify-content-center" style={{ width: "60px", height: "60px", background: "rgba(26, 77, 143, 0.1)" }}>
                                <i className="fas fa-train fa-2x" style={{ color: "var(--primary-color)" }}></i>
                              </div>
                            </div>
                            <h5 className="fw-bold mb-2">Rail</h5>
                            <p className="text-muted small mb-0">Cost-effective for long-distance inland transport</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="card h-100 border" style={{ backgroundColor: "#f8f9fa" }}>
                          <div className="card-body">
                            <div className="mb-3">
                              <div className="rounded-circle d-inline-flex align-items-center justify-content-center" style={{ width: "60px", height: "60px", background: "rgba(26, 77, 143, 0.1)" }}>
                                <i className="fas fa-truck fa-2x" style={{ color: "var(--primary-color)" }}></i>
                              </div>
                            </div>
                            <h5 className="fw-bold mb-2">Road</h5>
                            <p className="text-muted small mb-0">Flexible pickup and delivery options</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="card h-100 border" style={{ backgroundColor: "#f8f9fa" }}>
                          <div className="card-body">
                            <div className="mb-3">
                              <div className="rounded-circle d-inline-flex align-items-center justify-content-center" style={{ width: "60px", height: "60px", background: "rgba(26, 77, 143, 0.1)" }}>
                                <i className="fas fa-ship fa-2x" style={{ color: "var(--primary-color)" }}></i>
                              </div>
                            </div>
                            <h5 className="fw-bold mb-2">Sea</h5>
                            <p className="text-muted small mb-0">Economical for large volume shipments</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Advantages */}
                <div className="card border-0 shadow-sm mb-4">
                  <div className="card-body p-4">
                    <h4 className="mb-4" style={{ color: "var(--primary-color)" }}>
                      <i className="fas fa-trophy me-2" style={{ color: "var(--accent-color)" }}></i>
                      Advantages of Multimodal Transport
                    </h4>
                    <div className="row g-4">
                      <div className="col-md-6">
                        <div className="card h-100 border" style={{ backgroundColor: "#f8f9fa" }}>
                          <div className="card-body">
                            <div className="mb-3">
                              <div className="rounded-circle d-inline-flex align-items-center justify-content-center" style={{ width: "60px", height: "60px", background: "rgba(26, 77, 143, 0.1)" }}>
                                <i className="fas fa-piggy-bank fa-2x" style={{ color: "var(--primary-color)" }}></i>
                              </div>
                            </div>
                            <h5 className="fw-bold mb-2">Cost Effective</h5>
                            <p className="text-muted small mb-0">Optimized routes reduce transportation costs</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="card h-100 border" style={{ backgroundColor: "#f8f9fa" }}>
                          <div className="card-body">
                            <div className="mb-3">
                              <div className="rounded-circle d-inline-flex align-items-center justify-content-center" style={{ width: "60px", height: "60px", background: "rgba(26, 77, 143, 0.1)" }}>
                                <i className="fas fa-route fa-2x" style={{ color: "var(--primary-color)" }}></i>
                              </div>
                            </div>
                            <h5 className="fw-bold mb-2">Flexible Routing</h5>
                            <p className="text-muted small mb-0">Multiple route options for optimal delivery</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="card h-100 border" style={{ backgroundColor: "#f8f9fa" }}>
                          <div className="card-body">
                            <div className="mb-3">
                              <div className="rounded-circle d-inline-flex align-items-center justify-content-center" style={{ width: "60px", height: "60px", background: "rgba(26, 77, 143, 0.1)" }}>
                                <i className="fas fa-compress-arrows-alt fa-2x" style={{ color: "var(--primary-color)" }}></i>
                              </div>
                            </div>
                            <h5 className="fw-bold mb-2">Container Based</h5>
                            <p className="text-muted small mb-0">Secure containerized shipping throughout</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="card h-100 border" style={{ backgroundColor: "#f8f9fa" }}>
                          <div className="card-body">
                            <div className="mb-3">
                              <div className="rounded-circle d-inline-flex align-items-center justify-content-center" style={{ width: "60px", height: "60px", background: "rgba(26, 77, 143, 0.1)" }}>
                                <i className="fas fa-globe-asia fa-2x" style={{ color: "var(--primary-color)" }}></i>
                              </div>
                            </div>
                            <h5 className="fw-bold mb-2">Global Reach</h5>
                            <p className="text-muted small mb-0">Access to remote destinations worldwide</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Typical Routes */}
                <div className="card border-0 shadow-sm mb-4">
                  <div className="card-body p-4">
                    <h4 className="mb-4" style={{ color: "var(--primary-color)" }}>
                      <i className="fas fa-map-marked-alt me-2" style={{ color: "var(--accent-color)" }}></i>
                      Popular Multimodal Routes
                    </h4>
                    <div className="row g-3">
                      <div className="col-md-6 col-lg-4">
                        <div className="card border h-100">
                          <div className="card-body">
                            <div className="d-flex align-items-center">
                              <i className="fas fa-arrow-right me-3 fa-lg" style={{ color: "var(--primary-color)" }}></i>
                              <div>
                                <div className="fw-bold">China → Uzbekistan</div>
                                <div className="small text-muted">Rail + Road</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6 col-lg-4">
                        <div className="card border h-100">
                          <div className="card-body">
                            <div className="d-flex align-items-center">
                              <i className="fas fa-arrow-right me-3 fa-lg" style={{ color: "var(--primary-color)" }}></i>
                              <div>
                                <div className="fw-bold">EU → Central Asia</div>
                                <div className="small text-muted">Sea + Rail + Road</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6 col-lg-4">
                        <div className="card border h-100">
                          <div className="card-body">
                            <div className="d-flex align-items-center">
                              <i className="fas fa-arrow-right me-3 fa-lg" style={{ color: "var(--primary-color)" }}></i>
                              <div>
                                <div className="fw-bold">Turkey → Uzbekistan</div>
                                <div className="small text-muted">Road + Rail</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6 col-lg-4">
                        <div className="card border h-100">
                          <div className="card-body">
                            <div className="d-flex align-items-center">
                              <i className="fas fa-arrow-right me-3 fa-lg" style={{ color: "var(--primary-color)" }}></i>
                              <div>
                                <div className="fw-bold">UAE → Uzbekistan</div>
                                <div className="small text-muted">Sea + Road</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6 col-lg-4">
                        <div className="card border h-100">
                          <div className="card-body">
                            <div className="d-flex align-items-center">
                              <i className="fas fa-arrow-right me-3 fa-lg" style={{ color: "var(--primary-color)" }}></i>
                              <div>
                                <div className="fw-bold">Southeast Asia → CA</div>
                                <div className="small text-muted">Sea + Rail + Road</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6 col-lg-4">
                        <div className="card border h-100">
                          <div className="card-body">
                            <div className="d-flex align-items-center">
                              <i className="fas fa-arrow-right me-3 fa-lg" style={{ color: "var(--primary-color)" }}></i>
                              <div>
                                <div className="fw-bold">India → Central Asia</div>
                                <div className="small text-muted">Sea + Rail + Road</div>
                              </div>
                            </div>
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
                        <Link href={`/${lang}/services/road-transport`} className="text-decoration-none text-muted">
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
                        <Link href={`/${lang}/services/multimodal`} className="text-decoration-none fw-bold" style={{ color: "var(--primary-color)" }}>
                          <i className="fas fa-random me-2"></i>Multimodal Transport
                        </Link>
                      </li>
                    </ul>
                    <hr />
                    <div className="text-center">
                      <h5 className="fw-bold mb-3">Plan Your Shipment</h5>
                      <p className="text-muted small mb-3">Get optimal multimodal routing for your cargo</p>
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
