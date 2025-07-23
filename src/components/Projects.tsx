'use client'

import React from 'react'
import { useTheme } from './ThemeProvider'
import { useLanguage } from './LanguageProvider'

export default function Projects() {
  const { theme } = useTheme()
  const { t, language } = useLanguage()
  
  const projects = [
    {
      title: 'NecoSiakad',
      description: {
        id: 'Neco Siakad - Sistem Akademik Perguruan Tinggi Berbasis Open Source dengan fitur lengkap untuk manajemen akademik',
        en: 'Neco Siakad - Open Source Higher Education Academic System with complete features for academic management'
      },
      tech: ['HTML', 'PHP', 'MySQL', 'Bootstrap', 'Laravel'],
      image: '🎓',
      features: {
        id: ['Manajemen Mahasiswa', 'Sistem Nilai', 'Jadwal Kuliah', 'Laporan Akademik'],
        en: ['Student Management', 'Grading System', 'Class Schedule', 'Academic Reports']
      },
      github: 'https://github.com/mjaya69703/siakad-pt.internal-dev.id',
      demo: 'https://siakad-pt.idev-fun.org',
      stars: '30',
      forks: '10'
    },
    {
      title: 'LaraFlare',
      description: {
        id: 'Laravel Domain Manager dengan integrasi Cloudflare API untuk pengelolaan domain dan DNS secara otomatis',
        en: 'Laravel Domain Manager with Cloudflare API integration for automatic domain and DNS management'
      },
      tech: ['Laravel', 'PHP', 'Blade', 'Cloudflare API'],
      image: '🌐',
      features: {
        id: ['Domain Management', 'DNS Automation', 'Cloudflare Integration', 'Laravel', 'API Management'],
        en: ['Domain Management', 'DNS Automation', 'Cloudflare Integration', 'Laravel', 'API Management']
      },
      github: 'https://github.com/mjaya69703/laraflare',
      demo: 'https://laraflare.idev-fun.org'
    },
    {
      title: 'Arpotret Business Portal',
      description: {
        id: 'Website bisnis untuk layanan fotografi dan portrait dengan sistem booking dan galeri interaktif',
        en: 'Business website for photography and portrait services with booking system and interactive gallery'
      },
      tech: ['HTML', 'CSS', 'JavaScript', 'PHP'],
      image: '📸',
      features: {
        id: ['Photo Gallery', 'Booking System', 'Portfolio Display','Laravel', 'Contact Management'],
        en: ['Photo Gallery', 'Booking System', 'Portfolio Display','Laravel', 'Contact Management']
      },
      github: 'https://github.com/mjaya69703/www.arpotret.biz.id',
      demo: 'https://arpotret.idev-fun.org'
    },
    {
      title: 'iDev Fun Platform',
      description: {
        id: 'Platform development dan hosting untuk developer dengan tools dan utilities yang berguna',
        en: 'Development and hosting platform for developers with useful tools and utilities'
      },
      tech: ['TypeScript', 'Next.js', 'React', 'Node.js'],
      image: '🛠️',
      features: {
        id: ['Developer Tools', 'Hosting Services', 'API Integration', 'Modern UI/UX'],
        en: ['Developer Tools', 'Hosting Services', 'API Integration', 'Modern UI/UX']
      },
      github: 'https://github.com/mjaya69703/idev-fun',
      demo: 'https://idev-fun.org'
    },
    {
      title: 'Personal Portfolio',
      description: {
        id: 'Portfolio website modern dengan tema earth dan space mode, dibangun menggunakan Next.js dan TailwindCSS',
        en: 'Modern portfolio website with earth and space theme modes, built using Next.js and TailwindCSS'
      },
      tech: ['Next.js', 'TypeScript', 'TailwindCSS', 'React'],
      image: '💼',
      features: {
        id: ['Dark/Light Mode', 'Responsive Design', 'Modern Animation', 'SEO Optimized'],
        en: ['Dark/Light Mode', 'Responsive Design', 'Modern Animation', 'SEO Optimized']
      },
      github: 'https://github.com/mjaya69703/mjaya-portfolio',
      demo: 'https://mjaya69703.idev-fun.org'
    },
    {
      title: 'Web Client Development',
      description: {
        id: 'Kumpulan project web client development untuk berbagai kebutuhan bisnis dan personal',
        en: 'Collection of web client development projects for various business and personal needs'
      },
      tech: ['HTML', 'CSS', 'JavaScript', 'PHP'],
      image: '🌍',
      features: {
        id: ['Custom Solutions', 'Client Management', 'Responsive Design', 'Cross-platform'],
        en: ['Custom Solutions', 'Client Management', 'Responsive Design', 'Cross-platform']
      },
      github: 'https://github.com/mjaya69703/webClientDev',
      demo: '#'
    }
  ]

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gradient mb-6">
            {theme === 'dark' ? t('projects.title.dark') : t('projects.title.light')}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {t('projects.subtitle')}
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={project.title} className="glass-effect p-8 rounded-2xl card-hover group">
              <div className="text-6xl mb-6 text-center group-hover:animate-bounce transition-all duration-300">{project.image}</div>
              
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-bold text-gradient">{project.title}</h3>
                {project.stars && (
                  <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
                    <span className="flex items-center">
                      ⭐ {project.stars}
                    </span>
                    {project.forks && (
                      <span className="flex items-center">
                        🍴 {project.forks}
                      </span>
                    )}
                  </div>
                )}
              </div>
              
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                {project.description[language as keyof typeof project.description]}
              </p>
              
              {/* Features */}
              <div className="mb-6">
                <h4 className="font-semibold mb-3 flex items-center text-gray-800 dark:text-gray-200">
                  <span className="mr-2">{theme === 'dark' ? '⭐' : '✨'}</span>
                  {t('projects.features')}
                </h4>
                <ul className="space-y-2">
                  {project.features[language as keyof typeof project.features].map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                      <span className={`mr-2 w-1.5 h-1.5 rounded-full ${
                        theme === 'dark' ? 'bg-space-galaxy' : 'bg-earth-forest'
                      }`}></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech) => (
                  <span 
                    key={tech}
                    className="bg-gradient-to-r from-earth-forest to-earth-grass dark:from-space-galaxy dark:to-space-nebula text-white px-3 py-1 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              {/* Action Buttons */}
              <div className="flex gap-3">
                {project.demo !== '#' ? (
                  <a 
                    href={project.demo} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn-primary flex-1 text-sm text-center block"
                  >
                    {t('projects.demo')}
                  </a>
                ) : (
                  <button className="btn-primary flex-1 text-sm opacity-50 cursor-not-allowed">
                    {t('projects.coming.soon')}
                  </button>
                )}
                <a 
                  href={project.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-primary flex-1 text-sm bg-transparent border-2 border-earth-forest dark:border-space-galaxy text-earth-forest dark:text-space-galaxy hover:bg-earth-forest dark:hover:bg-space-galaxy hover:text-white text-center block"
                >
                  {t('projects.github')}
                </a>
              </div>
            </div>
          ))}
        </div>
        
        {/* GitHub Stats */}
        <div className="mt-16 text-center">
          <div className="glass-effect p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-gradient mb-6">{t('projects.github.activity')}</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-800 dark:text-gray-200">18+</div>
                <div className="text-gray-600 dark:text-gray-400">{t('projects.repositories')}</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-800 dark:text-gray-200">235</div>
                <div className="text-gray-600 dark:text-gray-400">{t('projects.contributions')}</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-800 dark:text-gray-200">13</div>
                <div className="text-gray-600 dark:text-gray-400">{t('projects.followers')}</div>
              </div>
            </div>
            <div className="mt-6">
              <a 
                href="https://github.com/mjaya69703" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-primary"
              >
                {t('projects.view.github')}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
