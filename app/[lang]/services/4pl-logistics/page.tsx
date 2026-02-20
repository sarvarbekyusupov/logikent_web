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
    title: "4PL Logistics Services - Logikent",
    description: "Complete supply chain management including international trade, insurance, cost optimization, and supplier management.",
  };
}

export default async function FourPLPage({
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
            backgroundImage: "url('/img/logikent/4pl.webp')",
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
                <h1 className="display-4 fw-bold mb-3" style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.5)" }}>4PL Logistics Services</h1>
                <p className="lead mb-0" style={{ textShadow: "1px 1px 3px rgba(0,0,0,0.5)" }}>Complete supply chain management and optimization</p>
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
                    <h2 className="mb-3" style={{ color: "var(--primary-color)" }}>Fourth-Party Logistics Solutions</h2>
                    <p className="text-muted mb-0">Comprehensive supply chain management with a single point of contact</p>
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
                            <i className="fas fa-user-tie text-success"></i>
                          </div>
                          <div>
                            <h5 className="fw-bold mb-2">Single point of contact — management of all logistics providers</h5>
                            <p className="text-muted mb-0">One dedicated manager for all your logistics needs (3PL, carriers, warehouses)</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="d-flex align-items-start">
                          <div className="rounded-circle d-flex align-items-center justify-content-center me-3 flex-shrink-0" style={{ width: "50px", height: "50px", background: "rgba(40, 167, 69, 0.1)" }}>
                            <i className="fas fa-route text-success"></i>
                          </div>
                          <div>
                            <h5 className="fw-bold mb-2">Selection of optimal transport modes and routes</h5>
                            <p className="text-muted mb-0">Expert analysis and route optimization for cost and time efficiency</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="d-flex align-items-start">
                          <div className="rounded-circle d-flex align-items-center justify-content-center me-3 flex-shrink-0" style={{ width: "50px", height: "50px", background: "rgba(40, 167, 69, 0.1)" }}>
                            <i className="fas fa-handshake text-success"></i>
                          </div>
                          <div>
                            <h5 className="fw-bold mb-2">Supplier management — contract handling and partner performance control</h5>
                            <p className="text-muted mb-0">Complete vendor relationship management and quality control</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Key Capabilities */}
                <div className="card border-0 shadow-sm mb-4">
                  <div className="card-body p-4">
                    <h4 className="mb-4" style={{ color: "var(--primary-color)" }}>
                      <i className="fas fa-trophy me-2" style={{ color: "var(--accent-color)" }}></i>
                      Key Capabilities
                    </h4>
                    <div className="row g-4">
                      <div className="col-md-6">
                        <div className="card h-100 border" style={{ backgroundColor: "#f8f9fa" }}>
                          <div className="card-body">
                            <div className="mb-3">
                              <div className="rounded-circle d-inline-flex align-items-center justify-content-center" style={{ width: "60px", height: "60px", background: "rgba(26, 77, 143, 0.1)" }}>
                                <i className="fas fa-chart-line fa-2x" style={{ color: "var(--primary-color)" }}></i>
                              </div>
                            </div>
                            <h5 className="fw-bold mb-2">Cost Optimization</h5>
                            <p className="text-muted small mb-0">Strategic cost reduction through network optimization</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="card h-100 border" style={{ backgroundColor: "#f8f9fa" }}>
                          <div className="card-body">
                            <div className="mb-3">
                              <div className="rounded-circle d-inline-flex align-items-center justify-content-center" style={{ width: "60px", height: "60px", background: "rgba(26, 77, 143, 0.1)" }}>
                                <i className="fas fa-globe-americas fa-2x" style={{ color: "var(--primary-color)" }}></i>
                              </div>
                            </div>
                            <h5 className="fw-bold mb-2">International Trade</h5>
                            <p className="text-muted small mb-0">Expert knowledge of global trade regulations</p>
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
                            <h5 className="fw-bold mb-2">Insurance Management</h5>
                            <p className="text-muted small mb-0">Cargo insurance solutions for full protection</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="card h-100 border" style={{ backgroundColor: "#f8f9fa" }}>
                          <div className="card-body">
                            <div className="mb-3">
                              <div className="rounded-circle d-inline-flex align-items-center justify-content-center" style={{ width: "60px", height: "60px", background: "rgba(26, 77, 143, 0.1)" }}>
                                <i className="fas fa-file-contract fa-2x" style={{ color: "var(--primary-color)" }}></i>
                              </div>
                            </div>
                            <h5 className="fw-bold mb-2">Contract Management</h5>
                            <p className="text-muted small mb-0">Professional contract negotiation and management</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 4PL vs 3PL */}
                <div className="card border-0 shadow-sm mb-4">
                  <div className="card-body p-4">
                    <h4 className="mb-4" style={{ color: "var(--primary-color)" }}>
                      <i className="fas fa-balance-scale me-2" style={{ color: "var(--accent-color)" }}></i>
                      4PL vs 3PL: The Difference
                    </h4>
                    <div className="row g-4">
                      <div className="col-md-6">
                        <div className="card h-100 border">
                          <div className="card-body">
                            <h5 className="fw-bold mb-3" style={{ color: "var(--primary-color)" }}>3PL (Third-Party Logistics)</h5>
                            <ul className="list-unstyled small">
                              <li className="mb-2"><i className="fas fa-arrow-right me-2 text-muted"></i>Focuses on physical operations</li>
                              <li className="mb-2"><i className="fas fa-arrow-right me-2 text-muted"></i>Warehousing and transportation</li>
                              <li className="mb-2"><i className="fas fa-arrow-right me-2 text-muted"></i>Multiple service providers</li>
                              <li className="mb-0"><i className="fas fa-arrow-right me-2 text-muted"></i>Tactical execution</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="card h-100 border" style={{ backgroundColor: "rgba(40, 167, 69, 0.05)" }}>
                          <div className="card-body">
                            <h5 className="fw-bold mb-3" style={{ color: "var(--secondary-color)" }}>4PL (Fourth-Party Logistics)</h5>
                            <ul className="list-unstyled small">
                              <li className="mb-2"><i className="fas fa-check-circle me-2 text-success"></i>Single point of contact</li>
                              <li className="mb-2"><i className="fas fa-check-circle me-2 text-success"></i>Manages all 3PL providers</li>
                              <li className="mb-2"><i className="fas fa-check-circle me-2 text-success"></i>Strategic supply chain management</li>
                              <li className="mb-0"><i className="fas fa-check-circle me-2 text-success"></i>End-to-end visibility</li>
                            </ul>
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
                        <Link href={`/${lang}/services/4pl-logistics`} className="text-decoration-none fw-bold" style={{ color: "var(--primary-color)" }}>
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
                      <h5 className="fw-bold mb-3">Optimize Your Supply Chain</h5>
                      <p className="text-muted small mb-3">Let us manage your complete logistics operation</p>
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
