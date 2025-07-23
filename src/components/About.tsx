'use client'

import React from 'react'
import { useTheme } from './ThemeProvider'
import { useLanguage } from './LanguageProvider'

export default function About() {
  const { theme } = useTheme()
  const { t } = useLanguage()

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gradient mb-6">
            {t('about.title')}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {theme === 'dark' 
              ? t('about.subtitle.dark')
              : t('about.subtitle.light')
            }
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="glass-effect p-8 rounded-2xl card-hover">
              <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-100">
                {theme === 'dark' ? '🚀 ' + t('about.mission.title.dark') : '🌱 ' + t('about.mission.title.light')}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {t('about.mission.description')}
              </p>
            </div>
            
            <div className="glass-effect p-8 rounded-2xl card-hover">
              <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-100">
                {theme === 'dark' ? '⭐ ' + t('about.expertise.title.dark') : '🌍 ' + t('about.expertise.title.light')}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {t('about.expertise.description')}
              </p>
            </div>
          </div>
          
          <div className="glass-effect p-8 rounded-2xl card-hover">
            <h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-100">
              {theme === 'dark' ? '🛸 ' + t('about.tech.title.dark') : '🌿 ' + t('about.tech.title.light')}
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {[
                'PHP (Laravel)', 'Python', 'Docker', 'Linux Server',
                'Windows Server', 'cPanel/WHM', 'Zabbix', 'Mikrotik',
                'Cloudflare', 'Virtualizor', 'Proxmox', 'Git'
              ].map((skill, index) => (
                <div
                  key={skill}
                  className="bg-gradient-to-r from-earth-forest to-earth-grass dark:from-space-galaxy dark:to-space-nebula text-white px-4 py-2 rounded-full text-center text-sm font-medium animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
