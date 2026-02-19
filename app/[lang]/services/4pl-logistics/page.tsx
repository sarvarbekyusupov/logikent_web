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
    title: "4PL Logistics Services - Logikent",
    description: "Complete supply chain management including international trade, insurance, cost optimization, and supplier management.",
  };
}

export default function FourPLPage() {
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
                    <li className="breadcrumb-item active text-white" aria-current="page">4PL Logistics</li>
                  </ol>
                </nav>
                <h1 className="display-4 fw-bold mb-3">4PL Logistics Services</h1>
                <p className="lead mb-0">Complete supply chain management and optimization</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-5">
          <div className="container" style={{ maxWidth: "1200px" }}>
            <div className="row">
              <div className="col-lg-8">
                <h2 className="mb-4" style={{ color: "var(--primary-color)" }}>Fourth-Party Logistics Solutions</h2>

                <div className="mb-4">
                  <h4 className="mb-3">What We Offer</h4>
                  <ul className="list-unstyled">
                    <li className="mb-3">
                      <i className="fas fa-check-circle text-success me-2"></i>
                      <strong>Single point of contact — management of all logistics providers (3PL, carriers, warehouses)</strong>
                      <p className="text-muted ms-4">One dedicated manager for all your logistics needs</p>
                    </li>
                    <li className="mb-3">
                      <i className="fas fa-check-circle text-success me-2"></i>
                      <strong>Selection of optimal transport modes and routes</strong>
                      <p className="text-muted ms-4">Expert analysis and route optimization for cost and time efficiency</p>
                    </li>
                    <li className="mb-3">
                      <i className="fas fa-check-circle text-success me-2"></i>
                      <strong>Supplier management — contract handling and partner performance control</strong>
                      <p className="text-muted ms-4">Complete vendor relationship management and quality control</p>
                    </li>
                  </ul>
                </div>

                <div className="mb-4">
                  <h4 className="mb-3">Key Capabilities</h4>
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <div className="card h-100 border-0 shadow-sm">
                        <div className="card-body">
                          <i className="fas fa-chart-line fa-2x mb-2" style={{ color: "var(--primary-color)" }}></i>
                          <h5 className="fw-bold">Cost Optimization</h5>
                          <p className="text-muted small">Strategic cost reduction through network optimization</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 mb-3">
                      <div className="card h-100 border-0 shadow-sm">
                        <div className="card-body">
                          <i className="fas fa-globe-americas fa-2x mb-2" style={{ color: "var(--primary-color)" }}></i>
                          <h5 className="fw-bold">International Trade</h5>
                          <p className="text-muted small">Expert knowledge of global trade regulations</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 mb-3">
                      <div className="card h-100 border-0 shadow-sm">
                        <div className="card-body">
                          <i className="fas fa-shield-alt fa-2x mb-2" style={{ color: "var(--primary-color)" }}></i>
                          <h5 className="fw-bold">Insurance Management</h5>
                          <p className="text-muted small">Cargo insurance solutions for full protection</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 mb-3">
                      <div className="card h-100 border-0 shadow-sm">
                        <div className="card-body">
                          <i className="fas fa-file-contract fa-2x mb-2" style={{ color: "var(--primary-color)" }}></i>
                          <h5 className="fw-bold">Contract Management</h5>
                          <p className="text-muted small">Professional contract negotiation and management</p>
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
                      <li className="mb-2"><Link href="/services/customs-clearance" className="text-decoration-none text-muted"><i className="fas fa-file-signature me-2"></i>Customs Clearance</Link></li>
                      <li className="mb-2"><Link href="/services/door-to-door" className="text-decoration-none text-muted"><i className="fas fa-door-open me-2"></i>Door-to-Door</Link></li>
                      <li className="mb-2"><Link href="/services/4pl-logistics" className="text-decoration-none fw-bold" style={{ color: "var(--primary-color)" }}><i className="fas fa-cogs me-2"></i>4PL Logistics</Link></li>
                      <li className="mb-2"><Link href="/services/multimodal" className="text-decoration-none text-muted"><i className="fas fa-random me-2"></i>Multimodal</Link></li>
                    </ul>
                  </div>
                </div>
                <div className="card border-0 shadow-sm bg-light">
                  <div className="card-body">
                    <h5 className="fw-bold mb-3">Optimize Your Supply Chain</h5>
                    <p className="text-muted small mb-3">Let us manage your complete logistics operation</p>
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
