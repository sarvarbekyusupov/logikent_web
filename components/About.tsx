"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import Image from "next/image";

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="about-section">
      <div className="container" style={{ maxWidth: "1200px" }}>
        <div className="row g-5">
          <div className="col-12 col-lg-6">
            <div style={{ height: "100%", minHeight: "400px" }}>
              <Image
                src="/pexels-kelly-6572534.jpg"
                alt="About Us"
                width={600}
                height={400}
                className="about-image img-fluid"
                style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "8px" }}
              />
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <div style={{ height: "100%", minHeight: "400px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
              <h2 className="section-title">{t("main-title")}</h2>
              <div className="about-text">
                <p className="mb-4" style={{ fontSize: "clamp(14px, 2.5vw, 18px)" }}>{t("main-description")}</p>
                <ul className="list-unstyled">
                  <li className="mb-3 d-flex align-items-start">
                    <i className="fas fa-check-circle text-success me-2 mt-1"></i>
                    <span>{t("main-cert1")}</span>
                  </li>
                  <li className="mb-3 d-flex align-items-start">
                    <i className="fas fa-certificate text-primary me-2 mt-1"></i>
                    <span>{t("main-cert2")}</span>
                  </li>
                  <li className="mb-3 d-flex align-items-start">
                    <i className="fas fa-leaf text-success me-2 mt-1"></i>
                    <span>{t("main-cert3")}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
