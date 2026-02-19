import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import LayoutWrapper from "@/components/LayoutWrapper";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Logikent - Transport & Logistics Services in Uzbekistan",
  description: "Your Trusted Partner in Logistics Solutions. We specialize in shipping, freight forwarding, customs clearance, cargo consolidation, and door-to-door delivery services from China, Turkey, EU, UAE to Uzbekistan.",
  keywords: ["logistics", "cargo", "shipping", "freight forwarding", "customs clearance", "cargo consolidation", "Uzbekistan", "China", "Turkey", "UAE", "Europe", "transport", "delivery", "import", "export"],
  authors: [{ name: "Logikent" }],
  creator: "Logikent",
  publisher: "Logikent",
  metadataBase: new URL("https://logikent.uz"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://logikent.uz",
    title: "Logikent - Transport & Logistics Services in Uzbekistan",
    description: "Your Trusted Partner in Logistics Solutions. We specialize in shipping, freight forwarding, customs clearance, cargo consolidation, and door-to-door delivery services.",
    siteName: "Logikent",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Logikent Logistics",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Logikent - Transport & Logistics Services",
    description: "Your Trusted Partner in Logistics Solutions. We specialize in shipping, freight forwarding, and customs clearance services.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html style={{ scrollBehavior: "smooth" }}>
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
          rel="stylesheet"
        />
      </head>
      <body className={`${poppins.variable} antialiased`}>
        <LayoutWrapper>
          {children}
          <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js" />

          {/* Structured Data - Local Business */}
          <Script id="structured-data" type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Logikent",
              description: "Transport & Logistics Services in Uzbekistan. Shipping, freight forwarding, customs clearance, cargo consolidation.",
              url: "https://logikent.uz",
              telephone: "+998977337958",
              email: ["info@logikent.uz", "sales@logikent.uz"],
              address: {
                "@type": "PostalAddress",
                addressLocality: "Tashkent",
                addressCountry: "UZ",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 41.361146,
                longitude: 69.231038,
              },
              openingHours: "Mo-Fr 09:00-18:00",
              sameAs: [
                "https://t.me/Res_hub_uz",
                "https://www.instagram.com/solwindenergy.uz/",
              ],
              priceRange: "$$",
            })}
          </Script>
        </LayoutWrapper>
      </body>
    </html>
  );
}
