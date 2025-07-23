'use client'

import React, { createContext, useContext, useState, useEffect } from 'react'

type Language = 'id' | 'en'

interface LanguageContextType {
  language: Language
  toggleLanguage: () => void
  t: (key: string) => string
  isLoaded: boolean
}

const translations = {
  id: {
    // Navigation
    'nav.home': 'Beranda',
    'nav.about': 'Tentang',
    'nav.experience': 'Pengalaman',
    'nav.education': 'Pendidikan',
    'nav.skills': 'Keahlian',
    'nav.projects': 'Proyek',
    'nav.contact': 'Kontak',
    
    // Hero
    'hero.title': 'Muhamad Jaya Kusuma',
    'hero.subtitle.light': 'Web Developer',
    'hero.subtitle.dark': 'Cosmic Developer',
    'hero.description.light': 'Profesional IT berpengalaman dalam Technical Support, Server Management, dan Network Administration dengan fokus pengembangan DevOps',
    'hero.description.dark': 'Profesional IT dengan 3+ tahun pengalaman dalam Technical Support dan Administrasi Jaringan, mengeksplorasi galaksi DevOps dan Cloud Infrastructure',
    'hero.download.cv': 'Download CV',
    'hero.contact.me': 'Hubungi Saya',
    
    // About
    'about.title': 'Ringkasan Profesional',
    'about.subtitle.light': 'Developer berpengalaman yang passionate dalam menciptakan solusi web yang berkelanjutan',
    'about.subtitle.dark': 'Seorang developer yang berpengalaman dalam menjelajahi galaksi teknologi web modern',
    'about.mission.title.light': '🌱 Visi Berkelanjutan',
    'about.mission.title.dark': '🚀 Misi Kosmik',
    'about.mission.description': 'Profesional IT berpengalaman lebih dari 3 tahun di bidang Technical Support dan Administrasi Jaringan. Terampil dalam konfigurasi server Windows/Linux, manajemen hosting, dan pemecahan masalah jaringan. Memiliki passion yang kuat dalam teknologi dan selalu eager to learn hal-hal baru, terutama dalam bidang DevOps dan Cloud Infrastructure.',
    'about.expertise.title.light': '🌍 Perjalanan Profesional',
    'about.expertise.title.dark': '⭐ Keahlian Galaktik',
    'about.expertise.description': 'Berfokus pada pengembangan keterampilan DevOps, termasuk orkestrasi container (Docker), CI/CD pipelines (Jenkins), serta monitoring infrastruktur (Zabbix). Memiliki pengalaman dalam mengelola server hosting, VPS management, keamanan server, dan troubleshooting jaringan. Saat ini sedang mendalami teknologi cloud dan automation untuk meningkatkan efisiensi operasional.',
    'about.tech.title.light': '🌿 Stack Teknologi',
    'about.tech.title.dark': '🛸 Teknologi Kosmik',
    
    // Projects
    'projects.title.light': 'Portfolio Proyek',
    'projects.title.dark': 'Proyek Galaktik',
    'projects.subtitle': 'Koleksi proyek-proyek yang telah dikembangkan dari GitHub repository dengan fokus pada Web Development dan IT Infrastructure',
    'projects.features': 'Key Features',
    'projects.demo': 'Live Demo',
    'projects.github': 'GitHub',
    'projects.coming.soon': 'Coming Soon',
    'projects.github.activity': 'GitHub Activity',
    'projects.repositories': 'Repositories',
    'projects.contributions': 'Contributions',
    'projects.followers': 'Followers',
    'projects.view.github': 'View GitHub Profile',
    
    // Experience
    'experience.title.light': 'Pengalaman Kerja',
    'experience.title.dark': 'Perjalanan Kosmik',
    'experience.subtitle': 'Perjalanan profesional dalam mengembangkan solusi digital yang inovatif',
    'experience.achievements': 'Pencapaian Utama',
    
    // Education
    'education.title.light': 'Pendidikan',
    'education.title.dark': 'Akademi Kosmik',
    'education.subtitle': 'Perjalanan akademis dalam membangun fondasi pengetahuan IT dan teknologi',
    'education.ongoing': 'Sedang Berlangsung',
    'education.graduated': 'Lulus',
    'education.achievement': 'Prestasi',
    'education.competencies': 'Kompetensi yang Dikuasai',
    'education.network': 'Network Administration',
    'education.server': 'Server Management',
    'education.programming': 'Programming',
    'education.infrastructure': 'Infrastructure',
    
    // Skills
    'skills.title.light': 'Kemampuan & Keahlian',
    'skills.title.dark': 'Arsenal Teknologi Kosmik',
    'skills.subtitle': 'Menguasai berbagai teknologi modern untuk menciptakan solusi digital yang inovatif',
    'skills.programming': 'Programming & Development',
    'skills.server': 'Server & Infrastructure',
    'skills.network': 'Network & Security',
    'skills.devops': 'Monitoring & DevOps',
    
    // Contact
    'contact.title.light': 'Mari Berkolaborasi',
    'contact.title.dark': 'Kontak Galaktik',
    'contact.subtitle': 'Siap untuk memulai proyek bersama atau sekedar berdiskusi tentang teknologi',
    'contact.info.email': 'Email',
    'contact.info.phone': 'Telepon',
    'contact.info.linkedin': 'LinkedIn',
    'contact.info.github': 'GitHub',
    'contact.info.portfolio': 'Portfolio',
    'contact.info.location': 'Lokasi',
    'contact.send.message': 'Kirim Pesan',
    
    // Contact additional keys
    'contact.cta.title.light': '🤝 Mari Berkolaborasi',
    'contact.cta.title.dark': '🚀 Siap Meluncur?',
    'contact.cta.description': 'Saya selalu terbuka untuk mendiskusikan proyek baru, ide kreatif, atau peluang kolaborasi. Jangan ragu untuk menghubungi saya jika Anda memiliki pertanyaan atau ingin berbagi ide!',
    'contact.action.email': 'Kirim Email',
    'contact.action.phone': 'Hubungi Telepon',
    'contact.response.time': 'Response time: Biasanya dalam 24 jam • Available: Senin - Jumat, 09:00 - 18:00 WIB',
  },
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.experience': 'Experience',
    'nav.education': 'Education',
    'nav.skills': 'Skills',
    'nav.projects': 'Projects',
    'nav.contact': 'Contact',
    
    // Hero
    'hero.title': 'Muhamad Jaya Kusuma',
    'hero.subtitle.light': 'Web Developer',
    'hero.subtitle.dark': 'Cosmic Developer',
    'hero.description.light': 'Experienced IT Professional in Technical Support, Server Management, and Network Administration with a focus on DevOps development',
    'hero.description.dark': 'IT Professional with 3+ years of experience in Technical Support and Network Administration, exploring the galaxy of DevOps and Cloud Infrastructure',
    'hero.download.cv': 'Download CV',
    'hero.contact.me': 'Contact Me',
    
    // About
    'about.title': 'Professional Summary',
    'about.subtitle.light': 'Experienced developer passionate about creating sustainable web solutions',
    'about.subtitle.dark': 'An experienced developer exploring the galaxy of modern web technology',
    'about.mission.title.light': '🌱 Sustainable Vision',
    'about.mission.title.dark': '🚀 Cosmic Mission',
    'about.mission.description': 'Experienced IT professional with over 3 years in Technical Support and Network Administration. Skilled in Windows/Linux server configuration, hosting management, and network troubleshooting. Has a strong passion for technology and is always eager to learn new things, especially in DevOps and Cloud Infrastructure.',
    'about.expertise.title.light': '🌍 Professional Journey',
    'about.expertise.title.dark': '⭐ Galactic Expertise',
    'about.expertise.description': 'Focused on developing DevOps skills, including container orchestration (Docker), CI/CD pipelines (Jenkins), and infrastructure monitoring (Zabbix). Has experience in managing hosting servers, VPS management, server security, and network troubleshooting. Currently deepening knowledge in cloud technology and automation to improve operational efficiency.',
    'about.tech.title.light': '🌿 Technology Stack',
    'about.tech.title.dark': '🛸 Cosmic Technology',
    
    // Projects
    'projects.title.light': 'Project Portfolio',
    'projects.title.dark': 'Galactic Projects',
    'projects.subtitle': 'Collection of projects developed from GitHub repositories focusing on Web Development and IT Infrastructure',
    'projects.features': 'Key Features',
    'projects.demo': 'Live Demo',
    'projects.github': 'GitHub',
    'projects.coming.soon': 'Coming Soon',
    'projects.github.activity': 'GitHub Activity',
    'projects.repositories': 'Repositories',
    'projects.contributions': 'Contributions',
    'projects.followers': 'Followers',
    'projects.view.github': 'View GitHub Profile',
    
    // Experience
    'experience.title.light': 'Work Experience',
    'experience.title.dark': 'Cosmic Journey',
    'experience.subtitle': 'Professional journey in developing innovative digital solutions',
    'experience.achievements': 'Key Achievements',
    
    // Education
    'education.title.light': 'Education',
    'education.title.dark': 'Cosmic Academy',
    'education.subtitle': 'Academic journey in building the foundation of IT and technology knowledge',
    'education.ongoing': 'Ongoing',
    'education.graduated': 'Graduated',
    'education.achievement': 'Achievement',
    'education.competencies': 'Competencies Acquired',
    'education.network': 'Network Administration',
    'education.server': 'Server Management',
    'education.programming': 'Programming',
    'education.infrastructure': 'Infrastructure',
    
    // Skills
    'skills.title.light': 'Skills & Abilities',
    'skills.title.dark': 'Cosmic Technology Arsenal',
    'skills.subtitle': 'Mastering various modern technologies to create innovative digital solutions',
    'skills.programming': 'Programming & Development',
    'skills.server': 'Server & Infrastructure',
    'skills.network': 'Network & Security',
    'skills.devops': 'Monitoring & DevOps',
    
    // Contact
    'contact.title.light': 'Let\'s Collaborate',
    'contact.title.dark': 'Galactic Contact',
    'contact.subtitle': 'Ready to start a project together or just discuss about technology',
    'contact.info.email': 'Email',
    'contact.info.phone': 'Phone',
    'contact.info.linkedin': 'LinkedIn',
    'contact.info.github': 'GitHub',
    'contact.info.portfolio': 'Portfolio',
    'contact.info.location': 'Location',
    'contact.send.message': 'Send Message',

    // Contact additional keys
    'contact.cta.title.light': '🤝 Let\'s Collaborate',
    'contact.cta.title.dark': '🚀 Ready to Launch?',
    'contact.cta.description': 'I\'m always open to discussing new projects, creative ideas, or collaboration opportunities. Don\'t hesitate to contact me if you have questions or want to share ideas!',
    'contact.action.email': 'Send Email',
    'contact.action.phone': 'Call Phone',
    'contact.response.time': 'Response time: Usually within 24 hours • Available: Monday - Friday, 09:00 - 18:00 WIB',
  }
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('id')
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    // Load from localStorage on client side
    const saved = localStorage.getItem('language') as Language
    if (saved && (saved === 'id' || saved === 'en')) {
      setLanguage(saved)
    }
    setIsLoaded(true)
  }, [])

  const toggleLanguage = () => {
    const newLanguage = language === 'id' ? 'en' : 'id'
    setLanguage(newLanguage)
    localStorage.setItem('language', newLanguage)
  }

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['id']] || key
  }

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t, isLoaded }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
