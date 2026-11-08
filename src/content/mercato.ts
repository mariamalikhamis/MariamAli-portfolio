// ─────────────────────────────────────────────────────────────
// MERCATO — before/after case study (its own layout).
// Edit the words here; the page lives in components/MercatoStudy.tsx
// ─────────────────────────────────────────────────────────────
import type { Locale } from './i18n';

export type KpiKind = 'target' | 'projected' | 'test';
type Shot = { src: string; alt: string };
type Fix = { problem: string; solution: string; body: string; kpi: { label: string; value: string; kind: KpiKind } };
type Chapter = { eyebrow: string; title: string; intro: string; before: Shot; after: Shot[]; items: Fix[] };

export type MercatoCopy = {
  metaTitle: string;
  title: string;
  brand: string;
  summary: string;
  tags: string[];
  details: { label: string; value: string }[];
  heroAlt: string;
  back: string;
  labels: { before: string; after: string; problem: string; solution: string; kinds: Record<KpiKind, string> };
  problem: { eyebrow: string; title: string; body: string; stats: { value: string; body: string }[]; hmwLabel: string; hmw: string };
  chapters: Chapter[];
  impact: { eyebrow: string; title: string; items: { value: string; body: string }[]; revenue: { value: string; body: string }[]; note: string };
  workflow: { eyebrow: string; title: string; body: string; steps: string[]; learned: string };
  next: { label: string; title: string; href: string };
};

const img = (n: string) => `/work/mercato/${n}.webp`;
export const mercatoCover = img('home-insight');

export const mercato: Record<Locale, MercatoCopy> = {
  en: {
    metaTitle: 'Mercato — Growth tools merchants actually use | Mariam Ali',
    title: 'Helping merchants find the growth tools they already pay for',
    brand: 'Mercato',
    summary: 'is an e-commerce platform where merchants run their store. It ships five growth tools, yet most merchants never switch on more than one.',
    tags: ['Global', 'E-commerce', 'SaaS', 'Feature adoption'],
    details: [
      { label: 'Role', value: 'Product Designer' },
      { label: 'Type', value: 'UX case study' },
      { label: 'Platform', value: 'Merchant web dashboard' },
      { label: 'Workflow', value: 'Figma MCP · AI-assisted' },
      { label: 'Focus', value: 'Feature adoption & retention' },
    ],
    heroAlt: 'Mercato home dashboard with an opportunity card: 23 carts were abandoned this week, about $4,200 in sales, with a Turn on recovery button',
    back: 'All work',
    labels: {
      before: 'Before',
      after: 'After',
      problem: 'Problem',
      solution: 'Solution',
      kinds: { target: 'Target', projected: 'Projected', test: 'Usability test' },
    },
    problem: {
      eyebrow: '01 · The business problem',
      title: 'The tools exist. Merchants just don’t find them.',
      body: 'Merchants who use two or more growth tools stay longer and upgrade more, so adoption is a revenue problem, not a nice-to-have. I audited the screens merchants open every day and marked every place where a tool could have helped but stayed hidden.',
      stats: [
        { value: '1 of 7', body: 'growth tools used by the average merchant' },
        { value: '15%', body: 'of merchants use two or more' },
        { value: '2× / 3×', body: 'those merchants churn half as often and upgrade three times more' },
      ],
      hmwLabel: 'How might we',
      hmw: 'help merchants discover and set up the growth tools that matter to their store, at the moment they need them?',
    },
    chapters: [
      {
        eyebrow: '02 · Home',
        title: '3 problems on the screen merchants open first',
        intro: 'Home shows the numbers but not what’s behind them, and the tools that could fix them live elsewhere.',
        before: { src: img('home-before'), alt: 'Original home dashboard with sales figures and a chart, annotated with three numbered problems' },
        after: [
          { src: img('home-insight'), alt: 'Redesigned home with an opportunity card about 23 abandoned carts worth about $4,200 and a Turn on recovery button' },
          { src: img('grow'), alt: 'New Grow hub showing 1 of 5 tools active, $1,250 earned this month, and recommended tools ranked by need' },
          { src: img('home-report'), alt: 'Home after recovery is on: a card reports that cart recovery brought back 6 orders, $1,250 this week' },
        ],
        items: [
          { problem: 'The problem is invisible', solution: 'Show the problem as money, in context', body: 'Conversion fell 0.4 points while 23 carts were abandoned, and the dashboard never said why. Now Home names the cause and its value, with the fix one click away.', kpi: { label: 'Insight card → tool turned on', value: '15%+', kind: 'target' } },
          { problem: 'Growth tools live in four places', solution: 'One Grow hub, organised by goals', body: 'Discounts sat in Marketing, upsells in Apps, recovery in Settings. Grow brings them together, ranked by what needs attention first.', kpi: { label: 'New merchants using 2+ tools in 30 days', value: '15% → 25%', kind: 'projected' } },
          { problem: 'Numbers without a next step', solution: 'Report back what each tool earned', body: 'Seeing $1,250 come back builds the trust to try the next tool.', kpi: { label: 'Merchants kept in year one', value: '+360', kind: 'projected' } },
        ],
      },
      {
        eyebrow: '03 · Cart recovery',
        title: '4 problems between a merchant and recovered sales',
        intro: 'Abandoned-cart recovery was filed as an email setting, six steps away from Home, under a name only engineers would use.',
        before: { src: img('recovery-before'), alt: 'Original Notifications settings page where Abandoned checkout is a switched-off email toggle, annotated with problems' },
        after: [{ src: img('recovery-sheet'), alt: 'Recover lost sales setup sheet with an estimate of $420–$630 a month, a prefilled message preview and a Turn on recovery button' }],
        items: [
          { problem: 'A revenue tool filed as a setting', solution: 'Two clicks, from where the problem shows up', body: 'Setup opens in place from the Home insight, instead of six steps deep in Settings.', kpi: { label: 'Time to first growth tool', value: '21 → <7 days', kind: 'target' } },
          { problem: 'Named after the system event', solution: 'Named by the outcome', body: '“Abandoned checkout” became “Recover lost sales”, with the feature name kept as a subtitle.', kpi: { label: 'Merchants who understand the tool', value: '5 of 6', kind: 'test' } },
          { problem: 'No money on the screen', solution: 'Show the money before asking for setup', body: 'An estimate based on the store’s own last 30 days answers “is this worth it?” first.', kpi: { label: 'Setup sheet → tool turned on', value: '70%+', kind: 'target' } },
          { problem: 'Switching on means writing from scratch', solution: 'Start prefilled, edit only if you want', body: 'The reminder, timing and free-shipping incentive come ready. One button turns it on.', kpi: { label: 'Median setup time', value: '< 90 s', kind: 'test' } },
        ],
      },
      {
        eyebrow: '04 · Offers',
        title: '4 problems in the most-used growth tool',
        intro: 'Creating a discount meant a blank form with 11 decisions, asked in the system’s terms rather than the merchant’s.',
        before: { src: img('offer-before'), alt: 'Original Create discount form with many empty fields and an empty summary, annotated with problems' },
        after: [{ src: img('offer-goal'), alt: 'Run an offer screen asking What should this offer do, with four goal templates and a ready-to-launch seasonal sale summary estimating +$1,900' }],
        items: [
          { problem: 'A blank form with 11 decisions', solution: 'Four goal templates replace the form', body: 'Clear old stock, reward returning customers, seasonal sale, free-shipping boost. Full control is still one link away.', kpi: { label: 'Offers launched from a template', value: '4 of 6', kind: 'test' } },
          { problem: 'Asks how, not why', solution: 'Start from the merchant’s goal', body: '“Percentage or fixed amount?” became “What should this offer do?”.', kpi: { label: 'Merchants who explain a goal correctly', value: '5 of 6', kind: 'test' } },
          { problem: 'No preview, no impact', solution: 'See it, and its value, before launch', body: 'A summary shows the discount, dates, where shoppers see it and the estimated +$1,900 in sales.', kpi: { label: 'Tools turned off within 14 days', value: '18% → lower', kind: 'target' } },
          { problem: 'Found only by going looking', solution: 'Prompt the offer when sales slow', body: 'When sales dip, the offer ranks first in Grow and is flagged on Home.', kpi: { label: 'Merchants using 2+ growth tools', value: '15% → 25%', kind: 'projected' } },
        ],
      },
    ],
    impact: {
      eyebrow: '05 · Estimated impact',
      title: 'What this could mean in year one',
      items: [
        { value: '15% → 25%', body: 'Merchants using 2+ growth tools' },
        { value: '5.55% → 5.25%', body: 'Monthly merchant churn' },
        { value: '3.9% → 4.5%', body: 'Upgrade to Growth within 60 days' },
        { value: '+360', body: 'Merchants kept' },
      ],
      revenue: [
        { value: '+$110k', body: 'added revenue in year one' },
        { value: '+$203k', body: 'recurring revenue a year by month 12' },
      ],
      note: 'Estimated forecast, not measured data. Model inputs: 10,000 active merchants, 1,000 signups a month, $39 average plan, churn 6% vs 3% and upgrades 3% vs 9% for 0–1 vs 2+ tools. A 6-week A/B test turns these into real numbers.',
    },
    workflow: {
      eyebrow: '06 · How I worked',
      title: 'Business-first, AI-assisted',
      body: 'I started from the metric, not the screen, then used AI to move faster from problem to tested design without skipping the thinking.',
      steps: [
        'Framed the business problem and the metrics that prove it',
        'Audited the existing screens and marked every problem on them',
        'Designed in Figma through Figma MCP with an AI-assisted workflow',
        'Planned validation: a 6-merchant usability test and a 6-week A/B test',
      ],
      learned: 'A feature people pay for but can’t find is worth nothing to them. Put the value where the problem shows up, in their language, before asking them to set anything up.',
    },
    next: { label: 'Next case study', title: 'Wasl — Shipment Management System', href: '/work/shipment' },
  },
  ar: {
    metaTitle: 'ميركاتو — أدوات نمو يستخدمها التجّار فعلاً | مريم علي',
    title: 'مساعدة التجّار على إيجاد أدوات النمو التي يدفعون ثمنها بالفعل',
    brand: 'ميركاتو',
    summary: 'منصة تجارة إلكترونية يدير منها التجّار متاجرهم. تضم خمس أدوات للنمو، لكن معظم التجّار لا يفعّلون أكثر من واحدة.',
    tags: ['عالمي', 'تجارة إلكترونية', 'SaaS', 'تبنّي الميزات'],
    details: [
      { label: 'الدور', value: 'مصممة منتجات' },
      { label: 'النوع', value: 'دراسة حالة UX' },
      { label: 'المنصة', value: 'لوحة تحكم التاجر على الويب' },
      { label: 'سير العمل', value: 'Figma MCP · بمساعدة الذكاء الاصطناعي' },
      { label: 'التركيز', value: 'تبنّي الميزات والاحتفاظ بالعملاء' },
    ],
    heroAlt: 'الصفحة الرئيسية في ميركاتو مع بطاقة فرصة: 23 سلة متروكة هذا الأسبوع بقيمة 4,200 دولار تقريباً، وزر تفعيل الاسترداد',
    back: 'كل الأعمال',
    labels: {
      before: 'قبل',
      after: 'بعد',
      problem: 'المشكلة',
      solution: 'الحل',
      kinds: { target: 'هدف', projected: 'متوقّع', test: 'اختبار قابلية الاستخدام' },
    },
    problem: {
      eyebrow: '01 · مشكلة العمل',
      title: 'الأدوات موجودة، لكن التجّار لا يجدونها.',
      body: 'التجّار الذين يستخدمون أداتين أو أكثر يبقون مدة أطول ويرقّون باقاتهم أكثر، لذلك تبنّي الأدوات مسألة إيرادات وليس إضافة تجميلية. راجعت الشاشات التي يفتحها التجّار يومياً وحدّدت كل مكان كان يمكن لأداة أن تساعد فيه لكنها بقيت مخفية.',
      stats: [
        { value: '1 من 7', body: 'أدوات نمو يستخدمها التاجر في المتوسط' },
        { value: '15%', body: 'من التجّار يستخدمون أداتين أو أكثر' },
        { value: '2× / 3×', body: 'هؤلاء يغادرون بنصف المعدّل ويرقّون باقاتهم ثلاثة أضعاف' },
      ],
      hmwLabel: 'كيف يمكننا',
      hmw: 'مساعدة التجّار على اكتشاف أدوات النمو المهمة لمتاجرهم وتفعيلها، في اللحظة التي يحتاجونها فيها؟',
    },
    chapters: [
      {
        eyebrow: '02 · الرئيسية',
        title: '3 مشكلات في أول شاشة يفتحها التاجر',
        intro: 'تعرض الرئيسية الأرقام دون أسبابها، والأدوات القادرة على إصلاحها موجودة في مكان آخر.',
        before: { src: img('home-before'), alt: 'الصفحة الرئيسية الأصلية بأرقام المبيعات ورسم بياني، مع ثلاث مشكلات مرقّمة' },
        after: [
          { src: img('home-insight'), alt: 'الرئيسية بعد إعادة التصميم مع بطاقة فرصة عن 23 سلة متروكة بقيمة 4,200 دولار تقريباً وزر تفعيل الاسترداد' },
          { src: img('grow'), alt: 'مركز النمو الجديد: أداة واحدة مفعّلة من 5، و1,250 دولاراً هذا الشهر، وأدوات مقترحة مرتبة حسب الحاجة' },
          { src: img('home-report'), alt: 'الرئيسية بعد تفعيل الاسترداد: بطاقة توضّح أن استرداد السلال أعاد 6 طلبات بقيمة 1,250 دولاراً هذا الأسبوع' },
        ],
        items: [
          { problem: 'المشكلة غير مرئية', solution: 'إظهار المشكلة بقيمتها المالية وفي سياقها', body: 'انخفض معدل التحويل 0.4 نقطة مع ترك 23 سلة، ولم تذكر اللوحة السبب. الآن تسمّي الرئيسية السبب وقيمته، والحل على بُعد نقرة.', kpi: { label: 'من بطاقة الفرصة إلى تفعيل الأداة', value: '+15%', kind: 'target' } },
          { problem: 'أدوات النمو موزّعة على أربعة أماكن', solution: 'مركز نمو واحد مرتّب حسب الأهداف', body: 'كانت الخصومات في التسويق، والبيع الإضافي في التطبيقات، والاسترداد في الإعدادات. يجمعها مركز النمو مرتبة حسب الأولوية.', kpi: { label: 'تجّار جدد يستخدمون أداتين+ خلال 30 يوماً', value: '15% ← 25%', kind: 'projected' } },
          { problem: 'أرقام بلا خطوة تالية', solution: 'عرض ما حققته كل أداة', body: 'رؤية 1,250 دولاراً تعود تبني الثقة لتجربة الأداة التالية.', kpi: { label: 'تجّار يُحتفظ بهم في السنة الأولى', value: '+360', kind: 'projected' } },
        ],
      },
      {
        eyebrow: '03 · استرداد السلال',
        title: '4 مشكلات بين التاجر ومبيعاته المستردّة',
        intro: 'كان استرداد السلال المتروكة مجرد إعداد بريد إلكتروني، على بُعد ست خطوات من الرئيسية، وباسم لا يفهمه إلا المطوّرون.',
        before: { src: img('recovery-before'), alt: 'صفحة إعدادات الإشعارات الأصلية حيث الدفع المتروك مفتاح بريد مطفأ، مع المشكلات مرقّمة' },
        after: [{ src: img('recovery-sheet'), alt: 'نافذة إعداد استرداد المبيعات مع تقدير 420–630 دولاراً شهرياً، ومعاينة رسالة جاهزة، وزر التفعيل' }],
        items: [
          { problem: 'أداة إيرادات مصنّفة كإعداد', solution: 'نقرتان من مكان ظهور المشكلة', body: 'يفتح الإعداد في مكانه من بطاقة الرئيسية، بدلاً من ست خطوات داخل الإعدادات.', kpi: { label: 'الوقت حتى أول أداة نمو', value: '21 ← أقل من 7 أيام', kind: 'target' } },
          { problem: 'مسمّاة باسم حدث النظام', solution: 'مسمّاة بالنتيجة', body: '«الدفع المتروك» أصبحت «استرداد المبيعات الضائعة»، مع إبقاء اسم الميزة كعنوان فرعي.', kpi: { label: 'تجّار فهموا الأداة', value: '5 من 6', kind: 'test' } },
          { problem: 'لا أرقام مالية على الشاشة', solution: 'إظهار القيمة قبل طلب الإعداد', body: 'تقدير مبني على آخر 30 يوماً من بيانات المتجر نفسه يجيب أولاً عن سؤال «هل يستحق ذلك؟».', kpi: { label: 'من نافذة الإعداد إلى التفعيل', value: '+70%', kind: 'target' } },
          { problem: 'التفعيل يعني الكتابة من الصفر', solution: 'يبدأ جاهزاً، والتعديل اختياري', body: 'الرسالة والتوقيت وحافز الشحن المجاني جاهزة، وزر واحد يفعّلها.', kpi: { label: 'متوسط وقت الإعداد', value: 'أقل من 90 ث', kind: 'test' } },
        ],
      },
      {
        eyebrow: '04 · العروض',
        title: '4 مشكلات في أكثر أدوات النمو استخداماً',
        intro: 'إنشاء خصم كان يعني نموذجاً فارغاً بـ 11 قراراً، بلغة النظام لا بلغة التاجر.',
        before: { src: img('offer-before'), alt: 'نموذج إنشاء خصم الأصلي بحقول فارغة كثيرة وملخص فارغ، مع المشكلات مرقّمة' },
        after: [{ src: img('offer-goal'), alt: 'شاشة إنشاء عرض تسأل ماذا يجب أن يحقق العرض، مع أربعة قوالب أهداف وملخص عرض موسمي جاهز بتقدير 1,900 دولار إضافية' }],
        items: [
          { problem: 'نموذج فارغ بـ 11 قراراً', solution: 'أربعة قوالب أهداف بدل النموذج', body: 'تصريف المخزون، مكافأة العملاء العائدين، تخفيضات موسمية، دفعة الشحن المجاني. والتحكم الكامل ما زال على بُعد رابط.', kpi: { label: 'عروض أُطلقت من قالب', value: '4 من 6', kind: 'test' } },
          { problem: 'يسأل «كيف» لا «لماذا»', solution: 'البدء من هدف التاجر', body: '«نسبة أم مبلغ ثابت؟» أصبحت «ماذا يجب أن يحقق هذا العرض؟».', kpi: { label: 'تجّار شرحوا الهدف بشكل صحيح', value: '5 من 6', kind: 'test' } },
          { problem: 'لا معاينة ولا أثر', solution: 'رؤية العرض وقيمته قبل الإطلاق', body: 'ملخص يعرض الخصم والمدة وأين يراه المتسوّقون والمبيعات الإضافية المقدّرة بـ 1,900 دولار.', kpi: { label: 'أدوات أُوقفت خلال 14 يوماً', value: '18% ← أقل', kind: 'target' } },
          { problem: 'لا يُعثر عليه إلا بالبحث', solution: 'اقتراح العرض عند تباطؤ المبيعات', body: 'عند انخفاض المبيعات يتصدّر العرض مركز النمو ويُنبَّه إليه في الرئيسية.', kpi: { label: 'تجّار يستخدمون أداتين+', value: '15% ← 25%', kind: 'projected' } },
        ],
      },
    ],
    impact: {
      eyebrow: '05 · الأثر المتوقّع',
      title: 'ما قد يعنيه ذلك في السنة الأولى',
      items: [
        { value: '15% ← 25%', body: 'تجّار يستخدمون أداتين نمو أو أكثر' },
        { value: '5.55% ← 5.25%', body: 'معدل مغادرة التجّار الشهري' },
        { value: '3.9% ← 4.5%', body: 'الترقية إلى باقة النمو خلال 60 يوماً' },
        { value: '+360', body: 'تاجراً يُحتفظ بهم' },
      ],
      revenue: [
        { value: '+110 ألف $', body: 'إيرادات إضافية في السنة الأولى' },
        { value: '+203 ألف $', body: 'إيرادات متكررة سنوياً بحلول الشهر 12' },
      ],
      note: 'تقدير مستقبلي وليس بيانات مقاسة. مدخلات النموذج: 10,000 تاجر نشط، 1,000 تسجيل شهرياً، متوسط باقة 39 دولاراً، معدل مغادرة 6% مقابل 3% وترقية 3% مقابل 9% لمن يستخدم 0–1 أداة مقابل أداتين+. اختبار A/B لمدة 6 أسابيع يحوّل هذه التقديرات إلى أرقام حقيقية.',
    },
    workflow: {
      eyebrow: '06 · طريقة العمل',
      title: 'العمل أولاً، بمساعدة الذكاء الاصطناعي',
      body: 'بدأت من المؤشر لا من الشاشة، ثم استخدمت الذكاء الاصطناعي للانتقال أسرع من المشكلة إلى تصميم قابل للاختبار دون تخطّي التفكير.',
      steps: [
        'صياغة مشكلة العمل والمؤشرات التي تثبتها',
        'مراجعة الشاشات الحالية وتحديد كل مشكلة عليها',
        'التصميم في Figma عبر Figma MCP بسير عمل بمساعدة الذكاء الاصطناعي',
        'تخطيط التحقق: اختبار قابلية استخدام مع 6 تجّار واختبار A/B لمدة 6 أسابيع',
      ],
      learned: 'ميزة يدفع الناس ثمنها ولا يجدونها لا قيمة لها عندهم. ضع القيمة حيث تظهر المشكلة، وبلغتهم، قبل أن تطلب منهم إعداد أي شيء.',
    },
    next: { label: 'دراسة الحالة التالية', title: 'وصل — نظام إدارة الشحنات', href: '/work/shipment' },
  },
};
