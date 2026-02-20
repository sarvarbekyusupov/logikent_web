"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function DoorToDoorPage() {
  const { t } = useLanguage();

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
                <h1 className="display-4 fw-bold mb-3" style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.5)" }}>{t("door2door-hero-title")}</h1>
                <p className="lead mb-0" style={{ textShadow: "1px 1px 3px rgba(0,0,0,0.5)" }}>{t("door2door-hero-subtitle")}</p>
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
                <div className="text-center mb-5">
                  <h2 className="fw-bold mb-3" style={{ color: "var(--primary-color)", fontSize: "2rem" }}>{t("door2door-title")}</h2>
                  <p className="text-muted lead" style={{ maxWidth: "700px", margin: "0 auto" }}>{t("door2door-subtitle")}</p>
                </div>

                {/* What's Included - Improved 3-column layout */}
                <div className="card border-0 shadow-sm mb-5">
                  <div className="card-body p-5">
                    <h4 className="mb-4 text-center" style={{ color: "var(--primary-color)" }}>
                      <i className="fas fa-star me-2" style={{ color: "var(--accent-color)" }}></i>
                      {t("door2door-whats-included")}
                    </h4>
                    <div className="row g-4">
                      <div className="col-md-4">
                        <div className="text-center p-4 rounded-3 h-100" style={{ background: "linear-gradient(135deg, rgba(37, 99, 235, 0.05), rgba(37, 99, 235, 0.02))" }}>
                          <div className="rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{ width: "70px", height: "70px", background: "linear-gradient(135deg, var(--primary-color), var(--secondary-color))" }}>
                            <i className="fas fa-shipping-fast fa-2x text-white"></i>
                          </div>
                          <h5 className="fw-bold mb-2" style={{ fontSize: "1rem" }}>{t("door2door-include1-title")}</h5>
                          <p className="text-muted small mb-0">{t("door2door-include1-desc")}</p>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="text-center p-4 rounded-3 h-100" style={{ background: "linear-gradient(135deg, rgba(249, 115, 22, 0.05), rgba(249, 115, 22, 0.02))" }}>
                          <div className="rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{ width: "70px", height: "70px", background: "linear-gradient(135deg, #f97316, #fb923c)" }}>
                            <i className="fas fa-passport fa-2x text-white"></i>
                          </div>
                          <h5 className="fw-bold mb-2" style={{ fontSize: "1rem" }}>{t("door2door-include2-title")}</h5>
                          <p className="text-muted small mb-0">{t("door2door-include2-desc")}</p>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="text-center p-4 rounded-3 h-100" style={{ background: "linear-gradient(135deg, rgba(16, 185, 129, 0.05), rgba(16, 185, 129, 0.02))" }}>
                          <div className="rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{ width: "70px", height: "70px", background: "linear-gradient(135deg, #10b981, #34d399)" }}>
                            <i className="fas fa-home fa-2x text-white"></i>
                          </div>
                          <h5 className="fw-bold mb-2" style={{ fontSize: "1rem" }}>{t("door2door-include3-title")}</h5>
                          <p className="text-muted small mb-0">{t("door2door-include3-desc")}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Benefits - Improved 2x2 layout */}
                <div className="card border-0 shadow-sm mb-5">
                  <div className="card-body p-5">
                    <h4 className="mb-4 text-center" style={{ color: "var(--primary-color)" }}>
                      <i className="fas fa-trophy me-2" style={{ color: "var(--accent-color)" }}></i>
                      {t("door2door-benefits")}
                    </h4>
                    <div className="row g-4">
                      <div className="col-md-6">
                        <div className="card h-100 border-0 shadow-sm" style={{ backgroundColor: "#f8f9fa", transition: "transform 0.3s" }}>
                          <div className="card-body text-center">
                            <div className="rounded-circle d-inline-flex align-items-center justify-content-center mb-3 mx-auto" style={{ width: "70px", height: "70px", background: "linear-gradient(135deg, var(--primary-color), var(--secondary-color))" }}>
                              <i className="fas fa-handshake fa-2x text-white"></i>
                            </div>
                            <h5 className="fw-bold mb-2" style={{ fontSize: "1rem" }}>{t("door2door-benefit1-title")}</h5>
                            <p className="text-muted small mb-0">{t("door2door-benefit1-desc")}</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="card h-100 border-0 shadow-sm" style={{ backgroundColor: "#f8f9fa", transition: "transform 0.3s" }}>
                          <div className="card-body text-center">
                            <div className="rounded-circle d-inline-flex align-items-center justify-content-center mb-3 mx-auto" style={{ width: "70px", height: "70px", background: "linear-gradient(135deg, #3b82f6, #8b5cf6)" }}>
                              <i className="fas fa-eye fa-2x text-white"></i>
                            </div>
                            <h5 className="fw-bold mb-2" style={{ fontSize: "1rem" }}>{t("door2door-benefit2-title")}</h5>
                            <p className="text-muted small mb-0">{t("door2door-benefit2-desc")}</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="card h-100 border-0 shadow-sm" style={{ backgroundColor: "#f8f9fa", transition: "transform 0.3s" }}>
                          <div className="card-body text-center">
                            <div className="rounded-circle d-inline-flex align-items-center justify-content-center mb-3 mx-auto" style={{ width: "70px", height: "70px", background: "linear-gradient(135deg, #10b981, #34d399)" }}>
                              <i className="fas fa-dollar-sign fa-2x text-white"></i>
                            </div>
                            <h5 className="fw-bold mb-2" style={{ fontSize: "1rem" }}>{t("door2door-benefit3-title")}</h5>
                            <p className="text-muted small mb-0">{t("door2door-benefit3-desc")}</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="card h-100 border-0 shadow-sm" style={{ backgroundColor: "#f8f9fa", transition: "transform 0.3s" }}>
                          <div className="card-body text-center">
                            <div className="rounded-circle d-inline-flex align-items-center justify-content-center mb-3 mx-auto" style={{ width: "70px", height: "70px", background: "linear-gradient(135deg, #8b5cf6, #a78bfa)" }}>
                              <i className="fas fa-globe fa-2x text-white"></i>
                            </div>
                            <h5 className="fw-bold mb-2" style={{ fontSize: "1rem" }}>{t("door2door-benefit4-title")}</h5>
                            <p className="text-muted small mb-0">{t("door2door-benefit4-desc")}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* DDP Explained - Improved 3x2 layout */}
                <div className="card border-0 shadow-sm">
                  <div className="card-body p-5">
                    <h4 className="mb-4 text-center" style={{ color: "var(--primary-color)" }}>
                      <i className="fas fa-info-circle me-2" style={{ color: "var(--accent-color)" }}></i>
                      {t("door2door-ddp-title")}
                    </h4>
                    <div className="row g-4">
                      <div className="col-md-6 col-lg-4">
                        <div className="card h-100 border-0 shadow-sm">
                          <div className="card-body text-center p-3">
                            <div className="mb-2">
                              <i className="fas fa-check-circle fa-2x text-success mb-2"></i>
                            </div>
                            <h6 className="fw-bold mb-1">{t("door2door-ddp1")}</h6>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6 col-lg-4">
                        <div className="card h-100 border-0 shadow-sm">
                          <div className="card-body text-center p-3">
                            <div className="mb-2">
                              <i className="fas fa-check-circle fa-2x text-success mb-2"></i>
                            </div>
                            <h6 className="fw-bold mb-1">{t("door2door-ddp2")}</h6>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6 col-lg-4">
                        <div className="card h-100 border-0 shadow-sm">
                          <div className="card-body text-center p-3">
                            <div className="mb-2">
                              <i className="fas fa-check-circle fa-2x text-success mb-2"></i>
                            </div>
                            <h6 className="fw-bold mb-1">{t("door2door-ddp3")}</h6>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6 col-lg-4">
                        <div className="card h-100 border-0 shadow-sm">
                          <div className="card-body text-center p-3">
                            <div className="mb-2">
                              <i className="fas fa-check-circle fa-2x text-success mb-2"></i>
                            </div>
                            <h6 className="fw-bold mb-1">{t("door2door-ddp4")}</h6>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6 col-lg-4">
                        <div className="card h-100 border-0 shadow-sm">
                          <div className="card-body text-center p-3">
                            <div className="mb-2">
                              <i className="fas fa-check-circle fa-2x text-success mb-2"></i>
                            </div>
                            <h6 className="fw-bold mb-1">{t("door2door-ddp5")}</h6>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6 col-lg-4">
                        <div className="card h-100 border-0 shadow-sm">
                          <div className="card-body text-center p-3">
                            <div className="mb-2">
                              <i className="fas fa-check-circle fa-2x text-success mb-2"></i>
                            </div>
                            <h6 className="fw-bold mb-1">{t("door2door-ddp6")}</h6>
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
                    <h5 className="fw-bold mb-4" style={{ color: "var(--primary-color)" }}>{t("services-page-sidebar-title")}</h5>
                    <ul className="list-unstyled">
                      <li className="mb-3">
                        <Link href="/services/air-freight" className="text-decoration-none text-muted">
                          <i className="fas fa-plane me-2"></i>{t("services-air-freight")}
                        </Link>
                      </li>
                      <li className="mb-3">
                        <Link href="/services/road-transport" className="text-decoration-none text-muted">
                          <i className="fas fa-truck me-2"></i>{t("services-road-transport")}
                        </Link>
                      </li>
                      <li className="mb-3">
                        <Link href="/services/customs-clearance" className="text-decoration-none text-muted">
                          <i className="fas fa-file-signature me-2"></i>{t("services-customs-clearance")}
                        </Link>
                      </li>
                      <li className="mb-3">
                        <Link href="/services/door-to-door" className="text-decoration-none fw-bold" style={{ color: "var(--primary-color)" }}>
                          <i className="fas fa-door-open me-2"></i>{t("services-door-to-door")}
                        </Link>
                      </li>
                      <li className="mb-3">
                        <Link href="/services/4pl-logistics" className="text-decoration-none text-muted">
                          <i className="fas fa-cogs me-2"></i>{t("services-4pl")}
                        </Link>
                      </li>
                      <li className="mb-4">
                        <Link href="/services/multimodal" className="text-decoration-none text-muted">
                          <i className="fas fa-random me-2"></i>{t("services-multimodal")}
                        </Link>
                      </li>
                    </ul>
                    <hr />
                    <div className="text-center">
                      <h5 className="fw-bold mb-3">{t("services-page-get-started")}</h5>
                      <p className="text-muted small mb-3">{t("services-page-get-started-desc")}</p>
                      <Link href="/" className="btn btn-outline-primary w-100 mb-2">
                        <i className="fas fa-home me-2"></i>{t("services-page-back-home")}
                      </Link>
                      <a href="/#contact" className="btn btn-primary w-100">{t("services-page-contact")}</a>
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
