import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import "./globals.css";

// Single modern, corporate, premium typeface for the whole site.
// Headings use weights 700–800, body copy uses 400–500 (see tailwind.config.ts).
const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-manrope",
  display: "swap",
});

const SITE_URL = "https://sportime.kyani.net";
const SHARE_TITLE = "SPORTIME AKHİSAR | Fitness, Pilates & Yoga Stüdyosu";
const SHARE_DESCRIPTION =
  "Akhisar'da fitness, reformer pilates, hamile pilatesi ve yoga ile sağlıklı yaşamın tek adresi.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: SHARE_TITLE,
  description:
    "SPORTIME AKHİSAR — Akhisar'da fitness, reformer pilates, hamile pilatesi ve yoga ile sağlıklı yaşamın tek adresi. Uzman kadın eğitmen kadrosu ve samimi stüdyo ortamı.",
  keywords: [
    "Akhisar pilates",
    "Akhisar yoga",
    "Akhisar fitness",
    "reformer pilates Akhisar",
    "hamile pilatesi Akhisar",
    "Sportime Akhisar",
  ],
  // NOT: WhatsApp, Instagram, Facebook vb. uygulamalar link paylaşım
  // kartını (başlık + açıklama + görsel) bu openGraph/twitter alanlarından
  // okur. "images" alanı olmadan link, önizlemesiz/kırık görünür.
  openGraph: {
    title: SHARE_TITLE,
    description: SHARE_DESCRIPTION,
    url: SITE_URL,
    locale: "tr_TR",
    type: "website",
    siteName: "SPORTIME AKHİSAR",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "SPORTIME AKHİSAR — Sağlıklı Yaşamın Tek Adresi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SHARE_TITLE,
    description: SHARE_DESCRIPTION,
    images: ["/images/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className="dark">
      <body
        className={`${manrope.variable} font-body-md text-body-md bg-background text-on-surface antialiased`}
      >
        <Header />
        <main className="w-full bg-background">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
