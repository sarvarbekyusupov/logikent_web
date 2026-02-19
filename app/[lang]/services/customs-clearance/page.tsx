import { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  return {
    title: "Customs Clearance Services - Logikent",
    description: "Professional customs brokerage services including consultation, duty calculation, and document preparation.",
  };
}

export default function CustomsClearancePage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <section className="py-5" style={{ background: "linear-gradient(135deg, var(--primary-color), var(--secondary-color))" }}>
          <div className="container" style={{ maxWidth: "1200px" }}>
            <div className="row align-items-center">
              <div className="col-lg-8 text-white">
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb mb-3">
                    <li className="breadcrumb-item"><Link href="/" className="text-white">Home</Link></li>
                    <li className="breadcrumb-item"><Link href="/services" className="text-white">Services</Link></li>
                    <li className="breadcrumb-item active text-white" aria-current="page">Customs Clearance</li>
                  </ol>
                </nav>
                <h1 className="display-4 fw-bold mb-3">Customs Clearance Services</h1>
                <p className="lead mb-0">Your local customs broker - Complete customs solutions</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-5">
          <div className="container" style={{ maxWidth: "1200px" }}>
            <div className="row">
              <div className="col-lg-8">
                <h2 className="mb-4" style={{ color: "var(--primary-color)" }}>Professional Customs Brokerage</h2>

                <div className="mb-4">
                  <h4 className="mb-3">Our Services</h4>
                  <ul className="list-unstyled">
                    <li className="mb-3">
                      <i className="fas fa-check-circle text-success me-2"></i>
                      <strong>Consultation with customs procedure specialists</strong>
                      <p className="text-muted ms-4">Expert guidance on all customs requirements and procedures</p>
                    </li>
                    <li className="mb-3">
                      <i className="fas fa-check-circle text-success me-2"></i>
                      <strong>Calculation of customs duties and taxes</strong>
                      <p className="text-muted ms-4">Accurate calculation of all applicable duties and taxes</p>
                    </li>
                    <li className="mb-3">
                      <i className="fas fa-check-circle text-success me-2"></i>
                      <strong>Payment of duties and taxes</strong>
                      <p className="text-muted ms-4">Handling all payments on your behalf</p>
                    </li>
                    <li className="mb-3">
                      <i className="fas fa-check-circle text-success me-2"></i>
                      <strong>Preparation of declarations and certificates</strong>
                      <p className="text-muted ms-4">Complete documentation preparation and filing</p>
                    </li>
                  </ul>
                </div>

                <div className="mb-4">
                  <h4 className="mb-3">Why Choose Our Customs Services?</h4>
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <div className="card h-100 border-0 shadow-sm">
                        <div className="card-body">
                          <i className="fas fa-user-tie fa-2x mb-2" style={{ color: "var(--primary-color)" }}></i>
                          <h5 className="fw-bold">Expert Team</h5>
                          <p className="text-muted small">Licensed customs brokers with extensive experience</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 mb-3">
                      <div className="card h-100 border-0 shadow-sm">
                        <div className="card-body">
                          <i className="fas fa-clock fa-2x mb-2" style={{ color: "var(--primary-color)" }}></i>
                          <h5 className="fw-bold">Fast Processing</h5>
                          <p className="text-muted small">Quick clearance to minimize delays</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 mb-3">
                      <div className="card h-100 border-0 shadow-sm">
                        <div className="card-body">
                          <i className="fas fa-hand-holding-usd fa-2x mb-2" style={{ color: "var(--primary-color)" }}></i>
                          <h5 className="fw-bold">Cost Efficient</h5>
                          <p className="text-muted small">Optimized duty calculations to save costs</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 mb-3">
                      <div className="card h-100 border-0 shadow-sm">
                        <div className="card-body">
                          <i className="fas fa-file-contract fa-2x mb-2" style={{ color: "var(--primary-color)" }}></i>
                          <h5 className="fw-bold">Full Documentation</h5>
                          <p className="text-muted small">Complete paperwork handling included</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-4">
                <div className="card border-0 shadow-sm mb-4">
                  <div className="card-body">
                    <h5 className="fw-bold mb-3">Our Services</h5>
                    <ul className="list-unstyled">
                      <li className="mb-2"><Link href="/services/air-freight" className="text-decoration-none text-muted"><i className="fas fa-plane me-2"></i>Air Freight</Link></li>
                      <li className="mb-2"><Link href="/services/road-transport" className="text-decoration-none text-muted"><i className="fas fa-truck me-2"></i>Road Transport</Link></li>
                      <li className="mb-2"><Link href="/services/customs-clearance" className="text-decoration-none fw-bold" style={{ color: "var(--primary-color)" }}><i className="fas fa-file-signature me-2"></i>Customs Clearance</Link></li>
                      <li className="mb-2"><Link href="/services/door-to-door" className="text-decoration-none text-muted"><i className="fas fa-door-open me-2"></i>Door-to-Door</Link></li>
                      <li className="mb-2"><Link href="/services/4pl-logistics" className="text-decoration-none text-muted"><i className="fas fa-cogs me-2"></i>4PL Logistics</Link></li>
                      <li className="mb-2"><Link href="/services/multimodal" className="text-decoration-none text-muted"><i className="fas fa-random me-2"></i>Multimodal</Link></li>
                    </ul>
                  </div>
                </div>
                <div className="card border-0 shadow-sm bg-light">
                  <div className="card-body">
                    <h5 className="fw-bold mb-3">Need Assistance?</h5>
                    <p className="text-muted small mb-3">Our customs experts are ready to help</p>
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
