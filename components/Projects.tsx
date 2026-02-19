"use client";

import { useLanguage } from "@/contexts/LanguageContext";

export default function Projects() {
  const { t } = useLanguage();

  const projects = [
    {
      id: 1,
      title: t("project-1-title") || "China-Uzbekistan Trade Route",
      description:
        t("project-1-desc") ||
        "Successfully established regular cargo consolidation services from major Chinese cities to Uzbekistan, reducing delivery time by 30%.",
      icon: "fa-truck",
      route: "China → Uzbekistan",
    },
    {
      id: 2,
      title: t("project-2-title") || "Turkey Logistics Hub",
      description:
        t("project-2-desc") ||
        "Developed a strategic partnership with Turkish logistics companies for seamless cargo transportation through Turkey to Central Asia.",
      icon: "fa-ship",
      route: "Turkey → Uzbekistan",
    },
    {
      id: 3,
      title: t("project-3-title") || "UAE Air Freight Solutions",
      description:
        t("project-3-desc") ||
        "Implemented express air freight services from UAE, providing time-sensitive delivery solutions for urgent cargo requirements.",
      icon: "fa-plane",
      route: "UAE → Uzbekistan",
    },
    {
      id: 4,
      title: t("project-4-title") || "European Trade Corridor",
      description:
        t("project-4-desc") ||
        "Established reliable trucking routes from European Union countries, offering cost-effective ground transportation solutions.",
      icon: "fa-road",
      route: "EU → Uzbekistan",
    },
    {
      id: 5,
      title: t("project-5-title") || "Customs Clearance Optimization",
      description:
        t("project-5-desc") ||
        "Streamlined customs clearance processes, reducing average clearance time from 5 days to 2 days for our clients.",
      icon: "fa-file-alt",
      route: "Service Enhancement",
    },
    {
      id: 6,
      title: t("project-6-title") || "Door-to-Door Delivery Network",
      description:
        t("project-6-desc") ||
        "Built comprehensive delivery network covering all major cities in Uzbekistan with real-time tracking and insurance coverage.",
      icon: "fa-home",
      route: "Nationwide Coverage",
    },
  ];

  return (
    <section id="projects" className="py-5 bg-light">
      <div className="container" style={{ maxWidth: "1200px" }}>
        <div className="row mb-5">
          <div className="col-12 text-center">
            <h2 className="section-title">{t("projects-title") || "Our Projects"}</h2>
            <p className="lead text-muted">{t("projects-subtitle") || "Discover our successful logistics projects"}</p>
          </div>
        </div>

        <div className="row g-4">
          {projects.map((project) => (
            <div key={project.id} className="col-lg-4 col-md-6">
              <div className="card h-100 border-0 shadow-sm hover-lift">
                <div className="card-body p-4">
                  <div
                    className="rounded-circle d-flex align-items-center justify-content-center mb-3"
                    style={{
                      width: "60px",
                      height: "60px",
                      background: "linear-gradient(135deg, var(--primary-color), var(--secondary-color))",
                      color: "white",
                    }}
                  >
                    <i className={`fas ${project.icon} fa-lg`}></i>
                  </div>
                  <div className="mb-2">
                    <span className="badge bg-primary bg-opacity-10 text-primary small">
                      {project.route}
                    </span>
                  </div>
                  <h5 className="fw-bold mb-3">{project.title}</h5>
                  <p className="text-muted small mb-0">{project.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="row mt-5">
          <div className="col-12">
            <div className="card border-0 shadow-lg" style={{ background: "linear-gradient(135deg, var(--primary-color), var(--secondary-color))" }}>
              <div className="card-body p-5">
                <div className="row text-white text-center">
                  <div className="col-md-3 col-6 mb-4 mb-md-0">
                    <div className="display-6 fw-bold mb-2">500+</div>
                    <div className="small opacity-75">{t("stat-1") || "Successful Deliveries"}</div>
                  </div>
                  <div className="col-md-3 col-6 mb-4 mb-md-0">
                    <div className="display-6 fw-bold mb-2">15+</div>
                    <div className="small opacity-75">{t("stat-2") || "Countries Served"}</div>
                  </div>
                  <div className="col-md-3 col-6">
                    <div className="display-6 fw-bold mb-2">50+</div>
                    <div className="small opacity-75">{t("stat-3") || "Partner Companies"}</div>
                  </div>
                  <div className="col-md-3 col-6">
                    <div className="display-6 fw-bold mb-2">99%</div>
                    <div className="small opacity-75">{t("stat-4") || "Customer Satisfaction"}</div>
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
