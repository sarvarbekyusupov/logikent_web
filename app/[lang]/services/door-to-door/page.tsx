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
    title: "Door-to-Door Delivery & DDP Services - Logikent",
    description: "Complete logistics solutions from sender to destination including air, sea, road transport and customs procedures.",
  };
}

export default async function DoorToDoorPage({
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
            backgroundImage: "url('/img/logikent/door-to-door-sea-freight-forwarder.jpg')",
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
                <h1 className="display-4 fw-bold mb-3" style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.5)" }}>Door-to-Door Delivery & DDP Services</h1>
                <p className="lead mb-0" style={{ textShadow: "1px 1px 3px rgba(0,0,0,0.5)" }}>Complete logistics solutions from sender to your door</p>
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
                    <h2 className="mb-3" style={{ color: "var(--primary-color)" }}>Complete End-to-End Solutions</h2>
                    <p className="text-muted mb-0">Hassle-free logistics from pickup to final delivery</p>
                  </div>
                </div>

                {/* What's Included */}
                <div className="card border-0 shadow-sm mb-4">
                  <div className="card-body p-4">
                    <h4 className="mb-4" style={{ color: "var(--primary-color)" }}>
                      <i className="fas fa-star me-2" style={{ color: "var(--accent-color)" }}></i>
                      What's Included
                    </h4>
                    <div className="row g-4">
                      <div className="col-md-12">
                        <div className="d-flex align-items-start">
                          <div className="rounded-circle d-flex align-items-center justify-content-center me-3 flex-shrink-0" style={{ width: "50px", height: "50px", background: "rgba(40, 167, 69, 0.1)" }}>
                            <i className="fas fa-shipping-fast text-success"></i>
                          </div>
                          <div>
                            <h5 className="fw-bold mb-2">International transportation (air, sea, road and container)</h5>
                            <p className="text-muted mb-0">All modes of transport available based on your needs</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="d-flex align-items-start">
                          <div className="rounded-circle d-flex align-items-center justify-content-center me-3 flex-shrink-0" style={{ width: "50px", height: "50px", background: "rgba(40, 167, 69, 0.1)" }}>
                            <i className="fas fa-passport text-success"></i>
                          </div>
                          <div>
                            <h5 className="fw-bold mb-2">Customs procedures (upon agreement)</h5>
                            <p className="text-muted mb-0">Complete customs clearance handled by our experts</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="d-flex align-items-start">
                          <div className="rounded-circle d-flex align-items-center justify-content-center me-3 flex-shrink-0" style={{ width: "50px", height: "50px", background: "rgba(40, 167, 69, 0.1)" }}>
                            <i className="fas fa-home text-success"></i>
                          </div>
                          <div>
                            <h5 className="fw-bold mb-2">Delivery to the recipient's door</h5>
                            <p className="text-muted mb-0">Final mile delivery included for maximum convenience</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Benefits */}
                <div className="card border-0 shadow-sm mb-4">
                  <div className="card-body p-4">
                    <h4 className="mb-4" style={{ color: "var(--primary-color)" }}>
                      <i className="fas fa-trophy me-2" style={{ color: "var(--accent-color)" }}></i>
                      Benefits of Door-to-Door Service
                    </h4>
                    <div className="row g-4">
                      <div className="col-md-6">
                        <div className="card h-100 border" style={{ backgroundColor: "#f8f9fa" }}>
                          <div className="card-body">
                            <div className="mb-3">
                              <div className="rounded-circle d-inline-flex align-items-center justify-content-center" style={{ width: "60px", height: "60px", background: "rgba(26, 77, 143, 0.1)" }}>
                                <i className="fas fa-handshake fa-2x" style={{ color: "var(--primary-color)" }}></i>
                              </div>
                            </div>
                            <h5 className="fw-bold mb-2">Hassle-Free</h5>
                            <p className="text-muted small mb-0">We handle everything from start to finish</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="card h-100 border" style={{ backgroundColor: "#f8f9fa" }}>
                          <div className="card-body">
                            <div className="mb-3">
                              <div className="rounded-circle d-inline-flex align-items-center justify-content-center" style={{ width: "60px", height: "60px", background: "rgba(26, 77, 143, 0.1)" }}>
                                <i className="fas fa-eye fa-2x" style={{ color: "var(--primary-color)" }}></i>
                              </div>
                            </div>
                            <h5 className="fw-bold mb-2">Full Visibility</h5>
                            <p className="text-muted small mb-0">Track your shipment at every step</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="card h-100 border" style={{ backgroundColor: "#f8f9fa" }}>
                          <div className="card-body">
                            <div className="mb-3">
                              <div className="rounded-circle d-inline-flex align-items-center justify-content-center" style={{ width: "60px", height: "60px", background: "rgba(26, 77, 143, 0.1)" }}>
                                <i className="fas fa-dollar-sign fa-2x" style={{ color: "var(--primary-color)" }}></i>
                              </div>
                            </div>
                            <h5 className="fw-bold mb-2">DDP Available</h5>
                            <p className="text-muted small mb-0">Delivered Duty Paid - no hidden costs</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="card h-100 border" style={{ backgroundColor: "#f8f9fa" }}>
                          <div className="card-body">
                            <div className="mb-3">
                              <div className="rounded-circle d-inline-flex align-items-center justify-content-center" style={{ width: "60px", height: "60px", background: "rgba(26, 77, 143, 0.1)" }}>
                                <i className="fas fa-globe fa-2x" style={{ color: "var(--primary-color)" }}></i>
                              </div>
                            </div>
                            <h5 className="fw-bold mb-2">Worldwide</h5>
                            <p className="text-muted small mb-0">Service available from China, Turkey, EU, UAE</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* DDP Explained */}
                <div className="card border-0 shadow-sm mb-4">
                  <div className="card-body p-4">
                    <h4 className="mb-4" style={{ color: "var(--primary-color)" }}>
                      <i className="fas fa-info-circle me-2" style={{ color: "var(--accent-color)" }}></i>
                      Understanding DDP (Delivered Duty Paid)
                    </h4>
                    <div className="row g-3">
                      <div className="col-md-6 col-lg-4">
                        <div className="card border h-100">
                          <div className="card-body">
                            <div className="d-flex align-items-center">
                              <i className="fas fa-check-circle me-3 fa-lg text-success"></i>
                              <span className="fw-bold">All Import Duties Paid</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6 col-lg-4">
                        <div className="card border h-100">
                          <div className="card-body">
                            <div className="d-flex align-items-center">
                              <i className="fas fa-check-circle me-3 fa-lg text-success"></i>
                              <span className="fw-bold">All Taxes Covered</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6 col-lg-4">
                        <div className="card border h-100">
                          <div className="card-body">
                            <div className="d-flex align-items-center">
                              <i className="fas fa-check-circle me-3 fa-lg text-success"></i>
                              <span className="fw-bold">No Hidden Fees</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6 col-lg-4">
                        <div className="card border h-100">
                          <div className="card-body">
                            <div className="d-flex align-items-center">
                              <i className="fas fa-check-circle me-3 fa-lg text-success"></i>
                              <span className="fw-bold">Complete Clearance</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6 col-lg-4">
                        <div className="card border h-100">
                          <div className="card-body">
                            <div className="d-flex align-items-center">
                              <i className="fas fa-check-circle me-3 fa-lg text-success"></i>
                              <span className="fw-bold">Predictable Costs</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6 col-lg-4">
                        <div className="card border h-100">
                          <div className="card-body">
                            <div className="d-flex align-items-center">
                              <i className="fas fa-check-circle me-3 fa-lg text-success"></i>
                              <span className="fw-bold">Time Saving</span>
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
                        <Link href={`/${lang}/services/door-to-door`} className="text-decoration-none fw-bold" style={{ color: "var(--primary-color)" }}>
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
                      <h5 className="fw-bold mb-3">Get Started</h5>
                      <p className="text-muted small mb-3">Request a door-to-door delivery quote</p>
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
