// ─────────────────────────────────────────────────────────────
// SITE COPY — English and Arabic text for every section.
// ─────────────────────────────────────────────────────────────

export const locales = ['en', 'ar'] as const;
export type Locale = (typeof locales)[number];
export const isLocale = (v: string): v is Locale => (locales as readonly string[]).includes(v);

export const links = {
  whatsapp: 'https://wa.me/201229475005',
  email: 'mariamali.kh183@gmail.com',
  linkedin: 'https://www.linkedin.com/in/mariam-ali-20xm/',
  behance: 'https://www.behance.net/mariamali183',
  cv: '/media/Mariam_Ali_Product_Designer_CV.pdf',
};

const en = {
  meta: {
    title: 'Mariam Ali — Product Designer',
    description:
      'Product designer for SaaS, e-commerce and dashboard products in Saudi Arabia and global markets. Arabic-first, bilingual RTL interfaces.',
  },
  name: 'Mariam Ali',
  role: 'Product Designer',
  photoAlt: 'Portrait of Mariam Ali',
  langSwitch: 'عربي',
  langAria: 'التبديل إلى العربية',
  themeToDark: 'Switch to dark mode',
  themeToLight: 'Switch to light mode',
  navAria: 'Sections',
  skipLink: 'Skip to content',
  nav: [
    { label: 'Work', href: '#works' },
    { label: 'About', href: '#about' },
    { label: 'Process', href: '#process' },
    { label: 'Experience', href: '#experience' },
    { label: 'Contact', href: '#contact' },
  ],
  headline: ['A curious mind,', 'grounded in strategy.'],
  intro:
    'I design SaaS, B2B, B2C products for Saudi and global markets, with interfaces built for the people using them today and the AI agents working alongside them tomorrow.',
  ctaWhatsapp: 'Chat on WhatsApp',
  ctaCv: 'Download CV',
  viewCase: 'View case study',
  linkLabels: { behance: 'View on Behance', salla: 'View on Salla', live: 'Visit website' },
  proof: [
    'Certified by Uxcel',
    'Design systems & reusable components',
    'User research & usability testing',
    'Arabic-first, bilingual RTL interfaces',
  ],
  worksEyebrow: 'Selected work',
  worksTitle: 'Products shaped around a real business question',
  worksSub: 'Shipped products and concept work across Saudi, Egyptian and global markets.',
  aboutEyebrow: 'About',
  aboutTitle: 'I start with the system, then the screen',
  about1:
    'I studied Production Engineering, and it still shapes how I design: I map the users, constraints and business goals before I open Figma. I then joined ITI’s intensive UI/UX Design Track.',
  about2:
    'For the past three years I have designed merchant platforms, dashboards and conference sites for Saudi companies, and products for clients in Egypt, Germany and the US. I work closely with developers, product managers and stakeholders, and I hand off designs that are ready to build.',
  quote:
    '“Good design isn’t only about making things look better. It’s about making them work better, feel intuitive, and create real value for the people who use them.”',
  expertiseTitle: 'What I bring',
  expertise: [
    { title: 'Product strategy', body: 'Turning business goals and requirements into clear product decisions.' },
    { title: 'UX design', body: 'User flows, information architecture and interaction design.' },
    { title: 'UI & design systems', body: 'Visual hierarchy, responsive layouts and components that scale.' },
    { title: 'Bilingual & RTL', body: 'Arabic and English interfaces designed for both directions from day one.' },
    { title: 'AI in design', body: 'Using AI tools to research, prototype and ship faster.' },
  ],
  processEyebrow: 'Process',
  processTitle: 'How I work',
  process: [
    { n: '01', title: 'Understand', body: 'Users, business goals and constraints — before any pixels.' },
    { n: '02', title: 'Define', body: 'Flows and structure that make the complex feel simple.' },
    { n: '03', title: 'Design', body: 'Interfaces and components built on one consistent system.' },
    { n: '04', title: 'Validate', body: 'Usability tests and stakeholder reviews before anything ships.' },
  ],
  expEyebrow: 'Experience',
  expTitle: 'Where I’ve worked',
  exp: [
    { when: '2026 — Now', org: 'Freelance', role: 'Product Designer', body: 'SaaS, real estate, travel and ERP products for clients in Egypt, Germany and the US.' },
    { when: '2025 — 2026', org: 'Al-Raedah for Digital Transformation | Ghadan', href: 'https://www.linkedin.com/company/professionalp/', role: 'UI/UX Designer', body: 'An e-commerce platform and merchant dashboard, the IAVE conference website, and UX audits of existing products.' },
    { when: '2024 — 2025', org: 'Suoodq | صعودك', href: 'https://www.linkedin.com/company/107052220/', role: 'UI/UX Designer', body: 'A Salla theme, merchant dashboards, and upsell and cross-sell widgets for Salla stores.' },
  ],
  contactTitle: 'Have a project in mind, or looking for a design collaborator? Let’s build something meaningful together.',
  footer: '© 2026 Mariam Ali',
  backTop: 'Back to top',
};

type Dict = typeof en;

const ar: Dict = {
  meta: {
    title: 'مريم علي — مصممة منتجات',
    description: 'مصممة منتجات لمنصات SaaS والتجارة الإلكترونية ولوحات التحكم في السعودية والأسواق العالمية. واجهات عربية أولاً وثنائية اللغة.',
  },
  name: 'مريم علي',
  role: 'مصممة منتجات',
  photoAlt: 'صورة مريم علي',
  langSwitch: 'EN',
  langAria: 'Switch to English',
  themeToDark: 'التبديل إلى الوضع الداكن',
  themeToLight: 'التبديل إلى الوضع الفاتح',
  navAria: 'الأقسام',
  skipLink: 'انتقل إلى المحتوى',
  nav: [
    { label: 'الأعمال', href: '#works' },
    { label: 'نبذة', href: '#about' },
    { label: 'المنهجية', href: '#process' },
    { label: 'الخبرات', href: '#experience' },
    { label: 'تواصل', href: '#contact' },
  ],
  headline: ['عقلٌ فضولي،', 'يرتكز على الاستراتيجية.'],
  intro:
    'أصمم منتجات SaaS وB2B وB2C للسوق السعودي والأسواق العالمية، بواجهات تخدم من يستخدمها اليوم، ووكلاء الذكاء الاصطناعي الذين سيعملون إلى جانبهم غداً.',
  ctaWhatsapp: 'تواصل عبر واتساب',
  ctaCv: 'تحميل السيرة الذاتية',
  viewCase: 'عرض دراسة الحالة',
  linkLabels: { behance: 'عرض على Behance', salla: 'عرض على سلة', live: 'زيارة الموقع' },
  proof: [
    'معتمدة من Uxcel',
    'أنظمة تصميم ومكونات قابلة لإعادة الاستخدام',
    'أبحاث المستخدم واختبارات قابلية الاستخدام',
    'واجهات عربية أولاً وثنائية اللغة (RTL)',
  ],
  worksEyebrow: 'أعمال مختارة',
  worksTitle: 'منتجات صُممت حول سؤال عمل حقيقي',
  worksSub: 'منتجات منفّذة ومشاريع تصميمية للسوق السعودي والمصري والأسواق العالمية.',
  aboutEyebrow: 'نبذة',
  aboutTitle: 'أبدأ بالنظام، ثم بالشاشة',
  about1:
    'درستُ هندسة الإنتاج، وما زالت تؤثر في طريقة تصميمي: أرسم صورة كاملة للمستخدمين والقيود وأهداف العمل قبل أن أفتح Figma. ثم التحقتُ بمسار تصميم UI/UX المكثف في معهد تكنولوجيا المعلومات (ITI).',
  about2:
    'خلال السنوات الثلاث الماضية صممت منصات للتجار ولوحات تحكم ومواقع مؤتمرات لشركات سعودية، ومنتجات لعملاء في مصر وألمانيا والولايات المتحدة. أعمل عن قرب مع المطورين ومديري المنتجات وأصحاب المصلحة، وأسلّم تصاميم جاهزة للتنفيذ.',
  quote:
    '«التصميم الجيد لا يعني أن يبدو المنتج أجمل فقط، بل أن يعمل بشكل أفضل، ويكون سهل الاستخدام، ويصنع قيمة حقيقية لمن يستخدمه.»',
  expertiseTitle: 'ما أقدمه',
  expertise: [
    { title: 'استراتيجية المنتج', body: 'تحويل أهداف العمل والمتطلبات إلى قرارات منتج واضحة.' },
    { title: 'تصميم تجربة المستخدم', body: 'مسارات المستخدم، وهيكلة المعلومات، وتصميم التفاعل.' },
    { title: 'الواجهات وأنظمة التصميم', body: 'تسلسل بصري واضح، وتصاميم متجاوبة، ومكونات قابلة للتوسع.' },
    { title: 'واجهات ثنائية اللغة', body: 'واجهات عربية وإنجليزية مصممة للاتجاهين من اليوم الأول.' },
    { title: 'الذكاء الاصطناعي في التصميم', body: 'أدوات ذكاء اصطناعي للبحث والنمذجة والتسليم بشكل أسرع.' },
  ],
  processEyebrow: 'المنهجية',
  processTitle: 'كيف أعمل',
  process: [
    { n: '01', title: 'الفهم', body: 'المستخدمون وأهداف العمل والقيود، قبل أي تصميم.' },
    { n: '02', title: 'التحديد', body: 'مسارات وهيكلة تجعل المعقّد بسيطاً.' },
    { n: '03', title: 'التصميم', body: 'واجهات ومكونات مبنية على نظام واحد متسق.' },
    { n: '04', title: 'التحقق', body: 'اختبارات قابلية الاستخدام ومراجعات أصحاب المصلحة قبل الإطلاق.' },
  ],
  expEyebrow: 'الخبرات',
  expTitle: 'أين عملت',
  exp: [
    { when: '2026 — الآن', org: 'عمل حر', role: 'مصممة منتجات', body: 'منتجات SaaS وعقارات وسفر وأنظمة ERP لعملاء في مصر وألمانيا والولايات المتحدة.' },
    { when: '2025 — 2026', org: 'Al-Raedah for Digital Transformation | Ghadan', href: 'https://www.linkedin.com/company/professionalp/', role: 'مصممة UI/UX', body: 'منصة تجارة إلكترونية ولوحة تحكم للتجار، وموقع مؤتمر IAVE، وتدقيق تجربة المستخدم لمنتجات قائمة.' },
    { when: '2024 — 2025', org: 'Suoodq | صعودك', href: 'https://www.linkedin.com/company/107052220/', role: 'مصممة UI/UX', body: 'ثيم لمنصة سلة، ولوحات تحكم للتجار، وأدوات بيع إضافي وتقاطعي لمتاجر سلة.' },
  ],
  contactTitle: 'لديك مشروع، أو تبحث عن مصمم يشاركك العمل؟ لنصنع معاً شيئاً ذا قيمة.',
  footer: '© 2026 مريم علي',
  backTop: 'العودة للأعلى',
};

export const dictionaries: Record<Locale, Dict> = { en, ar };
export type { Dict };
