import type { Project } from '../types/project';

export const projects: Project[] = [
{
  "id": "bandora-org",
  "slug": "bandora-org",
  "title": "Bandora Org",
  "category": {
    "de": "Desktop-Anwendung / Organisationssoftware",
    "en": "Desktop application / organizational software",
    "ar": "تطبيق سطح مكتب / برنامج تنظيمي"
  },
  "status": {
    "de": "Pilotbetrieb / aktive Weiterentwicklung",
    "en": "Pilot stage / active development",
    "ar": "مرحلة تجريبية / تطوير مستمر"
  },
  "shortDescription": {
    "de": "Teilnehmer, Termine und Dokumentation an einem Ort. Eine eigenständig entwickelte Desktop-Anwendung für strukturierte organisatorische Abläufe.",
    "en": "Participants, appointments and documentation in one place. An independently developed desktop application for structured organizational workflows.",
    "ar": "المشاركون والمواعيد والتوثيق في مكان واحد. تطبيق سطح مكتب مطوّر بشكل مستقل لتنظيم سير العمل الإداري."
  },
  "description": {
    "de": "Bandora Org verbindet Teilnehmer- und Terminverwaltung mit Status- und Teilnahmedokumentation. Der lokale, offline-fähige Betrieb ermöglicht die Arbeit unabhängig von einem erreichbaren Updateserver. Die Anwendung wird im Pilotbetrieb und durch laufende Release-Tests weiterentwickelt.",
    "en": "Bandora Org combines participant and appointment management with status and attendance documentation. Local, offline-capable operation allows work to continue independently of update-server availability. The application is being refined through pilot use and ongoing release tests.",
    "ar": "يجمع Bandora Org إدارة المشاركين والمواعيد مع توثيق الحالة والحضور. يتيح التشغيل المحلي دون اتصال مواصلة العمل بصرف النظر عن توفر خادم التحديث. يستمر تطوير التطبيق خلال المرحلة التجريبية واختبارات الإصدارات."
  },
  "problem": {
    "de": "Teilnehmerdaten, Termine und ihre Dokumentation müssen zusammen nachvollziehbar bleiben. Gleichzeitig darf ein nicht erreichbarer Updateserver die tägliche Arbeit nicht unterbrechen.",
    "en": "Participant records, appointments and their documentation need to remain connected and traceable. An unavailable update server must not interrupt daily work.",
    "ar": "يجب أن تظل بيانات المشاركين والمواعيد والتوثيق مترابطة وقابلة للتتبع، وألا يؤدي تعذر الوصول إلى خادم التحديث إلى توقف العمل اليومي."
  },
  "solution": {
    "de": "Eine lokale Desktop-Anwendung bündelt die organisatorischen Daten. Ein eigenes Update-System trennt die Aktualisierung des Programms vom Weiterarbeiten mit den vorhandenen Daten.",
    "en": "A local desktop application brings organizational records together. Its update system separates software updates from continued work with existing data.",
    "ar": "يجمع تطبيق سطح مكتب محلي البيانات التنظيمية. ويفصل نظام التحديث بين تحديث البرنامج ومواصلة العمل بالبيانات الموجودة."
  },
  "features": [
    {
      "de": "Teilnehmerverwaltung",
      "en": "Participant management",
      "ar": "إدارة المشاركين"
    },
    {
      "de": "Terminverwaltung",
      "en": "Appointment management",
      "ar": "إدارة المواعيد"
    },
    {
      "de": "Status- und Teilnahmedokumentation",
      "en": "Status and attendance documentation",
      "ar": "توثيق الحالة والحضور"
    },
    {
      "de": "Lokaler, offline-fähiger Betrieb",
      "en": "Local, offline-capable operation",
      "ar": "تشغيل محلي دون اتصال"
    },
    {
      "de": "Manuelle und automatische Updateprüfung",
      "en": "Manual and automatic update checks",
      "ar": "فحص التحديثات يدويًا وتلقائيًا"
    },
    {
      "de": "Versionsanzeige und Update-Dialoge",
      "en": "Version display and update dialogs",
      "ar": "عرض الإصدار وحوارات التحديث"
    }
  ],
  "technologies": [],
  "role": [
    {
      "de": "Eigenständige Anwendungsentwicklung",
      "en": "Independent application development",
      "ar": "تطوير مستقل للتطبيق"
    },
    {
      "de": "Entwicklung des Update-Systems",
      "en": "Update-system development",
      "ar": "تطوير نظام التحديث"
    },
    {
      "de": "Pilot- und Release-Tests",
      "en": "Pilot and release testing",
      "ar": "اختبارات المرحلة التجريبية والإصدارات"
    }
  ],
  "image": "/images/projects/bandora-org-preview.svg",
  "filters": [
    "desktop",
    "development"
  ],
  "architectureNotes": {
    "de": "Programmdaten und Anwendung sind getrennt. Vor Updates wird ein Backup erstellt. Ist der Updateserver nicht erreichbar, kann lokal weitergearbeitet werden.",
    "en": "Application data and program files are separated. A backup is created before updates. Local work can continue if the update server is unavailable.",
    "ar": "تُفصل بيانات البرنامج عن التطبيق، وتُنشأ نسخة احتياطية قبل التحديثات. يمكن مواصلة العمل محليًا عند تعذر الوصول إلى خادم التحديث."
  },
  "developmentStatus": {
    "de": "Pilotbetrieb mit aktiver Weiterentwicklung. Die folgenden Erweiterungen sind geplant und noch nicht als fertige Funktionen ausgewiesen.",
    "en": "Pilot stage with active development. The following extensions are planned and are not presented as completed capabilities.",
    "ar": "مرحلة تجريبية مع تطوير مستمر. الإضافات التالية مخططة ولا تُعرض بوصفها وظائف مكتملة."
  },
  "futureFeatures": [
    {
      "de": "Automatischer Teilnahmestatus für vergangene Termine, sofern nicht manuell geändert",
      "en": "Automatic attendance status for past appointments unless manually changed",
      "ar": "تحديث حالة حضور المواعيد الماضية تلقائيًا ما لم تُعدّل يدويًا"
    },
    {
      "de": "Erweiterte Terminnachweise",
      "en": "Extended appointment records",
      "ar": "إثباتات مواعيد موسعة"
    },
    {
      "de": "Notiz-Auswahl bei Terminen",
      "en": "Note selection for appointments",
      "ar": "اختيار الملاحظات للمواعيد"
    },
    {
      "de": "Automatisch erzeugte Wochenblätter",
      "en": "Automatically generated weekly sheets",
      "ar": "إنشاء أوراق أسبوعية تلقائيًا"
    },
    {
      "de": "Konfigurierbare Generierungsfrequenz für Nachweise",
      "en": "Configurable record-generation frequency",
      "ar": "ضبط وتيرة إنشاء الإثباتات"
    }
  ]
},
  {
    id: 'buynot',
    architectureNotes: {"de": "React Native, Expo und TypeScript bilden die mobile Basis. NestJS, PostgreSQL, Prisma und Redis gehören zum Backend-Stack. EAS Build und TestFlight unterstützen die Arbeit am iOS-Prototyp.", "en": "React Native, Expo and TypeScript form the mobile foundation. NestJS, PostgreSQL, Prisma and Redis belong to the backend stack. EAS Build and TestFlight support work on the iOS prototype.", "ar": "يشكّل React Native وExpo وTypeScript أساس تطبيق الجوال. تشمل تقنيات الخلفية NestJS وPostgreSQL وPrisma وRedis. يدعم EAS Build وTestFlight تطوير نموذج iOS."},
    developmentStatus: {"de": "Der iOS-Prototyp ist in Entwicklung. Die beschriebenen Funktionen gehören zum Projektumfang; eine öffentliche Demo und ein Nachweis der Wirksamkeit werden nicht behauptet.", "en": "The iOS prototype is in development. The capabilities described define the project scope; no public demo or evidence of effectiveness is claimed.", "ar": "نموذج iOS قيد التطوير. تصف الوظائف المذكورة نطاق المشروع، ولا يُدّعى توفر عرض عام أو إثبات لفعاليته."},
    slug: 'buynot',
    title: 'BuyNot',
    category: {
      de: 'Mobile App / Behavioral Technology',
      en: 'Mobile app / behavioral technology',
      ar: 'تطبيق جوال / تقنية سلوكية',
    },
    status: {
      de: 'iOS-Prototyp in Entwicklung',
      en: 'iOS prototype in development',
      ar: 'نموذج أولي لنظام iOS قيد التطوير',
    },
    shortDescription: {
      de: 'Eine mobile Verhaltens- und Selbsthilfeanwendung, die Menschen dabei unterstützt, impulsive und unnötige Kaufentscheidungen zu reduzieren.',
      en: 'A mobile behavioral self-help application that helps people reduce impulsive and unnecessary purchase decisions.',
      ar: 'تطبيق سلوكي للمساعدة الذاتية يساعد المستخدمين على تقليل قرارات الشراء الاندفاعية وغير الضرورية.',
    },
    description: {
      de: 'BuyNot ist kein Marktplatz. Die Anwendung bildet ausgewählte Schritte eines Einkaufs kontrolliert ab, damit Nutzer einen Impuls erkennen, unterbrechen und später reflektieren können.',
      en: 'BuyNot is not a marketplace. It models selected shopping steps in a controlled way so users can recognize, interrupt, and later reflect on a purchase impulse.',
      ar: 'BuyNot ليس سوقا إلكترونيا. يحاكي التطبيق خطوات محددة من عملية الشراء بشكل مضبوط لمساعدة المستخدم على ملاحظة الدافع وإيقافه ثم التفكير فيه لاحقا.',
    },
    problem: {
      de: 'Impulsive Käufe entstehen häufig unter Stress, Frust, Langeweile oder durch kurzfristige Belohnungsimpulse. Klassische Shopping-Plattformen verstärken diese Mechanismen.',
      en: 'Impulse purchases often arise from stress, frustration, boredom, or short-term reward loops. Classic shopping platforms often reinforce those mechanisms.',
      ar: 'تظهر المشتريات الاندفاعية غالبا بسبب الضغط أو الإحباط أو الملل أو البحث عن مكافأة سريعة. منصات التسوق التقليدية قد تعزز هذه الآليات.',
    },
    solution: {
      de: 'BuyNot simuliert Suche, Warenkorb und Checkout ohne echte Bestellung oder Zahlung. Ziel ist ein bewusster Stopp vor der Kaufentscheidung.',
      en: 'BuyNot simulates search, cart, and checkout without real ordering or payment. The goal is a deliberate pause before a purchase decision.',
      ar: 'يحاكي BuyNot البحث والسلة والدفع من دون طلب أو دفع حقيقي. الهدف هو خلق توقف واع قبل قرار الشراء.',
    },
    features: [
      { de: 'Suche nach realen Produkten', en: 'Search for real products', ar: 'البحث عن منتجات حقيقية' },
      { de: 'Anzeige realer Produktinformationen', en: 'Real product information', ar: 'عرض معلومات منتجات حقيقية' },
      { de: 'Warenkorb und simulierter Checkout', en: 'Cart and simulated checkout', ar: 'سلة ومحاكاة للدفع' },
      { de: 'Simulierte Bestellbestätigung und Lieferzeit', en: 'Simulated order confirmation and delivery time', ar: 'تأكيد طلب ومدة تسليم محاكيان' },
      { de: 'Reflexion über Kaufimpulse', en: 'Reflection on purchase impulses', ar: 'تأمل دوافع الشراء' },
    ],
    technologies: ['React Native', 'Expo', 'TypeScript', 'NestJS', 'PostgreSQL', 'Prisma', 'Redis', 'Docker', 'Render', 'EAS Build', 'TestFlight'],
    role: [
      { de: 'Produktkonzeption', en: 'Product concept', ar: 'تصميم المنتج' },
      { de: 'UX-Planung', en: 'UX planning', ar: 'تخطيط تجربة المستخدم' },
      { de: 'Frontend- und Backend-Entwicklung', en: 'Frontend and backend development', ar: 'تطوير الواجهة والخلفية' },
      { de: 'Deployment und technische Weiterentwicklung', en: 'Deployment and technical evolution', ar: 'النشر والتطوير التقني' },
    ],
    image: '/images/projects/buynot-preview.svg',
    filters: ['mobile', 'mvp', 'development'],
  },
  {
    id: 'device-tracking',
    architectureNotes: {"de": "React und Vite bilden die Oberfläche. Node.js und Express stellen eine REST-API bereit; MariaDB speichert die Daten. Transaktionen und Rollback sichern Statusänderungen und Historie ab.", "en": "React and Vite power the interface. Node.js and Express provide a REST API, with MariaDB storing the data. Transactions and rollback protect status changes and history.", "ar": "تعتمد الواجهة على React وVite، وتوفر Node.js وExpress واجهة REST API مع تخزين البيانات في MariaDB. تحمي المعاملات والتراجع تغييرات الحالة والسجل."},
    developmentStatus: {"de": "Der MVP ist abgeschlossen. Der Fokus dieser Fallstudie liegt auf nachvollziehbaren Zuständigkeiten und konsistenten Geräteverläufen. Eine öffentliche Demo ist nicht verfügbar.", "en": "The MVP is complete. This case study focuses on traceable responsibilities and consistent device histories. No public demo is available.", "ar": "اكتمل النموذج الأولي. تركز دراسة المشروع على وضوح المسؤوليات واتساق سجلات الأجهزة. لا يتوفر عرض تجريبي عام."},
    slug: 'geraete-nachverfolgung',
    title: 'Geräte-Nachverfolgung',
    category: {
      de: 'Webanwendung / interne Unternehmenssoftware',
      en: 'Web application / internal business software',
      ar: 'تطبيق ويب / برنامج داخلي للشركات',
    },
    status: { de: 'Abgeschlossener MVP', en: 'Completed MVP', ar: 'نموذج أولي مكتمل' },
    shortDescription: {
      de: 'Eine Webanwendung zur transparenten Nachverfolgung interner IT-Geräte über mehrere Bearbeitungsabteilungen.',
      en: 'A web application for transparent tracking of internal IT devices across multiple processing departments.',
      ar: 'تطبيق ويب لتتبع أجهزة تقنية المعلومات الداخلية بشفافية عبر عدة أقسام معالجة.',
    },
    description: {
      de: 'Die Anwendung macht Standort, Status, verantwortliche Abteilung, zugewiesene Mitarbeiter und Änderungshistorie eines Geräts zentral nachvollziehbar.',
      en: 'The application centralizes device location, status, responsible department, assigned staff, and immutable change history.',
      ar: 'يوفر التطبيق عرضا مركزيا لموقع الجهاز وحالته والقسم المسؤول والموظفين المعينين وسجل التغييرات غير القابل للتعديل.',
    },
    problem: {
      de: 'Gerätestandorte, Bearbeitungszustände und Zuständigkeiten waren zuvor nur schwer und mit hohem manuellem Aufwand nachvollziehbar.',
      en: 'Device locations, processing states, and responsibilities were difficult to track and required significant manual effort.',
      ar: 'كان تتبع مواقع الأجهزة وحالات المعالجة والمسؤوليات صعبا ويتطلب جهدا يدويا كبيرا.',
    },
    solution: {
      de: 'Ein zentrales Dashboard verbindet Suche, Detailansicht, Statuswechsel, Abteilungswechsel und transaktionssichere Historie.',
      en: 'A central dashboard combines search, detail views, status changes, department transfers, and transaction-safe history.',
      ar: 'تجمع لوحة مركزية بين البحث وعرض التفاصيل وتغيير الحالة ونقل القسم وسجل آمن بالمعاملات.',
    },
    features: [
      { de: 'Dashboard und Geräteübersicht', en: 'Dashboard and device overview', ar: 'لوحة معلومات ونظرة عامة على الأجهزة' },
      { de: 'Suche nach Inventarnummer und Gerätedaten', en: 'Search by inventory number and device data', ar: 'البحث برقم الجرد وبيانات الجهاز' },
      { de: 'Status- und Abteilungswechsel', en: 'Status and department changes', ar: 'تغيير الحالة والقسم' },
      { de: 'Mitarbeiterzuweisung', en: 'Staff assignment', ar: 'تعيين الموظفين' },
      { de: 'Unveränderbare Historieneinträge', en: 'Immutable history entries', ar: 'سجلات تاريخ غير قابلة للتعديل' },
      { de: 'Fehlerbehandlung mit Rollback', en: 'Error handling with rollback', ar: 'معالجة الأخطاء مع التراجع' },
    ],
    technologies: ['React', 'Vite', 'JavaScript', 'Node.js', 'Express', 'MariaDB', 'REST API', 'Axios', 'Bootstrap'],
    role: [
      { de: 'Anforderungsanalyse', en: 'Requirements analysis', ar: 'تحليل المتطلبات' },
      { de: 'Architektur und Datenbankmodellierung', en: 'Architecture and database modeling', ar: 'البنية ونمذجة قاعدة البيانات' },
      { de: 'Frontend- und Backend-Entwicklung', en: 'Frontend and backend development', ar: 'تطوير الواجهة والخلفية' },
      { de: 'Testplanung und technische Dokumentation', en: 'Test planning and technical documentation', ar: 'تخطيط الاختبارات والتوثيق التقني' },
    ],
    image: '/images/projects/device-tracking-preview.svg',
    filters: ['web', 'mvp', 'completed'],
  },
  {
    id: 'roommate',
    architectureNotes: {"de": "React Native und TypeScript bilden die mobile Basis. Die Komponentenarchitektur ist modular aufgebaut; REST-APIs gehören zum technischen Ansatz.", "en": "React Native and TypeScript form the mobile foundation. Components follow a modular architecture, with REST APIs forming part of the technical approach.", "ar": "يشكل React Native وTypeScript أساس تطبيق الجوال. تعتمد المكونات بنية معيارية وتدخل واجهات REST API ضمن النهج التقني."},
    developmentStatus: {"de": "RoomMate+ ist in Entwicklung. Haushaltsgruppen und Aufgabenverwaltung werden entwickelt; Putzpläne und gemeinsame Ausgaben sind geplant. Einladungen befinden sich im Konzeptstadium.", "en": "RoomMate+ is in development. Household groups and task management are being developed; cleaning plans and shared expenses are planned. Invitations remain at the concept stage.", "ar": "RoomMate+ قيد التطوير. يجري تطوير مجموعات السكن وإدارة المهام، بينما تُخطط جداول التنظيف والمصاريف المشتركة. الدعوات ما زالت في مرحلة التصور."},
    slug: 'roommate-plus',
    title: 'RoomMate+',
    category: {
      de: 'Mobile und Web-Anwendung / Haushaltsorganisation',
      en: 'Mobile and web application / household organization',
      ar: 'تطبيق جوال وويب / تنظيم السكن المشترك',
    },
    status: { de: 'In Entwicklung', en: 'In development', ar: 'قيد التطوير' },
    shortDescription: {
      de: 'Eine modular aufgebaute Anwendung zur Organisation gemeinsamer Haushalte und Wohngemeinschaften.',
      en: 'A modular application for organizing shared households and flatshares.',
      ar: 'تطبيق معياري لتنظيم المنازل المشتركة والسكن الجماعي.',
    },
    description: {
      de: 'RoomMate+ bündelt geplante Haushaltsfunktionen in einer mobilen, erweiterbaren Oberfläche. Unfertige Funktionen werden bewusst als geplant, Konzept oder in Entwicklung gekennzeichnet.',
      en: 'RoomMate+ bundles planned household functions into a mobile, extensible interface. Unfinished capabilities are clearly marked as planned, concept, or in development.',
      ar: 'يجمع RoomMate+ وظائف منزلية مخططة في واجهة جوال قابلة للتوسع. يتم تمييز الوظائف غير المكتملة بوضوح كوظائف مخططة أو مفاهيم أو قيد التطوير.',
    },
    problem: {
      de: 'Aufgaben, gemeinsame Ausgaben und wiederkehrende Haushaltsabläufe werden häufig über verschiedene Apps, Chats oder manuelle Listen organisiert.',
      en: 'Tasks, shared expenses, and recurring household routines are often spread across different apps, chats, or manual lists.',
      ar: 'غالبا ما تتوزع المهام والمصاريف المشتركة والروتينات المنزلية المتكررة بين تطبيقات ومحادثات وقوائم يدوية مختلفة.',
    },
    solution: {
      de: 'Eine modulare Architektur verbindet Haushaltsgruppen, Aufgaben, Erinnerungen, Rollen und spätere Erweiterungen in einer mobile-first Anwendung.',
      en: 'A modular architecture connects household groups, tasks, reminders, roles, and future extensions in a mobile-first application.',
      ar: 'تربط بنية معيارية بين مجموعات المنزل والمهام والتذكيرات والأدوار والتوسعات اللاحقة في تطبيق يركز على الجوال.',
    },
    features: [
      { de: 'Haushaltsgruppen - in Entwicklung', en: 'Household groups - in development', ar: 'مجموعات السكن - قيد التطوير' },
      { de: 'Aufgabenverwaltung - in Entwicklung', en: 'Task management - in development', ar: 'إدارة المهام - قيد التطوير' },
      { de: 'Putzplan und wiederkehrende Aufgaben - geplant', en: 'Cleaning plan and recurring tasks - planned', ar: 'جدول تنظيف ومهام متكررة - مخطط' },
      { de: 'Einladungen per Code oder Link - Konzept', en: 'Invites by code or link - concept', ar: 'دعوات عبر رمز أو رابط - مفهوم' },
      { de: 'Gemeinsame Ausgaben und Abrechnungen - geplant', en: 'Shared expenses and settlements - planned', ar: 'مصاريف وتسويات مشتركة - مخطط' },
    ],
    technologies: ['React Native', 'TypeScript', 'modular architecture', 'REST APIs', 'mobile-first UI'],
    role: [
      { de: 'Produktstruktur', en: 'Product structure', ar: 'هيكلة المنتج' },
      { de: 'UX-Konzept', en: 'UX concept', ar: 'مفهوم تجربة المستخدم' },
      { de: 'Modulare Komponentenarchitektur', en: 'Modular component architecture', ar: 'بنية مكونات معيارية' },
    ],
    image: '/images/projects/roommate-preview.svg',
    filters: ['mobile', 'web', 'mvp', 'development'],
  },
];
