import React, { useState, useEffect } from 'react';
import { 
  Phone, 
  Mail, 
  Globe, 
  Menu, 
  X, 
  GraduationCap, 
  BookOpen, 
  TrendingUp, 
  CheckCircle,
  MessageCircle,
  ChevronDown,
  AlertCircle,
  Star,
  Users,
  Award,
  ArrowRight,
  Info,
  DollarSign,
  Package
} from 'lucide-react';

// Configuration des langues
const languages = [
  { code: 'fr', name: 'Français', flag: 'fr', dir: 'ltr' },
  { code: 'en', name: 'English', flag: 'gb', dir: 'ltr' },
  { code: 'es', name: 'Español', flag: 'es', dir: 'ltr' },
  { code: 'de', name: 'Deutsch', flag: 'de', dir: 'ltr' },
  { code: 'ar', name: 'العربية', flag: 'sa', dir: 'rtl' },
  { code: 'ru', name: 'Русский', flag: 'ru', dir: 'ltr' }
];

const content = {
  fr: {
    nav: { home: "Accueil", about: "À propos", courses: "Nos Cours", testimonials: "Témoignages", contact: "Contact" },
    hero: {
      badge: "Rentrée 2024-2025 • Inscriptions ouvertes",
      title1: "Français et Anglais,",
      title2: "comme à la maison !",
      subtitle: "Ne vous contentez pas d'apprendre une langue, vivez-la. Des cours immersifs pour adultes et enfants avec des professeurs natifs.",
      cta1: "Réserver mon cours d'essai gratuit",
      cta2: "Voir les tarifs"
    },
    stats: {
      items: [
        { num: "100%", label: "Professeurs Natifs" },
        { num: "500+", label: "Élèves formés" },
        { num: "98%", label: "Taux de réussite" }
      ]
    },
    about: {
      title: "Plus qu'une école, une famille",
      subtitle: "Notre Histoire & Nos Valeurs",
      p1: "Fondé avec la conviction qu'une langue s'apprend mieux dans la convivialité, notre centre brise les codes de l'enseignement académique strict.",
      p2: "Nous combinons l'excellence pédagogique des certifications internationales (IB, DELF) avec une approche chaleureuse et personnalisée.",
      features: ["Classes en petits groupes", "Suivi pédagogique", "Ambiance détendue"]
    },
    levels: {
      btn: "Comprendre nos niveaux (A1 - C2)",
      title: "Niveaux Européens (CECRL)",
      close: "Fermer",
      list: [
        { id: "A1", title: "A1 – Débutant", desc: "Peut comprendre et utiliser des expressions très simples. Se présenter, saluer, dire son âge. Écrire des messages très simples.", ex: "Ex: se présenter, commander un café." },
        { id: "A2", title: "A2 – Élémentaire", desc: "Peut communiquer dans des situations simples. Parler de sa famille, son travail. Décrire le quotidien.", ex: "Ex: raconter sa journée, parler de ses vacances." },
        { id: "B1", title: "B1 – Intermédiaire", desc: "Peut se débrouiller dans la vie quotidienne. Comprendre les points essentiels d'une discussion. Donner son opinion.", ex: "Ex: raconter un souvenir, exprimer son accord." },
        { id: "B2", title: "B2 – Intermédiaire avancé", desc: "Peut communiquer avec aisance. Comprendre des textes complexes. Argumenter et débattre.", ex: "Ex: débat d'idées, contexte professionnel." },
        { id: "C1", title: "C1 – Avancé", desc: "Maîtrise efficace dans des contextes complexes. S'exprimer couramment et avec précision.", ex: "Ex: conférences, rapports, essais." },
        { id: "C2", title: "C2 – Maîtrise", desc: "Niveau proche d'un locuteur natif instruit. Comprendre sans effort. Nuancer finement ses propos.", ex: "Ex: maîtrise totale." }
      ]
    },
    courses: {
      title: "Nos Programmes de Formation",
      subtitle: "Choisissez la formule adaptée à vos besoins. Tous nos tarifs sont en Dollars ($).",
      material: "Matériel inclus (livres, supports)",
      priceLabels: ["Basique", "Intermédiaire", "Intensif"],
      catalog: [
        { 
          title: "Apprentissage Libre", 
          langs: "Anglais / Français / Espagnol", 
          icon: "book", 
          prices: [120, 240, 360],
          desc: "Idéal pour apprendre à son rythme avec une progression constante.",
          tags: ["Populaire"]
        },
        { 
          title: "Langues sur Objectif Spécifique (LOS)", 
          langs: "Anglais / Français / Espagnol", 
          icon: "trend", 
          prices: [120, 240, 360],
          desc: "Focalisé sur le vocabulaire professionnel, médical, juridique ou tourisme.",
          tags: ["Carrière"]
        },
        { 
          title: "Préparation Examens", 
          langs: "DELF / DALF / IB / TCF", 
          icon: "grad", 
          prices: [150, 270, 390],
          desc: "Entraînement intensif aux épreuves officielles pour garantir votre score.",
          tags: ["Certifiant"]
        },
        { 
          title: "Apprentissage Kids", 
          langs: "Français / Anglais / Espagnol", 
          icon: "users", 
          prices: [120, 240, 360],
          desc: "Approche ludique et interactive pour les enfants et adolescents.",
          tags: ["Jeunesse"]
        }
      ]
    },
    testimonials: {
      title: "Ce que disent nos élèves",
      items: [
        { text: "Grâce à la préparation TCF, j'ai obtenu le score nécessaire pour mon immigration au Canada !", author: "Sarah M.", role: "Étudiante" },
        { text: "L'ambiance est incroyable. J'avais peur de parler anglais, mais les profs m'ont donné confiance.", author: "Thomas L.", role: "Professionnel" },
        { text: "Mes enfants adorent venir le mercredi. Ils apprennent sans s'en rendre compte.", author: "Amina B.", role: "Maman" }
      ]
    },
    contact: {
      title: "Prêt à vous lancer ?",
      desc: "Contactez-nous pour un devis personnalisé ou une évaluation gratuite.",
      formTitle: "Demande d'informations",
      name: "Nom complet",
      email: "Email",
      message: "Votre message",
      send: "Envoyer ma demande",
      sending: "Envoi...",
      success: "Merci ! Nous vous recontacterons très vite.",
      error: "Erreur, veuillez réessayer."
    },
    footer: { rights: "Tous droits réservés." }
  },
  en: {
    nav: { home: "Home", about: "About", courses: "Courses", testimonials: "Reviews", contact: "Contact" },
    hero: {
      badge: "2024-2025 Intake • Enrollment Open",
      title1: "French and English,",
      title2: "Just Like Home!",
      subtitle: "Immersive courses for adults and kids with native teachers.",
      cta1: "Book Free Trial",
      cta2: "See Prices"
    },
    stats: {
      items: [{ num: "100%", label: "Native Teachers" }, { num: "500+", label: "Students" }, { num: "98%", label: "Success Rate" }]
    },
    about: {
      title: "More than a school, a family",
      subtitle: "Our Story & Values",
      p1: "Founded on the belief that languages are best learned in a friendly environment.",
      p2: "We combine educational excellence with a warm approach.",
      features: ["Small groups", "Weekly tracking", "Relaxed vibe"]
    },
    levels: {
      btn: "Understand Levels (A1 - C2)",
      title: "European Levels (CEFR)",
      close: "Close",
      list: [
        { id: "A1", title: "A1 – Beginner", desc: "Can understand and use very simple expressions.", ex: "Ex: introduce oneself." },
        { id: "A2", title: "A2 – Elementary", desc: "Can communicate in simple situations.", ex: "Ex: talk about family." },
        { id: "B1", title: "B1 – Intermediate", desc: "Can deal with most situations likely to arise while travelling.", ex: "Ex: describe experiences." },
        { id: "B2", title: "B2 – Upper Intermediate", desc: "Can interact with a degree of fluency and spontaneity.", ex: "Ex: active debate." },
        { id: "C1", title: "C1 – Advanced", desc: "Can express ideas fluently and spontaneously.", ex: "Ex: academic context." },
        { id: "C2", title: "C2 – Mastery", desc: "Can understand with ease virtually everything heard or read.", ex: "Ex: native level." }
      ]
    },
    courses: {
      title: "Our Training Programs",
      subtitle: "Choose the plan that fits your needs. All prices in USD ($).",
      material: "Material included (books, etc.)",
      priceLabels: ["Basic", "Intermediate", "Intensive"],
      catalog: [
        { title: "Open Learning", langs: "English / French / Spanish", icon: "book", prices: [120, 240, 360], desc: "Ideal for learning at your own pace.", tags: ["Popular"] },
        { title: "Specific Objective (LOS)", langs: "English / French / Spanish", icon: "trend", prices: [120, 240, 360], desc: "Focused on professional vocabulary.", tags: ["Career"] },
        { title: "Exam Prep", langs: "DELF / DALF / IB / TCF", icon: "grad", prices: [150, 270, 390], desc: "Intensive training for official exams.", tags: ["Certified"] },
        { title: "Kids Learning", langs: "French / English / Spanish", icon: "users", prices: [120, 240, 360], desc: "Fun and interactive approach for kids.", tags: ["Youth"] }
      ]
    },
    testimonials: {
      title: "Student Reviews",
      items: [
        { text: "Great TCF prep!", author: "Sarah M.", role: "Student" },
        { text: "Amazing atmosphere.", author: "Thomas L.", role: "Professional" },
        { text: "My kids love it.", author: "Amina B.", role: "Mother" }
      ]
    },
    contact: {
      title: "Ready to start?",
      desc: "Contact us for a quote.",
      formTitle: "Request Info",
      name: "Full Name",
      email: "Email",
      message: "Your message",
      send: "Send Request",
      sending: "Sending...",
      success: "Thanks! We'll stay in touch.",
      error: "Error, please try again."
    },
    footer: { rights: "All rights reserved." }
  },
  es: {
    nav: { home: "Inicio", about: "Nosotros", courses: "Cursos", testimonials: "Testimonios", contact: "Contacto" },
    hero: {
      badge: "Inscripciones 2024-2025 • Abiertas",
      title1: "Francés e Inglés,",
      title2: "¡como en casa!",
      subtitle: "Cursos inmersivos para adultos y niños con profesores nativos.",
      cta1: "Clase de prueba gratis",
      cta2: "Ver precios"
    },
    stats: {
      items: [{ num: "100%", label: "Profesores Nativos" }, { num: "500+", label: "Alumnos" }, { num: "98%", label: "Tasa de éxito" }]
    },
    about: {
      title: "Más que una escuela, una familia",
      subtitle: "Historia y Valores",
      p1: "Fundado con la convicción de que un idioma se aprende mejor en un ambiente amigable.",
      p2: "Combinamos la excelencia pedagógica con un enfoque cálido.",
      features: ["Grupos pequeños", "Seguimiento semanal", "Ambiente relajado"]
    },
    levels: {
      btn: "Entender niveles (A1 - C2)",
      title: "Niveles Europeos (MCER)",
      close: "Cerrar",
      list: [
        { id: "A1", title: "A1 – Acceso", desc: "Comprende y utiliza expresiones cotidianas muy frecuentes.", ex: "Ej: presentarse." },
        { id: "A2", title: "A2 – Plataforma", desc: "Comprende frases y expresiones de uso frecuente.", ex: "Ej: hablar de la familia." },
        { id: "B1", title: "B1 – Intermedio", desc: "Comprende los puntos principales de textos claros.", ex: "Ej: describir experiencias." },
        { id: "B2", title: "B2 – Intermedio Alto", desc: "Entiende las ideas principales de textos complejos.", ex: "Ej: debate activo." },
        { id: "C1", title: "C1 – Dominio", desc: "Se expresa de forma fluida y espontánea.", ex: "Ej: contexto académico." },
        { id: "C2", title: "C2 – Maestría", desc: "Comprende con facilidad prácticamente todo lo que oye o lee.", ex: "Ej: nivel nativo." }
      ]
    },
    courses: {
      title: "Nuestros Programas",
      subtitle: "Elige el plan que necesitas. Precios en Dólares ($).",
      material: "Material incluido (libros, etc.)",
      priceLabels: ["Básico", "Intermedio", "Intensivo"],
      catalog: [
        { title: "Aprendizaje Libre", langs: "Inglés / Francés / Español", icon: "book", prices: [120, 240, 360], desc: "Ideal para aprender a tu ritmo.", tags: ["Popular"] },
        { title: "Objetivos Específicos (LOS)", langs: "Inglés / Francés / Español", icon: "trend", prices: [120, 240, 360], desc: "Enfocado en vocabulario profesional.", tags: ["Carrera"] },
        { title: "Preparación Exámenes", langs: "DELF / DALF / IB / TCF", icon: "grad", prices: [150, 270, 390], desc: "Entrenamiento intensivo para exámenes.", tags: ["Certificado"] },
        { title: "Aprendizaje Kids", langs: "Francés / Inglés / Español", icon: "users", prices: [120, 240, 360], desc: "Enfoque lúdico para niños.", tags: ["Juventud"] }
      ]
    },
    testimonials: {
      title: "Opiniones",
      items: [
        { text: "¡Gran preparación TCF!", author: "Sarah M.", role: "Estudiante" },
        { text: "Ambiente increíble.", author: "Thomas L.", role: "Profesional" },
        { text: "A mis hijos les encanta.", author: "Amina B.", role: "Madre" }
      ]
    },
    contact: {
      title: "¿Listo para empezar?",
      desc: "Contáctanos para más info.",
      formTitle: "Solicitar Info",
      name: "Nombre completo",
      email: "Correo",
      message: "Tu mensaje",
      send: "Enviar solicitud",
      sending: "Enviando...",
      success: "¡Gracias! Te contactaremos.",
      error: "Error, intenta de nuevo."
    },
    footer: { rights: "Todos los derechos reservados." }
  },
  de: {
    nav: { home: "Start", about: "Über uns", courses: "Kurse", testimonials: "Meinungen", contact: "Kontakt" },
    hero: {
      badge: "Anmeldung 2024-2025 • Geöffnet",
      title1: "Französisch und Englisch,",
      title2: "wie zu Hause!",
      subtitle: "Immersive Kurse für Erwachsene und Kinder.",
      cta1: "Gratis Probestunde",
      cta2: "Preise sehen"
    },
    stats: { items: [{ num: "100%", label: "Muttersprachler" }, { num: "500+", label: "Schüler" }, { num: "98%", label: "Erfolgsquote" }] },
    about: {
      title: "Mehr als eine Schule",
      subtitle: "Geschichte & Werte",
      p1: "Sprachen lernt man am besten in freundlicher Umgebung.",
      p2: "Wir verbinden Exzellenz mit Herzlichkeit.",
      features: ["Kleine Gruppen", "Wöchentliche Kontrolle", "Entspannte Atmosphäre"]
    },
    levels: {
      btn: "Niveaus verstehen (A1 - C2)",
      title: "Europäische Niveaus",
      close: "Schließen",
      list: [
        { id: "A1", title: "A1 – Anfänger", desc: "Kann vertraute, alltägliche Ausdrücke verstehen.", ex: "Bsp: sich vorstellen." },
        { id: "A2", title: "A2 – Grundlegende", desc: "Kann Sätze und häufig gebrauchte Ausdrücke verstehen.", ex: "Bsp: über Familie sprechen." },
        { id: "B1", title: "B1 – Fortgeschrittene", desc: "Kann die Hauptpunkte verstehen.", ex: "Bsp: über Erfahrungen sprechen." },
        { id: "B2", title: "B2 – Selbständige", desc: "Kann die Hauptinhalte komplexer Texte verstehen.", ex: "Bsp: aktive Diskussion." },
        { id: "C1", title: "C1 – Fachkundige", desc: "Kann sich spontan und fließend ausdrücken.", ex: "Bsp: akademischer Kontext." },
        { id: "C2", title: "C2 – Annähernd muttersprachliche", desc: "Kann praktisch alles verstehen.", ex: "Bsp: Muttersprachler-Niveau." }
      ]
    },
    courses: {
      title: "Unsere Kurse",
      subtitle: "Wählen Sie Ihren Plan. Preise in USD ($).",
      material: "Material inklusive (Bücher, etc.)",
      priceLabels: ["Basis", "Mittelstufe", "Intensiv"],
      catalog: [
        { title: "Freies Lernen", langs: "Englisch / Französisch / Spanisch", icon: "book", prices: [120, 240, 360], desc: "Lernen Sie in Ihrem eigenen Tempo.", tags: ["Beliebt"] },
        { title: "Spezifische Ziele (LOS)", langs: "Englisch / Französisch / Spanisch", icon: "trend", prices: [120, 240, 360], desc: "Fokus auf Fachvokabular.", tags: ["Karriere"] },
        { title: "Prüfungsvorbereitung", langs: "DELF / DALF / IB / TCF", icon: "grad", prices: [150, 270, 390], desc: "Intensivtraining für Examen.", tags: ["Zertifiziert"] },
        { title: "Kids Club", langs: "Französisch / Englisch / Spanisch", icon: "users", prices: [120, 240, 360], desc: "Spielerischer Ansatz für Kinder.", tags: ["Jugend"] }
      ]
    },
    testimonials: {
      title: "Meinungen",
      items: [
        { text: "Super Vorbereitung!", author: "Sarah M.", role: "Studentin" },
        { text: "Tolle Atmosphäre.", author: "Thomas L.", role: "Berufstätig" },
        { text: "Meine Kinder lieben es.", author: "Amina B.", role: "Mutter" }
      ]
    },
    contact: {
      title: "Bereit?",
      desc: "Kontaktieren Sie uns.",
      formTitle: "Info anfordern",
      name: "Name",
      email: "E-Mail",
      message: "Nachricht",
      send: "Senden",
      sending: "Senden...",
      success: "Danke!",
      error: "Fehler."
    },
    footer: { rights: "Alle Rechte vorbehalten." }
  },
  ar: {
    nav: { home: "الرئيسية", about: "من نحن", courses: "دوراتنا", testimonials: "آراء", contact: "اتصل" },
    hero: {
      badge: "التسجيل مفتوح 2024-2025",
      title1: "الفرنسية والإنجليزية،",
      title2: "كما في المنزل!",
      subtitle: "دورات غامرة للبالغين والأطفال.",
      cta1: "درس تجريبي مجاني",
      cta2: "الأسعار"
    },
    stats: { items: [{ num: "100%", label: "ناطقون أصليون" }, { num: "500+", label: "طالب" }, { num: "98%", label: "نجاح" }] },
    about: {
      title: "عائلة وليست مجرد مدرسة",
      subtitle: "قصتنا",
      p1: "تعلم اللغات أفضل في جو ودي.",
      p2: "نجمع بين التميز والود.",
      features: ["مجموعات صغيرة", "متابعة أسبوعية", "جو مريح"]
    },
    levels: {
      btn: "فهم المستويات (A1 - C2)",
      title: "المستويات الأوروبية",
      close: "إغلاق",
      list: [
        { id: "A1", title: "A1 – مبتدئ", desc: "يفهم ويستخدم تعبيرات يومية مألوفة.", ex: "مثال: تقديم النفس." },
        { id: "A2", title: "A2 – أساسي", desc: "يفهم الجمل والتعابير كثيرة الاستخدام.", ex: "مثال: الحديث عن العائلة." },
        { id: "B1", title: "B1 – متوسط", desc: "يفهم النقاط الأساسية.", ex: "مثال: وصف التجارب." },
        { id: "B2", title: "B2 – متوسط متقدم", desc: "يفهم الأفكار الرئيسية للنصوص المعقدة.", ex: "مثال: نقاش نشط." },
        { id: "C1", title: "C1 – متقدم", desc: "يعبر عن نفسه بطلاقة وتلقائية.", ex: "مثال: سياق أكاديمي." },
        { id: "C2", title: "C2 – إتقان", desc: "يفهم بسهولة كل ما يسمعه أو يقرأه تقريبًا.", ex: "مثال: مستوى ناطق أصلي." }
      ]
    },
    courses: {
      title: "برامجنا",
      subtitle: "اختر الخطة المناسبة. الأسعار بالدولار ($).",
      material: "شامل المواد التعليمية (كتب، إلخ)",
      priceLabels: ["أساسي", "متوسط", "مكثف"],
      catalog: [
        { title: "تعلم حر", langs: "إنجليزي / فرنسي / إسباني", icon: "book", prices: [120, 240, 360], desc: "للتعلم بالسرعة التي تناسبك.", tags: ["شائع"] },
        { title: "أهداف محددة (LOS)", langs: "إنجليزي / فرنسي / إسباني", icon: "trend", prices: [120, 240, 360], desc: "تركيز على المصطلحات المهنية.", tags: ["مهني"] },
        { title: "تحضير امتحانات", langs: "DELF / DALF / IB / TCF", icon: "grad", prices: [150, 270, 390], desc: "تدريب مكثف للامتحانات.", tags: ["معتمد"] },
        { title: "نادي الأطفال", langs: "فرنسي / إنجليزي / إسباني", icon: "users", prices: [120, 240, 360], desc: "نهج ممتع للأطفال.", tags: ["شباب"] }
      ]
    },
    testimonials: {
      title: "آراء",
      items: [
        { text: "تحضير ممتاز!", author: "سارة م.", role: "طالبة" },
        { text: "جو رائع.", author: "توماس ل.", role: "محترف" },
        { text: "أطفالي يحبونه.", author: "أمينة ب.", role: "أم" }
      ]
    },
    contact: {
      title: "مستعد؟",
      desc: "اتصل بنا.",
      formTitle: "طلب معلومات",
      name: "الاسم",
      email: "البريد",
      message: "الرسالة",
      send: "إرسال",
      sending: "جاري الإرسال...",
      success: "شكراً!",
      error: "خطأ."
    },
    footer: { rights: "جميع الحقوق محفوظة." }
  },
  ru: {
    nav: { home: "Главная", about: "О нас", courses: "Курсы", testimonials: "Отзывы", contact: "Контакты" },
    hero: {
      badge: "Набор 2024-2025 • Открыт",
      title1: "Французский и Английский,",
      title2: "как дома!",
      subtitle: "Иммерсивные курсы для взрослых и детей.",
      cta1: "Пробный урок",
      cta2: "Цены"
    },
    stats: { items: [{ num: "100%", label: "Носители языка" }, { num: "500+", label: "Студентов" }, { num: "98%", label: "Успех" }] },
    about: {
      title: "Больше чем школа",
      subtitle: "История и Ценности",
      p1: "Языки лучше учить в дружеской атмосфере.",
      p2: "Мы сочетаем качество с теплым подходом.",
      features: ["Мини-группы", "Контроль прогресса", "Уют"]
    },
    levels: {
      btn: "Уровни (A1 - C2)",
      title: "Европейские Уровни",
      close: "Закрыть",
      list: [
        { id: "A1", title: "A1 – Начинающий", desc: "Понимает и использует простые фразы.", ex: "Прим: представиться." },
        { id: "A2", title: "A2 – Элементарный", desc: "Понимает часто используемые выражения.", ex: "Прим: рассказать о семье." },
        { id: "B1", title: "B1 – Средний", desc: "Понимает основные идеи.", ex: "Прим: описать опыт." },
        { id: "B2", title: "B2 – Выше среднего", desc: "Понимает сложные тексты.", ex: "Прим: активная дискуссия." },
        { id: "C1", title: "C1 – Продвинутый", desc: "Говорит бегло и спонтанно.", ex: "Прим: академическая среда." },
        { id: "C2", title: "C2 – Профессиональный", desc: "Понимает практически все.", ex: "Прим: уровень носителя." }
      ]
    },
    courses: {
      title: "Наши Программы",
      subtitle: "Выберите свой план. Цены в USD ($).",
      material: "Материалы включены (книги и т.д.)",
      priceLabels: ["Базовый", "Средний", "Интенсив"],
      catalog: [
        { title: "Свободное Обучение", langs: "Англ / Франц / Исп", icon: "book", prices: [120, 240, 360], desc: "В своем темпе.", tags: ["Популярно"] },
        { title: "Спец. Цели (LOS)", langs: "Англ / Франц / Исп", icon: "trend", prices: [120, 240, 360], desc: "Профессиональная лексика.", tags: ["Карьера"] },
        { title: "Подготовка к Экзаменам", langs: "DELF / DALF / IB / TCF", icon: "grad", prices: [150, 270, 390], desc: "Интенсив к экзаменам.", tags: ["Сертификат"] },
        { title: "Детский Клуб", langs: "Франц / Англ / Исп", icon: "users", prices: [120, 240, 360], desc: "Игровой подход для детей.", tags: ["Дети"] }
      ]
    },
    testimonials: {
      title: "Отзывы",
      items: [
        { text: "Отличная подготовка!", author: "Сара М.", role: "Студентка" },
        { text: "Супер атмосфера.", author: "Томас Л.", role: "Профи" },
        { text: "Дети в восторге.", author: "Амина Б.", role: "Мама" }
      ]
    },
    contact: {
      title: "Готовы?",
      desc: "Свяжитесь с нами.",
      formTitle: "Запрос Инфо",
      name: "Имя",
      email: "Email",
      message: "Сообщение",
      send: "Отправить",
      sending: "Отправка...",
      success: "Спасибо!",
      error: "Ошибка."
    },
    footer: { rights: "Все права защищены." }
  }
};

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState('fr');
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  const [showLevelModal, setShowLevelModal] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState(null);

  useEffect(() => {
    const browserLang = navigator.language.split('-')[0];
    const isSupported = languages.find(l => l.code === browserLang);
    if (isSupported) {
      setCurrentLang(browserLang);
    }
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleLangMenu = () => setIsLangMenuOpen(!isLangMenuOpen);
  const toggleLevelModal = () => setShowLevelModal(!showLevelModal);

  const handleLangChange = (langCode) => {
    setCurrentLang(langCode);
    setIsLangMenuOpen(false);
    setIsMenuOpen(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus('sending');

    try {
      const response = await fetch("https://formspree.io/f/xovgpwgr", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setFormStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setFormStatus(null), 5000);
      } else {
        setFormStatus('error');
        setTimeout(() => setFormStatus(null), 5000);
      }
    } catch (error) {
      setFormStatus('error');
      setTimeout(() => setFormStatus(null), 5000);
    }
  };

  const t = content[currentLang];
  const activeLang = languages.find(l => l.code === currentLang);
  const isRTL = activeLang.dir === 'rtl';

  const getIcon = (iconName) => {
    switch(iconName) {
      case 'book': return <BookOpen size={24} />;
      case 'trend': return <TrendingUp size={24} />;
      case 'grad': return <GraduationCap size={24} />;
      case 'users': return <Users size={24} />;
      default: return <BookOpen size={24} />;
    }
  };

  return (
    <div className={`min-h-screen bg-slate-50 font-sans text-slate-800 ${isRTL ? 'rtl' : 'ltr'}`} dir={activeLang.dir}>
      
      {/* Navigation */}
      <nav className="bg-white/95 backdrop-blur-sm shadow-sm sticky top-0 z-50 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            
            <div className="flex items-center space-x-2 rtl:space-x-reverse cursor-pointer" onClick={() => window.scrollTo(0,0)}>
              <div className="bg-gradient-to-br from-teal-500 to-teal-700 text-white p-2.5 rounded-xl shadow-lg shadow-teal-200">
                <MessageCircle size={24} />
              </div>
              <span className="text-xl font-bold text-slate-900 leading-tight">
                Centre de Langues<br/>
                Étrangères
              </span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8 rtl:space-x-reverse">
              <a href="#about" className="text-slate-600 hover:text-teal-600 font-medium transition hover:-translate-y-0.5">{t.nav.about}</a>
              <a href="#courses" className="text-slate-600 hover:text-teal-600 font-medium transition hover:-translate-y-0.5">{t.nav.courses}</a>
              <a href="#testimonials" className="text-slate-600 hover:text-teal-600 font-medium transition hover:-translate-y-0.5">{t.nav.testimonials}</a>
              
              <div className="relative">
                <button 
                  onClick={toggleLangMenu}
                  className="flex items-center space-x-2 text-slate-600 hover:text-teal-600 focus:outline-none p-2 rounded-lg hover:bg-slate-50 transition border border-transparent hover:border-slate-100"
                >
                  <img 
                    src={`https://flagcdn.com/w40/${activeLang.flag}.png`} 
                    alt={activeLang.name} 
                    className="w-6 h-6 rounded-full object-cover shadow-sm"
                  />
                  <ChevronDown size={16} />
                </button>
                
                {isLangMenuOpen && (
                  <div className="absolute top-full right-0 mt-3 w-48 bg-white rounded-xl shadow-xl border border-slate-100 py-2 z-50 rtl:right-auto rtl:left-0 transform origin-top-right transition-all">
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => handleLangChange(lang.code)}
                        className={`w-full flex items-center space-x-3 rtl:space-x-reverse px-4 py-2.5 text-left hover:bg-teal-50 transition ${currentLang === lang.code ? 'bg-teal-50 text-teal-600 font-bold' : 'text-slate-600'}`}
                      >
                        <img 
                          src={`https://flagcdn.com/w40/${lang.flag}.png`} 
                          alt={lang.name} 
                          className="w-5 h-5 rounded-full object-cover shadow-sm"
                        />
                        <span className="text-sm">{lang.name}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <a href="#contact" className="bg-teal-600 text-white px-6 py-2.5 rounded-full hover:bg-teal-700 transition shadow-lg shadow-teal-200/50 font-bold text-sm transform hover:scale-105 active:scale-95">
                {t.nav.contact}
              </a>
            </div>

            <div className="md:hidden flex items-center space-x-4 rtl:space-x-reverse">
              <button onClick={toggleLangMenu} className="flex items-center space-x-1 focus:outline-none">
                <img 
                  src={`https://flagcdn.com/w40/${activeLang.flag}.png`} 
                  alt={activeLang.name} 
                  className="w-6 h-6 rounded-full object-cover border border-slate-200"
                />
              </button>

              <button onClick={toggleMenu} className="text-slate-600 hover:text-teal-600 focus:outline-none p-1">
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {(isMenuOpen || isLangMenuOpen) && (
          <div className="md:hidden bg-white border-t border-slate-100 absolute w-full shadow-xl">
             {isLangMenuOpen && (
               <div className="bg-slate-50 p-4 grid grid-cols-2 gap-3 border-b border-slate-200">
                 {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => handleLangChange(lang.code)}
                      className={`flex items-center space-x-2 rtl:space-x-reverse p-2 rounded-lg ${currentLang === lang.code ? 'bg-white shadow-sm ring-1 ring-teal-500' : ''}`}
                    >
                      <img 
                        src={`https://flagcdn.com/w40/${lang.flag}.png`} 
                        alt={lang.name} 
                        className="w-6 h-6 rounded-full object-cover"
                      />
                      <span className="text-sm font-medium text-slate-700">{lang.name}</span>
                    </button>
                 ))}
               </div>
             )}
            
            {isMenuOpen && (
              <div className="px-4 pt-2 pb-6 space-y-2">
                <a href="#about" onClick={toggleMenu} className="block px-4 py-3 text-slate-600 hover:bg-teal-50 hover:text-teal-600 rounded-xl font-medium">{t.nav.about}</a>
                <a href="#courses" onClick={toggleMenu} className="block px-4 py-3 text-slate-600 hover:bg-teal-50 hover:text-teal-600 rounded-xl font-medium">{t.nav.courses}</a>
                <a href="#testimonials" onClick={toggleMenu} className="block px-4 py-3 text-slate-600 hover:bg-teal-50 hover:text-teal-600 rounded-xl font-medium">{t.nav.testimonials}</a>
                <a href="#contact" onClick={toggleMenu} className="block px-4 py-3 text-white bg-teal-600 rounded-xl font-bold text-center mt-4 shadow-md">{t.nav.contact}</a>
              </div>
            )}
          </div>
        )}
      </nav>

      {/* Levels Modal (Popup) */}
      {showLevelModal && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" onClick={toggleLevelModal}></div>
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[85vh] overflow-y-auto relative z-10 animate-fade-in-up">
            <div className="p-6 border-b border-slate-100 flex justify-between items-center sticky top-0 bg-white z-20">
              <h3 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
                <TrendingUp className="text-teal-600"/> {t.levels.title}
              </h3>
              <button onClick={toggleLevelModal} className="text-slate-500 hover:text-slate-800 p-1 bg-slate-100 rounded-full">
                <X size={24}/>
              </button>
            </div>
            <div className="p-6 space-y-6">
              {t.levels.list.map((lvl) => (
                <div key={lvl.id} className="border-l-4 border-teal-500 pl-4 py-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="bg-teal-600 text-white text-xs font-bold px-2 py-0.5 rounded">{lvl.id}</span>
                    <h4 className="font-bold text-lg text-slate-900">{lvl.title.split('–')[1]}</h4>
                  </div>
                  <p className="text-slate-700 text-sm mb-2">{lvl.desc}</p>
                  <p className="text-slate-500 text-xs italic bg-slate-50 p-2 rounded border border-slate-100 inline-block">
                    {lvl.ex}
                  </p>
                </div>
              ))}
            </div>
            <div className="p-4 border-t border-slate-100 bg-slate-50 sticky bottom-0 text-center">
              <button onClick={toggleLevelModal} className="bg-slate-900 text-white px-6 py-2 rounded-lg font-bold hover:bg-slate-800 transition">
                {t.levels.close}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section id="home" className="relative bg-slate-900 pt-20 pb-32 overflow-hidden">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-teal-500 opacity-20 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-blue-600 opacity-20 blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-teal-900/40 border border-teal-500/30 text-teal-300 text-sm font-semibold mb-8 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-teal-400 animate-ping"></span>
            {t.hero.badge}
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-8 leading-tight tracking-tight">
            {t.hero.title1}<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-emerald-400">{t.hero.title2}</span>
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-slate-300 mb-10 leading-relaxed">
            {t.hero.subtitle}
          </p>
          <div className="flex justify-center gap-4 flex-col sm:flex-row px-4">
            <a href="#contact" className="px-8 py-4 bg-teal-500 hover:bg-teal-400 text-white font-bold rounded-xl transition transform hover:-translate-y-1 shadow-xl shadow-teal-900/50 flex items-center justify-center gap-2">
              <Mail size={20}/> {t.hero.cta1}
            </a>
            <a href="#courses" className="px-8 py-4 bg-white/5 border border-slate-600 hover:border-teal-400 text-slate-300 hover:text-white font-bold rounded-xl transition backdrop-blur-sm flex items-center justify-center gap-2">
              <DollarSign size={20}/> {t.hero.cta2}
            </a>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <div className="bg-white border-b border-slate-100 relative z-20 -mt-8 mx-4 md:mx-auto max-w-6xl rounded-2xl shadow-xl p-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-slate-100 rtl:divide-x-reverse">
          {t.stats.items.map((item, index) => (
            <div key={index} className="pt-4 md:pt-0">
              <div className="text-4xl font-black text-slate-900 mb-1">{item.num}</div>
              <div className="text-slate-500 font-medium uppercase tracking-wide text-sm">{item.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* About Section */}
      <section id="about" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 relative">
              <div className="absolute inset-0 bg-teal-200 rounded-3xl transform rotate-3 scale-105 opacity-50"></div>
              <div className="bg-white p-8 rounded-3xl shadow-xl relative border border-slate-100">
                 <h3 className="text-xl font-bold mb-6 flex items-center gap-2 text-slate-900">
                   <Star className="text-teal-500 fill-current"/> {t.about.subtitle}
                 </h3>
                 <p className="text-slate-600 mb-4 leading-relaxed">{t.about.p1}</p>
                 <p className="text-slate-600 mb-6 leading-relaxed">{t.about.p2}</p>
                 <ul className="space-y-3">
                   {t.about.features.map((feat, i) => (
                     <li key={i} className="flex items-center text-slate-700 font-medium">
                       <div className="bg-teal-100 text-teal-600 rounded-full p-1 mr-3 rtl:mr-0 rtl:ml-3"><CheckCircle size={16}/></div>
                       {feat}
                     </li>
                   ))}
                 </ul>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-teal-600 font-bold tracking-wide uppercase text-sm mb-3">{t.nav.about}</h2>
              <h3 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
                {t.about.title}
              </h3>
              <div className="w-20 h-1.5 bg-teal-500 rounded-full mb-6"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Courses Section (Updated with New Cards & Pricing) */}
      <section id="courses" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">{t.courses.title}</h2>
            <p className="text-xl text-slate-500">{t.courses.subtitle}</p>
          </div>
          
          {/* Level Info Button */}
          <div className="flex justify-center mb-12">
            <button 
              onClick={toggleLevelModal}
              className="flex items-center gap-2 bg-slate-100 text-slate-700 hover:bg-teal-50 hover:text-teal-700 px-6 py-3 rounded-full font-bold transition shadow-sm border border-slate-200"
            >
              <Info size={20}/> {t.levels.btn}
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.courses.catalog.map((course, idx) => (
              <div key={idx} className="bg-slate-50 rounded-2xl border border-slate-100 hover:border-teal-300 hover:shadow-xl transition duration-300 flex flex-col h-full group overflow-hidden relative">
                <div className="p-6 pb-2">
                   <div className="mb-4 flex flex-wrap gap-2">
                    {course.tags.map(tag => (
                      <span key={tag} className="inline-block bg-teal-600 text-white text-[10px] font-bold px-2 py-1 rounded-md uppercase tracking-wide">{tag}</span>
                    ))}
                  </div>
                  <div className="flex items-start justify-between mb-4">
                     <div className="bg-teal-100 w-12 h-12 rounded-xl flex items-center justify-center text-teal-600 shadow-sm">
                      {getIcon(course.icon)}
                    </div>
                  </div>
                 
                  <h4 className="text-lg font-bold text-slate-900 mb-1 leading-tight h-14 flex items-center">{course.title}</h4>
                  <div className="text-xs font-semibold text-slate-500 mb-3 flex items-center gap-1">
                    <Globe size={12}/> {course.langs}
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed mb-4 h-10 line-clamp-2">
                    {course.desc}
                  </p>
                </div>

                {/* Pricing Table */}
                <div className="mt-auto bg-white p-4 border-t border-slate-100">
                  <div className="space-y-2 mb-4">
                    {course.prices.map((price, pIdx) => (
                      <div key={pIdx} className="flex justify-between items-center text-sm">
                        <span className="text-slate-500 font-medium">{t.courses.priceLabels[pIdx]}</span>
                        <span className="font-bold text-slate-900">${price}</span>
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center gap-2 text-xs text-teal-600 font-bold bg-teal-50 p-2 rounded justify-center mb-3">
                    <Package size={14}/> {t.courses.material}
                  </div>
                  <a href="#contact" className="w-full block text-center py-2 rounded-lg bg-slate-900 text-white font-bold hover:bg-teal-600 transition text-sm">
                    S'inscrire
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 to-teal-900 opacity-50"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white">{t.testimonials.title}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {t.testimonials.items.map((item, idx) => (
              <div key={idx} className="bg-slate-800/50 backdrop-blur border border-slate-700 p-8 rounded-2xl relative">
                <div className="text-teal-400 mb-4 flex gap-1">
                  {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                </div>
                <p className="text-slate-300 italic mb-6">"{item.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-teal-400 to-blue-500 rounded-full flex items-center justify-center font-bold text-white text-sm">
                    {item.author.charAt(0)}
                  </div>
                  <div>
                    <div className="text-white font-bold text-sm">{item.author}</div>
                    <div className="text-slate-500 text-xs uppercase">{item.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-50 rounded-[2.5rem] p-8 md:p-12 shadow-2xl border border-slate-100 overflow-hidden relative">
            {/* Decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-teal-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50 -translate-y-1/2 translate-x-1/2"></div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10">
              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-4">{t.contact.title}</h2>
                <p className="text-slate-600 mb-8 text-lg">{t.contact.desc}</p>

                <div className="space-y-6">
                  <div className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm border border-slate-100">
                    <div className="bg-teal-100 p-3 rounded-full text-teal-600"><Phone size={20} /></div>
                    <div>
                      <p className="text-slate-900 font-bold">+51 917 112 616</p>
                      <p className="text-slate-900 font-bold">+33 6 ***</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm border border-slate-100">
                    <div className="bg-teal-100 p-3 rounded-full text-teal-600"><Mail size={20} /></div>
                    <div>
                      <p className="text-slate-900 font-bold break-all">bourdon446@gmail.com</p>
                      <p className="text-slate-900 font-bold break-all">abdrahimait7@gmail.com</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-lg border border-slate-100">
                <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <MessageCircle size={18} className="text-teal-500"/>
                  {t.contact.formTitle}
                </h3>
                
                {formStatus === 'success' && (
                  <div className="mb-4 bg-green-50 text-green-700 p-3 rounded-lg text-sm flex items-center">
                    <CheckCircle size={16} className="mr-2 rtl:ml-2 rtl:mr-0"/> {t.contact.success}
                  </div>
                )}
                {formStatus === 'error' && (
                  <div className="mb-4 bg-red-50 text-red-700 p-3 rounded-lg text-sm flex items-center">
                    <AlertCircle size={16} className="mr-2 rtl:ml-2 rtl:mr-0"/> {t.contact.error}
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-3">
                  <input 
                    type="text" 
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-100 outline-none transition text-sm"
                    placeholder={t.contact.name}
                  />
                  <input 
                    type="email" 
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-100 outline-none transition text-sm"
                    placeholder={t.contact.email}
                  />
                  <textarea 
                    name="message"
                    required
                    rows="3"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-100 outline-none transition text-sm resize-none"
                    placeholder={t.contact.message}
                  ></textarea>

                  <button 
                    type="submit" 
                    disabled={formStatus === 'sending'}
                    className={`w-full bg-slate-900 hover:bg-slate-800 text-white font-bold py-3 px-4 rounded-lg transition duration-200 shadow-lg flex justify-center items-center gap-2 ${formStatus === 'sending' ? 'opacity-70 cursor-not-allowed' : ''}`}
                  >
                    {formStatus === 'sending' ? (
                      <span className="flex items-center gap-2"><div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div> {t.contact.sending}</span>
                    ) : (
                      <>{t.contact.send} <ArrowRight size={16}/></>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-500 py-12 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center space-x-2 rtl:space-x-reverse">
            <div className="bg-teal-600 text-white p-1.5 rounded-lg">
              <MessageCircle size={18} />
            </div>
            {/* Logo Text Footer Unified */}
            <span className="text-lg font-bold text-white">
              Centre de Langues Étrangères
            </span>
          </div>
          <p className="text-sm">
            © {new Date().getFullYear()} Centre de Langues Étrangères. {t.footer.rights}
          </p>
        </div>
      </footer>

    </div>
  );
};

export default App;