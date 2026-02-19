"use client";

import { useLanguage } from "@/contexts/LanguageContext";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section id="home" className="hero-section text-white text-center" style={{ paddingTop: "64px" }}>
      <div className="container position-relative" style={{ zIndex: 2, maxWidth: "1200px" }}>
        <h1 className="display-4 mb-4 fw-bold">{t("hero-title")}</h1>
        <p className="lead mb-4 fs-4">{t("hero_subtitle")}</p>
        <a href="#contact">
          <button
            className="btn btn-custom btn-lg px-5 py-3"
            style={{
              background: "var(--primary-color)",
              color: "white",
              border: "2px solid var(--primary-color)",
              borderRadius: "50px",
              fontWeight: 600,
              transition: "all 0.3s",
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
    </section>
  );
}
