"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function RoadTransportPage() {
  const { t, language } = useLanguage();

  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section
          className="py-5 position-relative"
          style={{
            backgroundImage: "url('/img/logikent/road-transport.jpg')",
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
                <h1 className="display-4 fw-bold mb-3" style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.5)" }}>{t("road-transport-hero-title")}</h1>
                <p className="lead mb-0" style={{ textShadow: "1px 1px 3px rgba(0,0,0,0.5)" }}>{t("road-transport-hero-subtitle")}</p>
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
                  <h2 className="fw-bold mb-3" style={{ color: "var(--primary-color)", fontSize: "2rem" }}>{t("road-transport-title")}</h2>
                  <p className="text-muted lead" style={{ maxWidth: "700px", margin: "0 auto" }}>{t("road-transport-subtitle")}</p>
                </div>

                {/* What We Offer - Simple layout */}
                <div className="card border-0 shadow-sm mb-5">
                  <div className="card-body p-5">
                    <h4 className="mb-4 text-center" style={{ color: "var(--primary-color)" }}>
                      {t("road-transport-what-offer")}
                    </h4>
                    <div className="row g-4">
                      <div className="col-md-4">
                        <div className="card h-100 border-0 shadow-sm" style={{ backgroundColor: "#f8f9fa" }}>
                          <div className="card-body text-center">
                            <div className="mb-3" style={{ fontSize: "2.5rem" }}>🚛</div>
                            <h5 className="fw-bold mb-2" style={{ fontSize: "1rem" }}>{t("road-transport-offer1-title")}</h5>
                            <p className="text-muted small mb-0">{t("road-transport-offer1-desc")}</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="card h-100 border-0 shadow-sm" style={{ backgroundColor: "#f8f9fa" }}>
                          <div className="card-body text-center">
                            <div className="mb-3" style={{ fontSize: "2.5rem" }}>🏭</div>
                            <h5 className="fw-bold mb-2" style={{ fontSize: "1rem" }}>{t("road-transport-offer2-title")}</h5>
                            <p className="text-muted small mb-0">{t("road-transport-offer2-desc")}</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="card h-100 border-0 shadow-sm" style={{ backgroundColor: "#f8f9fa" }}>
                          <div className="card-body text-center">
                            <div className="mb-3" style={{ fontSize: "2.5rem" }}>⚠️</div>
                            <h5 className="fw-bold mb-2" style={{ fontSize: "1rem" }}>{t("road-transport-offer4-title")}</h5>
                            <p className="text-muted small mb-0">{t("road-transport-offer4-desc")}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Vehicle Types */}
                <div className="card border-0 shadow-sm mb-5">
                  <div className="card-body p-5">
                    <h4 className="mb-4 text-center" style={{ color: "var(--primary-color)" }}>
                      {t("road-transport-vehicle-types")}
                    </h4>
                    <div className="row g-4">
                      <div className="col-md-6">
                        <div className="card h-100 border-0 shadow-sm" style={{ backgroundColor: "#f8f9fa" }}>
                          <div className="card-body text-center">
                            <div className="mb-3" style={{ fontSize: "2.5rem" }}>🚚</div>
                            <h5 className="fw-bold mb-2">{t("road-transport-vehicle1-title")}</h5>
                            <p className="text-muted small mb-0">{t("road-transport-vehicle1-desc")}</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="card h-100 border-0 shadow-sm" style={{ backgroundColor: "#f8f9fa" }}>
                          <div className="card-body text-center">
                            <div className="mb-3" style={{ fontSize: "2.5rem" }}>❄️</div>
                            <h5 className="fw-bold mb-2">{t("road-transport-vehicle2-title")}</h5>
                            <p className="text-muted small mb-0">{t("road-transport-vehicle2-desc")}</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="card h-100 border-0 shadow-sm" style={{ backgroundColor: "#f8f9fa" }}>
                          <div className="card-body text-center">
                            <div className="mb-3" style={{ fontSize: "2.5rem" }}>🚛</div>
                            <h5 className="fw-bold mb-2">{t("road-transport-vehicle3-title")}</h5>
                            <p className="text-muted small mb-0">{t("road-transport-vehicle3-desc")}</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="card h-100 border-0 shadow-sm" style={{ backgroundColor: "#f8f9fa" }}>
                          <div className="card-body text-center">
                            <div className="mb-3" style={{ fontSize: "2.5rem" }}>⚠️</div>
                            <h5 className="fw-bold mb-2">{t("road-transport-vehicle4-title")}</h5>
                            <p className="text-muted small mb-0">{t("road-transport-vehicle4-desc")}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Why Choose Us */}
                <div className="card border-0 shadow-sm">
                  <div className="card-body p-5">
                    <h4 className="mb-4 text-center" style={{ color: "var(--primary-color)" }}>
                      {t("road-transport-why-choose")}
                    </h4>
                    <div className="row g-4">
                      <div className="col-md-6">
                        <div className="card h-100 border-0 shadow-sm" style={{ backgroundColor: "#f8f9fa" }}>
                          <div className="card-body text-center">
                            <div className="mb-3" style={{ fontSize: "2.5rem" }}>🗺️</div>
                            <h5 className="fw-bold mb-2">{t("road-transport-benefit1-title")}</h5>
                            <p className="text-muted small mb-0">{t("road-transport-benefit1-desc")}</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="card h-100 border-0 shadow-sm" style={{ backgroundColor: "#f8f9fa" }}>
                          <div className="card-body text-center">
                            <div className="mb-3" style={{ fontSize: "2.5rem" }}>🔧</div>
                            <h5 className="fw-bold mb-2">{t("road-transport-benefit2-title")}</h5>
                            <p className="text-muted small mb-0">{t("road-transport-benefit2-desc")}</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="card h-100 border-0 shadow-sm" style={{ backgroundColor: "#f8f9fa" }}>
                          <div className="card-body text-center">
                            <div className="mb-3" style={{ fontSize: "2.5rem" }}>🛡️</div>
                            <h5 className="fw-bold mb-2">{t("road-transport-benefit3-title")}</h5>
                            <p className="text-muted small mb-0">{t("road-transport-benefit3-desc")}</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="card h-100 border-0 shadow-sm" style={{ backgroundColor: "#f8f9fa" }}>
                          <div className="card-body text-center">
                            <div className="mb-3" style={{ fontSize: "2.5rem" }}>🎧</div>
                            <h5 className="fw-bold mb-2">{t("road-transport-benefit4-title")}</h5>
                            <p className="text-muted small mb-0">{t("road-transport-benefit4-desc")}</p>
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
                        <Link href="/services/road-transport" className="text-decoration-none fw-bold" style={{ color: "var(--primary-color)" }}>
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
                        <Link href="/services/multimodal" className="text-decoration-none text-muted">
                          <i className="fas fa-random me-2"></i>{t("services-multimodal")}
                        </Link>
                      </li>
                    </ul>
                    <hr />
                    <div className="text-center">
                      <h5 className="fw-bold mb-3">{t("services-page-need-quote")}</h5>
                      <p className="text-muted small mb-3">{t("services-page-need-quote-desc")}</p>
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
