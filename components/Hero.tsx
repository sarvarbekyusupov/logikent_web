"use client";

import { useLanguage } from "@/contexts/LanguageContext";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section id="home" className="hero-section text-white text-center" style={{ paddingTop: "80px", minHeight: "65vh", display: "flex", alignItems: "center" }}>
      <div className="container position-relative" style={{ zIndex: 2, maxWidth: "1200px", padding: "20px" }}>
        <h1 className="display-4 mb-4 fw-bold" style={{ fontSize: "clamp(26px, 4vw, 52px)" }}>{t("hero-title")}</h1>
        <p className="lead mb-5" style={{ fontSize: "clamp(14px, 2.5vw, 20px)", lineHeight: "1.6" }}>{t("hero_subtitle")}</p>

        <div className="d-flex justify-content-center">
          <a href="#contact" className="w-100" style={{ maxWidth: "300px" }}>
            <button
              className="btn btn-custom btn-lg w-100"
              style={{
                background: "var(--primary-color)",
                color: "white",
                border: "2px solid var(--primary-color)",
                borderRadius: "50px",
                fontWeight: 600,
                transition: "all 0.3s",
                padding: "12px 32px",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "transparent";
                e.currentTarget.style.color = "var(--primary-color)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "var(--primary-color)";
                e.currentTarget.style.color = "white";
              }}
            >
              {t("contact-us")}
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}
