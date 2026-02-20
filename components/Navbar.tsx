"use client";

import { useState, useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Navbar() {
  const { t, language, setLanguage } = useLanguage();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLanguageChange = (newLang: "en" | "ru" | "uz") => {
    setLanguage(newLang);
  };

  return (
    <nav
      className="navbar navbar-light fixed-top bg-white"
      style={{
        zIndex: 1000,
        height: "64px",
        paddingTop: "0",
        paddingBottom: "0",
        boxShadow: scrolled ? "0 2px 15px rgba(0, 0, 0, 0.1)" : "none",
        transition: "all 0.3s",
        overflow: "visible",
      }}
    >
      <div
        className="container d-flex justify-content-between"
        style={{ maxWidth: "1200px", overflow: "visible", padding: "0", position: "relative" }}
      >
        <a
          className="navbar-brand"
          href="#home"
          style={{ paddingTop: "0", paddingBottom: "0", position: "absolute", left: "0", top: "50%", transform: "translateY(-50%)" }}
        >
          <img
            src="/img/logikent/logo text.png"
            alt="Logikent"
            style={{ height: "200px", width: "auto" }}
          />
        </a>

        <div style={{ marginLeft: "auto", height: "100%" }}>
          {/* Desktop Navigation */}
          <div
            className="d-none d-md-flex align-items-center"
            style={{ gap: "30px", height: "100%" }}
          >
            <a
              className="nav-link fw-medium"
              href="#services"
              style={{ fontSize: "15px", color: "var(--dark-color)" }}
            >
              <span style={{ fontSize: "1.2em" }}>S</span>ervices
            </a>
            <a
              className="nav-link fw-medium"
              href="#partners"
              style={{ fontSize: "15px", color: "var(--dark-color)" }}
            >
              {t("partners") || "Partners"}
            </a>
            <a
              className="nav-link fw-medium"
              href="#route-map"
              style={{ fontSize: "15px", color: "var(--dark-color)" }}
            >
              {t("routes") || "Routes"}
            </a>
            <a
              className="nav-link fw-medium"
              href="#about-us"
              style={{ fontSize: "15px", color: "var(--dark-color)" }}
            >
              {t("about-us") || "About Us"}
            </a>
            <a
              className="nav-link fw-medium"
              href="#contact"
              style={{ fontSize: "15px", color: "var(--dark-color)" }}
            >
              {t("contact")}
            </a>
            <div className="dropdown" style={{ position: "relative" }}>
              <a
                className="nav-link dropdown-toggle fw-bold"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                style={{ fontSize: "15px", color: "var(--primary-color)" }}
              >
                {language.toUpperCase()}
              </a>
              <ul className="dropdown-menu dropdown-menu-end">
                <li>
                  <button
                    className="dropdown-item"
                    onClick={() => handleLanguageChange("en")}
                  >
                    English
                  </button>
                </li>
                <li>
                  <button
                    className="dropdown-item"
                    onClick={() => handleLanguageChange("ru")}
                  >
                    Русский
                  </button>
                </li>
                <li>
                  <button
                    className="dropdown-item"
                    onClick={() => handleLanguageChange("uz")}
                  >
                    O&apos;zbekcha
                  </button>
                </li>
              </ul>
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className="d-md-none" style={{ display: "flex", flexDirection: "column" }}>
            {/* Horizontal scrollable navigation items */}
            <div className="nav-scroll-container">
              <a
                className="nav-link fw-medium"
                href="#services"
                style={{ fontSize: "14px", color: "var(--dark-color)" }}
              >
                <span style={{ fontSize: "1.2em" }}>S</span>ervices
              </a>
              <a
                className="nav-link fw-medium"
                href="#partners"
                style={{ fontSize: "14px", color: "var(--dark-color)" }}
              >
                {t("partners") || "Partners"}
              </a>
              <a
                className="nav-link fw-medium"
                href="#route-map"
                style={{ fontSize: "14px", color: "var(--dark-color)" }}
              >
                {t("routes") || "Routes"}
              </a>
              <a
                className="nav-link fw-medium"
                href="#about-us"
                style={{ fontSize: "14px", color: "var(--dark-color)" }}
              >
                {t("about-us") || "About Us"}
              </a>
            </div>

            {/* Fixed bottom section with Contact and Language */}
            <div className="nav-fixed-bottom">
              <a
                className="nav-link fw-medium"
                href="#contact"
                style={{ fontSize: "14px", color: "var(--dark-color)", padding: "5px 0" }}
              >
                {t("contact")}
              </a>
              <div className="dropdown" style={{ position: "relative" }}>
                <a
                  className="nav-link dropdown-toggle fw-bold"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  style={{ fontSize: "14px", color: "var(--primary-color)", padding: "5px 0" }}
                >
                  {language.toUpperCase()}
                </a>
                <ul className="dropdown-menu dropdown-menu-end">
                  <li>
                    <button
                      className="dropdown-item"
                      onClick={() => handleLanguageChange("en")}
                    >
                      English
                    </button>
                  </li>
                  <li>
                    <button
                      className="dropdown-item"
                      onClick={() => handleLanguageChange("ru")}
                    >
                      Русский
                    </button>
                  </li>
                  <li>
                    <button
                      className="dropdown-item"
                      onClick={() => handleLanguageChange("uz")}
                    >
                      O&apos;zbekcha
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
