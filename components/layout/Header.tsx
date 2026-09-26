"use client";

import { useEffect, useState } from "react";

const NAV_LINKS = [
  { label: "Ana Sayfa", href: "#top" },
  { label: "Hakkımızda", href: "#hakkimizda" },
  { label: "Hizmetler", href: "#hizmetler" },
  { label: "Galeri", href: "#galeri" },
  { label: "İletişim", href: "#iletisim" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Subtle background/blur shift once the page has scrolled — no layout jump.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock page scroll while the mobile panel is open, and allow Escape to close it.
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [menuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 border-b transition-all duration-300 ${
        scrolled
          ? "bg-surface/95 backdrop-blur-lg border-outline/30"
          : "bg-transparent backdrop-blur-none border-transparent"
      }`}
    >
      {/* Slimmer, premium height (was 5rem) — logo and nav stay vertically
          centered via items-center below. Main no longer offsets for this
          height: the header is fixed/overlay by design, sitting on top of
          the hero image on load. When floating over the hero photo the text
          stays white for legibility on the dark photo overlay; once scrolled
          onto the cream page background it switches to dark ink. */}
      <div className="h-16 max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between gap-6">
        {/* Text wordmark — logo geçici olarak kaldırıldı */}
        <a
          href="#top"
          className="flex items-center shrink-0"
          aria-label="SPORTIME AKHİSAR — ana sayfa"
        >
          <span
            className={`font-label-lg text-label-lg tracking-[0.08em] transition-colors duration-300 ${
              scrolled ? "text-on-surface" : "text-white"
            }`}
          >
            SPORTIME <span className="text-primary">AKHİSAR</span>
          </span>
        </a>

        {/* Desktop navigation */}
        <nav className="hidden lg:flex items-center gap-9">
          {NAV_LINKS.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              aria-current={i === 0 ? "page" : undefined}
              className={`text-[15px] transition-colors duration-200 ${
                scrolled
                  ? i === 0
                    ? "text-on-surface font-semibold"
                    : "text-on-surface-variant hover:text-on-surface font-medium"
                  : i === 0
                    ? "text-white font-semibold"
                    : "text-white/70 hover:text-white font-medium"
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA + mobile toggle */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href="#iletisim"
            className="hidden sm:inline-flex items-center justify-center rounded-md bg-primary-container text-on-primary-container text-[14px] font-semibold px-5 py-2.5 transition-colors duration-200 hover:bg-on-surface hover:text-surface"
          >
            Bilgi Al
          </a>

          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            aria-label={menuOpen ? "Menüyü kapat" : "Menüyü aç"}
            className={`lg:hidden w-10 h-10 flex items-center justify-center rounded-md transition-colors duration-300 ${
              scrolled ? "text-on-surface" : "text-white"
            }`}
          >
            <span className="relative block w-5 h-4">
              <span
                className={`absolute left-0 top-0 w-5 h-[1.5px] bg-current transition-transform duration-200 ${
                  menuOpen ? "translate-y-[7px] rotate-45" : ""
                }`}
              />
              <span
                className={`absolute left-0 top-1/2 -translate-y-1/2 w-5 h-[1.5px] bg-current transition-opacity duration-150 ${
                  menuOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute left-0 bottom-0 w-5 h-[1.5px] bg-current transition-transform duration-200 ${
                  menuOpen ? "-translate-y-[7px] -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>
      </div>

      {/* Mobile navigation panel — large, legible, fast fade/height transition */}
      <nav
        id="mobile-nav"
        aria-hidden={!menuOpen}
        style={{ pointerEvents: menuOpen ? "auto" : "none" }}
        className={`lg:hidden overflow-hidden bg-surface border-t transition-[max-height,opacity] duration-200 ease-out ${
          menuOpen ? "max-h-[28rem] opacity-100 border-outline/30" : "max-h-0 opacity-0 border-transparent"
        }`}
      >
        <div className="flex flex-col divide-y divide-outline/20 px-6 py-2">
          {NAV_LINKS.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              tabIndex={menuOpen ? 0 : -1}
              onClick={() => setMenuOpen(false)}
              className={`py-4 text-xl transition-colors duration-200 ${
                i === 0 ? "text-on-surface font-semibold" : "text-on-surface-variant font-medium"
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#iletisim"
            tabIndex={menuOpen ? 0 : -1}
            onClick={() => setMenuOpen(false)}
            className="mt-4 mb-6 inline-flex items-center justify-center rounded-md bg-primary-container text-on-primary-container text-base font-semibold px-5 py-3.5"
          >
            Bilgi Al
          </a>
        </div>
      </nav>
    </header>
  );
}
