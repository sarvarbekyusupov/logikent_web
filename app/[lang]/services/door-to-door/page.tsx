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
    title: "Door-to-Door Delivery & DDP Services - Logikent",
    description: "Complete logistics solutions from sender to destination including air, sea, road transport and customs procedures.",
  };
}

export default function DoorToDoorPage() {
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
                    <li className="breadcrumb-item active text-white" aria-current="page">Door-to-Door Delivery</li>
                  </ol>
                </nav>
                <h1 className="display-4 fw-bold mb-3">Door-to-Door Delivery & DDP Services</h1>
                <p className="lead mb-0">Complete logistics solutions from sender to your door</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-5">
          <div className="container" style={{ maxWidth: "1200px" }}>
            <div className="row">
              <div className="col-lg-8">
                <h2 className="mb-4" style={{ color: "var(--primary-color)" }}>Complete End-to-End Solutions</h2>

                <div className="mb-4">
                  <h4 className="mb-3">What's Included</h4>
                  <ul className="list-unstyled">
                    <li className="mb-3">
                      <i className="fas fa-check-circle text-success me-2"></i>
                      <strong>International transportation (air, sea, road and container)</strong>
                      <p className="text-muted ms-4">All modes of transport available based on your needs</p>
                    </li>
                    <li className="mb-3">
                      <i className="fas fa-check-circle text-success me-2"></i>
                      <strong>Customs procedures (upon agreement)</strong>
                      <p className="text-muted ms-4">Complete customs clearance handled by our experts</p>
                    </li>
                    <li className="mb-3">
                      <i className="fas fa-check-circle text-success me-2"></i>
                      <strong>Delivery to the recipient's door</strong>
                      <p className="text-muted ms-4">Final mile delivery included for maximum convenience</p>
                    </li>
                  </ul>
                </div>

                <div className="mb-4">
                  <h4 className="mb-3">Benefits of Door-to-Door Service</h4>
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <div className="card h-100 border-0 shadow-sm">
                        <div className="card-body">
                          <i className="fas fa-handshake fa-2x mb-2" style={{ color: "var(--primary-color)" }}></i>
                          <h5 className="fw-bold">Hassle-Free</h5>
                          <p className="text-muted small">We handle everything from start to finish</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 mb-3">
                      <div className="card h-100 border-0 shadow-sm">
                        <div className="card-body">
                          <i className="fas fa-eye fa-2x mb-2" style={{ color: "var(--primary-color)" }}></i>
                          <h5 className="fw-bold">Full Visibility</h5>
                          <p className="text-muted small">Track your shipment at every step</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 mb-3">
                      <div className="card h-100 border-0 shadow-sm">
                        <div className="card-body">
                          <i className="fas fa-dollar-sign fa-2x mb-2" style={{ color: "var(--primary-color)" }}></i>
                          <h5 className="fw-bold">DDP Available</h5>
                          <p className="text-muted small">Delivered Duty Paid - no hidden costs</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 mb-3">
                      <div className="card h-100 border-0 shadow-sm">
                        <div className="card-body">
                          <i className="fas fa-globe fa-2x mb-2" style={{ color: "var(--primary-color)" }}></i>
                          <h5 className="fw-bold">Worldwide</h5>
                          <p className="text-muted small">Service available from China, Turkey, EU, UAE</p>
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
                      <li className="mb-2"><Link href="/services/door-to-door" className="text-decoration-none fw-bold" style={{ color: "var(--primary-color)" }}><i className="fas fa-door-open me-2"></i>Door-to-Door</Link></li>
                      <li className="mb-2"><Link href="/services/4pl-logistics" className="text-decoration-none text-muted"><i className="fas fa-cogs me-2"></i>4PL Logistics</Link></li>
                      <li className="mb-2"><Link href="/services/multimodal" className="text-decoration-none text-muted"><i className="fas fa-random me-2"></i>Multimodal</Link></li>
                    </ul>
                  </div>
                </div>
                <div className="card border-0 shadow-sm bg-light">
                  <div className="card-body">
                    <h5 className="fw-bold mb-3">Get Started</h5>
                    <p className="text-muted small mb-3">Request a door-to-door delivery quote</p>
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
