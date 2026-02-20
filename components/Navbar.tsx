"use client";

import { useState, useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const { t, language, setLanguage } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const handleLanguageChange = (newLang: "en" | "ru" | "uz") => {
    setLanguage(newLang);
    setMobileMenuOpen(false);
  };

  const navLinks = [
    { href: `/${language}#services`, label: t("services") },
    { href: `/${language}#partners`, label: t("partners") || "Partners" },
    { href: `/${language}#route-map`, label: t("routes") || "Routes" },
    { href: `/${language}/about`, label: t("about-us") || "About Us" },
    { href: `/${language}#contact`, label: t("contact") },
  ];

  return (
    <>
      <nav
        className="navbar navbar-light fixed-top bg-white"
        style={{
          zIndex: 9999,
          height: "70px",
          paddingTop: "0",
          paddingBottom: "0",
          boxShadow: scrolled ? "0 2px 15px rgba(0, 0, 0, 0.1)" : "none",
          transition: "all 0.3s",
        }}
      >
        <div
          className="container d-flex justify-content-between align-items-center"
          style={{ maxWidth: "1200px", height: "100%" }}
        >
          {/* Logo */}
          <Link
            className="navbar-brand"
            href={`/${language}`}
            style={{
              paddingTop: "0",
              paddingBottom: "0",
              height: "100%",
              display: "flex",
              alignItems: "center"
            }}
          >
            <img
              src="/img/logikent/logo text.png"
              alt="Logikent"
              style={{ height: "50px", width: "auto" }}
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="d-none d-lg-flex align-items-center" style={{ gap: "30px", height: "100%" }}>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                className="nav-link fw-medium"
                href={link.href}
                style={{ fontSize: "15px", color: "var(--dark-color)" }}
              >
                {link.label}
              </Link>
            ))}
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

          {/* Mobile Menu Button */}
          <button
            className="navbar-toggler d-lg-none"
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation"
            style={{
              border: "none",
              padding: "10px",
              background: "transparent"
            }}
          >
            <span
              style={{
                display: "block",
                width: "25px",
                height: "2px",
                background: "var(--dark-color)",
                marginBottom: "5px",
                transition: "all 0.3s",
                transform: mobileMenuOpen ? "rotate(45deg) translate(5px, 5px)" : "none"
              }}
            ></span>
            <span
              style={{
                display: "block",
                width: "25px",
                height: "2px",
                background: "var(--dark-color)",
                marginBottom: "5px",
                opacity: mobileMenuOpen ? "0" : "1",
                transition: "all 0.3s"
              }}
            ></span>
            <span
              style={{
                display: "block",
                width: "25px",
                height: "2px",
                background: "var(--dark-color)",
                transition: "all 0.3s",
                transform: mobileMenuOpen ? "rotate(-45deg) translate(7px, -7px)" : "none"
              }}
            ></span>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className="d-lg-none"
        style={{
          position: "fixed",
          top: "70px",
          left: "0",
          right: "0",
          bottom: "0",
          background: "white",
          zIndex: 9998,
          transform: mobileMenuOpen ? "translateX(0)" : "translateX(100%)",
          transition: "transform 0.3s ease-in-out",
          overflowY: "auto",
          padding: "20px 0"
        }}
      >
        <div className="container" style={{ maxWidth: "1200px" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                className="nav-link fw-medium py-3"
                href={link.href}
                style={{
                  fontSize: "16px",
                  color: "var(--dark-color)",
                  borderBottom: "1px solid rgba(0, 0, 0, 0.05)",
                  padding: "15px 0"
                }}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}

            {/* Language Selector for Mobile */}
            <div style={{ borderBottom: "1px solid rgba(0, 0, 0, 0.05)", padding: "15px 0" }}>
              <p
                className="fw-bold mb-3"
                style={{ fontSize: "14px", color: "var(--primary-color)" }}
              >
                {t("language") || "Language"}:
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                <button
                  className="btn btn-outline-secondary text-start"
                  onClick={() => handleLanguageChange("en")}
                  style={{
                    border: language === "en" ? "2px solid var(--primary-color)" : "1px solid #dee2e6",
                    background: language === "en" ? "rgba(37, 99, 235, 0.1)" : "white"
                  }}
                >
                  🇬🇧 English
                </button>
                <button
                  className="btn btn-outline-secondary text-start"
                  onClick={() => handleLanguageChange("ru")}
                  style={{
                    border: language === "ru" ? "2px solid var(--primary-color)" : "1px solid #dee2e6",
                    background: language === "ru" ? "rgba(37, 99, 235, 0.1)" : "white"
                  }}
                >
                  🇷🇺 Русский
                </button>
                <button
                  className="btn btn-outline-secondary text-start"
                  onClick={() => handleLanguageChange("uz")}
                  style={{
                    border: language === "uz" ? "2px solid var(--primary-color)" : "1px solid #dee2e6",
                    background: language === "uz" ? "rgba(37, 99, 235, 0.1)" : "white"
                  }}
                >
                  🇺🇿 O&apos;zbekcha
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Overlay backdrop */}
      {mobileMenuOpen && (
        <div
          style={{
            position: "fixed",
            top: "70px",
            left: "0",
            right: "0",
            bottom: "0",
            background: "rgba(0, 0, 0, 0.5)",
            zIndex: 9997,
          }}
          onClick={() => setMobileMenuOpen(false)}
        />
      )}
    </>
  );
}
