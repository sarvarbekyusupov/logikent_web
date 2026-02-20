"use client";

import { useLanguage } from "@/contexts/LanguageContext";

export default function Partners() {
  const { t } = useLanguage();

  const partners = [
    { name: "Samauto", logo: "/img/logikent/partners/samauto.png", isImage: true },
    { name: "Safia Bakery", logo: "/img/logikent/partners/safiabakery.png", isImage: true },
    { name: "Fintec", logo: "/img/logikent/partners/fintec.png", isImage: true },
    { name: "Eco Control", logo: "/img/logikent/partners/ecocontrol.png", isImage: true },
    { name: "Craft Food", logo: "/img/logikent/partners/craftfood.png", isImage: true },
    { name: "Res Hub", logo: "/img/logikent/partners/reshub.png", isImage: true },
    { name: "Basmala Decor", logo: "/img/logikent/partners/basmaladecor.png", isImage: true },
  ];

  return (
    <section id="partners" className="py-5 bg-light">
      <div className="container" style={{ maxWidth: "1200px" }}>
        <div className="row mb-5">
          <div className="col-12 text-center">
            <h2 className="section-title">{t("partners-clients-title")}</h2>
            <p className="lead text-muted">{t("partners-clients-subtitle")}</p>
          </div>
        </div>

        {/* Partners Section */}
        <div className="row mb-5">
          <div className="col-12">
            <h3 className="text-center mb-5 fw-bold" style={{ color: "var(--primary-color)" }}>
              {t("partners-strategic-title")}
            </h3>
          </div>
          <div className="row justify-content-center g-4">
            {partners.map((partner, index) => (
              <div key={index} className="col-lg-3 col-md-4 col-6 mb-4">
                <div
                  className="card border-0 shadow-sm text-center hover-lift h-100"
                  style={{
                    transition: "all 0.3s ease",
                    background: "#ffffff"
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-5px)";
                    e.currentTarget.style.boxShadow = "0 10px 30px rgba(0,0,0,0.1)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "0 0.125rem 0.25rem rgba(0,0,0,0.075)";
                  }}
                >
                  <div className="card-body p-5 d-flex flex-column justify-content-center align-items-center">
                    <div className="mb-4">
                      {(partner as any).isImage ? (
                        <img
                          src={partner.logo}
                          alt={partner.name}
                          style={{
                            maxHeight: "150px",
                            maxWidth: "100%",
                            width: "auto",
                            objectFit: "contain"
                          }}
                        />
                      ) : (
                        <i
                          className={`fas ${partner.logo} fa-3x`}
                          style={{ color: "var(--primary-color)" }}
                        ></i>
                      )}
                    </div>
                    <h5 className="fw-bold mb-0" style={{ fontSize: "1rem" }}>{partner.name}</h5>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="row mt-5">
          <div className="col-12">
            <div className="card border-0 bg-white shadow-sm">
              <div className="card-body p-5 text-center">
                <h4 className="fw-bold mb-3" style={{ color: "var(--primary-color)" }}>
                  {t("partners-cta-title")}
                </h4>
                <p className="text-muted mb-4">
                  {t("partners-cta-description")}
                </p>
                <a
                  href="#contact"
                  className="btn btn-lg px-5"
                  style={{
                    background: "var(--primary-color)",
                    color: "white",
                    borderRadius: "50px",
                    fontWeight: "600",
                  }}
                >
                  {t("contact-us")}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
