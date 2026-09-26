"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

// SPORTIME stüdyosunun gerçek fotoğrafı hazır olduğunda yalnızca bu iki satırı
// değiştirmen yeterli — geri kalan her şey (karartma, kadraj, zoom) aynı kalır.
const HERO_IMAGE_SRC =
  "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=2400&auto=format&fit=crop";
const HERO_IMAGE_ALT = "SPORTIME AKHİSAR reformer pilates stüdyosu";

function HeroSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section
      id="top"
      className="relative w-full min-h-[100svh] flex flex-col justify-center overflow-hidden bg-surface-container-lowest"
    >
      {/* Background photo — natural color, light darkening only, very slow zoom-in */}
      <div className="absolute inset-0 z-0">
        <Image
          alt={HERO_IMAGE_ALT}
          src={HERO_IMAGE_SRC}
          fill
          priority
          sizes="100vw"
          className={`object-cover object-center contrast-[1.05] transition-transform ease-out duration-[20000ms] ${
            mounted ? "scale-105" : "scale-100"
          }`}
        />
        {/* Even, light darkening for legibility — no grayscale, no grid, no lines */}
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[90rem] mx-auto px-6 lg:px-16 w-full">
        <span
          className={`block text-[13px] tracking-[0.15em] text-white/70 font-medium mb-5 transition-all duration-500 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
          }`}
        >
          AKHİSAR / MANİSA
        </span>

        <h1
          className={`font-display-xl text-display-xl-mobile lg:text-display-xl text-white max-w-4xl leading-[0.95] transition-all duration-700 delay-150 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          BEDENİNE
          <br />
          <span className="text-primary-container">ŞEKİL VER.</span>
        </h1>

        <p
          className={`font-body-lg text-body-lg text-white/80 max-w-xl mt-6 transition-all duration-700 delay-300 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          SPORTIME AKHİSAR&apos;da Fitness, Reformer Pilates, Hamile Pilatesi ve Yoga
          ile sağlıklı yaşamın tek adresine hoş geldin.
        </p>

        <div
          className={`flex flex-wrap items-center gap-4 mt-10 transition-all duration-700 delay-500 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <a
            href="#iletisim"
            className="inline-flex items-center justify-center rounded-md bg-primary-container text-on-primary-container text-[15px] font-semibold px-7 py-3.5 transition-colors duration-200 hover:bg-on-surface hover:text-surface"
          >
            Ücretsiz Tanışma Seansı
          </a>
          <a
            href="#hakkimizda"
            className="inline-flex items-center justify-center rounded-md border border-white/35 text-white text-[15px] font-semibold px-7 py-3.5 transition-colors duration-200 hover:bg-white/10 hover:border-white/60"
          >
            Stüdyoyu Keşfet
          </a>
        </div>
      </div>
    </section>
  );
}

// ---------------------------------------------------------------------------
// METRICS — Hero'nun hemen altındaki bilgi bandı
// Kart yok, kutu yok: yalnızca ince ayraçlar. Mobilde 2x2, masaüstünde 4 kolon.
// Kırmızı sadece her metrikte aynı küçük çizgi vurgusunda kullanılır.
// ---------------------------------------------------------------------------
type Metric = {
  value: string;
  unit?: string;
  label: string;
  // Ayraç + iç boşluk: mobil 2x2 ve masaüstü 4 kolon düzenini birlikte yönetir.
  cell: string;
};

const METRICS: Metric[] = [
  {
    value: "10 B+",
    label: "Instagram Takipçisi",
    cell: "border-r border-b pr-4 lg:border-b-0 lg:pr-8",
  },
  {
    value: "REFORMER",
    label: "Pilates Stüdyosu",
    cell: "border-b pl-4 lg:border-b-0 lg:border-r lg:px-8",
  },
  {
    value: "4 ALAN",
    label: "Fitness · Pilates · Yoga",
    cell: "border-r pr-4 lg:px-8",
  },
  {
    value: "06:00 — 22:00",
    label: "Çalışma Saatleri",
    cell: "pl-4 lg:pl-8",
  },
];

function MetricsBar() {
  return (
    <section
      aria-label="SPORTIME AKHİSAR öne çıkan bilgiler"
      className="w-full bg-surface border-y border-outline/30"
    >
      <div className="max-w-[90rem] mx-auto px-6 lg:px-16">
        <ul className="grid grid-cols-2 lg:grid-cols-4">
          {METRICS.map((m) => (
            <li
              key={m.label}
              className={`group border-outline/30 py-6 lg:py-9 ${m.cell}`}
            >
              {/* Tek, küçük pembe vurgu */}
              <span
                aria-hidden="true"
                className="block h-[2px] w-5 mb-4 bg-primary/70 transition-colors duration-300 group-hover:bg-primary"
              />

              <p className="font-display-lg font-extrabold uppercase leading-none tracking-[-0.01em] [word-spacing:0.14em] whitespace-normal sm:whitespace-nowrap tabular-nums text-on-surface text-[clamp(1rem,4.6vw,1.5rem)] sm:text-[1.75rem] lg:text-[clamp(1.5rem,2.4vw,1.9rem)] transition-colors duration-300 group-hover:text-primary">
                {m.value}
                {m.unit && (
                  <span className="ml-1 text-[0.6em] font-bold tracking-normal text-on-surface-variant">
                    {m.unit}
                  </span>
                )}
              </p>

              <p className="mt-2.5 text-[12px] lg:text-[13px] leading-snug tracking-[0.02em] text-on-surface-variant transition-colors duration-300 group-hover:text-on-surface">
                {m.label}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default function Hero() {
  return (
    <>
      <HeroSection />
      <MetricsBar />
    </>
  );
}
