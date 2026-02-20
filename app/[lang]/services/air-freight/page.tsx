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
    title: "International Air Freight Services - Logikent",
    description: "Fast and reliable air freight services for international cargo delivery. Door-to-door air cargo solutions.",
  };
}

export default async function AirFreightPage({
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
            backgroundImage: "url('/img/logikent/logistics-background.jpg')",
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
                <nav aria-label="breadcrumb" className="mb-3">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item"><Link href={`/${lang}`} className="text-white text-decoration-none">Home</Link></li>
                    <li className="breadcrumb-item"><Link href={`/${lang}/#services`} className="text-white text-decoration-none">Services</Link></li>
                    <li className="breadcrumb-item active text-white" aria-current="page">Air Freight</li>
                  </ol>
                </nav>
                <h1 className="display-4 fw-bold mb-3" style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.5)" }}>International Air Freight</h1>
                <p className="lead mb-0" style={{ textShadow: "1px 1px 3px rgba(0,0,0,0.5)" }}>Fast, reliable, and efficient air cargo transportation worldwide</p>
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
                    <h2 className="mb-3" style={{ color: "var(--primary-color)" }}>Comprehensive Air Freight Solutions</h2>
                    <p className="text-muted mb-0">Fast, reliable, and efficient air cargo transportation services tailored to your needs</p>
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
                            <i className="fas fa-plane text-success"></i>
                          </div>
                          <div>
                            <h5 className="fw-bold mb-2">International door-to-door cargo delivery</h5>
                            <p className="text-muted mb-0">Complete logistics solutions from pickup to final destination</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="d-flex align-items-start">
                          <div className="rounded-circle d-flex align-items-center justify-content-center me-3 flex-shrink-0" style={{ width: "50px", height: "50px", background: "rgba(40, 167, 69, 0.1)" }}>
                            <i className="fas fa-boxes text-success"></i>
                          </div>
                          <div>
                            <h5 className="fw-bold mb-2">Air cargo consolidation</h5>
                            <p className="text-muted mb-0">Cost-effective solutions for smaller shipments through consolidation services</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="d-flex align-items-start">
                          <div className="rounded-circle d-flex align-items-center justify-content-center me-3 flex-shrink-0" style={{ width: "50px", height: "50px", background: "rgba(40, 167, 69, 0.1)" }}>
                            <i className="fas fa-bolt text-success"></i>
                          </div>
                          <div>
                            <h5 className="fw-bold mb-2">Express and priority air transport</h5>
                            <p className="text-muted mb-0">Urgent shipments with minimal transit time for time-sensitive cargo</p>
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
                      Why Choose Our Air Freight?
                    </h4>
                    <div className="row g-4">
                      <div className="col-md-6">
                        <div className="card h-100 border" style={{ backgroundColor: "#f8f9fa" }}>
                          <div className="card-body">
                            <div className="mb-3">
                              <div className="rounded-circle d-inline-flex align-items-center justify-content-center" style={{ width: "60px", height: "60px", background: "rgba(26, 77, 143, 0.1)" }}>
                                <i className="fas fa-clock fa-2x" style={{ color: "var(--primary-color)" }}></i>
                              </div>
                            </div>
                            <h5 className="fw-bold mb-2">Fast Transit Times</h5>
                            <p className="text-muted small mb-0">Quickest delivery option for time-sensitive shipments</p>
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
                            <h5 className="fw-bold mb-2">Global Network</h5>
                            <p className="text-muted small mb-0">Extensive network covering major airports worldwide</p>
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
                            <h5 className="fw-bold mb-2">Secure Handling</h5>
                            <p className="text-muted small mb-0">Professional handling and security for valuable cargo</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="card h-100 border" style={{ backgroundColor: "#f8f9fa" }}>
                          <div className="card-body">
                            <div className="mb-3">
                              <div className="rounded-circle d-inline-flex align-items-center justify-content-center" style={{ width: "60px", height: "60px", background: "rgba(26, 77, 143, 0.1)" }}>
                                <i className="fas fa-truck fa-2x" style={{ color: "var(--primary-color)" }}></i>
                              </div>
                            </div>
                            <h5 className="fw-bold mb-2">Door-to-Door Service</h5>
                            <p className="text-muted small mb-0">Complete pickup and delivery service included</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Types of Cargo */}
                <div className="card border-0 shadow-sm mb-4">
                  <div className="card-body p-4">
                    <h4 className="mb-4" style={{ color: "var(--primary-color)" }}>
                      <i className="fas fa-box-open me-2" style={{ color: "var(--accent-color)" }}></i>
                      Types of Cargo We Handle
                    </h4>
                    <div className="row g-3">
                      <div className="col-md-6 col-lg-4">
                        <div className="card border h-100">
                          <div className="card-body">
                            <div className="d-flex align-items-center">
                              <i className="fas fa-box me-3 fa-lg" style={{ color: "var(--primary-color)" }}></i>
                              <span className="fw-bold">General Cargo</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6 col-lg-4">
                        <div className="card border h-100">
                          <div className="card-body">
                            <div className="d-flex align-items-center">
                              <i className="fas fa-boxes me-3 fa-lg" style={{ color: "var(--primary-color)" }}></i>
                              <span className="fw-bold">Bulk Shipments</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6 col-lg-4">
                        <div className="card border h-100">
                          <div className="card-body">
                            <div className="d-flex align-items-center">
                              <i className="fas fa-weight-hanging me-3 fa-lg" style={{ color: "var(--primary-color)" }}></i>
                              <span className="fw-bold">Heavy Cargo</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6 col-lg-4">
                        <div className="card border h-100">
                          <div className="card-body">
                            <div className="d-flex align-items-center">
                              <i className="fas fa-snowflake me-3 fa-lg" style={{ color: "var(--primary-color)" }}></i>
                              <span className="fw-bold">Temperature Controlled</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6 col-lg-4">
                        <div className="card border h-100">
                          <div className="card-body">
                            <div className="d-flex align-items-center">
                              <i className="fas fa-gem me-3 fa-lg" style={{ color: "var(--primary-color)" }}></i>
                              <span className="fw-bold">Valuable Goods</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6 col-lg-4">
                        <div className="card border h-100">
                          <div className="card-body">
                            <div className="d-flex align-items-center">
                              <i className="fas fa-file-alt me-3 fa-lg" style={{ color: "var(--primary-color)" }}></i>
                              <span className="fw-bold">Documents</span>
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
                        <Link href={`/${lang}/services/air-freight`} className="text-decoration-none fw-bold" style={{ color: "var(--primary-color)" }}>
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
                        <Link href={`/${lang}/services/multimodal`} className="text-decoration-none text-muted">
                          <i className="fas fa-random me-2"></i>Multimodal Transport
                        </Link>
                      </li>
                    </ul>
                    <hr />
                    <div className="text-center">
                      <h5 className="fw-bold mb-3">Need a Quote?</h5>
                      <p className="text-muted small mb-3">Get a personalized quote for your shipment</p>
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
