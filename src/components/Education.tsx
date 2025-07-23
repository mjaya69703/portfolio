'use client'

import React from 'react'
import { useTheme } from './ThemeProvider'
import { useLanguage } from './LanguageProvider'

export default function Education() {
  const { theme } = useTheme()
  const { t, language } = useLanguage()

  const education = {
    id: [
      {
        degree: "Sistem & Teknologi Informasi",
        institution: "Universitas Cakrawala",
        period: "September 2024 – Sekarang",
        type: "Sarjana",
        status: "Sedang Berlangsung",
        description: "Melanjutkan studi untuk memperdalam pengetahuan dalam bidang Sistem dan Teknologi Informasi"
      },
      {
        degree: "Teknik Komputer dan Jaringan",
        institution: "SMK Veteran Cirebon",
        period: "Juni 2018 – Juni 2021",
        type: "SMK",
        status: "Lulus",
        description: "Fokus pada pembelajaran jaringan komputer, server administration, dan troubleshooting hardware/software",
        achievement: "Berpartisipasi Lomba LKS IT Network System Administrator Tingkat Kota Cirebon 2019"
      }
    ],
    en: [
      {
        degree: "Information Systems & Technology",
        institution: "Cakrawala University",
        period: "September 2024 – Present",
        type: "Bachelor",
        status: "Ongoing",
        description: "Continuing studies to deepen knowledge in Information Systems and Technology"
      },
      {
        degree: "Computer and Network Engineering",
        institution: "SMK Veteran Cirebon",
        period: "June 2018 – June 2021",
        type: "Vocational School",
        status: "Graduated",
        description: "Focus on computer networking, server administration, and hardware/software troubleshooting",
        achievement: "Participated in LKS IT Network System Administrator Competition at Cirebon City Level 2019"
      }
    ]
  }

  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gradient mb-6">
            {theme === 'dark' ? t('education.title.dark') : t('education.title.light')}
          </h2>
          <p className="text-xl opacity-80 max-w-3xl mx-auto">
            {t('education.subtitle')}
          </p>
        </div>
        
        <div className="space-y-8">
          {education[language].map((edu, index) => (
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
                    <div className="flex items-center mb-2">
                      <span className="text-2xl mr-3">{theme === 'dark' ? '🎓' : '📚'}</span>
                      <h3 className="text-2xl font-bold text-gradient">{edu.degree}</h3>
                    </div>
                    <h4 className="text-xl font-semibold opacity-90 mb-2">{edu.institution}</h4>
                    <p className="opacity-80 leading-relaxed mb-4">{edu.description}</p>
                    
                    {edu.achievement && (
                      <div className="bg-gradient-to-r from-earth-forest/10 to-earth-grass/10 dark:from-space-galaxy/10 dark:to-space-nebula/10 p-4 rounded-lg mb-4">
                        <div className="flex items-start">
                          <span className="mr-2 mt-1">🏆</span>
                          <div>
                            <h5 className="font-semibold mb-1">{t('education.achievement')}</h5>
                            <p className="text-sm opacity-80">{edu.achievement}</p>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                  
                  <div className="md:ml-6 mt-4 md:mt-0 text-right">
                    <span className={`inline-block px-4 py-2 rounded-full text-sm font-medium mb-2 ${
                      (edu.status === 'Sedang Berlangsung' || edu.status === 'Ongoing')
                        ? theme === 'dark'
                          ? 'bg-space-cosmic/20 text-space-cosmic border border-space-cosmic/30'
                          : 'bg-earth-grass/20 text-earth-grass border border-earth-grass/30'
                        : theme === 'dark'
                          ? 'bg-space-galaxy/20 text-space-galaxy border border-space-galaxy/30'
                          : 'bg-earth-forest/20 text-earth-forest border border-earth-forest/30'
                    }`}>
                      {(edu.status === 'Sedang Berlangsung' || edu.status === 'Ongoing') ? t('education.ongoing') : t('education.graduated')}
                    </span>
                    <div className="text-sm opacity-70">
                      <p>{edu.type}</p>
                      <p>{edu.period}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Skills gained from education */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-gradient mb-8">{t('education.competencies')}</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="glass-effect p-6 rounded-xl card-hover">
              <div className="text-4xl mb-4">🌐</div>
              <h4 className="font-bold mb-3 text-gradient">{t('education.network')}</h4>
              <ul className="space-y-1">
                <li className="text-sm opacity-80">Cisco Configuration</li>
                <li className="text-sm opacity-80">Mikrotik Setup</li>
                <li className="text-sm opacity-80">Network Security</li>
                <li className="text-sm opacity-80">Subnetting</li>
              </ul>
            </div>
            
            <div className="glass-effect p-6 rounded-xl card-hover">
              <div className="text-4xl mb-4">🖥️</div>
              <h4 className="font-bold mb-3 text-gradient">{t('education.server')}</h4>
              <ul className="space-y-1">
                <li className="text-sm opacity-80">Windows Server</li>
                <li className="text-sm opacity-80">Linux Server</li>
                <li className="text-sm opacity-80">Virtualization</li>
                <li className="text-sm opacity-80">System Admin</li>
              </ul>
            </div>
            
            <div className="glass-effect p-6 rounded-xl card-hover">
              <div className="text-4xl mb-4">💻</div>
              <h4 className="font-bold mb-3 text-gradient">{t('education.programming')}</h4>
              <ul className="space-y-1">
                <li className="text-sm opacity-80">PHP</li>
                <li className="text-sm opacity-80">JavaScript</li>
                <li className="text-sm opacity-80">Python</li>
                <li className="text-sm opacity-80">C++</li>
              </ul>
            </div>
            
            <div className="glass-effect p-6 rounded-xl card-hover">
              <div className="text-4xl mb-4">🏗️</div>
              <h4 className="font-bold mb-3 text-gradient">{t('education.infrastructure')}</h4>
              <ul className="space-y-1">
                <li className="text-sm opacity-80">DNS Configuration</li>
                <li className="text-sm opacity-80">Web Server</li>
                <li className="text-sm opacity-80">Database</li>
                <li className="text-sm opacity-80">Security</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
