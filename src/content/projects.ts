// ─────────────────────────────────────────────────────────────
// PROJECTS — edit this file to add, remove or reorder work.
// The order of this array is the order on the page.
// ─────────────────────────────────────────────────────────────
import type { Locale } from './i18n';

export const markets = {
  ksa: { en: 'Saudi Arabia', ar: 'السعودية' },
  eg: { en: 'Egypt', ar: 'مصر' },
  de: { en: 'Germany', ar: 'ألمانيا' },
  global: { en: 'Global', ar: 'عالمي' },
  us: { en: 'United States', ar: 'الولايات المتحدة' },
} as const;

export const industries = {
  ecom: { en: 'E-commerce', ar: 'تجارة إلكترونية' },
  saas: { en: 'SaaS', ar: 'SaaS' },
  events: { en: 'Events', ar: 'فعاليات' },
  logistics: { en: 'Logistics', ar: 'شحن وتوصيل' },
  realestate: { en: 'Real estate', ar: 'عقارات' },
  edtech: { en: 'EdTech', ar: 'تقنيات التعليم' },
  nonprofit: { en: 'Nonprofit', ar: 'القطاع غير الربحي' },
  mobility: { en: 'Mobility', ar: 'التنقل' },
  travel: { en: 'Travel', ar: 'سفر وسياحة' },
  consulting: { en: 'Consulting', ar: 'استشارات' },
} as const;

export const platforms = {
  web: { en: 'Website', ar: 'موقع' },
  dash: { en: 'Dashboard', ar: 'لوحة تحكم' },
  mobile: { en: 'Mobile app', ar: 'تطبيق جوال' },
  ds: { en: 'Design system', ar: 'نظام تصميم' },
} as const;

type Copy = { title: string; question: string; org: string };

export type Project = {
  slug: string;
  markets: (keyof typeof markets)[];
  industries: (keyof typeof industries)[];
  platforms: (keyof typeof platforms)[];
  /** Image in /public/covers, or a looping video in /public/media */
  cover?: string;
  video?: { src: string; poster: string };
  /** 'cover' fills the frame from the top-left; 'contain' shows the whole image on `bg` */
  fit?: 'cover' | 'contain';
  bg?: string;
  /** Optional link to a live site or case study */
  href?: string;
  copy: Record<Locale, Copy>;
};

export const projects: Project[] = [
  {
    slug: 'iave',
    markets: ['ksa', 'global'],
    industries: ['events', 'nonprofit'],
    platforms: ['web', 'dash', 'ds'],
    cover: '/covers/iave.webp',
    fit: 'contain',
    bg: '#26252D',
    copy: {
      en: {
        title: 'IAVE World Volunteer Conference Platform',
        question: 'How can volunteers, organizers and partners register, coordinate and manage a global conference in Riyadh from one platform?',
        org: 'Al-Raedah | Ghadan',
      },
      ar: {
        title: 'منصة المؤتمر العالمي للتطوع IAVE',
        question: 'كيف يسجّل المتطوعون والمنظمون والشركاء وينسّقون ويديرون مؤتمراً عالمياً في الرياض من منصة واحدة؟',
        org: 'Al-Raedah | Ghadan',
      },
    },
  },
  {
    slug: 'refad',
    markets: ['ksa'],
    industries: ['consulting', 'nonprofit'],
    platforms: ['web'],
    cover: '/covers/refad.webp',
    fit: 'contain',
    bg: '#2F3550',
    copy: {
      en: {
        title: 'Refad — consulting website',
        question: 'How can a Saudi consulting firm present its services clearly and turn visitors into booked consultations?',
        org: 'Arabic-first website',
      },
      ar: {
        title: 'Refad — موقع استشارات',
        question: 'كيف تعرض شركة استشارات سعودية خدماتها بوضوح وتحوّل الزوار إلى حجوزات استشارات؟',
        org: 'موقع عربي أولاً',
      },
    },
  },
  {
    slug: 'rawaj',
    markets: ['ksa'],
    industries: ['ecom', 'saas'],
    platforms: ['web', 'dash'],
    cover: '/covers/rawaj.webp',
    copy: {
      en: { title: 'Rawaj', question: 'How can Salla stores increase revenue and engagement with ready-made SaaS tools and themes?', org: 'UpSellUp' },
      ar: { title: 'رواج', question: 'كيف تزيد متاجر سلة مبيعاتها وتفاعل عملائها بأدوات SaaS وثيمات جاهزة؟', org: 'UpSellUp' },
    },
  },
  {
    slug: 'shipment',
    markets: ['ksa'],
    industries: ['logistics', 'saas'],
    platforms: ['mobile', 'dash'],
    cover: '/covers/shipment.webp',
    copy: {
      en: { title: 'Shipment Management System', question: 'How can one SaaS system serve B2B and B2C shipments clearly for every user type involved?', org: 'B2B & B2C' },
      ar: { title: 'نظام إدارة الشحنات', question: 'كيف يخدم نظام SaaS واحد شحنات الشركات والأفراد بوضوح لكل نوع من المستخدمين؟', org: 'B2B & B2C' },
    },
  },
  {
    slug: 'travelsin',
    markets: ['us'],
    industries: ['travel'],
    platforms: ['web'],
    video: { src: '/media/travelsin.mp4', poster: '/media/travelsin-poster.webp' },
    fit: 'contain',
    bg: '#F2F3F6',
    copy: {
      en: {
        title: 'Travelsin',
        question: 'How can Western travelers book Egypt tours with the comfort, expert guidance and transparent pricing they expect?',
        org: 'Freelance',
      },
      ar: {
        title: 'Travelsin',
        question: 'كيف يحجز المسافرون الغربيون رحلات مصر بالراحة والإرشاد المتخصص والأسعار الواضحة التي يتوقعونها؟',
        org: 'عمل حر',
      },
    },
  },
  {
    slug: 'amenah',
    markets: ['eg'],
    industries: ['mobility'],
    platforms: ['mobile'],
    cover: '/covers/amenah.webp',
    copy: {
      en: { title: 'Amenah — ride hailing', question: 'How can a ride-hailing app make everyday transport feel safer and more reliable for women?', org: 'UX case study' },
      ar: { title: 'آمنة — تطبيق توصيل', question: 'كيف يجعل تطبيق توصيل التنقل اليومي أكثر أماناً وموثوقية للنساء؟', org: 'دراسة حالة UX' },
    },
  },
  {
    slug: 'bookempire',
    markets: ['eg'],
    industries: ['ecom'],
    platforms: ['mobile'],
    cover: '/covers/bookempire.webp',
    copy: {
      en: { title: 'BookEmpire — books mobile app', question: 'How can readers discover, buy and read Arabic and English books in one app?', org: 'ITI · 2025' },
      ar: { title: 'BookEmpire — تطبيق الكتب', question: 'كيف يكتشف القراء الكتب العربية والإنجليزية ويشترونها ويقرؤونها في تطبيق واحد؟', org: 'ITI · 2025' },
    },
  },
  {
    slug: 'okidooki',
    markets: ['de', 'eg'],
    industries: ['realestate'],
    platforms: ['ds', 'dash', 'web'],
    cover: '/covers/okidooki.webp',
    copy: {
      en: { title: 'OKI-DOOKI real estate', question: 'How does one property platform stay consistent across two markets and three products?', org: 'Freelance' },
      ar: { title: 'OKI-DOOKI للعقارات', question: 'كيف تبقى منصة عقارية واحدة متسقة عبر سوقين وثلاثة منتجات؟', org: 'عمل حر' },
    },
  },
  {
    slug: 'elevateed',
    markets: ['eg'],
    industries: ['edtech'],
    platforms: ['web'],
    cover: '/covers/elevateed.webp',
    copy: {
      en: { title: 'ElevateEd', question: 'How can an educational website make learning content easy to find and follow?', org: 'Education' },
      ar: { title: 'ElevateEd', question: 'كيف يجعل موقع تعليمي المحتوى سهل الوصول والمتابعة؟', org: 'تعليم' },
    },
  },
];
