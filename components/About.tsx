"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import Image from "next/image";

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="about-section">
      <div className="container" style={{ maxWidth: "1200px" }}>
        <div className="row align-items-center g-5">
          <div className="col-lg-6">
            <Image
              src="/img/logikent/2.jpg"
              alt="About Us"
              width={600}
              height={400}
              className="about-image img-fluid"
            />
          </div>
          <div className="col-lg-6">
            <h2 className="section-title">{t("main-title")}</h2>
            <div className="about-text">
              <p className="mb-4 fs-5">{t("main-description")}</p>
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
    </section>
  );
}
