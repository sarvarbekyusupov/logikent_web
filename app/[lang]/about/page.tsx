"use client";

import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";

export default function AboutPage() {
  const { t } = useLanguage();
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section
          className="py-5 position-relative"
          style={{
            backgroundImage: "url('/img/logistics-warehouse.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            minHeight: "350px"
          }}
        >
          <div style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "linear-gradient(135deg, rgba(37, 99, 235, 0.85), rgba(29, 78, 216, 0.75))"
          }}></div>
          <div className="container position-relative" style={{ maxWidth: "1200px" }}>
            <div className="row align-items-center" style={{ minHeight: "350px" }}>
              <div className="col-lg-8 text-white">
                <h1 className="display-3 fw-bold mb-3" style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.3)" }}>{t("about-page-hero-title")}</h1>
                <p className="lead mb-0" style={{ textShadow: "1px 1px 3px rgba(0,0,0,0.3)" }}>{t("about-page-hero-subtitle")}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Back Button */}
        <div className="container" style={{ maxWidth: "1200px" }}>
          <div className="row mt-4">
            <div className="col-12">
              <Link href="/" className="btn btn-outline-light">
                <i className="fas fa-arrow-left me-2"></i>
                {t("about-page-back-button")}
              </Link>
            </div>
          </div>
        </div>

        {/* Our Story */}
        <section className="py-5">
          <div className="container" style={{ maxWidth: "1200px" }}>
            <div className="row mb-4">
              <div className="col-12 text-center">
                <div className="d-inline-flex align-items-center gap-2 mb-3 px-4 py-2 rounded-pill" style={{
                  background: "linear-gradient(135deg, rgba(37, 99, 235, 0.1), rgba(37, 99, 235, 0.05))",
                  border: "1px solid rgba(37, 99, 235, 0.2)"
                }}>
                  <i className="fas fa-book-open" style={{ color: "var(--primary-color)", fontSize: "14px" }}></i>
                  <span style={{ fontSize: "13px", fontWeight: 700, color: "var(--primary-color)", letterSpacing: "1px" }}>
                    {t("about-page-story-badge")}
                  </span>
                </div>
                <h2 className="fw-bold" style={{ fontSize: "42px", color: "#1a202c", letterSpacing: "-0.5px" }}>
                  {t("about-page-story-title")}
                </h2>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-12">
                <div className="card border-0 shadow-lg" style={{ borderRadius: "24px", overflow: "hidden" }}>
                  <div className="card-body p-5" style={{ background: "linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)" }}>
                    <div className="row align-items-center">
                      <div className="col-md-2 text-center mb-4 mb-md-0">
                        <img
                          src="/img/logikent/logo1.png"
                          alt="Logikent Logo"
                          style={{
                            width: "100px",
                            height: "100px",
                            objectFit: "contain"
                          }}
                        />
                      </div>
                      <div className="col-md-10">
                        <p
                          className="lead mb-4"
                          style={{ fontSize: "1.25rem", lineHeight: "1.8", color: "#1e293b", fontWeight: "400" }}
                          dangerouslySetInnerHTML={{ __html: t("about-page-company-description") }}
                        />
                      </div>
                    </div>

                    <hr className="my-4" style={{ opacity: "0.1" }} />

                    <div className="row g-4">
                      <div className="col-md-6">
                        <div className="d-flex align-items-start gap-3 p-4 rounded-3" style={{ background: "white", border: "1px solid rgba(37, 99, 235, 0.1)" }}>
                          <div
                            className="rounded-circle d-flex align-items-center justify-content-center shrink-0"
                            style={{ width: "50px", height: "50px", background: "rgba(37, 99, 235, 0.1)" }}
                          >
                            <i className="fas fa-lightbulb" style={{ color: "var(--primary-color)", fontSize: "18px" }}></i>
                          </div>
                          <div>
                            <h5 className="fw-bold mb-3" style={{ color: "#0f172f", fontSize: "1.15rem" }}>{t("about-page-philosophy-title")}</h5>
                            <p className="mb-0" style={{ fontSize: "1.05rem", color: "#334155", lineHeight: "1.7" }}>
                              {t("about-page-philosophy-text")}
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="col-md-6">
                        <div className="d-flex align-items-start gap-3 p-4 rounded-3" style={{ background: "white", border: "1px solid rgba(37, 99, 235, 0.1)" }}>
                          <div
                            className="rounded-circle d-flex align-items-center justify-content-center shrink-0"
                            style={{ width: "50px", height: "50px", background: "rgba(37, 99, 235, 0.1)" }}
                          >
                            <i className="fas fa-heart" style={{ color: "var(--primary-color)", fontSize: "18px" }}></i>
                          </div>
                          <div>
                            <h5 className="fw-bold mb-3" style={{ color: "#0f172f", fontSize: "1.15rem" }}>{t("about-page-approach-title")}</h5>
                            <p className="mb-0" style={{ fontSize: "1.05rem", color: "#334155", lineHeight: "1.7" }}>
                              {t("about-page-approach-text")}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="row mt-4">
                      <div className="col-12">
                        <div className="d-flex align-items-start gap-3 p-4 rounded-3" style={{ background: "linear-gradient(135deg, rgba(37, 99, 235, 0.05), rgba(37, 99, 235, 0.02))", border: "1px solid rgba(37, 99, 235, 0.15)" }}>
                          <div
                            className="rounded-circle d-flex align-items-center justify-content-center shrink-0"
                            style={{ width: "50px", height: "50px", background: "linear-gradient(135deg, var(--primary-color), var(--secondary-color))" }}
                          >
                            <i className="fas fa-rocket text-white" style={{ fontSize: "18px" }}></i>
                          </div>
                          <div className="grow">
                            <h5 className="fw-bold mb-3" style={{ color: "#0f172f", fontSize: "1.15rem" }}>{t("about-page-commitment-title")}</h5>
                            <p className="mb-0" style={{ fontSize: "1.05rem", color: "#334155", lineHeight: "1.7" }}>
                              {t("about-page-commitment-text")}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-5 bg-light">
          <div className="container" style={{ maxWidth: "1200px" }}>
            <h2 className="text-center mb-5" style={{ color: "var(--primary-color)" }}>{t("about-page-values-title")}</h2>
            <div className="row g-4">
              <div className="col-md-6 col-lg-3">
                <div className="card border-0 shadow-sm h-100 text-center hover-card">
                  <div className="card-body p-4">
                    <div className="rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{ width: "80px", height: "80px", backgroundColor: "#28a74520" }}>
                      <i className="fas fa-check-circle fa-2x" style={{ color: "#28a745" }}></i>
                    </div>
                    <h5 className="fw-bold mb-3" style={{ fontSize: "1.1rem", color: "#0f172f" }}>{t("about-page-value1-name")}</h5>
                    <p className="mb-0" style={{ fontSize: "1rem", color: "#334155", lineHeight: "1.6" }}>{t("about-page-value1-text")}</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-3">
                <div className="card border-0 shadow-sm h-100 text-center hover-card">
                  <div className="card-body p-4">
                    <div className="rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{ width: "80px", height: "80px", backgroundColor: "#007bff20" }}>
                      <i className="fas fa-users fa-2x" style={{ color: "#007bff" }}></i>
                    </div>
                    <h5 className="fw-bold mb-3" style={{ fontSize: "1.1rem", color: "#0f172f" }}>{t("about-page-value2-name")}</h5>
                    <p className="mb-0" style={{ fontSize: "1rem", color: "#334155", lineHeight: "1.6" }}>{t("about-page-value2-text")}</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-3">
                <div className="card border-0 shadow-sm h-100 text-center hover-card">
                  <div className="card-body p-4">
                    <div className="rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{ width: "80px", height: "80px", backgroundColor: "#fd7e1420" }}>
                      <i className="fas fa-route fa-2x" style={{ color: "#fd7e14" }}></i>
                    </div>
                    <h5 className="fw-bold mb-3" style={{ fontSize: "1.1rem", color: "#0f172f" }}>{t("about-page-value3-name")}</h5>
                    <p className="mb-0" style={{ fontSize: "1rem", color: "#334155", lineHeight: "1.6" }}>{t("about-page-value3-text")}</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-3">
                <div className="card border-0 shadow-sm h-100 text-center hover-card">
                  <div className="card-body p-4">
                    <div className="rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{ width: "80px", height: "80px", backgroundColor: "#ffc10720" }}>
                      <i className="fas fa-bolt fa-2x" style={{ color: "#ffc107" }}></i>
                    </div>
                    <h5 className="fw-bold mb-3" style={{ fontSize: "1.1rem", color: "#0f172f" }}>{t("about-page-value4-name")}</h5>
                    <p className="mb-0" style={{ fontSize: "1rem", color: "#334155", lineHeight: "1.6" }}>{t("about-page-value4-text")}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission, Vision, Values */}
        <section className="py-5">
          <div className="container" style={{ maxWidth: "1200px" }}>
            <h2 className="text-center mb-5" style={{ color: "var(--primary-color)" }}>{t("about-page-mission-title")}</h2>
            <div className="row g-4">
              <div className="col-md-4">
                <div className="card border-0 shadow-sm h-100 text-center hover-card">
                  <div className="card-body p-5">
                    <div className="mb-4">
                      <i className="fas fa-lightbulb fa-3x" style={{ color: "var(--primary-color)" }}></i>
                    </div>
                    <h4 className="fw-bold mb-3" style={{ color: "#0f172f" }}>{t("about-page-mission-card-title")}</h4>
                    <p className="mb-0" style={{ fontSize: "1.05rem", color: "#334155", lineHeight: "1.7" }}>{t("about-page-mission-card-text")}</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card border-0 shadow-sm h-100 text-center hover-card">
                  <div className="card-body p-5">
                    <div className="mb-4">
                      <i className="fas fa-hand-holding-heart fa-3x" style={{ color: "var(--primary-color)" }}></i>
                    </div>
                    <h4 className="fw-bold mb-3" style={{ color: "#0f172f" }}>{t("about-page-vision-card-title")}</h4>
                    <p className="mb-0" style={{ fontSize: "1.05rem", color: "#334155", lineHeight: "1.7" }}>{t("about-page-vision-card-text")}</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card border-0 shadow-sm h-100 text-center hover-card">
                  <div className="card-body p-5">
                    <div className="mb-4">
                      <i className="fas fa-gem fa-3x" style={{ color: "var(--primary-color)" }}></i>
                    </div>
                    <h4 className="fw-bold mb-3" style={{ color: "#0f172f" }}>{t("about-page-corevalues-card-title")}</h4>
                    <p className="mb-0" style={{ fontSize: "1.05rem", color: "#334155", lineHeight: "1.7" }}>{t("about-page-corevalues-card-text")}</p>
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
                    <h3 className="fw-bold mb-3">{t("about-page-goal-title")}</h3>
                    <p className="mb-0" style={{ fontSize: "1.2rem", maxWidth: "800px", marginInline: "auto" }}>
                      {t("about-page-goal-text")}
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
                <p className="fst-italic mb-4" style={{ fontSize: "1.4rem", lineHeight: "1.7", color: "#1e293b", fontWeight: "500" }}>
                  "{t("about-page-quote-text")}"
                </p>
                <p className="fw-bold mb-4" style={{ color: "var(--primary-color)", fontSize: "1.15rem" }}>
                  {t("about-page-quote-subtitle")}
                </p>
                <p className="mb-4" style={{ fontSize: "1.05rem", color: "#334155" }}>{t("about-page-quote-tagline")}</p>
                <Link href="#contact" className="btn btn-primary btn-lg px-5" style={{ borderRadius: "50px" }}>
                  {t("about-page-cta-button")}
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
