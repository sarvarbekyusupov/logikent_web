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
    title: "Multimodal Transportation Services - Logikent",
    description: "Combined rail, road, and sea transport services with full cargo support, consolidation, and tracking.",
  };
}

export default function MultimodalPage() {
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
                    <li className="breadcrumb-item active text-white" aria-current="page">Multimodal Transport</li>
                  </ol>
                </nav>
                <h1 className="display-4 fw-bold mb-3">Multimodal Transportation</h1>
                <p className="lead mb-0">Rail, road, and sea combined transport (container-based)</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-5">
          <div className="container" style={{ maxWidth: "1200px" }}>
            <div className="row">
              <div className="col-lg-8">
                <h2 className="mb-4" style={{ color: "var(--primary-color)" }}>Flexible Multimodal Solutions</h2>

                <div className="mb-4">
                  <h4 className="mb-3">Our Services Include</h4>
                  <ul className="list-unstyled">
                    <li className="mb-3">
                      <i className="fas fa-check-circle text-success me-2"></i>
                      <strong>Full cargo support: route booking, documentation, and schedule control</strong>
                      <p className="text-muted ms-4">Complete handling from origin to destination</p>
                    </li>
                    <li className="mb-3">
                      <i className="fas fa-check-circle text-success me-2"></i>
                      <strong>Transit shipments and consolidation</strong>
                      <p className="text-muted ms-4">Efficient consolidation for cost-effective shipping</p>
                    </li>
                    <li className="mb-3">
                      <i className="fas fa-check-circle text-success me-2"></i>
                      <strong>Tracking and monitoring of cargo status</strong>
                      <p className="text-muted ms-4">Real-time visibility throughout the journey</p>
                    </li>
                  </ul>
                </div>

                <div className="mb-4">
                  <h4 className="mb-3">Transport Modes Combined</h4>
                  <div className="row">
                    <div className="col-md-4 mb-3">
                      <div className="card h-100 border-0 shadow-sm">
                        <div className="card-body">
                          <i className="fas fa-train fa-2x mb-2" style={{ color: "var(--primary-color)" }}></i>
                          <h5 className="fw-bold">Rail</h5>
                          <p className="text-muted small">Cost-effective for long-distance inland transport</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 mb-3">
                      <div className="card h-100 border-0 shadow-sm">
                        <div className="card-body">
                          <i className="fas fa-truck fa-2x mb-2" style={{ color: "var(--primary-color)" }}></i>
                          <h5 className="fw-bold">Road</h5>
                          <p className="text-muted small">Flexible pickup and delivery options</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 mb-3">
                      <div className="card h-100 border-0 shadow-sm">
                        <div className="card-body">
                          <i className="fas fa-ship fa-2x mb-2" style={{ color: "var(--primary-color)" }}></i>
                          <h5 className="fw-bold">Sea</h5>
                          <p className="text-muted small">Economical for large volume shipments</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="mb-3">Advantages of Multimodal Transport</h4>
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <div className="card h-100 border-0 shadow-sm">
                        <div className="card-body">
                          <i className="fas fa-piggy-bank fa-2x mb-2" style={{ color: "var(--primary-color)" }}></i>
                          <h5 className="fw-bold">Cost Effective</h5>
                          <p className="text-muted small">Optimized routes reduce transportation costs</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 mb-3">
                      <div className="card h-100 border-0 shadow-sm">
                        <div className="card-body">
                          <i className="fas fa-route fa-2x mb-2" style={{ color: "var(--primary-color)" }}></i>
                          <h5 className="fw-bold">Flexible Routing</h5>
                          <p className="text-muted small">Multiple route options for optimal delivery</p>
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
                      <li className="mb-2"><Link href="/services/4pl-logistics" className="text-decoration-none text-muted"><i className="fas fa-cogs me-2"></i>4PL Logistics</Link></li>
                      <li className="mb-2"><Link href="/services/multimodal" className="text-decoration-none fw-bold" style={{ color: "var(--primary-color)" }}><i className="fas fa-random me-2"></i>Multimodal</Link></li>
                    </ul>
                  </div>
                </div>
                <div className="card border-0 shadow-sm bg-light">
                  <div className="card-body">
                    <h5 className="fw-bold mb-3">Plan Your Shipment</h5>
                    <p className="text-muted small mb-3">Get optimal multimodal routing for your cargo</p>
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
