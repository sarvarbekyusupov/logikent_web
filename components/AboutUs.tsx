"use client";

import { useLanguage } from "@/contexts/LanguageContext";

export default function AboutUs() {
  const { t, language } = useLanguage();

  const content = {
    en: {
      title: "About Us",
      intro: "Logikent is an independent logistics company founded by an expert with years of experience in cargo transportation and supply chain management.",
      card1Title: "Clear & Simple",
      card1Text: "Logistics should be clear, reliable, and manageable. No unnecessary bureaucracy, complex processes, or unjustified costs.",
      card2Title: "Personal Approach",
      card2Text: "Unlike major operators where clients are just numbers, we focus on personal attention, flexibility, and quick decision-making.",
      card3Title: "Full Control",
      card3Text: "We carefully plan each route, control every stage of transportation, and stay always in touch.",
      card4Title: "Faster & Flexible",
      card4Text: "We are faster. More flexible. More attentive to details. Your cargo, our priority.",
      goalTitle: "Our Goal",
      goalText: "To become a long-term logistics partner for companies that value reliability, speed, and professional approach.",
      tagline: "Logikent — logistics with personal responsibility.",
    },
    ru: {
      title: "О нас",
      intro: "Logikent — независимая логистическая компания, основанная экспертом с многолетним опытом в сфере грузоперевозок и управления цепями поставок.",
      card1Title: "Чётко и просто",
      card1Text: "Логистика должна быть понятной, надёжной и управляемой. Без лишней бюрократии, сложных процессов и неоправданных затрат.",
      card2Title: "Персональный подход",
      card2Text: "В отличие от крупных операторов, для которых клиент — это номер в системе, мы делаем ставку на персональный подход, гибкость и быстрое принятие решений.",
      card3Title: "Полный контроль",
      card3Text: "Мы тщательно прорабатываем каждый маршрут, контролируем все этапы перевозки и всегда остаёмся на связи.",
      card4Title: "Быстрее и гибче",
      card4Text: "Мы быстрее. Гибче. Внимательнее к деталям. Ваш груз — наш приоритет.",
      goalTitle: "Наша цель",
      goalText: "Стать долгосрочным логистическим партнёром для компаний, которым важны надёжность, скорость и профессиональный подход.",
      tagline: "Logikent — логистика, за которой стоит личная ответственность.",
    },
    uz: {
      title: "Biz haqimizda",
      intro: "Logikent — yuk tashish va ta'minot zanjiri boshqaruvi sohasida ko'p yillik tajribaga ega bo'lgan mutaxassis tomonidan asos solingan mustaqil logistika kompaniyasi.",
      card1Title: "Tushunarli va oddiy",
      card1Text: "Logistika tushunarli, ishonchli va boshqarilishi kerak. Zaruratsiz byurokratiya, murakkab jarayonlar va asossiz xarajatlarsiz.",
      card2Title: "Shaxsiy yondashuv",
      card2Text: "Katta operatorlardan farqli o'laroq, biz shaxsiy yondashuv, moslashuvchanlik va tez qaror qabul qilishga e'tibor qaratamiz.",
      card3Title: "To'liq nazorat",
      card3Text: "Biz har bir marshrutni diqqat bilan ishlab chiqamiz, tashishning barcha bosqichlarini nazorat qilamiz va har doim aloqadamiz.",
      card4Title: "Tezroq va moslashuvchanroq",
      card4Text: "Biz tezroq. Moslashuvchanroq. Detallarga e'tiborliroq. Sizning yukingiz — bizning ustuvorligimiz.",
      goalTitle: "Bizning maqsadimiz",
      goalText: "Ishonchlilik, tezlik va professional yondashuv muhim bo'lgan kompaniyalar uchun uzoq muddatli logistika hamkoriga aylanish.",
      tagline: "Logikent — shaxsiy mas'uliyat bilan logistika.",
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

        {/* Mission, Vision, Values */}
        <div className="row g-4 mb-5">
          <div className="col-12 text-center mb-3">
            <h3 className="fw-bold" style={{ color: "var(--primary-color)" }}>Our Vision, Values, and Mission</h3>
          </div>
          {[
            { icon: "fa-solid fa-lightbulb", title: language === "ru" ? "Наша миссия" : language === "uz" ? "Bizning vazifamiz" : "Our Mission", text: language === "ru" ? "Наша миссия — способствовать развитию бизнеса наших клиентов, предоставляя быстрые, надёжные и эффективные логистические решения." : language === "uz" ? "Bizning vazifamiz — mijozlar biznesining rivojlanishiga tez, ishonchli va samarali logistika yechimlarini taqdim etish orqali hissa qo'shish." : "Our mission is to contribute to the development of our clients' businesses by providing them with fast, reliable, and efficient logistics solutions." },
            { icon: "fa-solid fa-hand-holding-heart", title: language === "ru" ? "Наше видение" : language === "uz" ? "Bizning ko'rishimiz" : "Our Vision", text: language === "ru" ? "Стать самой надёжной и инновационной логистической компанией в Центральной Азии, занять лидирующие позиции на рынке с передовыми технологиями и качеством сервиса." : language === "uz" ? "Markaziy Osiyodagi eng ishonchli va innovatsion logistika kompaniyasiga aylanish, ilg'or texnologiyalar va xizmat sifati bilan bozorda yetakchi o'rinni egallash." : "To become the most reliable and innovative logistics company in Central Asia, to take a leading position in the market with advanced technologies and quality of service." },
            { icon: "fa-solid fa-gem", title: language === "ru" ? "Наши ценности" : language === "uz" ? "Bizning qadriyatlarimiz" : "Our Values", text: language === "ru" ? "Мы ценим профессионализм, ответственность и ориентацию на клиента. Стремимся построить долгосрочные партнёрские отношения на основе доверия и взаимного уважения." : language === "uz" ? "Biz professionalizm, mas'uliyat va mijozlarga yo'naltirilishni qadrlaymiz. Ishonch va o'zaro hurmatga asoslangan uzoq muddatli hamkorlikni qurishga intilamiz." : "We value professionalism, responsibility, and customer focus. We strive to build long-term partnerships with our clients based on trust and mutual respect." },
          ].map((item, index) => (
            <div key={index} className="col-md-4">
              <div className="card border-0 shadow-sm h-100 hover-card" style={{
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
              }}>
                <div className="card-body p-4 text-center">
                  <div className="mb-3">
                    <i className={`${item.icon} fa-3x`} style={{ color: "var(--primary-color)" }}></i>
                  </div>
                  <h5 className="fw-bold mb-3">{item.title}</h5>
                  <p className="text-muted small mb-0" style={{ lineHeight: "1.6" }}>
                    {item.text}
                  </p>
                </div>
              </div>
            </div>
          ))}
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
