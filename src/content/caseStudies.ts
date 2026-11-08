// ─────────────────────────────────────────────────────────────
// CASE STUDIES — one entry per project that has its own page.
// The `slug` must match the project's slug in projects.ts.
// ─────────────────────────────────────────────────────────────
import type { Locale } from './i18n';

type Flow = { user: string; tone: 'blue' | 'teal' | 'amber'; steps: { label: string; key?: boolean }[] };
type Decision = { tag: string; title: string; body: string; image: string; alt: string };

export type CaseStudyCopy = {
  metaTitle: string;
  title: string;
  brand: string;
  summary: string;
  tags: string[];
  details: { label: string; value: string }[];
  heroAlt: string;
  context: { eyebrow: string; title: string; body: string; problem: string };
  users: { eyebrow: string; title: string; items: { name: string; tone: 'blue' | 'teal' | 'amber'; lead: string; points: string[] }[] };
  flows: { eyebrow: string; title: string; intro: string; lanes: Flow[] };
  decisions: { eyebrow: string; title: string; items: Decision[] };
  driver: { eyebrow: string; title: string; intro: string; alt: string; steps: string[] };
  edge: { eyebrow: string; title: string; items: { title: string; body: string }[]; statesLabel: string; states: string[] };
  system: { eyebrow: string; title: string; body: string; primary: string; success: string };
  outcome: { eyebrow: string; title: string; items: { value: string; body: string }[] };
  next: { label: string; title: string; href: string };
  back: string;
};

export type CaseStudy = { slug: string; cover: string; copy: Record<Locale, CaseStudyCopy> };

const img = (n: string) => `/work/shipment/${n}.webp`;

export const caseStudies: CaseStudy[] = [
  {
    slug: 'shipment',
    cover: img('home'),
    copy: {
      en: {
        metaTitle: 'Wasl — Shipment Management System | Mariam Ali',
        title: 'Shipment Management System',
        brand: 'Wasl | وصل',
        summary: 'is a Saudi trucking marketplace where shippers post loads, carriers bid on them, and drivers pick up shipments on routes they are already driving.',
        tags: ['Saudi Arabia', 'Logistics', 'SaaS marketplace', 'B2B & B2C'],
        details: [
          { label: 'Role', value: 'Product Designer' },
          { label: 'Client', value: 'Freelance client' },
          { label: 'Platforms', value: 'Web dashboards · Android driver app' },
          { label: 'Users', value: 'Shippers · Carriers · Drivers' },
          { label: 'Language', value: 'Arabic-first, RTL' },
        ],
        heroAlt: 'Shipper dashboard in Arabic showing completed, in-progress and cancelled shipments and a table of current shipments with their status',
        context: {
          eyebrow: '01 · Context',
          title: 'One shipment, three people who need to agree',
          body: 'The platform connects companies that need to move freight with carrier companies and independent truck drivers across Saudi Arabia. Instead of a fixed price, carriers bid on each shipment, and the platform suggests trucks already travelling on the same route and time window.',
          problem:
            'The client wanted to turn a market that runs on phone calls and middlemen into one platform: shippers book a truck in minutes instead of chasing quotes, carriers fill the empty space on trucks already on the road, and every shipment can be tracked and proven delivered. The business earns a commission on each completed trip, so the product had to make bidding fast and trust easy on both sides.',
        },
        users: {
          eyebrow: '02 · Users',
          title: 'Three user types with different goals',
          items: [
            { name: 'Shipper', tone: 'blue', lead: 'Posts a load, compares bids, and needs to know where it is until it’s delivered.', points: ['Create a shipment: type, weight, pickup and drop-off pins, time window', 'Receive, compare and accept offers', 'Track live, confirm delivery, rate the driver'] },
            { name: 'Carrier company', tone: 'teal', lead: 'Runs a fleet and wants every truck earning, on every leg of the route.', points: ['Verify the business, add vehicles and drivers', 'Bid on shipments near their routes', 'Assign drivers, track earnings and commissions'] },
            { name: 'Driver', tone: 'amber', lead: 'On the road, often with spare capacity, and needs the app to work with one hand.', points: ['Share route and available capacity', 'See matching shipments nearby and bid', 'Update trip status, get paid'] },
          ],
        },
        flows: {
          eyebrow: '03 · User flows',
          title: 'Mapping each journey before any screen',
          intro: 'I mapped the end-to-end flow for each user type, then found where they meet: the bid, the handover and the rating.',
          lanes: [
            { user: 'Shipper', tone: 'blue', steps: [{ label: 'Sign up & verify' }, { label: 'Create shipment' }, { label: 'See nearby trucks' }, { label: 'Compare & accept bid', key: true }, { label: 'Track live' }, { label: 'Confirm & rate', key: true }] },
            { user: 'Carrier company', tone: 'teal', steps: [{ label: 'Verify company' }, { label: 'Add vehicles & drivers' }, { label: 'Browse nearby loads' }, { label: 'Place bid', key: true }, { label: 'Assign driver' }, { label: 'Get paid' }] },
            { user: 'Driver', tone: 'amber', steps: [{ label: 'Onboard & upload documents' }, { label: 'Add road trip' }, { label: 'Matching loads' }, { label: 'Bid or accept', key: true }, { label: 'Update status' }, { label: 'Hand over with code', key: true }] },
          ],
        },
        decisions: {
          eyebrow: '04 · Key design decisions',
          title: 'What I designed, and why',
          items: [
            { tag: 'A · Bidding', title: 'Bids, not fixed prices', body: 'Each offer shows price, expected pickup and delivery time, vehicle type and the driver’s rating, so shippers compare like for like. Offers stay open for a set window; if it passes, the shipment is cancelled automatically and a tooltip explains why, with an option to extend once.', image: img('offer'), alt: 'Offer accepted dialog showing the driver, pickup time, delivery time, price and vehicle type' },
            { tag: 'B · Matching', title: 'Trucks already on your route', body: '“Nearby trucks” shows vehicles travelling on the same route and time window, with how much capacity they have left. Drivers can add a road trip or mark themselves free, so the system knows where spare space exists.', image: img('nearby'), alt: 'Map of nearby trucks with a card showing the driver, route from Riyadh to Dammam and 30% remaining capacity' },
            { tag: 'C · Trust', title: 'A code at handover', body: 'Once a bid is accepted, the shipper follows the truck live and gets status updates along the way. At delivery, a shared confirmation code proves the load reached the right person, and both sides rate each other.', image: img('tracking'), alt: 'Shipment tracking page with live route on a map, shipment details and a four-digit confirmation code' },
            { tag: 'D · Fleet', title: 'The whole fleet on one screen', body: 'Carrier companies see every vehicle’s status (available, on the road, stopped), its remaining capacity and assigned driver, and can reassign drivers without leaving the page.', image: img('fleet'), alt: 'Vehicle management page listing trucks with status, capacity and drivers with ratings' },
          ],
        },
        driver: {
          eyebrow: '05 · Driver app',
          title: 'An Android MVP built for the drivers',
          intro: 'The first release focused on five jobs drivers do every day. The home screen leads with the active trip and spare capacity, because that is what decides which loads they can take.',
          alt: 'Wasl driver app home showing the current active trip from Riyadh to Jeddah, available capacity and recently added shipments',
          steps: ['Onboarding & document verification', 'Add a road trip with available capacity', 'Browse and filter nearby shipments', 'Send a bid', 'Manage trips and delivery requests'],
        },
        edge: {
          eyebrow: '06 · Edge cases',
          title: 'Designing for when things go wrong',
          items: [
            { title: 'Weak signal on the road', body: 'Status updates and the delivery code still need to work with poor connectivity between cities.' },
            { title: 'Offers that expire', body: 'A visible countdown, automatic cancellation with an explanation, and a one-time extension.' },
            { title: 'Editing a bid', body: 'Carriers can edit or withdraw a bid for a short window before it locks.' },
            { title: 'Empty states', body: 'No trip yet, no shipments, no requests: each with a clear next action.' },
          ],
          statesLabel: 'Shipment states',
          states: ['Receiving offers', 'Waiting for truck', 'In delivery', 'Delivered', 'Cancelled'],
        },
        system: {
          eyebrow: '07 · Design system',
          title: 'Arabic-first from the type up',
          body: 'Every screen is designed right-to-left first, set in IBM Plex Sans Arabic, with a calm steel-blue primary for actions and teal for success.',
          primary: 'Primary · steel blue',
          success: 'Success · teal',
        },
        outcome: {
          eyebrow: '08 · Outcome',
          title: 'Where it stands, and what I learned',
          items: [
            { value: '3 products', body: 'Shipper dashboard, carrier dashboard and an Android driver app' },
            { value: 'In development', body: 'The product is currently being built for the Saudi market' },
            { value: 'Design for the moment', body: 'I learned to design around the user’s real circumstances: a driver on the road needs big targets, one-hand use, and screens that still work on a weak signal.' },
          ],
        },
        next: { label: 'Next case study', title: 'Mercato — Growth tools merchants actually use', href: '/work/mercato' },
        back: 'All work',
      },
      ar: {
        metaTitle: 'وصل — نظام إدارة الشحنات | مريم علي',
        title: 'نظام إدارة الشحنات',
        brand: 'Wasl | وصل',
        summary: 'منصة سعودية لنقل البضائع بالشاحنات: يعرض أصحاب الشحنات حمولاتهم، وتقدّم شركات النقل عروضها، ويلتقط السائقون الشحنات على الطرق التي يسلكونها بالفعل.',
        tags: ['السعودية', 'لوجستيات', 'منصة SaaS', 'B2B و B2C'],
        details: [
          { label: 'الدور', value: 'مصممة منتجات' },
          { label: 'العميل', value: 'عميل عمل حر' },
          { label: 'المنصات', value: 'لوحات تحكم ويب · تطبيق سائق Android' },
          { label: 'المستخدمون', value: 'أصحاب الشحنات · شركات النقل · السائقون' },
          { label: 'اللغة', value: 'عربي أولاً، من اليمين لليسار' },
        ],
        heroAlt: 'لوحة تحكم صاحب الشحنة تعرض الشحنات المكتملة وقيد التنفيذ والملغاة وجدول الشحنات الحالية',
        context: {
          eyebrow: '01 · السياق',
          title: 'شحنة واحدة، وثلاثة أطراف يجب أن يتفقوا',
          body: 'تربط المنصة الشركات التي تحتاج إلى نقل بضائعها بشركات النقل والسائقين المستقلين في أنحاء السعودية. بدلاً من سعر ثابت، تتنافس شركات النقل بعروض على كل شحنة، وتقترح المنصة الشاحنات التي تسير بالفعل على نفس المسار وفي نفس الوقت.',
          problem:
            'أراد العميل تحويل سوق يعتمد على المكالمات والوسطاء إلى منصة واحدة: يحجز صاحب الشحنة شاحنة في دقائق بدلاً من ملاحقة عروض الأسعار، وتملأ شركات النقل المساحة الفارغة في شاحناتها على الطريق، ويمكن تتبع كل شحنة وإثبات تسليمها. وتربح المنصة عمولة على كل رحلة مكتملة، لذا كان على المنتج أن يجعل تقديم العروض سريعاً وبناء الثقة سهلاً للطرفين.',
        },
        users: {
          eyebrow: '02 · المستخدمون',
          title: 'ثلاثة أنواع من المستخدمين بأهداف مختلفة',
          items: [
            { name: 'صاحب الشحنة', tone: 'blue', lead: 'ينشر حمولته، ويقارن العروض، ويحتاج أن يعرف مكانها حتى تصل.', points: ['إنشاء شحنة: النوع والوزن ونقطتا التحميل والتسليم والوقت', 'استقبال العروض ومقارنتها وقبولها', 'التتبع المباشر وتأكيد التسليم وتقييم السائق'] },
            { name: 'شركة النقل', tone: 'teal', lead: 'تدير أسطولاً وتريد أن تعمل كل شاحنة في كل مرحلة من المسار.', points: ['توثيق الشركة وإضافة المركبات والسائقين', 'تقديم عروض على الشحنات القريبة من مساراتها', 'إسناد السائقين ومتابعة الأرباح والعمولات'] },
            { name: 'السائق', tone: 'amber', lead: 'على الطريق، وغالباً لديه مساحة فارغة، ويحتاج تطبيقاً يعمل بيد واحدة.', points: ['مشاركة المسار والمساحة المتاحة', 'رؤية الشحنات المناسبة القريبة وتقديم عرض', 'تحديث حالة الرحلة واستلام المستحقات'] },
          ],
        },
        flows: {
          eyebrow: '03 · مسارات المستخدم',
          title: 'رسم كل رحلة قبل أي شاشة',
          intro: 'رسمتُ المسار الكامل لكل نوع من المستخدمين، ثم حددت نقاط التقائهم: العرض، والتسليم، والتقييم.',
          lanes: [
            { user: 'صاحب الشحنة', tone: 'blue', steps: [{ label: 'التسجيل والتوثيق' }, { label: 'إنشاء شحنة' }, { label: 'الشاحنات القريبة' }, { label: 'مقارنة العروض وقبولها', key: true }, { label: 'التتبع المباشر' }, { label: 'التأكيد والتقييم', key: true }] },
            { user: 'شركة النقل', tone: 'teal', steps: [{ label: 'توثيق الشركة' }, { label: 'إضافة المركبات والسائقين' }, { label: 'تصفح الشحنات القريبة' }, { label: 'تقديم عرض', key: true }, { label: 'إسناد سائق' }, { label: 'استلام المستحقات' }] },
            { user: 'السائق', tone: 'amber', steps: [{ label: 'التسجيل ورفع المستندات' }, { label: 'إضافة رحلة' }, { label: 'الشحنات المطابقة' }, { label: 'تقديم عرض أو قبول', key: true }, { label: 'تحديث الحالة' }, { label: 'التسليم بالكود', key: true }] },
          ],
        },
        decisions: {
          eyebrow: '04 · قرارات التصميم',
          title: 'ماذا صممت، ولماذا',
          items: [
            { tag: 'أ · العروض', title: 'عروض بدلاً من الأسعار الثابتة', body: 'يعرض كل عرض السعر وموعد التحميل والتوصيل المتوقع ونوع المركبة وتقييم السائق، ليقارن صاحب الشحنة بين عروض متكافئة. تبقى العروض مفتوحة لمدة محددة، وإذا انتهت تُلغى الشحنة تلقائياً مع توضيح السبب وخيار التمديد مرة واحدة.', image: img('offer'), alt: 'نافذة قبول العرض تعرض السائق وموعد التحميل والتوصيل والسعر ونوع المركبة' },
            { tag: 'ب · المطابقة', title: 'شاحنات على مسارك بالفعل', body: 'تعرض صفحة «الشاحنات القريبة» المركبات التي تسير على نفس المسار وفي نفس الوقت مع المساحة المتبقية فيها. ويمكن للسائق إضافة رحلة أو إعلان أنه متاح، ليعرف النظام أين توجد مساحة فارغة.', image: img('nearby'), alt: 'خريطة الشاحنات القريبة مع بطاقة تعرض السائق والمسار من الرياض إلى الدمام ونسبة المساحة المتبقية' },
            { tag: 'ج · الثقة', title: 'كود عند التسليم', body: 'بعد قبول العرض، يتابع صاحب الشحنة الشاحنة مباشرة ويتلقى تحديثات الحالة. وعند التسليم، يثبت كود تأكيد مشترك أن الحمولة وصلت للشخص الصحيح، ثم يقيّم الطرفان بعضهما.', image: img('tracking'), alt: 'صفحة تتبع الشحنة مع المسار المباشر على الخريطة وتفاصيل الشحنة وكود التأكيد' },
            { tag: 'د · الأسطول', title: 'الأسطول كاملاً في شاشة واحدة', body: 'ترى شركة النقل حالة كل مركبة (متاحة، على الطريق، موقوفة) والمساحة المتبقية والسائق المسند إليها، ويمكنها تغيير السائق دون مغادرة الصفحة.', image: img('fleet'), alt: 'صفحة إدارة المركبات تعرض الشاحنات بحالتها وحمولتها والسائقين وتقييماتهم' },
          ],
        },
        driver: {
          eyebrow: '05 · تطبيق السائق',
          title: 'نسخة أولى على Android مصممة للسائقين',
          intro: 'ركّز الإصدار الأول على خمس مهام يقوم بها السائق يومياً. وتبدأ الشاشة الرئيسية بالرحلة الحالية والمساحة المتاحة، لأنها ما يحدد الشحنات التي يمكنه أخذها.',
          alt: 'الشاشة الرئيسية لتطبيق سائق وصل تعرض الرحلة الحالية من الرياض إلى جدة والمساحة المتاحة وأحدث الشحنات',
          steps: ['التسجيل وتوثيق المستندات', 'إضافة رحلة مع المساحة المتاحة', 'تصفح الشحنات القريبة وتصفيتها', 'تقديم عرض', 'إدارة الرحلات وطلبات التوصيل'],
        },
        edge: {
          eyebrow: '06 · الحالات الاستثنائية',
          title: 'التصميم لما قد يحدث خطأً',
          items: [
            { title: 'ضعف الإشارة على الطريق', body: 'يجب أن تعمل تحديثات الحالة وكود التسليم حتى مع ضعف الاتصال بين المدن.' },
            { title: 'انتهاء مهلة العروض', body: 'عدّ تنازلي واضح، وإلغاء تلقائي مع توضيح السبب، وتمديد لمرة واحدة.' },
            { title: 'تعديل العرض', body: 'يمكن لشركة النقل تعديل عرضها أو سحبه خلال مهلة قصيرة قبل أن يُقفل.' },
            { title: 'الحالات الفارغة', body: 'لا رحلة بعد، لا شحنات، لا طلبات: ولكل حالة خطوة تالية واضحة.' },
          ],
          statesLabel: 'حالات الشحنة',
          states: ['يتم استقبال العروض', 'بانتظار ربط الشاحنة', 'قيد التوصيل', 'تم التسليم', 'ملغاة'],
        },
        system: {
          eyebrow: '07 · نظام التصميم',
          title: 'عربي أولاً، من الخط وحتى آخر مكوّن',
          body: 'صُممت كل شاشة من اليمين لليسار أولاً، بخط IBM Plex Sans Arabic، مع لون أزرق هادئ للإجراءات الأساسية ولون فيروزي للنجاح.',
          primary: 'الأساسي · أزرق',
          success: 'النجاح · فيروزي',
        },
        outcome: {
          eyebrow: '08 · النتيجة',
          title: 'أين وصل المشروع، وماذا تعلّمت',
          items: [
            { value: '3 منتجات', body: 'لوحة تحكم لصاحب الشحنة، ولوحة لشركة النقل، وتطبيق سائق على Android' },
            { value: 'قيد التطوير', body: 'يجري حالياً بناء المنتج للسوق السعودي' },
            { value: 'صمّم للّحظة', body: 'تعلّمت أن أصمم وفق ظروف المستخدم الحقيقية: السائق على الطريق يحتاج أزراراً كبيرة، واستخداماً بيد واحدة، وشاشات تعمل مع ضعف الإشارة.' },
          ],
        },
        next: { label: 'دراسة الحالة التالية', title: 'ميركاتو — أدوات نمو يستخدمها التجّار فعلاً', href: '/work/mercato' },
        back: 'كل الأعمال',
      },
    },
  },
];

export const getCaseStudy = (slug: string) => caseStudies.find((c) => c.slug === slug);
