"use client";

import { useLanguage } from "@/contexts/LanguageContext";

export default function Mission() {
  const { t } = useLanguage();

  const missions = [
    {
      icon: "fa-solid fa-lightbulb",
      title: "mission-card1-title",
      text: "mission-card1-text",
    },
    {
      icon: "fa-solid fa-hand-holding-heart",
      title: "mission-card2-title",
      text: "mission-card2-text",
    },
    {
      icon: "fa-solid fa-gem",
      title: "mission-card3-title",
      text: "mission-card3-text",
    },
  ];

  return (
    <section className="py-5 bg-light">
      <div className="container" style={{ maxWidth: "1200px" }}>
        <h2 className="section-title">{t("mission-title")}</h2>
        <div className="row g-4">
          {missions.map((mission, index) => (
            <div key={index} className="col-md-4">
              <div className="vision-card h-100">
                <div className="icon-wrapper mb-4">
                  <i className={`${mission.icon} fa-3x`}></i>
                </div>
                <h4 className="fw-bold">{t(mission.title)}</h4>
                <p className="text-muted mb-0">{t(mission.text)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
