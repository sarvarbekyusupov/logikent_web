"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import Link from "next/link";

export default function AboutUs() {
  const { t, language } = useLanguage();

  const content = {
    en: {
      title: "About Us",
      intro: "Your trusted logistics partner with years of experience in cargo transportation and supply chain management.",
      card1Title: "Clear & Simple",
      card1Text: "Transparent pricing, no hidden costs, straightforward processes.",
      card2Title: "Personal Approach",
      card2Text: "Dedicated manager for each client with flexible solutions.",
      card3Title: "Full Control",
      card3Text: "Real-time tracking and constant communication throughout.",
      card4Title: "Fast & Flexible",
      card4Text: "Quick decision-making and attentive to every detail.",
      goalTitle: "Our Goal",
      goalText: "Your long-term logistics partner for reliable, efficient cargo transport.",
      tagline: "Logikent — logistics with personal responsibility.",
      learnMore: "Learn More About Us",
    },
    ru: {
      title: "О нас",
      intro: "Ваш надежный партнер в логистике с многолетним опытом грузоперевозок.",
      card1Title: "Чётко и просто",
      card1Text: "Прозрачные цены, без скрытых платежей и сложностей.",
      card2Title: "Персональный подход",
      card2Text: "Персональный менеджер и гибкие решения для каждого клиента.",
      card3Title: "Полный контроль",
      card3Text: "Отслеживание в реальном времени и постоянная связь.",
      card4Title: "Быстро и гибко",
      card4Text: "Быстрые решения и внимание к каждой детали.",
      goalTitle: "Наша цель",
      goalText: "Ваш долгосрочный партнер по надежной транспортировке грузов.",
      tagline: "Logikent — логистика, за которой стоит личная ответственность.",
      learnMore: "Узнать больше о нас",
    },
    uz: {
      title: "Biz haqimizda",
      intro: "Sizning ishonchli logistika hamkoringiz - ko'p yillik tajriba bilan.",
      card1Title: "Tushunarli va oddiy",
      card1Text: "Shaffof narxlar, yashirilgan to'lovlar va murakkabliklarsiz.",
      card2Title: "Shaxsiy yondashuv",
      card2Text: "Har bir mijoz uchun shaxsiy menejer va moslashuvchan yechimlar.",
      card3Title: "To'liq nazorat",
      card3Text: "Real vaqtda kuzatuv va doimiy aloqa.",
      card4Title: "Tez va moslashuvchan",
      card4Text: "Tez qarorlar va har bir detalga e'tibor.",
      goalTitle: "Bizning maqsadimiz",
      goalText: "Ishonchli va samarali yuk tashish uchun sizning uzoq muddatli hamkoringiz.",
      tagline: "Logikent — shaxsiy mas'uliyat bilan logistika.",
      learnMore: "Biz haqida ko'proq",
    },
  };

  const currentContent = content[language as keyof typeof content];

  const values = [
    { icon: "fa-check-circle", color: "#28a745", title: currentContent.card1Title, text: currentContent.card1Text },
    { icon: "fa-users", color: "#007bff", title: currentContent.card2Title, text: currentContent.card2Text },
    { icon: "fa-route", color: "#fd7e14", title: currentContent.card3Title, text: currentContent.card3Text },
    { icon: "fa-bolt", color: "#ffc107", title: currentContent.card4Title, text: currentContent.card4Text },
  ];

  return (
    <section id="about-us" className="py-5 bg-light">
      <div className="container" style={{ maxWidth: "1200px" }}>
        {/* Title */}
        <div className="row mb-5">
          <div className="col-12 text-center">
            <h2 className="section-title">{currentContent.title}</h2>
            <p className="lead text-muted mt-3" style={{ maxWidth: "700px", marginInline: "auto" }}>
              {currentContent.intro}
            </p>
          </div>
        </div>

        {/* Value Cards */}
        <div className="row g-4 mb-5">
          {values.map((value, index) => (
            <div key={index} className="col-md-6 col-lg-3">
              <div className="card border-0 shadow-sm h-100 hover-card" style={{
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
              }}>
                <div className="card-body p-4 text-center">
                  <div
                    className="rounded-circle d-inline-flex align-items-center justify-content-center mb-3"
                    style={{
                      width: "70px",
                      height: "70px",
                      backgroundColor: value.color + "20",
                    }}
                  >
                    <i className={`fas ${value.icon} fa-2x`} style={{ color: value.color }}></i>
                  </div>
                  <h5 className="fw-bold mb-3">{value.title}</h5>
                  <p className="text-muted small mb-0" style={{ lineHeight: "1.6" }}>
                    {value.text}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="row mb-5">
          <div className="col-12 text-center">
            <Link href={`/${language}/about`} className="btn btn-primary btn-lg px-5" style={{ borderRadius: "50px" }}>
              {currentContent.learnMore} →
            </Link>
          </div>
        </div>

        {/* Goal Section */}
        <div className="row mb-4">
          <div className="col-12">
            <div className="card border-0 shadow-lg" style={{
              background: "linear-gradient(135deg, var(--primary-color), var(--secondary-color))",
            }}>
              <div className="card-body p-5 text-center text-white">
                <div className="mb-3">
                  <i className="fas fa-bullseye fa-3x opacity-75"></i>
                </div>
                <h4 className="fw-bold mb-3">{currentContent.goalTitle}</h4>
                <p className="mb-0" style={{ fontSize: "1.1rem", maxWidth: "800px", marginInline: "auto" }}>
                  {currentContent.goalText}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Tagline */}
        <div className="row">
          <div className="col-12 text-center">
            <p className="text-muted fst-italic fw-bold mb-0" style={{ fontSize: "1.1rem" }}>
              {currentContent.tagline}
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        .hover-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;
        }
      `}</style>
    </section>
  );
}
