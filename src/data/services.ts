import type { LocalizedText } from '../types/project';

export type Service = {
  slug: string;
  title: LocalizedText;
  summary: LocalizedText;
  audience: LocalizedText;
  useCases: LocalizedText[];
  benefits: LocalizedText[];
  process: LocalizedText[];
  technologies: string[];
  projectSlugs: string[];
};

export const services: Service[] = [
  {
    slug: 'webentwicklung',
    title: { de: 'Webentwicklung', en: 'Web development', ar: 'تطوير الويب' },
    summary: {
      de: 'Professionelle Firmenwebsites und individuelle Webanwendungen, die Informationen klar vermitteln, technisch sauber umgesetzt sind und konkrete Arbeitsabläufe digital abbilden.',
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
    technologies: ['React', 'TypeScript', 'Vite', 'Node.js', 'REST APIs', 'MariaDB'],
    projectSlugs: ['geraete-nachverfolgung', 'roommate-plus', 'digital-footprint-os', 'bandora-studio', 'bandora-gen8'],
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
