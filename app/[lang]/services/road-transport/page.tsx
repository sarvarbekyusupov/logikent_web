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
    title: "International Road Transport Services - Logikent",
    description: "Reliable road freight transportation with tent, refrigerator, and lowbed vehicles from/to Uzbekistan.",
  };
}

export default function RoadTransportPage() {
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
                    <li className="breadcrumb-item active text-white" aria-current="page">Road Transport</li>
                  </ol>
                </nav>
                <h1 className="display-4 fw-bold mb-3">International Road Transport</h1>
                <p className="lead mb-0">Tent, Refrigerator, Lowbed - Comprehensive road freight solutions</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-5">
          <div className="container" style={{ maxWidth: "1200px" }}>
            <div className="row">
              <div className="col-lg-8">
                <h2 className="mb-4" style={{ color: "var(--primary-color)" }}>Complete Road Transportation</h2>

                <div className="mb-4">
                  <h4 className="mb-3">Our Services Include</h4>
                  <ul className="list-unstyled">
                    <li className="mb-3">
                      <i className="fas fa-check-circle text-success me-2"></i>
                      <strong>LTL/FTL road transport from/to Uzbekistan</strong>
                      <p className="text-muted ms-4">Less-than-truckload and full truckload options for any shipment size</p>
                    </li>
                    <li className="mb-3">
                      <i className="fas fa-check-circle text-success me-2"></i>
                      <strong>Warehousing and customs services</strong>
                      <p className="text-muted ms-4">Complete storage and customs clearance support included</p>
                    </li>
                    <li className="mb-3">
                      <i className="fas fa-check-circle text-success me-2"></i>
                      <strong>Cross-border cargo delivery</strong>
                      <p className="text-muted ms-4">Seamless transportation across international borders</p>
                    </li>
                    <li className="mb-3">
                      <i className="fas fa-check-circle text-success me-2"></i>
                      <strong>Oversized, dangerous, and temperature-sensitive cargo</strong>
                      <p className="text-muted ms-4">Specialized equipment for all types of cargo requirements</p>
                    </li>
                  </ul>
                </div>

                <div className="mb-4">
                  <h4 className="mb-3">Vehicle Types</h4>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <div className="card h-100 border-0 shadow-sm">
                        <div className="card-body">
                          <div className="mb-2">
                            <i className="fas fa-truck-loading fa-2x" style={{ color: "var(--primary-color)" }}></i>
                          </div>
                          <h5 className="fw-bold">Tent Vehicles</h5>
                          <p className="text-muted small">Dry vans for general cargo protection</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="card h-100 border-0 shadow-sm">
                        <div className="card-body">
                          <div className="mb-2">
                            <i className="fas fa-temperature-low fa-2x" style={{ color: "var(--primary-color)" }}></i>
                          </div>
                          <h5 className="fw-bold">Refrigerator Trucks</h5>
                          <p className="text-muted small">Temperature-controlled for perishable goods</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="card h-100 border-0 shadow-sm">
                        <div className="card-body">
                          <div className="mb-2">
                            <i className="fas fa-truck-pickup fa-2x" style={{ color: "var(--primary-color)" }}></i>
                          </div>
                          <h5 className="fw-bold">Lowbed Trailers</h5>
                          <p className="text-muted small">For heavy and oversized equipment</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="card h-100 border-0 shadow-sm">
                        <div className="card-body">
                          <div className="mb-2">
                            <i className="fas fa-exclamation-triangle fa-2x" style={{ color: "var(--primary-color)" }}></i>
                          </div>
                          <h5 className="fw-bold">Specialized Transport</h5>
                          <p className="text-muted small">For dangerous and hazardous materials</p>
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
                      <li className="mb-2"><Link href="/services/road-transport" className="text-decoration-none fw-bold" style={{ color: "var(--primary-color)" }}><i className="fas fa-truck me-2"></i>Road Transport</Link></li>
                      <li className="mb-2"><Link href="/services/customs-clearance" className="text-decoration-none text-muted"><i className="fas fa-file-signature me-2"></i>Customs Clearance</Link></li>
                      <li className="mb-2"><Link href="/services/door-to-door" className="text-decoration-none text-muted"><i className="fas fa-door-open me-2"></i>Door-to-Door</Link></li>
                      <li className="mb-2"><Link href="/services/4pl-logistics" className="text-decoration-none text-muted"><i className="fas fa-cogs me-2"></i>4PL Logistics</Link></li>
                      <li className="mb-2"><Link href="/services/multimodal" className="text-decoration-none text-muted"><i className="fas fa-random me-2"></i>Multimodal</Link></li>
                    </ul>
                  </div>
                </div>
                <div className="card border-0 shadow-sm bg-light">
                  <div className="card-body">
                    <h5 className="fw-bold mb-3">Need a Quote?</h5>
                    <p className="text-muted small mb-3">Get a personalized quote for road transport</p>
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
