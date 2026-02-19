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
    title: "About Us - Logikent Logistics Company",
    description: "Learn more about Logikent - your trusted logistics partner with years of experience in cargo transportation and supply chain management.",
  };
}

export default function AboutPage() {
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
                    <li className="breadcrumb-item active text-white" aria-current="page">About Us</li>
                  </ol>
                </nav>
                <h1 className="display-4 fw-bold mb-3">About Logikent</h1>
                <p className="lead mb-0">Your trusted partner in logistics solutions since our founding</p>
              </div>
            </div>
          </div>
        </section>

        {/* Back Button */}
        <div className="container" style={{ maxWidth: "1200px" }}>
          <div className="row mt-4">
            <div className="col-12">
              <Link href="/" className="btn btn-outline-secondary">
                <i className="fas fa-arrow-left me-2"></i>
                Back to Home
              </Link>
            </div>
          </div>
        </div>

        {/* Our Story */}
        <section className="py-5">
          <div className="container" style={{ maxWidth: "1200px" }}>
            <div className="row">
              <div className="col-lg-12">
                <h2 className="mb-4" style={{ color: "var(--primary-color)" }}>Our Story</h2>
                <div className="card border-0 shadow-sm">
                  <div className="card-body p-5">
                    <p className="lead mb-3" style={{ lineHeight: "1.8" }}>
                      <strong>Logikent</strong> is an independent logistics company founded by an expert with years of experience in cargo transportation and supply chain management.
                    </p>
                    <p className="mb-3" style={{ lineHeight: "1.8" }}>
                      We created Logikent with a simple idea: logistics should be clear, reliable, and manageable. No unnecessary bureaucracy, complex processes, or unjustified costs.
                    </p>
                    <p className="mb-3" style={{ lineHeight: "1.8" }}>
                      Unlike major operators where clients are just numbers in the system, we focus on a personal approach, flexibility, and quick decision-making.
                    </p>
                    <p style={{ lineHeight: "1.8" }}>
                      We carefully plan each route, control every stage of transportation, and stay always in touch. We are faster. More flexible. More attentive to details.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-5 bg-light">
          <div className="container" style={{ maxWidth: "1200px" }}>
            <h2 className="text-center mb-5" style={{ color: "var(--primary-color)" }}>Our Core Values</h2>
            <div className="row g-4">
              <div className="col-md-6 col-lg-3">
                <div className="card border-0 shadow-sm h-100 text-center hover-card">
                  <div className="card-body p-4">
                    <div className="rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{ width: "80px", height: "80px", backgroundColor: "#28a74520" }}>
                      <i className="fas fa-check-circle fa-2x" style={{ color: "#28a745" }}></i>
                    </div>
                    <h5 className="fw-bold mb-3">Clear & Simple</h5>
                    <p className="text-muted small">Transparent pricing, no hidden costs, straightforward processes without bureaucracy.</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-3">
                <div className="card border-0 shadow-sm h-100 text-center hover-card">
                  <div className="card-body p-4">
                    <div className="rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{ width: "80px", height: "80px", backgroundColor: "#007bff20" }}>
                      <i className="fas fa-users fa-2x" style={{ color: "#007bff" }}></i>
                    </div>
                    <h5 className="fw-bold mb-3">Personal Approach</h5>
                    <p className="text-muted small">Dedicated manager for each client with flexible solutions and attention.</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-3">
                <div className="card border-0 shadow-sm h-100 text-center hover-card">
                  <div className="card-body p-4">
                    <div className="rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{ width: "80px", height: "80px", backgroundColor: "#fd7e1420" }}>
                      <i className="fas fa-route fa-2x" style={{ color: "#fd7e14" }}></i>
                    </div>
                    <h5 className="fw-bold mb-3">Full Control</h5>
                    <p className="text-muted small">Real-time tracking and constant communication throughout the journey.</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-3">
                <div className="card border-0 shadow-sm h-100 text-center hover-card">
                  <div className="card-body p-4">
                    <div className="rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{ width: "80px", height: "80px", backgroundColor: "#ffc10720" }}>
                      <i className="fas fa-bolt fa-2x" style={{ color: "#ffc107" }}></i>
                    </div>
                    <h5 className="fw-bold mb-3">Fast & Flexible</h5>
                    <p className="text-muted small">Quick decision-making and attentive to every detail of your cargo.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission, Vision, Values */}
        <section className="py-5">
          <div className="container" style={{ maxWidth: "1200px" }}>
            <h2 className="text-center mb-5" style={{ color: "var(--primary-color)" }}>Our Vision, Values, and Mission</h2>
            <div className="row g-4">
              <div className="col-md-4">
                <div className="card border-0 shadow-sm h-100 text-center hover-card">
                  <div className="card-body p-5">
                    <div className="mb-4">
                      <i className="fas fa-lightbulb fa-3x" style={{ color: "var(--primary-color)" }}></i>
                    </div>
                    <h4 className="fw-bold mb-3">Our Mission</h4>
                    <p className="text-muted mb-0">To contribute to the development of our clients' businesses by providing them with fast, reliable, and efficient logistics solutions.</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card border-0 shadow-sm h-100 text-center hover-card">
                  <div className="card-body p-5">
                    <div className="mb-4">
                      <i className="fas fa-hand-holding-heart fa-3x" style={{ color: "var(--primary-color)" }}></i>
                    </div>
                    <h4 className="fw-bold mb-3">Our Vision</h4>
                    <p className="text-muted mb-0">To become the most reliable and innovative logistics company in Central Asia, taking a leading position with advanced technologies and quality service.</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card border-0 shadow-sm h-100 text-center hover-card">
                  <div className="card-body p-5">
                    <div className="mb-4">
                      <i className="fas fa-gem fa-3x" style={{ color: "var(--primary-color)" }}></i>
                    </div>
                    <h4 className="fw-bold mb-3">Our Values</h4>
                    <p className="text-muted mb-0">We value professionalism, responsibility, and customer focus. We build long-term partnerships based on trust and mutual respect.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Goal */}
        <section className="py-5 bg-light">
          <div className="container" style={{ maxWidth: "1200px" }}>
            <div className="row">
              <div className="col-12">
                <div className="card border-0 shadow-lg" style={{ background: "linear-gradient(135deg, var(--primary-color), var(--secondary-color))" }}>
                  <div className="card-body p-5 text-center text-white">
                    <div className="mb-3">
                      <i className="fas fa-bullseye fa-3x opacity-75"></i>
                    </div>
                    <h3 className="fw-bold mb-3">Our Goal</h3>
                    <p className="mb-0" style={{ fontSize: "1.2rem", maxWidth: "800px", marginInline: "auto" }}>
                      To become a long-term logistics partner for companies that value reliability, speed, and professional approach.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-5">
          <div className="container" style={{ maxWidth: "800px" }}>
            <div className="card border-0 shadow-sm bg-light">
              <div className="card-body p-5 text-center">
                <i className="fas fa-quote-left fa-3x mb-3" style={{ color: "var(--primary-color)" }}></i>
                <p className="fst-italic mb-4" style={{ fontSize: "1.3rem", lineHeight: "1.6" }}>
                  "Great experience — in a company where you truly get attention."
                </p>
                <p className="fw-bold mb-4" style={{ color: "var(--primary-color)" }}>
                  Experience on which effective solutions are built.
                </p>
                <p className="text-muted mb-4">Logikent — logistics with personal responsibility.</p>
                <Link href="#contact" className="btn btn-primary btn-lg px-5" style={{ borderRadius: "50px" }}>
                  Get in Touch
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />

      <style jsx>{`
        .hover-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;
        }
      `}</style>
    </>
  );
}
