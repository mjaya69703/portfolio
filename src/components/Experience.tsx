'use client'

import React from 'react'
import { useTheme } from './ThemeProvider'
import { useLanguage } from './LanguageProvider'

export default function Experience() {
  const { theme } = useTheme()
  const { t, language } = useLanguage()

  const experiences = {
    id: [
      {
        title: "Staff Technical Support",
        company: "PT QWORDS COMPANY INTERNATIONAL",
        period: "November 2023 – Sekarang",
        location: "Indonesia",
        description: "Memberikan dukungan teknis komprehensif untuk layanan hosting dan server management",
        achievements: [
          "Memberikan bantuan teknis kepada pelanggan terkait layanan hosting (website, email, database) dengan tingkat kepuasan tinggi",
          "Mengelola konfigurasi web server, PHP, SSL, dan DNS untuk meminimalkan downtime dan menjaga stabilitas layanan",
          "Menangani ancaman keamanan seperti malware, serangan spam, dan konfigurasi firewall untuk menjaga keamanan data pelanggan",
          "Melakukan migrasi website, email, dan database antar server dengan downtime minimal",
          "Mengelola VPS (AlmaLinux, Ubuntu) dan memberikan layanan manage server (optimasi, konfigurasi, troubleshooting)",
          "Memantau jaringan untuk konektivitas stabil dan mitigasi risiko DDoS"
        ]
      },
      {
        title: "Staff Laboratorium Komputer",
        company: "STMIK IKMI CIREBON",
        period: "September 2021 – Agustus 2023",
        location: "Cirebon, Indonesia",
        description: "Mengelola infrastruktur IT laboratorium dan memberikan dukungan teknis kepada civitas akademika",
        achievements: [
          "Memberikan dukungan teknis kepada mahasiswa, dosen, dan staff untuk meningkatkan efisiensi pengguna laboratorium",
          "Melakukan pemeliharaan rutin perangkat keras dan memastikan software selalu terupdate",
          "Mengelola dan memelihara jaringan lokal laboratorium untuk menyediakan konektivitas yang dapat diandalkan",
          "Mengurangi masalah teknis melalui pemeliharaan preventif dan troubleshooting proaktif",
          "Mengimplementasikan sistem keamanan data dan backup untuk melindungi aset digital kampus"
        ]
      }
    ],
    en: [
      {
        title: "Technical Support Staff",
        company: "PT QWORDS COMPANY INTERNATIONAL",
        period: "November 2023 – Present",
        location: "Indonesia",
        description: "Providing comprehensive technical support for hosting services and server management",
        achievements: [
          "Provided technical assistance to customers regarding hosting services (website, email, database) with high satisfaction rates",
          "Managed web server configuration, PHP, SSL, and DNS to minimize downtime and maintain service stability",
          "Handled security threats such as malware, spam attacks, and firewall configuration to protect customer data",
          "Performed website, email, and database migration between servers with minimal downtime",
          "Managed VPS (AlmaLinux, Ubuntu) and provided managed server services (optimization, configuration, troubleshooting)",
          "Monitored network for stable connectivity and DDoS risk mitigation"
        ]
      },
      {
        title: "Computer Laboratory Staff",
        company: "STMIK IKMI CIREBON",
        period: "September 2021 – August 2023",
        location: "Cirebon, Indonesia",
        description: "Managing laboratory IT infrastructure and providing technical support to academic community",
        achievements: [
          "Provided technical support to students, lecturers, and staff to improve laboratory user efficiency",
          "Performed routine hardware maintenance and ensured software was always updated",
          "Managed and maintained laboratory local network to provide reliable connectivity",
          "Reduced technical issues through preventive maintenance and proactive troubleshooting",
          "Implemented data security and backup systems to protect campus digital assets"
        ]
      }
    ]
  }

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gradient mb-6">
            {theme === 'dark' ? t('experience.title.dark') : t('experience.title.light')}
          </h2>
          <p className="text-xl opacity-80 max-w-3xl mx-auto">
            {t('experience.subtitle')}
          </p>
        </div>
        
        <div className="space-y-8">
          {experiences[language].map((exp, index) => (
            <div 
              key={index}
              className="glass-effect p-8 rounded-2xl card-hover relative overflow-hidden"
            >
              {/* Background decorative element */}
              <div className="absolute top-0 right-0 w-32 h-32 opacity-10">
                <div className={`w-full h-full rounded-full ${
                  theme === 'dark' 
                    ? 'bg-gradient-to-br from-space-galaxy to-space-nebula' 
                    : 'bg-gradient-to-br from-earth-forest to-earth-grass'
                }`}></div>
              </div>
              
              <div className="relative z-10">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gradient mb-2">{exp.title}</h3>
                    <h4 className="text-xl font-semibold opacity-90 mb-1">{exp.company}</h4>
                    <p className="opacity-70 mb-2">{exp.location}</p>
                    <p className="opacity-80 leading-relaxed">{exp.description}</p>
                  </div>
                  <div className="md:ml-6 mt-4 md:mt-0">
                    <span className={`inline-block px-4 py-2 rounded-full text-sm font-medium ${
                      theme === 'dark'
                        ? 'bg-space-galaxy/20 text-space-galaxy border border-space-galaxy/30'
                        : 'bg-earth-forest/20 text-earth-forest border border-earth-forest/30'
                    }`}>
                      {exp.period}
                    </span>
                  </div>
                </div>
                
                <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
                  <h5 className="font-semibold mb-4 flex items-center">
                    <span className="mr-2">{theme === 'dark' ? '🌟' : '🎯'}</span>
                    {t('experience.achievements')}
                  </h5>
                  <ul className="space-y-3">
                    {exp.achievements.map((achievement, achIndex) => (
                      <li 
                        key={achIndex}
                        className="flex items-start opacity-80 leading-relaxed"
                      >
                        <span className={`mr-3 mt-1 w-2 h-2 rounded-full flex-shrink-0 ${
                          theme === 'dark' ? 'bg-space-galaxy' : 'bg-earth-forest'
                        }`}></span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
