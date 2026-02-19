"use client";

import { useLanguage } from "@/contexts/LanguageContext";

export default function Partners() {
  const { t, language } = useLanguage();

  const content = {
    en: {
      title: "Our Partners and Clients",
      subtitle: "Trusted by leading companies worldwide",
      partnersTitle: "Our Strategic Partners",
      clientsTitle: "Our Valued Clients",
      industries: "Industries We Serve",
    },
    ru: {
      title: "Наши партнёры и клиенты",
      subtitle: "Нам доверяют ведущие компании по всему миру",
      partnersTitle: "Наши стратегические партнёры",
      clientsTitle: "Наши цен клиенты",
      industries: "Отрасли, которые мы обслуживаем",
    },
    uz: {
      title: "Bizning hamkorlar va mijozlarimiz",
      subtitle: "Butun dunyodagi yetakchi kompaniyalar bizga ishonadi",
      partnersTitle: "Bizning strategik hamkorlarimiz",
      clientsTitle: "Bizning qadrlanadigan mijozlarimiz",
      industries: "Xizmat ko'rsatadigan sanoatlar",
    },
  };

  const currentContent = content[language as keyof typeof content];

  const partners = [
    { name: "China Logistics", country: "🇨🇳", logo: "fa-truck" },
    { name: "Turkey Freight", country: "🇹🇷", logo: "fa-ship" },
    { name: "EU Transport", country: "🇪🇺", logo: "fa-plane" },
    { name: "UAE Cargo", country: "🇦🇪", logo: "fa-boxes" },
    { name: "Russia Rail", country: "🇷🇺", logo: "fa-train" },
  ];

  const clients = [
    { name: "Trading companies", icon: "fa-handshake", desc: "International trade" },
    { name: "Manufacturing", icon: "fa-industry", desc: "Industrial equipment" },
    { name: "E-commerce", icon: "fa-shopping-cart", desc: "Online retail" },
    { name: "Construction", icon: "fa-hard-hat", desc: "Building materials" },
    { name: "Agriculture", icon: "fa-tractor", desc: "Farm equipment" },
    { name: "Textile", icon: "fa-tshirt", desc: "Fashion industry" },
  ];

  return (
    <section id="partners" className="py-5 bg-light">
      <div className="container" style={{ maxWidth: "1200px" }}>
        <div className="row mb-5">
          <div className="col-12 text-center">
            <h2 className="section-title">{currentContent.title}</h2>
            <p className="lead text-muted">{currentContent.subtitle}</p>
          </div>
        </div>

        {/* Partners Section */}
        <div className="row mb-5">
          <div className="col-12">
            <h3 className="text-center mb-4 fw-bold" style={{ color: "var(--primary-color)" }}>
              {currentContent.partnersTitle}
            </h3>
          </div>
          {partners.map((partner, index) => (
            <div key={index} className="col-lg-2 col-md-4 col-6 mb-4">
              <div className="card border-0 shadow-sm text-center hover-lift h-100">
                <div className="card-body p-4 d-flex flex-column justify-content-center">
                  <div className="mb-3">
                    <i
                      className={`fas ${partner.logo} fa-2x`}
                      style={{ color: "var(--primary-color)" }}
                    ></i>
                  </div>
                  <h6 className="fw-bold mb-1 small">{partner.name}</h6>
                  <div className="small text-muted">{partner.country}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Clients Section */}
        <div className="row mb-5">
          <div className="col-12">
            <h3 className="text-center mb-4 fw-bold" style={{ color: "var(--primary-color)" }}>
              {currentContent.clientsTitle}
            </h3>
          </div>
          {clients.map((client, index) => (
            <div key={index} className="col-lg-4 col-md-6 mb-4">
              <div className="card border-0 shadow-sm h-100">
                <div className="card-body p-4">
                  <div className="d-flex align-items-center mb-3">
                    <div
                      className="rounded-circle d-flex align-items-center justify-content-center me-3"
                      style={{
                        width: "50px",
                        height: "50px",
                        background: "rgba(37, 99, 235, 0.1)",
                        color: "var(--primary-color)",
                      }}
                    >
                      <i className={`fas ${client.icon}`}></i>
                    </div>
                    <div>
                      <h6 className="fw-bold mb-0">{client.name}</h6>
                      <small className="text-muted">{client.desc}</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="row">
          <div className="col-12">
            <div className="card border-0 shadow-lg" style={{ background: "linear-gradient(135deg, var(--primary-color), var(--secondary-color))" }}>
              <div className="card-body p-5">
                <div className="row text-white text-center">
                  <div className="col-md-4 mb-4 mb-md-0">
                    <div className="display-6 fw-bold mb-2">100+</div>
                    <div className="small opacity-75">{t("partners-count") || "Active Partners"}</div>
                  </div>
                  <div className="col-md-4 mb-4 mb-md-0">
                    <div className="display-6 fw-bold mb-2">500+</div>
                    <div className="small opacity-75">{t("clients-count") || "Satisfied Clients"}</div>
                  </div>
                  <div className="col-md-4">
                    <div className="display-6 fw-bold mb-2">15+</div>
                    <div className="small opacity-75">{t("countries-count") || "Countries Covered"}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="row mt-5">
          <div className="col-12">
            <div className="card border-0 bg-white shadow-sm">
              <div className="card-body p-5 text-center">
                <h4 className="fw-bold mb-3" style={{ color: "var(--primary-color)" }}>
                  {language === "ru" ? "Станьте нашим партнёром" : language === "uz" ? "Bizning hamkoringiz bo'ling" : "Become Our Partner"}
                </h4>
                <p className="text-muted mb-4">
                  {language === "ru"
                    ? "Мы открыты для сотрудничества с новыми партнёрами и клиентами. Давайте расти вместе!"
                    : language === "uz"
                    ? "Biz yangi hamkorlar va mijozlar bilan hamkorlik qilishga tayymiz. Keling, birga o'samiz!"
                    : "We're open to collaboration with new partners and clients. Let's grow together!"}
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
                  {language === "ru" ? "Связаться с нами" : language === "uz" ? "Biz bilan bog'lanish" : "Contact Us"}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
