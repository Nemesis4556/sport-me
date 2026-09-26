# SPORTIME AKHİSAR — Web Sitesi

> Bu proje, RABAM Fitness Club demo şablonundan SPORTIME AKHİSAR (Fitness ·
> Reformer Pilates · Hamile Pilatesi · Yoga stüdyosu) markasına uyarlanmıştır.
> Marka rengi, logo, tüm metinler ve iletişim bilgileri Instagram profilindeki
> (@sportimeakhisar) verilere göre güncellendi. Aşağıdaki notların büyük kısmı
> hâlâ geçerli — sadece marka adı/renkleri değişti.

Next.js 14 (App Router) + TypeScript + Tailwind CSS ile, onaylanmış **"Obsidian Kinetic"**
tasarım referansı (`code.html` / `DESIGN.md` Stitch export'u) birebir uygulanarak
production-ready şekilde oluşturuldu.

## Kurulum

```bash
npm install
npm run dev
```

`http://localhost:3000` adresinden görüntüleyebilirsin.

## Build kontrolü (ÖNEMLİ)

Bu proje ağ erişimi olmayan bir ortamda hazırlandı, bu yüzden `npm install` ve
`npm run build` burada **çalıştırılamadı**. Teslim almadan önce kendi
makinende mutlaka çalıştır:

```bash
npm install
npm run build
npm run lint
```

Çıkan TypeScript/ESLint hatalarını bildirirsen hızlıca düzeltirim.

## Klasör yapısı

```
app/
  layout.tsx      → font (Manrope), metadata, Header/Footer
  page.tsx         → tüm section'ları sırayla dizer
  globals.css      → Tailwind base + global reset, odak/seçim/hareket davranışı
components/
  layout/
    Header.tsx     → sabit navbar + mobil hamburger menü
    Footer.tsx
  sections/
    Hero.tsx
    About.tsx        (#hakkimizda)
    Services.tsx      (#hizmetler)
    Gallery.tsx        (#galeri)
    WhyRabam.tsx        (#neden-sportime)
    Cta.tsx
    Contact.tsx          (#iletisim)
  ui/
    Icon.tsx       → Material Symbols yerine kullanılan inline SVG ikon seti
tailwind.config.ts → DESIGN.md'deki renk/tipografi/spacing token'ları birebir
next.config.js     → görsel referans domaini (lh3.googleusercontent.com) izinli
```

## Bilinmesi gerekenler

- **Font sistemi**: Site genelinde tek font ailesi olarak **Manrope** kullanılıyor
  (`app/layout.tsx`, `next/font/google`). Başlıklar (`display-xl/lg`,
  `headline-lg/md`) 700–800 ağırlıkta, gövde metinleri (`body-lg/md/sm`)
  400 ağırlıkta, etiket/UI metinleri (`label-lg/md/sm`) 500–600 ağırlıkta —
  bkz. `tailwind.config.ts` → `fontSize`. Condensed/bodybuilding tarzı bir
  font kullanılmıyor.
- **Hero görseli**: Unsplash'tan, Unsplash Lisansı altında ücretsiz kullanılan
  bir reformer pilates fotoğrafı kullanıldı. Gerçek stüdyo fotoğrafın hazır
  olduğunda `components/sections/Hero.tsx` içindeki `src` değerini
  değiştirmen yeterli.
- **Diğer görseller**: Hero dışındaki tüm görseller hâlâ Stitch export'unun
  kullandığı `lh3.googleusercontent.com` üzerindeki geçici üretim
  görselleridir. Şu an `next.config.js` → `images.remotePatterns` ile izinli,
  site bu haliyle çalışır. Ancak bu URL'ler kalıcı bir varlık değil;
  **prodüksiyona almadan önce** gerçek salon fotoğraflarını `/public/images`
  altına koyup ilgili `<Image src="..."/>` referanslarını güncellemeni
  öneririm.
- **Telefon / WhatsApp numarası**: Gerçek numara (`+90 532 564 09 30`,
  `wa.me/905325640930`) `components/sections/Cta.tsx`,
  `components/sections/Contact.tsx` ve `components/layout/Footer.tsx`
  içine işlendi. Numara değişirse bu üç dosyayı güncellemen yeterli.
- **Harita**: Tasarımdaki "harita kartı" statik bir görsel + Google Maps linkidir
  (referans tasarımda da gerçek bir harita embed'i yok); gerçek konum linkini
  `components/sections/Contact.tsx` içindeki `maps.google.com` URL'sinde
  güncelleyebilirsin.
- **Tipografi**: Masaüstünde referansla birebir aynı ölçekler kullanıldı
  (`display-xl`, `display-lg` vb.). Mobilde `DESIGN.md`'de tanımlı
  `*-mobile` ölçekleri (`display-xl-mobile`, `display-lg-mobile`) devreye girer.
- **Renkler / border-radius / gölge / geçişler (en son güncellendi)**: Tüm
  renk token'ları `tailwind.config.ts` içinde açık, krem/beyaz ağırlıklı bir
  temaya çevrildi (siyah/koyu tema kaldırıldı) —
  - Arka plan: sıcak krem/fildişi tonlar (`#faf6ee` taban, `#fffdf8` — `#e2d4b4`
    arası krem kart katmanları). Site artık koyu değil, açık temalı.
  - Metin: koyu mürekkep tonu (`on-surface` = `#2b241c`) — sayfa geneli beyaz
    zemin üstünde okunaklı koyu metin kullanıyor.
  - Tek vurgu rengi: SPORTIME logosundaki gradyan halkadan alınan pembe/magenta
    (`#d6127c`, `primary` / `primary-container`).
  - Hero fotoğrafı üstündeki başlık/menü gibi görsel üstü metinler, fotoğrafın
    koyu karartma katmanı sayesinde hâlâ beyaz (`text-white`) — bu, genel
    krem tema ile çelişmez, yalnızca fotoğraf okunabilirliği içindir.
  - Lime/yeşil vurgu (`tertiary`) tamamen kaldırıldı; WhatsApp buton rengi de
    marka yeşili yerine nötr koyu tona çekildi (tek vurgu rengi kuralına
    uysun diye).
  - Mor/mavi/neon hiçbir yerde tanımlı değil.
- **Logo**: Header ve Footer'daki SPORTIME logosu şimdilik kaldırıldı, yerine
  metin bazlı bir "SPORTIME AKHİSAR" wordmark'ı kondu. Logo dosyası
  `public/images/sportime-logo.png` altında duruyor — geri eklemek istersen
  `components/layout/Header.tsx` ve `Footer.tsx` içindeki wordmark `<span>`'ını
  `<Image src="/images/sportime-logo.png" .../>` ile değiştirebilirsin.
- **Web sitesi linki**: `components/sections/Contact.tsx` içindeki "Web Sitesi"
  satırı (kırık olduğu bildirilen `sportime.kyani.net` linki) kaldırıldı.
  Geçerli bir link olduğunda tekrar eklenebilir.
  - `boxShadow` skalası Tailwind'in varsayılan yumuşak/parlak gölgelerinden
    çok daha sade ve koyu/kontrastlı hale getirildi (`shadow-2xl` kullanan
    tek yer — About görseli — otomatik olarak sadeleşti).
  - `borderRadius` artık `0`'a sabitlenmiş değil; keskin köşe hâlâ varsayılan
    ama ileride kullanılabilecek çok hafif bir radius skalası (`2–8px`)
    tanımlandı. Şu an hiçbir component `rounded-*` class'ı kullanmıyor,
    yani bu değişikliğin görsel bir etkisi yok — altyapı hazırlığı.
  - Global geçiş süresi/eğrisi (`transitionDuration`/`transitionTimingFunction`
    `DEFAULT`) daha yumuşak, Apple benzeri bir eğriye çekildi; bu, explicit
    `duration-*`/`ease-*` vermeyen `transition-colors` gibi kullanımları
    otomatik etkiler.
  - `globals.css`'e marka pembesiyle `:focus-visible` halkası, pembe metin
    seçim rengi ve `prefers-reduced-motion` desteği eklendi.
- **Bu turda BİLEREK dokunulmayanlar**: Talimat gereği bu pas yalnızca
  `tailwind.config.ts` / `globals.css` (global tasarım altyapısı) ile
  sınırlandı. Component/section dosyaları değişmedi — yani mimari grid
  overlay'leri, hairline `border-white/10` çizgileri, `[01 / ...]` template
  etiketleri, yoğun `uppercase` kullanımı, ağır `grayscale` filtreleri ve
  dekoratif kutular hâlâ önceki haliyle duruyor. Bunlar bir sonraki,
  component-seviyeli pasın konusu.
