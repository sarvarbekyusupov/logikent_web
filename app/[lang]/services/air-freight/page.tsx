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

export default function AirFreightPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="py-5" style={{ background: "linear-gradient(135deg, var(--primary-color), var(--secondary-color))" }}>
          <div className="container" style={{ maxWidth: "1200px" }}>
            <div className="row align-items-center">
              <div className="col-lg-8 text-white">
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb mb-3">
                    <li className="breadcrumb-item"><Link href="/" className="text-white">Home</Link></li>
                    <li className="breadcrumb-item"><Link href="/services" className="text-white">Services</Link></li>
                    <li className="breadcrumb-item active text-white" aria-current="page">Air Freight</li>
                  </ol>
                </nav>
                <h1 className="display-4 fw-bold mb-3">International Air Freight</h1>
                <p className="lead mb-0">Fast, reliable, and efficient air cargo transportation worldwide</p>
              </div>
            </div>
          </div>
        </section>

        {/* Service Details */}
        <section className="py-5">
          <div className="container" style={{ maxWidth: "1200px" }}>
            <div className="row">
              <div className="col-lg-8">
                <h2 className="mb-4" style={{ color: "var(--primary-color)" }}>Comprehensive Air Freight Solutions</h2>

                <div className="mb-4">
                  <h4 className="mb-3">What We Offer</h4>
                  <ul className="list-unstyled">
                    <li className="mb-3">
                      <i className="fas fa-check-circle text-success me-2"></i>
                      <strong>International door-to-door cargo delivery</strong>
                      <p className="text-muted ms-4">Complete logistics solutions from pickup to final destination</p>
                    </li>
                    <li className="mb-3">
                      <i className="fas fa-check-circle text-success me-2"></i>
                      <strong>Air cargo consolidation</strong>
                      <p className="text-muted ms-4">Cost-effective solutions for smaller shipments through consolidation services</p>
                    </li>
                    <li className="mb-3">
                      <i className="fas fa-check-circle text-success me-2"></i>
                      <strong>Express and priority air transport</strong>
                      <p className="text-muted ms-4">Urgent shipments with minimal transit time for time-sensitive cargo</p>
                    </li>
                  </ul>
                </div>

                <div className="mb-4">
                  <h4 className="mb-3">Why Choose Our Air Freight?</h4>
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <div className="card h-100 border-0 shadow-sm">
                        <div className="card-body">
                          <div className="mb-2">
                            <i className="fas fa-clock fa-2x" style={{ color: "var(--primary-color)" }}></i>
                          </div>
                          <h5 className="fw-bold">Fast Transit Times</h5>
                          <p className="text-muted small">Quickest delivery option for time-sensitive shipments</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 mb-3">
                      <div className="card h-100 border-0 shadow-sm">
                        <div className="card-body">
                          <div className="mb-2">
                            <i className="fas fa-globe fa-2x" style={{ color: "var(--primary-color)" }}></i>
                          </div>
                          <h5 className="fw-bold">Global Network</h5>
                          <p className="text-muted small">Extensive network covering major airports worldwide</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 mb-3">
                      <div className="card h-100 border-0 shadow-sm">
                        <div className="card-body">
                          <div className="mb-2">
                            <i className="fas fa-shield-alt fa-2x" style={{ color: "var(--primary-color)" }}></i>
                          </div>
                          <h5 className="fw-bold">Secure Handling</h5>
                          <p className="text-muted small">Professional handling and security for valuable cargo</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 mb-3">
                      <div className="card h-100 border-0 shadow-sm">
                        <div className="card-body">
                          <div className="mb-2">
                            <i className="fas fa-truck fa-2x" style={{ color: "var(--primary-color)" }}></i>
                          </div>
                          <h5 className="fw-bold">Door-to-Door Service</h5>
                          <p className="text-muted small">Complete pickup and delivery service included</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="mb-3">Types of Cargo We Handle</h4>
                  <div className="row g-3">
                    <div className="col-md-4">
                      <div className="d-flex align-items-center">
                        <i className="fas fa-box me-2 text-muted"></i>
                        <span>General Cargo</span>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="d-flex align-items-center">
                        <i className="fas fa-boxes me-2 text-muted"></i>
                        <span>Bulk Shipments</span>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="d-flex align-items-center">
                        <i className="fas fa-weight-hanging me-2 text-muted"></i>
                        <span>Heavy Cargo</span>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="d-flex align-items-center">
                        <i className="fas fa-snowflake me-2 text-muted"></i>
                        <span>Temperature Controlled</span>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="d-flex align-items-center">
                        <i className="fas fa-gem me-2 text-muted"></i>
                        <span>Valuable Goods</span>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="d-flex align-items-center">
                        <i className="fas fa-file-alt me-2 text-muted"></i>
                        <span>Documents</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="col-lg-4">
                <div className="card border-0 shadow-sm mb-4">
                  <div className="card-body">
                    <h5 className="fw-bold mb-3">Our Services</h5>
                    <ul className="list-unstyled">
                      <li className="mb-2">
                        <Link href="/services/air-freight" className="text-decoration-none fw-bold" style={{ color: "var(--primary-color)" }}>
                          <i className="fas fa-plane me-2"></i>Air Freight
                        </Link>
                      </li>
                      <li className="mb-2">
                        <Link href="/services/road-transport" className="text-decoration-none text-muted">
                          <i className="fas fa-truck me-2"></i>Road Transport
                        </Link>
                      </li>
                      <li className="mb-2">
                        <Link href="/services/customs-clearance" className="text-decoration-none text-muted">
                          <i className="fas fa-file-signature me-2"></i>Customs Clearance
                        </Link>
                      </li>
                      <li className="mb-2">
                        <Link href="/services/door-to-door" className="text-decoration-none text-muted">
                          <i className="fas fa-door-open me-2"></i>Door-to-Door Delivery
                        </Link>
                      </li>
                      <li className="mb-2">
                        <Link href="/services/4pl-logistics" className="text-decoration-none text-muted">
                          <i className="fas fa-cogs me-2"></i>4PL Logistics
                        </Link>
                      </li>
                      <li className="mb-2">
                        <Link href="/services/multimodal" className="text-decoration-none text-muted">
                          <i className="fas fa-random me-2"></i>Multimodal Transport
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="card border-0 shadow-sm bg-light">
                  <div className="card-body">
                    <h5 className="fw-bold mb-3">Need a Quote?</h5>
                    <p className="text-muted small mb-3">Get a personalized quote for your air freight shipment</p>
                    <Link href="#contact" className="btn btn-primary w-100">Contact Us</Link>
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
