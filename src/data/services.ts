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
  pricingIntro?: LocalizedText;
  deliverablesTitle?: LocalizedText;
  deliverablesIntro?: LocalizedText;
  deliverables?: LocalizedText[];
  differentiatorsTitle?: LocalizedText;
  differentiators?: LocalizedText[];
  faq?: { question: LocalizedText; answer: LocalizedText }[];
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
    pricingIntro: {
      de: 'Für individuelle Webentwicklung gibt es keinen seriösen Pauschalpreis ohne geklärten Funktionsumfang. Vor einem Angebot werden Kernabläufe, Rollen, Daten, Schnittstellen, Abnahmekriterien und Betrieb gemeinsam abgegrenzt. Das Angebot trennt den notwendigen MVP, optionale Ausbaustufen und laufende Leistungen, damit Änderungen nicht unbemerkt in den Projektpreis rutschen.',
      en: 'Custom web development cannot be priced responsibly before the functional scope is clear. Core workflows, roles, data, integrations, acceptance criteria and operations are defined before a proposal. The proposal separates the required MVP, optional stages and recurring services.',
      ar: 'لا يمكن تسعير تطوير ويب مخصص بصورة مسؤولة قبل تحديد النطاق الوظيفي. تُحدّد مسارات العمل والأدوار والبيانات والتكاملات ومعايير القبول والتشغيل قبل العرض، مع فصل النسخة الأساسية عن مراحل التوسعة والخدمات المستمرة.',
    },
    deliverablesTitle: {
      de: 'Was bei einem Webentwicklungsprojekt konkret entsteht',
      en: 'What a web development project actually delivers',
      ar: 'ما الذي ينتج فعليا عن مشروع تطوير الويب',
    },
    deliverablesIntro: {
      de: 'Der genaue Umfang wird im Angebot festgelegt. Typische Bausteine sind:',
      en: 'The exact scope is defined in the proposal. Typical building blocks include:',
      ar: 'يُحدّد النطاق الدقيق في العرض. وتشمل المكونات المعتادة:',
    },
    deliverables: [
      { de: 'Anforderungs- und MVP-Scope mit klaren Annahmen und Ausschlüssen', en: 'Requirements and MVP scope with explicit assumptions and exclusions', ar: 'نطاق متطلبات ونسخة أساسية مع افتراضات واستثناءات واضحة' },
      { de: 'Responsives Frontend sowie Datenmodell, API oder Backend nach Bedarf', en: 'Responsive frontend plus data model, API or backend where required', ar: 'واجهة متجاوبة مع نموذج بيانات أو API أو خلفية حسب الحاجة' },
      { de: 'Rollen, Validierung und Fehlerfälle passend zum tatsächlichen Ablauf', en: 'Roles, validation and error handling aligned with the real workflow', ar: 'أدوار وتحقق ومعالجة أخطاء ملائمة لمسار العمل الحقيقي' },
      { de: 'Tests, technische Abnahme und dokumentierter Deploymentweg', en: 'Tests, technical acceptance and a documented deployment path', ar: 'اختبارات وقبول تقني ومسار نشر موثق' },
      { de: 'Übergabe von Repository, Zugängen und technischer Dokumentation im vereinbarten Umfang', en: 'Handover of repository, access and technical documentation within the agreed scope', ar: 'تسليم المستودع وبيانات الوصول والتوثيق التقني ضمن النطاق المتفق عليه' },
    ],
    differentiatorsTitle: {
      de: 'Warum Bandora für individuelle Webanwendungen',
      en: 'Why Bandora for custom web applications',
      ar: 'لماذا Bandora لتطبيقات الويب المخصصة',
    },
    differentiators: [
      { de: 'Direkter technischer Ansprechpartner von der Anforderung bis zum Deployment', en: 'One direct technical contact from requirements through deployment', ar: 'جهة تقنية مباشرة واحدة من المتطلبات حتى النشر' },
      { de: 'Frontend, Backend, API, Datenbank und Betrieb werden zusammen geplant', en: 'Frontend, backend, API, database and operations are planned together', ar: 'تخطيط الواجهة والخلفية وAPI وقاعدة البيانات والتشغيل كوحدة واحدة' },
      { de: 'Eigene Projekte belegen Rollenmodelle, Statusverläufe, Mehrsprachigkeit und selbst betriebenes Hosting', en: 'Own projects demonstrate role models, status histories, multilingual delivery and self-operated hosting', ar: 'مشاريع فعلية توضح الأدوار وسجل الحالات وتعدد اللغات والاستضافة الذاتية' },
      { de: 'Der erste Release bleibt bewusst testbar und erweiterbar statt unnötig groß', en: 'The first release stays deliberately testable and extensible rather than unnecessarily large', ar: 'يبقى الإصدار الأول قابلا للاختبار والتوسعة بدلا من تضخيمه دون حاجة' },
    ],
    faq: [
      { question: { de: 'Was kostet individuelle Webentwicklung?', en: 'What does custom web development cost?', ar: 'ما تكلفة تطوير ويب مخصص؟' }, answer: { de: 'Der Preis hängt vor allem von Funktionen, Datenmodell, Rollen, Schnittstellen, Testumfang und Betrieb ab. Nach einer kurzen Anforderungsanalyse wird ein abgegrenzter MVP oder ein klarer Aufwandsschätzbereich angeboten; pauschale Fantasiepreise ohne Scope nennt Bandora nicht.', en: 'Cost mainly depends on features, data model, roles, integrations, testing and operations. After a short requirements analysis, Bandora proposes a bounded MVP or a transparent effort range rather than an invented flat price.', ar: 'تعتمد التكلفة أساسا على الوظائف ونموذج البيانات والأدوار والتكاملات والاختبارات والتشغيل. بعد تحليل مختصر تُقدّم نسخة أساسية محددة أو تقدير جهد واضح بدلا من سعر افتراضي.' } },
      { question: { de: 'Wann reicht eine normale Website nicht mehr?', en: 'When is a normal website no longer enough?', ar: 'متى لا يعود الموقع العادي كافيا؟' }, answer: { de: 'Sobald Benutzerrollen, gespeicherte Fachdaten, Statusabläufe, Dashboards, Automatisierungen oder externe Schnittstellen benötigt werden, ist das Vorhaben eine Webanwendung und sollte entsprechend geplant werden.', en: 'Once user roles, persistent business data, status workflows, dashboards, automation or external integrations are required, the project is a web application and should be planned as one.', ar: 'عند الحاجة إلى أدوار مستخدمين أو بيانات عمل محفوظة أو حالات أو لوحات أو أتمتة أو تكاملات خارجية يصبح المشروع تطبيق ويب ويجب تخطيطه كذلك.' } },
      { question: { de: 'Kann ein vorhandenes System erweitert werden?', en: 'Can an existing system be extended?', ar: 'هل يمكن توسيع نظام قائم؟' }, answer: { de: 'Ja, wenn Codebasis, Datenmodell, Zugänge und technische Risiken zunächst geprüft werden können. Danach lässt sich entscheiden, ob eine Erweiterung wirtschaftlicher ist als ein sauber abgegrenzter Neubau.', en: 'Yes, provided the codebase, data model, access and technical risks can be reviewed first. That review determines whether extending the system is more sensible than a clearly scoped rebuild.', ar: 'نعم، بعد فحص قاعدة الشفرة ونموذج البيانات والوصول والمخاطر التقنية، ثم تحديد ما إذا كان التوسيع أنسب من إعادة بناء محددة.' } },
      { question: { de: 'Wer besitzt Quellcode und Zugänge?', en: 'Who owns the source code and access credentials?', ar: 'من يملك الشفرة وبيانات الوصول؟' }, answer: { de: 'Eigentum, Nutzungsrechte, Repository, Domain- und Infrastrukturzugänge werden vor Projektstart im Angebot eindeutig geregelt. Die vereinbarte Übergabe wird nicht erst beim Projektende improvisiert.', en: 'Ownership, usage rights, repository, domain and infrastructure access are defined in the proposal before work starts. The agreed handover is not improvised at the end.', ar: 'تُحدّد الملكية وحقوق الاستخدام والمستودع ووصول النطاق والبنية التحتية في العرض قبل البدء، ولا يُترك التسليم لنهاية المشروع دون خطة.' } },
    ],
    areaServed: 'Berlin',
    modifiedAt: '2026-11-04',
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
    pricingIntro: {
      de: 'Bandora verwendet keine pauschale Paketnummer, solange Seitenumfang und Lieferleistungen offen sind. Für das Angebot werden Seitentypen, Inhaltsarbeit, Designzustände, Sprachen, Formulare, Migration, technische Abnahme und Betrieb einzeln geklärt. So ist sichtbar, was einmalig entsteht, was optional ist und welche Kosten erst nach dem Launch anfallen.',
      en: 'Bandora does not quote a generic package while page scope and deliverables remain unclear. Page types, content work, design states, languages, forms, migration, technical acceptance and operations are clarified individually.',
      ar: 'لا تقدم Bandora رقما عاما للحزمة ما دام نطاق الصفحات والتسليمات غير واضح. تُحدّد أنواع الصفحات والمحتوى وحالات التصميم واللغات والنماذج والترحيل والقبول التقني والتشغيل بشكل منفصل.',
    },
    deliverablesTitle: {
      de: 'Was in einer professionellen Firmenwebsite enthalten sein kann',
      en: 'What a professional business website can include',
      ar: 'ما الذي يمكن أن يتضمنه موقع شركة احترافي',
    },
    deliverablesIntro: {
      de: 'Der vereinbarte Scope entscheidet. Typische Lieferleistungen sind:',
      en: 'The agreed scope is decisive. Typical deliverables are:',
      ar: 'النطاق المتفق عليه هو الأساس. وتشمل التسليمات المعتادة:',
    },
    deliverables: [
      { de: 'Seitenplan, Nutzerwege und Inhaltsstruktur für Leistungen und Kontaktziele', en: 'Site map, user journeys and content structure for services and enquiry goals', ar: 'خريطة صفحات ومسارات مستخدم وبنية محتوى للخدمات وأهداف التواصل' },
      { de: 'Individuelles responsives Designsystem für Smartphone, Tablet und Desktop', en: 'A custom responsive design system for phone, tablet and desktop', ar: 'نظام تصميم متجاوب ومخصص للهاتف والجهاز اللوحي والحاسوب' },
      { de: 'Technische Umsetzung mit crawlbarem HTML, Metadaten, Sitemap und echten 404-Seiten', en: 'Technical implementation with crawlable HTML, metadata, sitemap and real 404 responses', ar: 'تنفيذ تقني مع HTML قابل للزحف وبيانات وصفية وخريطة موقع واستجابات 404 حقيقية' },
      { de: 'Kontaktformular, Mehrsprachigkeit oder Migration vorhandener URLs nach Vereinbarung', en: 'Contact form, multilingual delivery or migration of existing URLs where agreed', ar: 'نموذج تواصل وتعدد لغات أو ترحيل الروابط الحالية حسب الاتفاق' },
      { de: 'Mobile und technische Abnahme sowie kontrollierte Veröffentlichung', en: 'Mobile and technical acceptance plus a controlled launch', ar: 'قبول للجوال والجوانب التقنية مع نشر منظم' },
    ],
    differentiatorsTitle: {
      de: 'Was Bandora anders macht',
      en: 'What makes Bandora different',
      ar: 'ما الذي يميز Bandora',
    },
    differentiators: [
      { de: 'Direkte Abstimmung mit der Person, die Struktur, Design und Umsetzung verantwortet', en: 'Direct coordination with the person responsible for structure, design and implementation', ar: 'تواصل مباشر مع الشخص المسؤول عن الهيكل والتصميم والتنفيذ' },
      { de: 'Mehrsprachigkeit einschließlich arabischer RTL-Oberflächen aus eigener Projekterfahrung', en: 'Multilingual delivery including Arabic RTL interfaces from hands-on project experience', ar: 'خبرة عملية في تعدد اللغات بما في ذلك الواجهات العربية من اليمين إلى اليسار' },
      { de: 'SEO-Grundlagen, Performance, Formulare und Deployment sind Teil der technischen Planung', en: 'SEO foundations, performance, forms and deployment are part of technical planning', ar: 'أساسيات SEO والأداء والنماذج والنشر جزء من التخطيط التقني' },
      { de: 'Keine fiktiven Referenzen oder Erfolgsversprechen: gezeigt werden nur belegbare eigene Projekte', en: 'No invented references or success promises: only verifiable own projects are shown', ar: 'لا مراجع مختلقة ولا وعود نتائج؛ تُعرض فقط مشاريع فعلية قابلة للتحقق' },
    ],
    faq: [
      { question: { de: 'Was kostet eine professionelle Website bei Bandora?', en: 'What does a professional website cost at Bandora?', ar: 'ما تكلفة موقع احترافي لدى Bandora؟' }, answer: { de: 'Ein verbindlicher Preis entsteht erst aus einem definierten Umfang. Entscheidend sind Seitentypen, Inhalte, individuelles Design, Sprachen, Formulare, Migration und gewünschter Betrieb. Nach dem Erstgespräch folgt deshalb eine nachvollziehbare Leistungsabgrenzung statt eines Lockpreises.', en: 'A binding price requires a defined scope. Page types, content, custom design, languages, forms, migration and operations are the main factors, so the first discussion is followed by a transparent scope rather than a teaser price.', ar: 'يتطلب السعر الملزم نطاقا محددا. والعوامل الأساسية هي أنواع الصفحات والمحتوى والتصميم واللغات والنماذج والترحيل والتشغيل، لذلك يأتي عرض واضح بعد النقاش الأول بدلا من سعر دعائي.' } },
      { question: { de: 'Wie lange dauert die Erstellung?', en: 'How long does a website project take?', ar: 'كم يستغرق إنشاء الموقع؟' }, answer: { de: 'Die Dauer hängt besonders von Umfang, Inhaltsfreigaben und Feedback ab. Im Angebot werden Meilensteine und Abhängigkeiten festgehalten; ohne geklärte Inhalte nennt Bandora keinen künstlich festen Termin.', en: 'Timing depends mainly on scope, content approvals and feedback. Milestones and dependencies are documented in the proposal instead of promising an artificial fixed date before content is clear.', ar: 'تعتمد المدة أساسا على النطاق واعتماد المحتوى والملاحظات. تُوثق المراحل والاعتماديات في العرض دون وعد بموعد غير واقعي قبل وضوح المحتوى.' } },
      { question: { de: 'Muss ich Texte und Bilder fertig liefern?', en: 'Do I need to provide finished copy and images?', ar: 'هل يجب أن أقدم النصوص والصور جاهزة؟' }, answer: { de: 'Nicht zwingend. Vor dem Angebot wird aber festgelegt, welche Inhalte vorhanden sind, wer fehlende Inhalte erstellt und wie viele Abstimmungsrunden dazugehören. So bleibt Inhaltsarbeit sichtbar und planbar.', en: 'Not necessarily, but the proposal states which assets already exist, who creates missing content and how many review rounds are included so content work remains visible and plannable.', ar: 'ليس بالضرورة، لكن العرض يحدد المواد المتاحة ومن ينشئ المحتوى الناقص وعدد جولات المراجعة حتى يبقى العمل واضحا وقابلا للتخطيط.' } },
      { question: { de: 'WordPress, Baukasten oder individuelle Umsetzung?', en: 'WordPress, website builder or custom implementation?', ar: 'ووردبريس أم أداة بناء أم تنفيذ مخصص؟' }, answer: { de: 'Die Technik folgt dem Pflegebedarf, den Funktionen, dem Budget und der gewünschten Unabhängigkeit. Bandora empfiehlt keine Plattform pauschal, sondern grenzt zuerst Inhalte, Bedienung, Erweiterungen und Betrieb ab.', en: 'The technology follows editing needs, functions, budget and the desired independence. Bandora does not prescribe one platform before content, operation and future extensions are understood.', ar: 'تتبع التقنية احتياجات الإدارة والوظائف والميزانية والاستقلالية المطلوبة. لا تُفرض منصة واحدة قبل فهم المحتوى والتشغيل والتوسعات.' } },
      { question: { de: 'Ist technische SEO enthalten?', en: 'Is technical SEO included?', ar: 'هل يشمل العمل SEO التقني؟' }, answer: { de: 'Die technische Basis umfasst im vereinbarten Umfang crawlbares HTML, eindeutige Seitentitel und Canonicals, Sitemap, mobile Nutzbarkeit, Statuscodes und strukturierte Daten. Laufende Content- oder Offpage-SEO ist eine separate Leistung und wird nicht als Rankinggarantie verkauft.', en: 'Within the agreed scope, the technical foundation covers crawlable HTML, clear titles and canonicals, sitemap, mobile usability, status codes and structured data. Ongoing content or off-page SEO is separate and is never sold as a ranking guarantee.', ar: 'ضمن النطاق المتفق عليه يشمل الأساس HTML قابلا للزحف وعناوين وCanonical واضحة وخريطة الموقع والجوال ورموز الحالة والبيانات المنظمة. أما SEO المستمر للمحتوى أو الروابط فهو منفصل ولا يتضمن ضمان ترتيب.' } },
    ],
    areaServed: 'Berlin',
    modifiedAt: '2026-11-04',
    technologies: ['Figma', 'React', 'TypeScript', 'HTML', 'CSS', 'Vite'],
    projectSlugs: ['bandora-studio'],
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
    projectSlugs: ['bandora-quiz', 'buynot', 'roommate-plus'],
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
