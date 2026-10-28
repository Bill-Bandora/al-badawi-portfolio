import type { LocalizedText } from '../types/project';

export type Service = {
  slug: string;
  title: LocalizedText;
  seoTitle?: LocalizedText;
  seoDescription?: LocalizedText;
  summary: LocalizedText;
  audience: LocalizedText;
  useCases: LocalizedText[];
  benefits: LocalizedText[];
  process: LocalizedText[];
  decisionTitle?: LocalizedText;
  decisionText?: LocalizedText;
  pricingFactors?: LocalizedText[];
  areaServed?: string;
  modifiedAt?: string;
  technologies: string[];
  projectSlugs: string[];
};

export const services: Service[] = [
  {
    slug: 'webentwicklung',
    title: { de: 'Individuelle Webentwicklung in Berlin', en: 'Custom web development', ar: 'تطوير ويب مخصص' },
    seoTitle: {
      de: 'Webentwicklung Berlin für Unternehmen | Bandora',
      en: 'Custom web development | Bandora Development',
      ar: 'تطوير ويب مخصص | Bandora Development',
    },
    seoDescription: {
      de: 'Individuelle Webentwicklung für Unternehmen in Berlin: Webanwendungen, Dashboards, APIs und technische Firmenwebsites – klar geplant und sauber umgesetzt.',
      en: 'Custom web applications, dashboards, APIs and technical business websites, planned clearly and built for maintainable growth.',
      ar: 'تطبيقات ويب ولوحات معلومات وواجهات API ومواقع شركات تقنية مخصصة، بتخطيط واضح وتنفيذ قابل للتطوير.',
    },
    summary: {
      de: 'Individuelle Webanwendungen, Dashboards, APIs und technisch anspruchsvolle Firmenwebsites für Unternehmen in Berlin und Umgebung – passend zu realen Abläufen statt zu starren Vorlagen.',
      en: 'Custom websites and web applications that communicate clearly and support real digital workflows.',
      ar: 'مواقع وتطبيقات ويب مخصصة تعرض المعلومات بوضوح وتدعم سير العمل الرقمي الحقيقي.',
    },
    audience: {
      de: 'Für kleine Unternehmen, Gründer und Teams, die eine professionelle Website erstellen lassen möchten und mehr als eine austauschbare Standardseite benötigen.',
      en: 'For small businesses, founders and teams that need more than a generic template.',
      ar: 'للشركات الصغيرة والمؤسسين والفرق التي تحتاج إلى أكثر من قالب عام.',
    },
    useCases: [
      { de: 'Responsive Firmenwebsites und Landingpages mit klarer Nutzerführung', en: 'Responsive business websites and landing pages', ar: 'مواقع شركات وصفحات هبوط متجاوبة' },
      { de: 'Interne Dashboards und Verwaltungsoberflächen', en: 'Internal dashboards and administration interfaces', ar: 'لوحات معلومات وواجهات إدارة داخلية' },
      { de: 'Mehrsprachige, technisch suchmaschinenfreundliche Auftritte', en: 'Multilingual, search-friendly websites', ar: 'مواقع متعددة اللغات ومهيأة تقنيا لمحركات البحث' },
    ],
    benefits: [
      { de: 'Passende Struktur statt unnötiger Funktionen', en: 'A focused structure without unnecessary features', ar: 'هيكل مناسب دون وظائف غير ضرورية' },
      { de: 'Nutzbar auf Smartphone, Tablet und Desktop', en: 'Usable on mobile, tablet and desktop', ar: 'قابل للاستخدام على الهاتف والجهاز اللوحي والحاسوب' },
      { de: 'Saubere technische Basis für spätere Erweiterungen', en: 'A clean technical base for future extensions', ar: 'أساس تقني نظيف للتوسعات المستقبلية' },
    ],
    process: [
      { de: 'Ziel, Zielgruppe und Inhalte klären', en: 'Clarify goals, audience and content', ar: 'تحديد الهدف والجمهور والمحتوى' },
      { de: 'Informationsarchitektur und Oberfläche strukturieren', en: 'Structure information architecture and interface', ar: 'تنظيم بنية المعلومات والواجهة' },
      { de: 'Umsetzen, testen und für die Veröffentlichung vorbereiten', en: 'Build, test and prepare for launch', ar: 'التنفيذ والاختبار والتحضير للنشر' },
    ],
    decisionTitle: {
      de: 'Wann individuelle Webentwicklung sinnvoll ist',
      en: 'When custom web development is the right fit',
      ar: 'متى يكون تطوير الويب المخصص هو الخيار المناسب',
    },
    decisionText: {
      de: 'Individuelle Entwicklung lohnt sich, wenn eine Website Daten verarbeiten, Rollen abbilden, externe Systeme anbinden oder einen besonderen Geschäftsablauf unterstützen soll. Für eine klassische Unternehmenswebsite mit Schwerpunkt auf Gestaltung und klarer Nutzerführung ist die separate Webdesign-Leistung meist der passendere Einstieg.',
      en: 'Custom development is useful when a website must process data, model roles, connect external systems or support a specific business workflow. For a classic business website focused on design and clear user guidance, the separate web design service is usually the better starting point.',
      ar: 'يكون التطوير المخصص مناسبا عندما يحتاج الموقع إلى معالجة البيانات أو إدارة الصلاحيات أو ربط أنظمة خارجية أو دعم سير عمل خاص. أما موقع الشركة التقليدي الذي يركز على التصميم وسهولة الاستخدام فتكون خدمة تصميم المواقع نقطة بداية أنسب.',
    },
    pricingFactors: [
      { de: 'Anzahl und Komplexität der Funktionen', en: 'Number and complexity of features', ar: 'عدد الوظائف وتعقيدها' },
      { de: 'Datenmodell, Rollen und Schnittstellen', en: 'Data model, roles and integrations', ar: 'نموذج البيانات والصلاحيات والتكاملات' },
      { de: 'Testumfang, Betrieb und spätere Erweiterbarkeit', en: 'Testing scope, operations and future extensibility', ar: 'نطاق الاختبار والتشغيل وقابلية التوسع لاحقا' },
    ],
    areaServed: 'Berlin',
    modifiedAt: '2026-10-28',
    technologies: ['React', 'TypeScript', 'Vite', 'Node.js', 'REST APIs', 'MariaDB'],
    projectSlugs: ['geraete-nachverfolgung', 'roommate-plus', 'digital-footprint-os', 'bandora-studio', 'bandora-gen8'],
  },
  {
    slug: 'webdesign',
    title: { de: 'Webdesign und Website-Erstellung in Berlin', en: 'Web design and business websites', ar: 'تصميم المواقع وإنشاء مواقع الشركات' },
    seoTitle: {
      de: 'Webdesign Berlin: professionelle Websites | Bandora',
      en: 'Web design and business websites | Bandora',
      ar: 'تصميم مواقع احترافية للشركات | Bandora',
    },
    seoDescription: {
      de: 'Webdesign für Unternehmen in Berlin: klare Struktur, responsive Gestaltung, verständliche Inhalte und eine technisch saubere Website ohne unnötigen Baukasten-Ballast.',
      en: 'Clear, responsive business websites with thoughtful structure, understandable content and a clean technical foundation.',
      ar: 'مواقع شركات واضحة ومتجاوبة ببنية مدروسة ومحتوى مفهوم وأساس تقني نظيف.',
    },
    summary: {
      de: 'Professionelle Unternehmenswebsites für Berlin und Umgebung: von Seitenstruktur und Nutzerführung über responsive Gestaltung bis zur technisch sauberen Veröffentlichung.',
      en: 'Professional business websites, from structure and user journeys to responsive design and a technically clean launch.',
      ar: 'مواقع شركات احترافية تبدأ من هيكل الصفحات وتجربة المستخدم وصولا إلى التصميم المتجاوب والنشر التقني السليم.',
    },
    audience: {
      de: 'Für kleine Unternehmen, Selbstständige und Betriebe in Berlin, die ihre Leistungen verständlich darstellen, Vertrauen aufbauen und qualifizierte Anfragen ermöglichen möchten.',
      en: 'For small businesses and independent professionals who want to explain their services clearly, build trust and enable qualified enquiries.',
      ar: 'للشركات الصغيرة والمستقلين الذين يريدون عرض خدماتهم بوضوح وبناء الثقة وتسهيل الاستفسارات الجادة.',
    },
    useCases: [
      { de: 'Neue Unternehmenswebsite mit klaren Leistungsseiten', en: 'New business website with clear service pages', ar: 'موقع شركة جديد بصفحات خدمات واضحة' },
      { de: 'Relaunch einer veralteten oder unübersichtlichen Website', en: 'Relaunch of an outdated or confusing website', ar: 'إعادة بناء موقع قديم أو غير واضح' },
      { de: 'Mehrsprachige Website oder fokussierte Landingpage', en: 'Multilingual website or focused landing page', ar: 'موقع متعدد اللغات أو صفحة هبوط مركزة' },
    ],
    benefits: [
      { de: 'Individuelle Struktur passend zu Angebot und Zielgruppe', en: 'A structure tailored to the offer and audience', ar: 'هيكل مخصص للعرض والجمهور' },
      { de: 'Responsive Bedienung auf Smartphone, Tablet und Desktop', en: 'Responsive use on phone, tablet and desktop', ar: 'استخدام متجاوب على الهاتف والجهاز اللوحي والحاسوب' },
      { de: 'Technische SEO-Basis mit crawlbaren Inhalten und klaren Seiten', en: 'Technical SEO foundations with crawlable content and clear pages', ar: 'أساس SEO تقني بمحتوى قابل للزحف وصفحات واضحة' },
    ],
    process: [
      { de: 'Ziele, Zielgruppen und vorhandene Inhalte klären', en: 'Clarify goals, audiences and existing content', ar: 'تحديد الأهداف والجمهور والمحتوى المتاح' },
      { de: 'Seitenstruktur, Inhalte und Gestaltung ausarbeiten', en: 'Develop page structure, content and visual design', ar: 'تطوير هيكل الصفحات والمحتوى والتصميم' },
      { de: 'Responsive umsetzen, testen und kontrolliert veröffentlichen', en: 'Build responsively, test and launch in a controlled way', ar: 'التنفيذ المتجاوب والاختبار والنشر المنظم' },
    ],
    decisionTitle: {
      de: 'Webdesign oder Webentwicklung?',
      en: 'Web design or web development?',
      ar: 'تصميم مواقع أم تطوير ويب؟',
    },
    decisionText: {
      de: 'Webdesign ist der richtige Schwerpunkt, wenn Angebot, Inhalte, Markenwirkung und Nutzerführung im Vordergrund stehen. Sobald individuelle Datenlogik, Benutzerrollen, Dashboards oder Schnittstellen benötigt werden, gehört das Vorhaben in die Webentwicklung. Beides kann in einem Projekt kombiniert werden, bleibt in der Planung aber klar getrennt.',
      en: 'Web design is the right focus when the offer, content, brand and user journey are central. Projects that require custom data logic, user roles, dashboards or integrations belong in web development. Both can be combined while remaining clearly separated in planning.',
      ar: 'يكون تصميم المواقع هو التركيز المناسب عندما تكون الخدمات والمحتوى والهوية وتجربة المستخدم هي الأساس. أما منطق البيانات المخصص والصلاحيات ولوحات المعلومات والتكاملات فتندرج ضمن تطوير الويب. ويمكن الجمع بينهما مع الفصل الواضح في التخطيط.',
    },
    pricingFactors: [
      { de: 'Anzahl und Tiefe der benötigten Seiten', en: 'Number and depth of required pages', ar: 'عدد الصفحات وعمق محتواها' },
      { de: 'Vorhandene Texte, Bilder und Markenmaterialien', en: 'Available copy, images and brand assets', ar: 'النصوص والصور ومواد الهوية المتاحة' },
      { de: 'Mehrsprachigkeit, Formulare und besondere Funktionen', en: 'Languages, forms and special functions', ar: 'تعدد اللغات والنماذج والوظائف الخاصة' },
    ],
    areaServed: 'Berlin',
    modifiedAt: '2026-10-28',
    technologies: ['Figma', 'React', 'TypeScript', 'HTML', 'CSS', 'Vite'],
    projectSlugs: [],
  },
  {
    slug: 'softwareentwicklung',
    title: { de: 'Individuelle Softwareentwicklung', en: 'Custom software development', ar: 'تطوير البرمجيات المخصصة' },
    summary: {
      de: 'Softwarelösungen für konkrete organisatorische und fachliche Anforderungen – vom belastbaren MVP bis zur weiterentwickelbaren Anwendung.',
      en: 'Software for concrete operational requirements, from a focused MVP to an extensible application.',
      ar: 'حلول برمجية لمتطلبات تشغيلية محددة، من نموذج أولي عملي إلى تطبيق قابل للتوسع.',
    },
    audience: {
      de: 'Für Unternehmen und Projektteams, deren Abläufe nicht sinnvoll in ein fertiges Standardsystem passen.',
      en: 'For businesses and project teams whose workflows do not fit an off-the-shelf system.',
      ar: 'للشركات وفرق المشاريع التي لا تناسب عملياتها الأنظمة الجاهزة.',
    },
    useCases: [
      { de: 'Interne Unternehmens- und Organisationssoftware', en: 'Internal business and organization software', ar: 'برامج داخلية للشركات والتنظيم' },
      { de: 'MVPs zur frühen Prüfung einer Produktidee', en: 'MVPs for early validation of a product idea', ar: 'نماذج أولية لاختبار فكرة المنتج مبكرا' },
      { de: 'APIs, Datenmodelle und Systemverbindungen', en: 'APIs, data models and system integrations', ar: 'واجهات برمجية ونماذج بيانات وربط الأنظمة' },
    ],
    benefits: [
      { de: 'Anforderungen und technischer Umfang bleiben nachvollziehbar', en: 'Requirements and technical scope remain transparent', ar: 'تبقى المتطلبات والنطاق التقني واضحين' },
      { de: 'Kernfunktionen werden vor Erweiterungen priorisiert', en: 'Core capabilities are prioritized before extensions', ar: 'تُعطى الأولوية للوظائف الأساسية قبل التوسعات' },
      { de: 'Architekturentscheidungen orientieren sich am realen Einsatz', en: 'Architecture decisions follow real usage', ar: 'تستند قرارات البنية إلى الاستخدام الحقيقي' },
    ],
    process: [
      { de: 'Problem und Anforderungen analysieren', en: 'Analyze the problem and requirements', ar: 'تحليل المشكلة والمتطلبات' },
      { de: 'Kernumfang und technische Architektur festlegen', en: 'Define core scope and technical architecture', ar: 'تحديد النطاق الأساسي والبنية التقنية' },
      { de: 'Iterativ entwickeln, testen und dokumentieren', en: 'Develop, test and document iteratively', ar: 'التطوير والاختبار والتوثيق بشكل تكراري' },
    ],
    technologies: ['TypeScript', 'JavaScript', 'Node.js', 'Express', 'NestJS', 'PostgreSQL', 'MariaDB', 'Docker'],
    projectSlugs: ['bandora-org', 'geraete-nachverfolgung', 'digital-footprint-os', 'bandora-mt5-trader', 'bandora-crypto-scanner', 'bandora-studio', 'bandora-gen8'],
  },
  {
    slug: 'app-entwicklung',
    title: { de: 'App-Entwicklung', en: 'App development', ar: 'تطوير التطبيقات' },
    summary: {
      de: 'Mobile Anwendungen und Prototypen für iOS und Android mit Fokus auf verständliche Bedienung und einen realistischen ersten Produktumfang.',
      en: 'Mobile applications and prototypes for iOS and Android with clear interaction and a realistic initial scope.',
      ar: 'تطبيقات ونماذج أولية لنظامي iOS وAndroid بواجهة واضحة ونطاق أولي واقعي.',
    },
    audience: {
      de: 'Für Gründer, Privatpersonen und kleine Unternehmen, die eine App-Idee strukturiert in eine testbare Version überführen möchten.',
      en: 'For founders, individuals and small businesses turning an app idea into a testable version.',
      ar: 'للمؤسسين والأفراد والشركات الصغيرة الراغبة في تحويل فكرة تطبيق إلى نسخة قابلة للاختبار.',
    },
    useCases: [
      { de: 'Mobile MVPs und Produktprototypen', en: 'Mobile MVPs and product prototypes', ar: 'نماذج أولية ومنتجات جوال أولية' },
      { de: 'Strukturierte Alltags- und Organisationsanwendungen', en: 'Structured daily-life and organization apps', ar: 'تطبيقات منظمة للحياة اليومية والإدارة' },
      { de: 'Vorbereitung auf TestFlight und App-Store-Prozesse', en: 'Preparation for TestFlight and app-store processes', ar: 'التحضير لـ TestFlight وعمليات متاجر التطبيقات' },
    ],
    benefits: [
      { de: 'Gemeinsame Codebasis für iOS und Android, wenn passend', en: 'Shared iOS and Android codebase where appropriate', ar: 'قاعدة برمجية مشتركة لـ iOS وAndroid عند ملاءمتها' },
      { de: 'Früh testbarer Kern statt überladenem Erstumfang', en: 'An early testable core instead of an overloaded first release', ar: 'نواة قابلة للاختبار مبكرا بدلا من إصدار أول مزدحم' },
      { de: 'Modulare Grundlage für weitere Funktionen', en: 'A modular base for future capabilities', ar: 'أساس معياري لوظائف مستقبلية' },
    ],
    process: [
      { de: 'Nutzerproblem und Kernablauf definieren', en: 'Define the user problem and core flow', ar: 'تحديد مشكلة المستخدم والمسار الأساسي' },
      { de: 'Prototyp und technische Basis entwickeln', en: 'Develop the prototype and technical foundation', ar: 'تطوير النموذج الأولي والأساس التقني' },
      { de: 'Auf Geräten testen und nächste Schritte priorisieren', en: 'Test on devices and prioritize next steps', ar: 'الاختبار على الأجهزة وترتيب الخطوات التالية' },
    ],
    technologies: ['React Native', 'Expo', 'TypeScript', 'REST APIs', 'EAS Build', 'TestFlight'],
    projectSlugs: ['buynot', 'roommate-plus'],
  },
  {
    slug: 'automatisierung',
    title: { de: 'Automatisierung und Systemverbindungen', en: 'Automation and system integration', ar: 'الأتمتة وربط الأنظمة' },
    summary: {
      de: 'Wiederkehrende Daten- und Verwaltungsabläufe mit passenden internen Werkzeugen, Schnittstellen und klaren Prozessregeln vereinfachen.',
      en: 'Simplify recurring data and administration workflows with suitable internal tools, interfaces and clear process rules.',
      ar: 'تبسيط عمليات البيانات والإدارة المتكررة بأدوات داخلية وواجهات وقواعد واضحة.',
    },
    audience: {
      de: 'Für kleine Unternehmen und Teams mit wiederkehrenden manuellen Schritten oder getrennten Informationsquellen.',
      en: 'For small businesses and teams with recurring manual steps or disconnected information sources.',
      ar: 'للشركات الصغيرة والفرق التي لديها خطوات يدوية متكررة أو مصادر معلومات منفصلة.',
    },
    useCases: [
      { de: 'Status- und Dokumentationsabläufe', en: 'Status and documentation workflows', ar: 'عمليات الحالة والتوثيق' },
      { de: 'Datenübertragung über REST-APIs', en: 'Data transfer through REST APIs', ar: 'نقل البيانات عبر REST API' },
      { de: 'Interne Werkzeuge für wiederkehrende Aufgaben', en: 'Internal tools for recurring tasks', ar: 'أدوات داخلية للمهام المتكررة' },
    ],
    benefits: [
      { de: 'Weniger doppelte manuelle Eingaben', en: 'Less duplicate manual entry', ar: 'تقليل الإدخال اليدوي المكرر' },
      { de: 'Nachvollziehbare Zustände und Verantwortlichkeiten', en: 'Traceable states and responsibilities', ar: 'حالات ومسؤوليات قابلة للتتبع' },
      { de: 'Technik orientiert sich am bestehenden Ablauf', en: 'Technology follows the existing workflow', ar: 'التقنية تتبع سير العمل القائم' },
    ],
    process: [
      { de: 'Bestehenden Ablauf und Engpässe aufnehmen', en: 'Map the current workflow and bottlenecks', ar: 'رسم سير العمل الحالي ونقاط التعطل' },
      { de: 'Sinnvolle Automatisierungsschritte abgrenzen', en: 'Define useful automation steps', ar: 'تحديد خطوات الأتمتة المفيدة' },
      { de: 'Umsetzen und mit realistischen Fällen prüfen', en: 'Implement and verify with realistic cases', ar: 'التنفيذ والتحقق باستخدام حالات واقعية' },
    ],
    technologies: ['Node.js', 'REST APIs', 'TypeScript', 'PostgreSQL', 'MariaDB', 'Docker'],
    projectSlugs: ['bandora-org', 'geraete-nachverfolgung', 'digital-footprint-os', 'bandora-mt5-trader', 'bandora-crypto-scanner', 'bandora-studio', 'bandora-gen8'],
  },
];

export function findService(slug: string | undefined) {
  return services.find((service) => service.slug === slug);
}
