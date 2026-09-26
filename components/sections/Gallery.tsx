"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

// ---------------------------------------------------------------------------
// GÖRSELLER — şimdilik projede zaten kullanılan fotoğraflar.
// SPORTIME'ın gerçek fotoğrafları hazır olduğunda yalnızca aşağıdaki `src` / `alt`
// değerlerini değiştirmen yeterli. Dosyaları /public/images/gallery/ altına
// koyup şöyle de yazabilirsin: "/images/gallery/salon.jpg"
// (Kadraj, hover zoom ve animasyon aynı kalır.)
//
// Yerleşim: main = büyük görsel · sideTop / sideBottom = yanındaki 2 küçük
// görsel · wideLeft / wideRight = alttaki geniş görseller.
// ---------------------------------------------------------------------------
type Photo = { src: string; alt: string };

const PHOTOS: Record<
  "main" | "sideTop" | "sideBottom" | "wideLeft" | "wideRight",
  Photo
> = {
  main: {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDj7xtESE28o-V2iuqPXbJnaxnonPLqpUaXMqeu-G9i5HD_Kt0Wf_wFhtrGgsTo0sXK6gVaQew7WJ6WSskcVrv9LfcYkWZvgoFhfAkkAoS0YujooZjOsKQUnFrYMvkeguc5rnpXeEuTi9CXj690NxP2Jp0W3jnZ9WkdQ0FNyBMRSmiEfQMLPwPArZnEOotbo-ZZTy15-DIw6W-boQ8-TzlbnCouakGAEponhoA91qOogfOBDdG8B0J-4A",
    alt: "SPORTIME AKHİSAR geniş açılı stüdyo görünümü",
  },
  sideTop: {
    src: "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=2400&auto=format&fit=crop",
    alt: "Reformer pilates ekipmanı",
  },
  sideBottom: {
    src: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=2400&auto=format&fit=crop",
    alt: "Yoga ve esneme alanı",
  },
  wideLeft: {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuB4-4HeqvJ5z9osYf16rgyPlcUAbTd3jIpBNgZoCYhPUsWTGobEwr2Qafr7OrwodNqUJi5__8rKNkP1DPhfiFNz_RuzJMhWDb067dpfY2sisodXhuyd34MfsG6EFdRD_C73RZWRoernkeFyiu9xOf_YYSNAfcSuStla5vqZ7x8kiHPP7Wqp0JWovlzoLZjZJiKPiHRVd0HlGJ6yIVX6zzMSp2UvG9l-v_8jUaSeDe6lAtjdAFnyC_9_4g",
    alt: "Fitness antrenmanı yapan üye",
  },
  wideRight: {
    src: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=2400&auto=format&fit=crop",
    alt: "SPORTIME AKHİSAR stüdyo görünümü",
  },
};

// Element ekrana ilk kez girdiğinde bir kez `true` olur (animasyon tekrar etmez).
function useInView<T extends HTMLElement>(threshold: number) {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (typeof IntersectionObserver === "undefined") {
      setInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return [ref, inView] as const;
}

function GalleryPhoto({
  photo,
  sizes,
  className,
  delay = "",
  label = false,
}: {
  photo: Photo;
  sizes: string;
  // Boyut / yerleşim sınıfları (aspect, yükseklik, col-span…)
  className: string;
  // Aynı satırdaki görsellerin çok kısa aralıkla belirmesi için (opsiyonel).
  delay?: string;
  // Küçük "SPORTIME AKHİSAR" etiketi (opsiyonel).
  label?: boolean;
}) {
  const [ref, inView] = useInView<HTMLDivElement>(0.15);

  return (
    <div
      ref={ref}
      className={`relative transition-all duration-1000 ${delay} ${
        inView ? "opacity-100 scale-100" : "opacity-0 scale-[0.97]"
      } ${className}`}
    >
      <div className="group absolute inset-0 overflow-hidden rounded-lg bg-surface-container-high">
        <Image
          alt={photo.alt}
          src={photo.src}
          fill
          sizes={sizes}
          className="object-cover object-center contrast-[1.05] transition-transform duration-700 group-hover:scale-[1.04]"
        />

        {label && (
          <>
            {/* Yalnızca etiketin okunması için çok hafif alt gölge */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/45 to-transparent"
            />
            <div className="absolute bottom-5 left-5 flex items-center gap-3">
              <span aria-hidden="true" className="block h-[2px] w-4 bg-primary" />
              <span className="text-[11px] font-medium tracking-[0.18em] text-white/90">
                SPORTIME AKHİSAR
              </span>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

// Satır yükseklikleri (tablet / masaüstü). Mobilde her görsel 4:3 — kırpma yok.
const ROW_1 = "md:h-[440px] lg:h-[600px]";
const ROW_2 = "md:h-[300px] lg:h-[400px]";

const fadeUpHeader = (show: boolean) =>
  `transition-all duration-700 ${
    show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
  }`;

export default function Gallery() {
  const [headerRef, headerInView] = useInView<HTMLDivElement>(0.3);

  return (
    <section className="w-full bg-surface-container py-24 lg:py-32" id="galeri">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div ref={headerRef} className={`mb-12 lg:mb-16 ${fadeUpHeader(headerInView)}`}>
          <h2 className="font-display-lg text-display-lg-mobile lg:text-display-lg text-on-surface leading-[1.05]">
            SPORTIME&rsquo;IN İÇİNDEN
          </h2>
          <p className="font-body-lg text-body-lg text-secondary mt-4 max-w-xl">
            Stüdyomuzu, ekipmanlarımızı ve atmosferimizi keşfet.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 lg:gap-6">
          {/* Satır 1: büyük görsel + yanında 2 küçük görsel */}
          <GalleryPhoto
            photo={PHOTOS.main}
            sizes="(min-width: 768px) 66vw, 100vw"
            className={`md:col-span-8 aspect-[4/3] md:aspect-auto ${ROW_1}`}
            label
          />

          <div
            className={`md:col-span-4 grid grid-cols-1 md:grid-rows-2 gap-4 lg:gap-6 ${ROW_1}`}
          >
            <GalleryPhoto
              photo={PHOTOS.sideTop}
              sizes="(min-width: 768px) 33vw, 100vw"
              className="aspect-[4/3] md:aspect-auto"
              delay="md:delay-100"
            />
            <GalleryPhoto
              photo={PHOTOS.sideBottom}
              sizes="(min-width: 768px) 33vw, 100vw"
              className="aspect-[4/3] md:aspect-auto"
              delay="md:delay-200"
            />
          </div>

          {/* Satır 2: geniş görseller (asimetrik oran) */}
          <GalleryPhoto
            photo={PHOTOS.wideLeft}
            sizes="(min-width: 768px) 42vw, 100vw"
            className={`md:col-span-5 aspect-[4/3] md:aspect-auto ${ROW_2}`}
          />
          <GalleryPhoto
            photo={PHOTOS.wideRight}
            sizes="(min-width: 768px) 58vw, 100vw"
            className={`md:col-span-7 aspect-[4/3] md:aspect-auto ${ROW_2}`}
            delay="md:delay-100"
            label
          />
        </div>
      </div>
    </section>
  );
}
