'use client'

import React from 'react'
import { useTheme } from './ThemeProvider'
import { useLanguage } from './LanguageProvider'

export default function Skills() {
  const { theme } = useTheme()
  const { t } = useLanguage()

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gradient mb-6">
            {theme === 'dark' ? t('skills.title.dark') : t('skills.title.light')}
          </h2>
          <p className="text-xl opacity-80 max-w-3xl mx-auto">
            {t('skills.subtitle')}
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Programming & Development */}
          <div className="glass-effect p-8 rounded-2xl card-hover">
            <div className="flex items-center mb-6">
              <span className="text-3xl mr-4">{theme === 'dark' ? '🚀' : '💻'}</span>
              <h3 className="text-2xl font-bold text-gradient">{t('skills.programming')}</h3>
            </div>
            
            <div className="space-y-4">
              {[
                { name: 'PHP (Laravel)', level: 85 },
                { name: 'Python', level: 75 },
                { name: 'JavaScript', level: 80 },
                { name: 'HTML/CSS', level: 90 },
                { name: 'C++', level: 70 },
                { name: 'Git', level: 85 }
              ].map((skill, skillIndex) => (
                <div key={skill.name} className="group">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-sm opacity-70">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
                    <div 
                      className={`h-full rounded-full transition-all duration-1000 ease-out ${
                        theme === 'dark' 
                          ? 'bg-gradient-to-r from-space-galaxy to-space-nebula' 
                          : 'bg-gradient-to-r from-earth-forest to-earth-grass'
                      }`}
                      style={{ 
                        width: `${skill.level}%`,
                        animationDelay: `${skillIndex * 0.1}s`
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Server & Infrastructure */}
          <div className="glass-effect p-8 rounded-2xl card-hover">
            <div className="flex items-center mb-6">
              <span className="text-3xl mr-4">{theme === 'dark' ? '🛸' : '🖥️'}</span>
              <h3 className="text-2xl font-bold text-gradient">{t('skills.server')}</h3>
            </div>
            
            <div className="space-y-4">
              {[
                { name: 'Linux Server', level: 90 },
                { name: 'Windows Server', level: 88 },
                { name: 'cPanel & WHM', level: 95 },
                { name: 'Virtualizor', level: 85 },
                { name: 'Proxmox', level: 80 },
                { name: 'Docker', level: 85 },
                { name: 'Directadmin', level: 82 }
              ].map((skill, skillIndex) => (
                <div key={skill.name} className="group">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-sm opacity-70">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
                    <div 
                      className={`h-full rounded-full transition-all duration-1000 ease-out ${
                        theme === 'dark' 
                          ? 'bg-gradient-to-r from-space-galaxy to-space-nebula' 
                          : 'bg-gradient-to-r from-earth-forest to-earth-grass'
                      }`}
                      style={{ 
                        width: `${skill.level}%`,
                        animationDelay: `${skillIndex * 0.1}s`
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Network & Security */}
          <div className="glass-effect p-8 rounded-2xl card-hover">
            <div className="flex items-center mb-6">
              <span className="text-3xl mr-4">{theme === 'dark' ? '🌌' : '�'}</span>
              <h3 className="text-2xl font-bold text-gradient">{t('skills.network')}</h3>
            </div>
            
            <div className="space-y-4">
              {[
                { name: 'Mikrotik', level: 88 },
                { name: 'Unifi', level: 85 },
                { name: 'Cisco', level: 80 },
                { name: 'Cloudflare', level: 90 },
                { name: 'Network Security', level: 85 },
                { name: 'Firewall Config', level: 88 }
              ].map((skill, skillIndex) => (
                <div key={skill.name} className="group">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-sm opacity-70">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
                    <div 
                      className={`h-full rounded-full transition-all duration-1000 ease-out ${
                        theme === 'dark' 
                          ? 'bg-gradient-to-r from-space-galaxy to-space-nebula' 
                          : 'bg-gradient-to-r from-earth-forest to-earth-grass'
                      }`}
                      style={{ 
                        width: `${skill.level}%`,
                        animationDelay: `${skillIndex * 0.1}s`
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Monitoring & DevOps */}
          <div className="glass-effect p-8 rounded-2xl card-hover">
            <div className="flex items-center mb-6">
              <span className="text-3xl mr-4">{theme === 'dark' ? '⭐' : '🔧'}</span>
              <h3 className="text-2xl font-bold text-gradient">{t('skills.devops')}</h3>
            </div>
            
            <div className="space-y-4">
              {[
                { name: 'Zabbix', level: 88 },
                { name: 'Wazuh', level: 80 },
                { name: 'Cloud Services', level: 82 },
                { name: 'Alibaba Cloud', level: 75 },
                { name: 'Server Monitoring', level: 90 },
                { name: 'Automation Scripts', level: 80 }
              ].map((skill, skillIndex) => (
                <div key={skill.name} className="group">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-sm opacity-70">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
                    <div 
                      className={`h-full rounded-full transition-all duration-1000 ease-out ${
                        theme === 'dark' 
                          ? 'bg-gradient-to-r from-space-galaxy to-space-nebula' 
                          : 'bg-gradient-to-r from-earth-forest to-earth-grass'
                      }`}
                      style={{ 
                        width: `${skill.level}%`,
                        animationDelay: `${skillIndex * 0.1}s`
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Certifications & Learning Path */}
        <div className="glass-effect p-8 rounded-2xl text-center">
          <h3 className="text-2xl font-bold text-gradient mb-6">
            {theme === 'dark' ? 'Galactic Learning Path' : 'Perjalanan Pembelajaran'}
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 rounded-xl bg-gradient-to-br from-earth-forest/10 to-earth-grass/10 dark:from-space-galaxy/10 dark:to-space-nebula/10">
              <div className="text-3xl mb-3">🎯</div>
              <h4 className="font-bold mb-2">Current Focus</h4>
              <p className="text-sm opacity-80">DevOps & Cloud Infrastructure</p>
            </div>
            <div className="p-6 rounded-xl bg-gradient-to-br from-earth-forest/10 to-earth-grass/10 dark:from-space-galaxy/10 dark:to-space-nebula/10">
              <div className="text-3xl mb-3">📚</div>
              <h4 className="font-bold mb-2">Learning</h4>
              <p className="text-sm opacity-80">Kubernetes & AWS</p>
            </div>
            <div className="p-6 rounded-xl bg-gradient-to-br from-earth-forest/10 to-earth-grass/10 dark:from-space-galaxy/10 dark:to-space-nebula/10">
              <div className="text-3xl mb-3">🚀</div>
              <h4 className="font-bold mb-2">Next Goal</h4>
              <p className="text-sm opacity-80">Cloud Architect Certification</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
