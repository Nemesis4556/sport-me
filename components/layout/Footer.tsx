import Icon from "@/components/ui/Icon";

const NAV_LINKS = [
  { label: "Ana Sayfa", href: "#top" },
  { label: "Hakkımızda", href: "#hakkimizda" },
  { label: "Galeri", href: "#galeri" },
  { label: "İletişim", href: "#iletisim" },
];

const SERVICE_LINKS = [
  { label: "Fitness", href: "#hizmetler" },
  { label: "Reformer Pilates", href: "#hizmetler" },
  { label: "Hamile Pilatesi", href: "#hizmetler" },
  { label: "Yoga", href: "#hizmetler" },
];

const CONTACT_LINKS = [
  { label: "Akhisar / Manisa", href: "#iletisim" },
  { label: "+90 532 564 09 30", href: "tel:+905325640930" },
  { label: "@sportimeakhisar", href: "https://instagram.com/sportimeakhisar" },
];

export default function Footer() {
  return (
    <footer className="w-full bg-surface-container">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-16 pb-10">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-12 pb-10">
          {/* Brand */}
          <div className="flex flex-col gap-4 max-w-xs">
            <span className="font-label-lg text-label-lg tracking-[0.08em] text-on-surface">
              SPORTIME <span className="text-primary">AKHİSAR</span>
            </span>
            <p className="font-body-sm text-body-sm text-on-surface-variant">
              Akhisar / Manisa
            </p>
            <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
              Kadınlara özel fitness, pilates ve yoga programlarıyla sağlıklı yaşamın
              tek adresi.
            </p>
          </div>

          {/* Link columns */}
          <div className="flex flex-wrap gap-x-10 sm:gap-x-16 gap-y-10">
            <div className="flex flex-col gap-3">
              <span className="font-label-sm text-label-sm text-on-surface-variant">
                Navigasyon
              </span>
              <ul className="flex flex-col gap-2 font-body-sm text-body-sm text-on-surface-variant">
                {NAV_LINKS.map((l) => (
                  <li key={l.href}>
                    <a href={l.href} className="hover:text-on-surface transition-colors">
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col gap-3">
              <span className="font-label-sm text-label-sm text-on-surface-variant">
                Hizmetler
              </span>
              <ul className="flex flex-col gap-2 font-body-sm text-body-sm text-on-surface-variant">
                {SERVICE_LINKS.map((s) => (
                  <li key={s.label}>
                    <a href={s.href} className="hover:text-on-surface transition-colors">
                      {s.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col gap-3">
              <span className="font-label-sm text-label-sm text-on-surface-variant">
                İletişim
              </span>
              <ul className="flex flex-col gap-2 font-body-sm text-body-sm text-on-surface-variant">
                {CONTACT_LINKS.map((c) => (
                  <li key={c.label}>
                    <a href={c.href} className="hover:text-on-surface transition-colors">
                      {c.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 border-t border-outline/30 flex flex-col sm:flex-row items-center justify-between gap-5">
          <p className="font-body-sm text-body-sm text-on-surface-variant">
            © 2026 SPORTIME AKHİSAR
          </p>
          <div className="flex items-center gap-2">
            <a
              href="https://instagram.com/sportimeakhisar"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="p-2.5 -m-2.5 text-on-surface-variant hover:text-on-surface transition-colors"
            >
              <Icon name="share" width={18} height={18} />
            </a>
            <a
              href="https://wa.me/905325640930"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="p-2.5 -m-2.5 text-on-surface-variant hover:text-on-surface transition-colors"
            >
              <Icon name="chat" width={18} height={18} />
            </a>
            <a
              href="tel:+905325640930"
              aria-label="Telefon"
              className="p-2.5 -m-2.5 text-on-surface-variant hover:text-on-surface transition-colors"
            >
              <Icon name="call" width={18} height={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
