"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function MultimodalPage() {
  const { t } = useLanguage();

  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section
          className="py-5 position-relative"
          style={{
            backgroundImage: "url('/img/logistics-container.jpg')",
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
                <h1 className="display-4 fw-bold mb-3" style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.5)" }}>{t("multimodal-hero-title")}</h1>
                <p className="lead mb-0" style={{ textShadow: "1px 1px 3px rgba(0,0,0,0.5)" }}>{t("multimodal-hero-subtitle")}</p>
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
                  <h2 className="fw-bold mb-3" style={{ color: "var(--primary-color)", fontSize: "2rem" }}>{t("multimodal-title")}</h2>
                  <p className="text-muted lead" style={{ maxWidth: "700px", margin: "0 auto" }}>{t("multimodal-subtitle")}</p>
                </div>

                {/* What We Offer - Improved centered layout */}
                <div className="card border-0 shadow-sm mb-5">
                  <div className="card-body p-5">
                    <h4 className="mb-4 text-center" style={{ color: "var(--primary-color)" }}>
                      <i className="fas fa-star me-2" style={{ color: "var(--accent-color)" }}></i>
                      {t("multimodal-services-include")}
                    </h4>
                    <div className="row g-4">
                      <div className="col-md-4">
                        <div className="text-center p-4 rounded-3 h-100" style={{ background: "linear-gradient(135deg, rgba(37, 99, 235, 0.05), rgba(37, 99, 235, 0.02))" }}>
                          <div className="rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{ width: "70px", height: "70px", background: "linear-gradient(135deg, var(--primary-color), var(--secondary-color))" }}>
                            <i className="fas fa-tasks fa-2x text-white"></i>
                          </div>
                          <h5 className="fw-bold mb-2" style={{ fontSize: "1rem" }}>{t("multimodal-service1-title")}</h5>
                          <p className="text-muted small mb-0">{t("multimodal-service1-desc")}</p>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="text-center p-4 rounded-3 h-100" style={{ background: "linear-gradient(135deg, rgba(249, 115, 22, 0.05), rgba(249, 115, 22, 0.02))" }}>
                          <div className="rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{ width: "70px", height: "70px", background: "linear-gradient(135deg, #f97316, #fb923c)" }}>
                            <i className="fas fa-boxes fa-2x text-white"></i>
                          </div>
                          <h5 className="fw-bold mb-2" style={{ fontSize: "1rem" }}>{t("multimodal-service2-title")}</h5>
                          <p className="text-muted small mb-0">{t("multimodal-service2-desc")}</p>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="text-center p-4 rounded-3 h-100" style={{ background: "linear-gradient(135deg, rgba(16, 185, 129, 0.05), rgba(16, 185, 129, 0.02))" }}>
                          <div className="rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{ width: "70px", height: "70px", background: "linear-gradient(135deg, #10b981, #34d399)" }}>
                            <i className="fas fa-satellite-dish fa-2x text-white"></i>
                          </div>
                          <h5 className="fw-bold mb-2" style={{ fontSize: "1rem" }}>{t("multimodal-service3-title")}</h5>
                          <p className="text-muted small mb-0">{t("multimodal-service3-desc")}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Transport Modes - Improved centered layout */}
                <div className="card border-0 shadow-sm mb-5">
                  <div className="card-body p-5">
                    <h4 className="mb-4 text-center" style={{ color: "var(--primary-color)" }}>
                      <i className="fas fa-random me-2" style={{ color: "var(--accent-color)" }}></i>
                      {t("multimodal-modes")}
                    </h4>
                    <div className="row g-4">
                      <div className="col-md-4">
                        <div className="card h-100 border-0 shadow-sm" style={{ backgroundColor: "#f8f9fa", transition: "transform 0.3s" }}>
                          <div className="card-body text-center">
                            <div className="rounded-circle d-inline-flex align-items-center justify-content-center mb-3 mx-auto" style={{ width: "70px", height: "70px", background: "linear-gradient(135deg, var(--primary-color), var(--secondary-color))" }}>
                              <i className="fas fa-train fa-2x text-white"></i>
                            </div>
                            <h5 className="fw-bold mb-2" style={{ fontSize: "1rem" }}>{t("multimodal-mode1-title")}</h5>
                            <p className="text-muted small mb-0">{t("multimodal-mode1-desc")}</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="card h-100 border-0 shadow-sm" style={{ backgroundColor: "#f8f9fa", transition: "transform 0.3s" }}>
                          <div className="card-body text-center">
                            <div className="rounded-circle d-inline-flex align-items-center justify-content-center mb-3 mx-auto" style={{ width: "70px", height: "70px", background: "linear-gradient(135deg, #3b82f6, #8b5cf6)" }}>
                              <i className="fas fa-truck fa-2x text-white"></i>
                            </div>
                            <h5 className="fw-bold mb-2" style={{ fontSize: "1rem" }}>{t("multimodal-mode2-title")}</h5>
                            <p className="text-muted small mb-0">{t("multimodal-mode2-desc")}</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="card h-100 border-0 shadow-sm" style={{ backgroundColor: "#f8f9fa", transition: "transform 0.3s" }}>
                          <div className="card-body text-center">
                            <div className="rounded-circle d-inline-flex align-items-center justify-content-center mb-3 mx-auto" style={{ width: "70px", height: "70px", background: "linear-gradient(135deg, #10b981, #34d399)" }}>
                              <i className="fas fa-ship fa-2x text-white"></i>
                            </div>
                            <h5 className="fw-bold mb-2" style={{ fontSize: "1rem" }}>{t("multimodal-mode3-title")}</h5>
                            <p className="text-muted small mb-0">{t("multimodal-mode3-desc")}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Advantages - Improved 2x2 layout */}
                <div className="card border-0 shadow-sm mb-5">
                  <div className="card-body p-5">
                    <h4 className="mb-4 text-center" style={{ color: "var(--primary-color)" }}>
                      <i className="fas fa-trophy me-2" style={{ color: "var(--accent-color)" }}></i>
                      {t("multimodal-advantages")}
                    </h4>
                    <div className="row g-4">
                      <div className="col-md-6">
                        <div className="card h-100 border-0 shadow-sm" style={{ backgroundColor: "#f8f9fa", transition: "transform 0.3s" }}>
                          <div className="card-body text-center">
                            <div className="mb-3" style={{ fontSize: "3rem" }}>💰</div>
                            <h5 className="fw-bold mb-2" style={{ fontSize: "1rem" }}>{t("multimodal-adv1-title")}</h5>
                            <p className="text-muted small mb-0">{t("multimodal-adv1-desc")}</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="card h-100 border-0 shadow-sm" style={{ backgroundColor: "#f8f9fa", transition: "transform 0.3s" }}>
                          <div className="card-body text-center">
                            <div className="mb-3" style={{ fontSize: "3rem" }}>🔀</div>
                            <h5 className="fw-bold mb-2" style={{ fontSize: "1rem" }}>{t("multimodal-adv2-title")}</h5>
                            <p className="text-muted small mb-0">{t("multimodal-adv2-desc")}</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="card h-100 border-0 shadow-sm" style={{ backgroundColor: "#f8f9fa", transition: "transform 0.3s" }}>
                          <div className="card-body text-center">
                            <div className="mb-3" style={{ fontSize: "3rem" }}>📦</div>
                            <h5 className="fw-bold mb-2" style={{ fontSize: "1rem" }}>{t("multimodal-adv3-title")}</h5>
                            <p className="text-muted small mb-0">{t("multimodal-adv3-desc")}</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="card h-100 border-0 shadow-sm" style={{ backgroundColor: "#f8f9fa", transition: "transform 0.3s" }}>
                          <div className="card-body text-center">
                            <div className="mb-3" style={{ fontSize: "3rem" }}>🌍</div>
                            <h5 className="fw-bold mb-2" style={{ fontSize: "1rem" }}>{t("multimodal-adv4-title")}</h5>
                            <p className="text-muted small mb-0">{t("multimodal-adv4-desc")}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Typical Routes - Improved 3x2 layout */}
                <div className="card border-0 shadow-sm">
                  <div className="card-body p-5">
                    <h4 className="mb-4 text-center" style={{ color: "var(--primary-color)" }}>
                      <i className="fas fa-map-marked-alt me-2" style={{ color: "var(--accent-color)" }}></i>
                      {t("multimodal-routes")}
                    </h4>
                    <div className="row g-4">
                      <div className="col-md-6 col-lg-4">
                        <div className="card h-100 border-0 shadow-sm">
                          <div className="card-body text-center p-3">
                            <div className="mb-2">
                              <i className="fas fa-arrow-right fa-2x mb-2" style={{ color: "var(--primary-color)" }}></i>
                            </div>
                            <h6 className="fw-bold mb-1">{t("multimodal-route1")}</h6>
                            <div className="small text-muted">{t("multimodal-route1-mode")}</div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6 col-lg-4">
                        <div className="card h-100 border-0 shadow-sm">
                          <div className="card-body text-center p-3">
                            <div className="mb-2">
                              <i className="fas fa-arrow-right fa-2x mb-2" style={{ color: "var(--primary-color)" }}></i>
                            </div>
                            <h6 className="fw-bold mb-1">{t("multimodal-route2")}</h6>
                            <div className="small text-muted">{t("multimodal-route2-mode")}</div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6 col-lg-4">
                        <div className="card h-100 border-0 shadow-sm">
                          <div className="card-body text-center p-3">
                            <div className="mb-2">
                              <i className="fas fa-arrow-right fa-2x mb-2" style={{ color: "var(--primary-color)" }}></i>
                            </div>
                            <h6 className="fw-bold mb-1">{t("multimodal-route3")}</h6>
                            <div className="small text-muted">{t("multimodal-route3-mode")}</div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6 col-lg-4">
                        <div className="card h-100 border-0 shadow-sm">
                          <div className="card-body text-center p-3">
                            <div className="mb-2">
                              <i className="fas fa-arrow-right fa-2x mb-2" style={{ color: "var(--primary-color)" }}></i>
                            </div>
                            <h6 className="fw-bold mb-1">{t("multimodal-route4")}</h6>
                            <div className="small text-muted">{t("multimodal-route4-mode")}</div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6 col-lg-4">
                        <div className="card h-100 border-0 shadow-sm">
                          <div className="card-body text-center p-3">
                            <div className="mb-2">
                              <i className="fas fa-arrow-right fa-2x mb-2" style={{ color: "var(--primary-color)" }}></i>
                            </div>
                            <h6 className="fw-bold mb-1">{t("multimodal-route5")}</h6>
                            <div className="small text-muted">{t("multimodal-route5-mode")}</div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6 col-lg-4">
                        <div className="card h-100 border-0 shadow-sm">
                          <div className="card-body text-center p-3">
                            <div className="mb-2">
                              <i className="fas fa-arrow-right fa-2x mb-2" style={{ color: "var(--primary-color)" }}></i>
                            </div>
                            <h6 className="fw-bold mb-1">{t("multimodal-route6")}</h6>
                            <div className="small text-muted">{t("multimodal-route6-mode")}</div>
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
                        <Link href="/services/door-to-door" className="text-decoration-none text-muted">
                          <i className="fas fa-door-open me-2"></i>{t("services-door-to-door")}
                        </Link>
                      </li>
                      <li className="mb-3">
                        <Link href="/services/4pl-logistics" className="text-decoration-none text-muted">
                          <i className="fas fa-cogs me-2"></i>{t("services-4pl")}
                        </Link>
                      </li>
                      <li className="mb-4">
                        <Link href="/services/multimodal" className="text-decoration-none fw-bold" style={{ color: "var(--primary-color)" }}>
                          <i className="fas fa-random me-2"></i>{t("services-multimodal")}
                        </Link>
                      </li>
                    </ul>
                    <hr />
                    <div className="text-center">
                      <h5 className="fw-bold mb-3">{t("services-page-plan")}</h5>
                      <p className="text-muted small mb-3">{t("services-page-plan-desc")}</p>
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
