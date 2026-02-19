"use client";

import { useLanguage } from "@/contexts/LanguageContext";

export default function Routes() {
  const { t, language } = useLanguage();

  const routes = [
    {
      id: 1,
      from: "🇨🇳 China",
      to: "🇺🇿 Uzbekistan",
      title: t("route-1-title") || "China to Uzbekistan",
      description: t("route-1-desc") || "Regular cargo transportation from major Chinese cities including Beijing, Shanghai, Guangzhou, and Yiwu.",
      transport: ["Truck", "Rail", "Air"],
      duration: "12-18 days",
    },
    {
      id: 2,
      from: "🇹🇷 Turkey",
      to: "🇺🇿 Uzbekistan",
      title: t("route-2-title") || "Turkey to Uzbekistan",
      description: t("route-2-desc") || "Direct routes from Istanbul and other major Turkish cities through Azerbaijan and Turkmenistan.",
      transport: ["Truck", "Rail"],
      duration: "8-12 days",
    },
    {
      id: 3,
      from: "🇪🇺 European Union",
      to: "🇺🇿 Uzbekistan",
      title: t("route-3-title") || "EU to Uzbekistan",
      description: t("route-3-desc") || "Cargo transportation from Germany, Poland, Italy, and other EU countries through reliable corridors.",
      transport: ["Truck", "Rail"],
      duration: "15-20 days",
    },
    {
      id: 4,
      from: "🇦🇪 UAE",
      to: "🇺🇿 Uzbekistan",
      title: t("route-4-title") || "UAE to Uzbekistan",
      description: t("route-4-desc") || "Express air and sea freight from Dubai and other Emirates with rapid customs clearance.",
      transport: ["Air", "Sea"],
      duration: "3-7 days",
    },
    {
      id: 5,
      from: "🇷🇺 Russia",
      to: "🇺🇿 Uzbekistan",
      title: t("route-5-title") || "Russia to Uzbekistan",
      description: t("route-5-desc") || "Direct cargo transportation from Moscow, St. Petersburg, and other Russian cities.",
      transport: ["Truck", "Rail"],
      duration: "5-10 days",
    },
    {
      id: 6,
      from: "🌍 Worldwide",
      to: "🇺🇿 Uzbekistan",
      title: t("route-6-title") || "Worldwide to Uzbekistan",
      description: t("route-6-desc") || "Global cargo consolidation and forwarding services from any country to Uzbekistan.",
      transport: ["Air", "Sea", "Truck"],
      duration: "Varies",
    },
  ];

  const caseStudies = [
    {
      id: 1,
      route: "🇦🇹 Austria → 🇺🇿 Uzbekistan",
      transit: "via 🇱🇹 Lithuania → 🇧🇾 Belarus → 🇷🇺 Russia → 🇰🇿 Kazakhstan",
      cargo: language === "ru" ? "АБС листы (пластики)" : "ABS Sheets",
      purpose: language === "ru"
        ? "Используются для производства автомобильных деталей и корпусов приборов"
        : "Used for the production of car parts and instrument housings",
      weight: language === "ru" ? "66 тонн" : "66 tons",
      transport: language === "ru"
        ? "Авто: АТ-ЛТ 3xFNL, Ж/Д: ЛТ-УЗБ 1 крытый вагон"
        : "AUS-LT 3xFTL, LT-UZB 1xcovered wagon",
      icon: "fa-industry",
    },
    {
      id: 2,
      route: "🇨🇳 China → 🇺🇿 Uzbekistan",
      transit: "via 🇰🇿 Kazakhstan",
      cargo: language === "ru" ? "Электроизоляционный лак (эмаль) *" : "Electrical insulation lacquer (enamel) *",
      purpose: language === "ru"
        ? "Для покрытия электрической изоляции"
        : "For coating electrical insulation",
      weight: language === "ru" ? "88 бочек, 18 тонн" : "88 barrels, 18 tons",
      transport: language === "ru"
        ? "Автоперевозка с ADR (опасный груз)"
        : "Auto transportation with ADR (dangerous cargo)",
      icon: "fa-exclamation-triangle",
      dangerous: true,
    },
  ];

  const getTransportIcon = (type: string) => {
    switch (type) {
      case "Truck":
        return "fa-truck";
      case "Rail":
        return "fa-train";
      case "Air":
        return "fa-plane";
      case "Sea":
        return "fa-ship";
      default:
        return "fa-box";
    }
  };

  return (
    <section id="routes" className="py-5 bg-white">
      <div className="container" style={{ maxWidth: "1200px" }}>
        <div className="row mb-5">
          <div className="col-12 text-center">
            <h2 className="section-title">{t("routes-title") || "Our Routes"}</h2>
            <p className="lead text-muted">
              {t("routes-subtitle") || "Key trade routes and directions we serve"}
            </p>
          </div>
        </div>

        <div className="row g-4">
          {routes.map((route) => (
            <div key={route.id} className="col-lg-4 col-md-6">
              <div className="card h-100 border-0 shadow-sm hover-lift">
                <div className="card-body p-4">
                  <div className="d-flex justify-content-between align-items-start mb-3">
                    <div className="fw-bold text-primary small">
                      {route.from} → {route.to}
                    </div>
                    <div className="badge bg-success bg-opacity-10 text-success">
                      {route.duration}
                    </div>
                  </div>
                  <h5 className="fw-bold mb-3">{route.title}</h5>
                  <p className="text-muted small mb-3">{route.description}</p>
                  <div className="d-flex gap-2">
                    {route.transport.map((type, index) => (
                      <span
                        key={index}
                        className="badge bg-primary bg-opacity-10 text-primary small"
                      >
                        <i className={`fas ${getTransportIcon(type)} me-1`}></i>
                        {type}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Case Studies Section */}
        <div className="row mt-5">
          <div className="col-12">
            <h3 className="text-center fw-bold mb-4" style={{ color: "var(--primary-color)" }}>
              {language === "ru" ? "Примеры перевозок" : language === "uz" ? "Tashish misollari" : "Case Studies"}
            </h3>
          </div>
          {caseStudies.map((study) => (
            <div key={study.id} className="col-lg-6 mb-4">
              <div className={`card border-0 shadow-sm h-100 ${study.dangerous ? "border-warning border-2" : ""}`}>
                <div className="card-body p-4">
                  <div className="d-flex align-items-center mb-3">
                    <div
                      className="rounded-circle d-flex align-items-center justify-content-center me-3"
                      style={{
                        width: "50px",
                        height: "50px",
                        background: study.dangerous
                          ? "rgba(255, 193, 7, 0.1)"
                          : "rgba(37, 99, 235, 0.1)",
                        color: study.dangerous ? "#ffc107" : "var(--primary-color)",
                      }}
                    >
                      <i className={`fas ${study.icon}`}></i>
                    </div>
                    <h5 className="fw-bold mb-0">{study.route}</h5>
                  </div>

                  {study.transit && (
                    <div className="mb-3">
                      <small className="text-muted">
                        <i className="fas fa-route me-2"></i>
                        {study.transit}
                      </small>
                    </div>
                  )}

                  <div className="mb-3">
                    <div className="d-flex">
                      <span className="fw-bold me-2 small">
                        <i className="fas fa-box me-2 text-primary"></i>
                        {language === "ru" ? "Груз:" : language === "uz" ? "Yuk:" : "Cargo:"}
                      </span>
                      <span className="small">{study.cargo}</span>
                    </div>
                  </div>

                  <div className="mb-3">
                    <div className="d-flex">
                      <span className="fw-bold me-2 small">
                        <i className="fas fa-bullseye me-2 text-primary"></i>
                        {language === "ru" ? "Назначение:" : language === "uz" ? "Maqsad:" : "Purpose:"}
                      </span>
                      <span className="small text-muted">{study.purpose}</span>
                    </div>
                  </div>

                  <div className="mb-3">
                    <div className="d-flex">
                      <span className="fw-bold me-2 small">
                        <i className="fas fa-weight-hanging me-2 text-primary"></i>
                        {language === "ru" ? "Вес:" : language === "uz" ? "Og'irlik:" : "Weight:"}
                      </span>
                      <span className="small">{study.weight}</span>
                    </div>
                  </div>

                  <div className="pt-3 border-top">
                    <small className="text-muted">
                      <i className="fas fa-truck me-2"></i>
                      <strong>{language === "ru" ? "Тип транспорта: " : language === "uz" ? "Transport turi: " : "Transport type: "}</strong>
                      {study.transport}
                    </small>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Route Features */}
        <div className="row mt-5">
          <div className="col-12">
            <div className="card border-0 bg-light">
              <div className="card-body p-4">
                <h4 className="text-center fw-bold mb-4" style={{ color: "var(--primary-color)" }}>
                  {t("route-features") || "Why Choose Our Routes"}
                </h4>
                <div className="row g-4">
                  <div className="col-md-3 col-6">
                    <div className="text-center">
                      <i
                        className="fas fa-route fa-2x mb-2"
                        style={{ color: "var(--primary-color)" }}
                      ></i>
                      <h6 className="fw-bold small">
                        {t("route-feature-1") || "Optimized Routes"}
                      </h6>
                    </div>
                  </div>
                  <div className="col-md-3 col-6">
                    <div className="text-center">
                      <i
                        className="fas fa-shield-alt fa-2x mb-2"
                        style={{ color: "var(--secondary-color)" }}
                      ></i>
                      <h6 className="fw-bold small">
                        {t("route-feature-2") || "Cargo Insurance"}
                      </h6>
                    </div>
                  </div>
                  <div className="col-md-3 col-6">
                    <div className="text-center">
                      <i
                        className="fas fa-map-marked-alt fa-2x mb-2"
                        style={{ color: "var(--accent-color)" }}
                      ></i>
                      <h6 className="fw-bold small">
                        {t("route-feature-3") || "Real-time Tracking"}
                      </h6>
                    </div>
                  </div>
                  <div className="col-md-3 col-6">
                    <div className="text-center">
                      <i
                        className="fas fa-file-contract fa-2x mb-2"
                        style={{ color: "var(--primary-color)" }}
                      ></i>
                      <h6 className="fw-bold small">
                        {t("route-feature-4") || "Customs Support"}
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
