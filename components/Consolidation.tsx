"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import Image from "next/image";

export default function Consolidation() {
  const { t } = useLanguage();

  return (
    <section className="py-5 bg-white">
      <div className="container" style={{ maxWidth: "1200px" }}>
        <div className="row align-items-center g-5">
          <div className="col-12 col-lg-6">
            <h2
              className="section-title mb-3"
              style={{ textAlign: "left" }}
            >
              {t("consolidation-title")}
            </h2>
            <h4 className="mb-3" style={{ color: "var(--primary-color)" }}>
              {t("consolidation-subtitle")}
            </h4>
            <p className="mb-4 lead">{t("consolidation-description")}</p>

            <div className="mb-4">
              <h5
                className="fw-bold mb-2"
                style={{ color: "var(--secondary-color)" }}
              >
                {t("consolidation-card1-title")}
              </h5>
              <ul className="list-unstyled">
                <li className="mb-2">
                  <i className="fas fa-check-circle text-success me-2"></i>
                  <span>{t("consolidation-card1-text1")}</span>
                </li>
                <li className="mb-2">
                  <i className="fas fa-check-circle text-success me-2"></i>
                  <span>{t("consolidation-card1-text2")}</span>
                </li>
              </ul>
            </div>

            <div>
              <h5
                className="fw-bold mb-2"
                style={{ color: "var(--primary-color)" }}
              >
                {t("consolidation-card2-title")}
              </h5>
              <ul className="list-unstyled">
                <li className="mb-2">
                  <i className="fas fa-warehouse text-secondary me-2"></i>
                  <span>{t("consolidation-card2-text1")}</span>
                </li>
                <li className="mb-2">
                  <i className="fas fa-search text-secondary me-2"></i>
                  <span>{t("consolidation-card2-text2")}</span>
                </li>
                <li className="mb-2">
                  <i className="fas fa-file-signature text-secondary me-2"></i>
                  <span>{t("consolidation-card2-text3")}</span>
                </li>
                <li className="mb-2">
                  <i className="fas fa-shipping-fast text-secondary me-2"></i>
                  <span>{t("consolidation-card2-text4")}</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-12 col-lg-6 text-center">
            <div className="mb-4">
              <Image
                src="/img/logikent/2.jpg"
                alt="Consolidation Services"
                width={500}
                height={300}
                className="img-fluid rounded shadow"
                style={{ maxWidth: "clamp(80%, 90vw, 70%)" }}
              />
            </div>
            <Image
              src="/img/logikent/9.jpg"
              alt="Consolidation Services"
              width={500}
              height={300}
              className="img-fluid rounded shadow"
              style={{ maxWidth: "clamp(80%, 90vw, 70%)" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
