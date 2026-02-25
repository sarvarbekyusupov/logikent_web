"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function FourPLPage() {
  const { t, language } = useLanguage();

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
                <h1 className="display-4 fw-bold mb-3" style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.5)" }}>{t("4pl-hero-title")}</h1>
                <p className="lead mb-0" style={{ textShadow: "1px 1px 3px rgba(0,0,0,0.5)" }}>{t("4pl-hero-subtitle")}</p>
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
                  <h2 className="fw-bold mb-3" style={{ color: "var(--primary-color)", fontSize: "2rem" }}>{t("4pl-title")}</h2>
                  <p className="text-muted lead" style={{ maxWidth: "700px", margin: "0 auto" }}>{t("4pl-subtitle")}</p>
                </div>

                {/* What We Offer */}
                <div className="card border-0 shadow-sm mb-5">
                  <div className="card-body p-5">
                    <h4 className="mb-4 text-center" style={{ color: "var(--primary-color)" }}>
                      {t("4pl-what-offer")}
                    </h4>
                    <div className="row g-4">
                      <div className="col-md-4">
                        <div className="card h-100 border-0 shadow-sm" style={{ backgroundColor: "#f8f9fa" }}>
                          <div className="card-body text-center">
                            <div className="mb-3" style={{ fontSize: "2.5rem" }}>👤</div>
                            <h5 className="fw-bold mb-2">{t("4pl-offer1-title")}</h5>
                            <p className="text-muted small mb-0">{t("4pl-offer1-desc")}</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="card h-100 border-0 shadow-sm" style={{ backgroundColor: "#f8f9fa" }}>
                          <div className="card-body text-center">
                            <div className="mb-3" style={{ fontSize: "2.5rem" }}>🔀</div>
                            <h5 className="fw-bold mb-2">{t("4pl-offer2-title")}</h5>
                            <p className="text-muted small mb-0">{t("4pl-offer2-desc")}</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="card h-100 border-0 shadow-sm" style={{ backgroundColor: "#f8f9fa" }}>
                          <div className="card-body text-center">
                            <div className="mb-3" style={{ fontSize: "2.5rem" }}>🤝</div>
                            <h5 className="fw-bold mb-2">{t("4pl-offer3-title")}</h5>
                            <p className="text-muted small mb-0">{t("4pl-offer3-desc")}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Key Capabilities */}
                <div className="card border-0 shadow-sm mb-5">
                  <div className="card-body p-5">
                    <h4 className="mb-4 text-center" style={{ color: "var(--primary-color)" }}>
                      {t("4pl-capabilities")}
                    </h4>
                    <div className="row g-4">
                      <div className="col-md-6">
                        <div className="card h-100 border-0 shadow-sm" style={{ backgroundColor: "#f8f9fa" }}>
                          <div className="card-body text-center">
                            <div className="mb-3" style={{ fontSize: "2.5rem" }}>📊</div>
                            <h5 className="fw-bold mb-2">{t("4pl-cap1-title")}</h5>
                            <p className="text-muted small mb-0">{t("4pl-cap1-desc")}</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="card h-100 border-0 shadow-sm" style={{ backgroundColor: "#f8f9fa" }}>
                          <div className="card-body text-center">
                            <div className="mb-3" style={{ fontSize: "2.5rem" }}>🌍</div>
                            <h5 className="fw-bold mb-2">{t("4pl-cap2-title")}</h5>
                            <p className="text-muted small mb-0">{t("4pl-cap2-desc")}</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="card h-100 border-0 shadow-sm" style={{ backgroundColor: "#f8f9fa" }}>
                          <div className="card-body text-center">
                            <div className="mb-3" style={{ fontSize: "2.5rem" }}>🛡️</div>
                            <h5 className="fw-bold mb-2">{t("4pl-cap3-title")}</h5>
                            <p className="text-muted small mb-0">{t("4pl-cap3-desc")}</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="card h-100 border-0 shadow-sm" style={{ backgroundColor: "#f8f9fa" }}>
                          <div className="card-body text-center">
                            <div className="mb-3" style={{ fontSize: "2.5rem" }}>📄</div>
                            <h5 className="fw-bold mb-2">{t("4pl-cap4-title")}</h5>
                            <p className="text-muted small mb-0">{t("4pl-cap4-desc")}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 4PL vs 3PL - Improved layout */}
                <div className="card border-0 shadow-sm">
                  <div className="card-body p-5">
                    <h4 className="mb-4 text-center" style={{ color: "var(--primary-color)" }}>
                      <i className="fas fa-balance-scale me-2" style={{ color: "var(--accent-color)" }}></i>
                      {t("4pl-comparison")}
                    </h4>
                    <div className="row g-4">
                      <div className="col-md-6">
                        <div className="card h-100 border-0 shadow-sm" style={{ backgroundColor: "#f8f9fa" }}>
                          <div className="card-body">
                            <h5 className="fw-bold mb-3 text-center" style={{ color: "var(--primary-color)" }}>{t("4pl-3pl-title")}</h5>
                            <ul className="list-unstyled small">
                              <li className="mb-2"><i className="fas fa-arrow-right me-2 text-muted"></i>{t("4pl-3pl1")}</li>
                              <li className="mb-2"><i className="fas fa-arrow-right me-2 text-muted"></i>{t("4pl-3pl2")}</li>
                              <li className="mb-2"><i className="fas fa-arrow-right me-2 text-muted"></i>{t("4pl-3pl3")}</li>
                              <li className="mb-0"><i className="fas fa-arrow-right me-2 text-muted"></i>{t("4pl-3pl4")}</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="card h-100 border-0 shadow-sm" style={{ backgroundColor: "rgba(40, 167, 69, 0.1)" }}>
                          <div className="card-body">
                            <h5 className="fw-bold mb-3 text-center" style={{ color: "var(--secondary-color)" }}>{t("4pl-4pl-title")}</h5>
                            <ul className="list-unstyled small">
                              <li className="mb-2"><i className="fas fa-check-circle me-2 text-success"></i>{t("4pl-4pl1")}</li>
                              <li className="mb-2"><i className="fas fa-check-circle me-2 text-success"></i>{t("4pl-4pl2")}</li>
                              <li className="mb-2"><i className="fas fa-check-circle me-2 text-success"></i>{t("4pl-4pl3")}</li>
                              <li className="mb-0"><i className="fas fa-check-circle me-2 text-success"></i>{t("4pl-4pl4")}</li>
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
                        <Link href="/services/4pl-logistics" className="text-decoration-none fw-bold" style={{ color: "var(--primary-color)" }}>
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
                      <h5 className="fw-bold mb-3">{t("services-page-optimize")}</h5>
                      <p className="text-muted small mb-3">{t("services-page-optimize-desc")}</p>
                      <Link href="/" className="btn btn-outline-primary w-100 mb-2">
                        <i className="fas fa-home me-2"></i>{t("services-page-back-home")}
                      </Link>
                      <a href={`/${language}#contact`} className="btn btn-primary w-100">{t("services-page-contact")}</a>
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
