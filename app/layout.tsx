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

export const metadata: Metadata = {
  metadataBase: new URL("https://sportime.kyani.net"),
  title: "SPORTIME AKHİSAR | Fitness, Pilates & Yoga Stüdyosu",
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
  openGraph: {
    title: "SPORTIME AKHİSAR | Fitness, Pilates & Yoga Stüdyosu",
    description:
      "Akhisar'da fitness, reformer pilates, hamile pilatesi ve yoga ile sağlıklı yaşamın tek adresi.",
    locale: "tr_TR",
    type: "website",
    siteName: "SPORTIME AKHİSAR",
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
