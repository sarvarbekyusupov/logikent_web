"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import Link from "next/link";

export default function Services() {
  const { t, language } = useLanguage();

  const services = [
    {
      icon: "fa-solid fa-plane-circle-check",
      color: "text-primary",
      title: "service-card1-title",
      text: "service-card1-text",
      list: ["service-card1-list1", "service-card1-list2", "service-card1-list3"],
      link: "air-freight",
    },
    {
      icon: "fa-solid fa-truck-fast",
      color: "text-success",
      title: "service-card2-title",
      text: "service-card2-text",
      list: [
        "service-card2-list1",
        "service-card2-list2",
        "service-card2-list3",
        "service-card2-list4",
      ],
      link: "road-transport",
    },
    {
      icon: "fa-solid fa-train",
      color: "text-warning",
      title: "service-card6-title",
      text: "service-card6-text",
      list: ["service-card6-list1", "service-card6-list2", "service-card6-list3"],
      link: "multimodal",
    },
    {
      icon: "fa-solid fa-door-open",
      color: "text-info",
      title: "service-card4-title",
      text: "service-card4-text",
      list: ["service-card4-list1", "service-card4-list2", "service-card4-list3"],
      link: "door-to-door",
    },
    {
      icon: "fa-solid fa-location-crosshairs",
      color: "text-primary",
      title: "service-card5-title",
      text: "service-card5-text",
      list: ["service-card5-list1", "service-card5-list2", "service-card5-list3"],
      link: "4pl-logistics",
    },
    {
      icon: "fa-solid fa-users",
      color: "text-danger",
      title: "service-card3-title",
      text: "service-card3-text",
      list: ["service-card3-list1", "service-card3-list2", "service-card3-list4"],
      link: "customs-clearance",
    },
  ];

  return (
    <section id="services" className="py-5">
      <div className="container" style={{ maxWidth: "1200px" }}>
        <div className="row mb-5">
          <div className="col-12 text-center">
            <h2 className="display-5 fw-bold mb-3">{t("service-title")}</h2>
          </div>
        </div>

        <div className="row g-4">
          {services.map((service, index) => (
            <div key={index} className="col-12 col-md-6 col-lg-4 d-flex">
              <Link href={`/${language}/services/${service.link}`} className="text-decoration-none w-100">
                <div className="service-card card text-center border-0 h-100 hover-card w-100" style={{ transition: "transform 0.3s ease, box-shadow 0.3s ease", display: "flex", flexDirection: "column" }}>
                  <div className="card-body p-4 d-flex flex-column align-items-center">
                    <div className="icon-wrapper mb-4">
                      <i className={`${service.icon} fa-3x service-icon ${service.color}`}></i>
                    </div>
                    <h3 className="h4 mb-3 fw-semibold text-center">{t(service.title)}</h3>
                    <p className="text-muted mb-4 grow text-center">{t(service.text)}</p>
                    <div className="mt-auto w-100">
                      <span className="btn btn-outline-primary btn-sm w-100">Learn More →</span>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
