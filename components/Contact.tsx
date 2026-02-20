"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import OrderForm from "./OrderForm";

export default function Contact() {
  const { t } = useLanguage();

  return (
    <section className="py-5 bg-light">
      <div className="container" style={{ maxWidth: "1200px" }}>
        <div className="row mb-5">
          <div className="col-12 text-center">
            <h2 className="section-title">{t("get_in_touch")}</h2>
            <p className="lead text-muted">{t("contact-desc")}</p>
          </div>
        </div>

        {/* Order Form and Map Side by Side */}
        <div className="row g-4 justify-content-center">
          {/* Order Form Section */}
          <div className="col-12 col-lg-6">
            <OrderForm />
          </div>

          {/* Map Card Section */}
          <div className="col-12 col-lg-6">
            <div className="card shadow-lg border-0 h-100">
              <div className="card-body p-4 d-flex flex-column">
                <h3 className="card-title fw-bold mb-3" style={{ color: "var(--primary-color)" }}>
                  {t("contact-card-title")}
                </h3>

                {/* Contact Info */}
                <div className="mb-3">
                  <h6 className="fw-bold mb-2">{t("footer-connect")}</h6>
                  <div className="row g-2">
                    <div className="col-12">
                      <div className="d-flex align-items-center mb-2">
                        <i className="fas fa-phone-alt me-2 text-muted"></i>
                        <div className="small">
                          <div>+998 97 733 79 58</div>
                        </div>
                      </div>
                      <div className="d-flex align-items-center mb-2">
                        <i className="fas fa-envelope me-2 text-muted"></i>
                        <div className="small">
                          <div>info@logikent.uz</div>
                          <div>sales@logikent.uz</div>
                        </div>
                      </div>
                      <div className="d-flex align-items-center">
                        <i className="fas fa-map-marker-alt me-2 text-muted"></i>
                        <div className="small text-muted">Tashkent, Uzbekistan</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Map */}
                <div className="flex-grow-1">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2996.5!2d69.231038!3d41.361146!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDHCsDIxJzQwLjEiTiA2OcKwMTMnNTkuOCJF!5e0!3m2!1sen!2suz!4v1234567890"
                    width="100%"
                    height="100%"
                    style={{ border: 0, minHeight: "clamp(250px, 40vw, 400px)", borderRadius: "0.375rem" }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
