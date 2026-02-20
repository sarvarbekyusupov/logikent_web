"use client";

import { useLanguage } from "@/contexts/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="text-white py-3">
      <div className="container" style={{ maxWidth: "1200px" }}>
        <div className="row g-3 align-items-center">
          {/* Logikent Info - Left Side */}
          <div className="col-md-6">
            <h6 className="mb-1 fw-bold">LOGIKENT</h6>
            <p className="opacity-75 mb-0 small">{t("footer-text")}</p>
          </div>

          {/* Social Media - Right Side */}
          <div className="col-md-6 text-md-end">
            <div className="d-flex gap-3 justify-content-md-end justify-content-start">
              <a
                href="https://t.me/Res_hub_uz"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white"
                style={{ fontSize: "clamp(1.2rem, 4vw, 1.5rem)" }}
              >
                <i className="fa-brands fa-telegram"></i>
              </a>
              <a
                href="https://www.instagram.com/solwindenergy.uz/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white"
                style={{ fontSize: "clamp(1.2rem, 4vw, 1.5rem)" }}
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                href="#"
                className="text-white"
                style={{ fontSize: "clamp(1.2rem, 4vw, 1.5rem)" }}
              >
                <i className="fab fa-facebook"></i>
              </a>
              <a
                href="#"
                className="text-white"
                style={{ fontSize: "clamp(1.2rem, 4vw, 1.5rem)" }}
              >
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="text-center mt-3 pt-3 border-top border-secondary">
          <p className="mb-0 opacity-75" style={{ fontSize: "clamp(12px, 2.5vw, 14px)" }}>{t("footer-copyright")}</p>
        </div>
      </div>
    </footer>
  );
}
