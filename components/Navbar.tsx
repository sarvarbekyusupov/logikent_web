"use client";

import { useState, useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
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
        zIndex: 9999,
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
        <Link
          className="navbar-brand"
          href={`/${language}`}
          style={{ paddingTop: "0", paddingBottom: "0", position: "absolute", left: "0", top: "50%", transform: "translateY(-50%)" }}
        >
          <img
            src="/img/logikent/logo text.png"
            alt="Logikent"
            style={{ height: "200px", width: "auto" }}
          />
        </Link>

        <div style={{ marginLeft: "auto", height: "100%" }}>
          {/* Desktop Navigation */}
          <div
            className="d-none d-md-flex align-items-center"
            style={{ gap: "30px", height: "100%" }}
          >
            <Link
              className="nav-link fw-medium"
              href={`/${language}#services`}
              style={{ fontSize: "15px", color: "var(--dark-color)" }}
            >
              {t("services")}
            </Link>
            <Link
              className="nav-link fw-medium"
              href={`/${language}#partners`}
              style={{ fontSize: "15px", color: "var(--dark-color)" }}
            >
              {t("partners") || "Partners"}
            </Link>
            <Link
              className="nav-link fw-medium"
              href={`/${language}#route-map`}
              style={{ fontSize: "15px", color: "var(--dark-color)" }}
            >
              {t("routes") || "Routes"}
            </Link>
            <Link
              className="nav-link fw-medium"
              href={`/${language}/about`}
              style={{ fontSize: "15px", color: "var(--dark-color)" }}
            >
              {t("about-us") || "About Us"}
            </Link>
            <Link
              className="nav-link fw-medium"
              href={`/${language}#contact`}
              style={{ fontSize: "15px", color: "var(--dark-color)" }}
            >
              {t("contact")}
            </Link>
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
              <Link
                className="nav-link fw-medium"
                href={`/${language}#services`}
                style={{ fontSize: "14px", color: "var(--dark-color)" }}
              >
                {t("services")}
              </Link>
              <Link
                className="nav-link fw-medium"
                href={`/${language}#partners`}
                style={{ fontSize: "14px", color: "var(--dark-color)" }}
              >
                {t("partners") || "Partners"}
              </Link>
              <Link
                className="nav-link fw-medium"
                href={`/${language}#route-map`}
                style={{ fontSize: "14px", color: "var(--dark-color)" }}
              >
                {t("routes") || "Routes"}
              </Link>
              <Link
                className="nav-link fw-medium"
                href={`/${language}/about`}
                style={{ fontSize: "14px", color: "var(--dark-color)" }}
              >
                {t("about-us") || "About Us"}
              </Link>
            </div>

            {/* Fixed bottom section with Contact and Language */}
            <div className="nav-fixed-bottom">
              <Link
                className="nav-link fw-medium"
                href={`/${language}#contact`}
                style={{ fontSize: "14px", color: "var(--dark-color)", padding: "5px 0" }}
              >
                {t("contact")}
              </Link>
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
