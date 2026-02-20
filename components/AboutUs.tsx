"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import Link from "next/link";

export default function AboutUs() {
  const { t } = useLanguage();

  const values = [
    { icon: "fa-check-circle", color: "#28a745", title: t("aboutus-card1-title"), text: t("aboutus-card1-text") },
    { icon: "fa-users", color: "#007bff", title: t("aboutus-card2-title"), text: t("aboutus-card2-text") },
    { icon: "fa-route", color: "#fd7e14", title: t("aboutus-card3-title"), text: t("aboutus-card3-text") },
    { icon: "fa-bolt", color: "#ffc107", title: t("aboutus-card4-title"), text: t("aboutus-card4-text") },
  ];

  return (
    <section id="about-us" className="py-5 bg-light">
      <div className="container" style={{ maxWidth: "1200px" }}>
        {/* Title */}
        <div className="row mb-5">
          <div className="col-12 text-center">
            <h2 className="section-title">{t("aboutus-title")}</h2>
            <p className="lead text-muted mt-3" style={{ maxWidth: "700px", marginInline: "auto" }}>
              {t("aboutus-intro")}
            </p>
          </div>
        </div>

        {/* Value Cards */}
        <div className="row g-4 mb-5">
          {values.map((value, index) => (
            <div key={index} className="col-12 col-md-6 col-lg-3">
              <div className="card border-0 shadow-sm h-100 hover-card" style={{
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
              }}>
                <div className="card-body p-4 text-center">
                  <div
                    className="rounded-circle d-inline-flex align-items-center justify-content-center mb-3"
                    style={{
                      width: "70px",
                      height: "70px",
                      backgroundColor: value.color + "20",
                    }}
                  >
                    <i className={`fas ${value.icon} fa-2x`} style={{ color: value.color }}></i>
                  </div>
                  <h5 className="fw-bold mb-3">{value.title}</h5>
                  <p className="text-muted small mb-0" style={{ lineHeight: "1.6" }}>
                    {value.text}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="row mb-5">
          <div className="col-12 text-center">
            <Link href={`/about`} className="btn btn-primary btn-lg w-100 w-md-auto px-5" style={{ borderRadius: "50px" }}>
              {t("aboutus-learn-more")} →
            </Link>
          </div>
        </div>

        {/* Goal Section */}
        <div className="row mb-4">
          <div className="col-12">
            <div className="card border-0 shadow-lg" style={{
              background: "linear-gradient(135deg, var(--primary-color), var(--secondary-color))",
            }}>
              <div className="card-body p-5 text-center text-white">
                <div className="mb-3">
                  <i className="fas fa-bullseye fa-3x opacity-75"></i>
                </div>
                <h4 className="fw-bold mb-3">{t("aboutus-goal-title")}</h4>
                <p className="mb-0" style={{ fontSize: "1.1rem", maxWidth: "800px", marginInline: "auto" }}>
                  {t("aboutus-goal-text")}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Tagline */}
        <div className="row">
          <div className="col-12 text-center">
            <p className="text-muted fst-italic fw-bold mb-0" style={{ fontSize: "1.1rem" }}>
              {t("aboutus-tagline")}
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        .hover-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;
        }
      `}</style>
    </section>
  );
}
