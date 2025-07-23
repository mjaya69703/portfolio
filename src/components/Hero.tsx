'use client'

import React from 'react'
import { useTheme } from './ThemeProvider'
import { useLanguage } from './LanguageProvider'
import { Download, Mail, Rocket, Globe } from 'lucide-react'

export default function Hero() {
  const { theme } = useTheme()
  const { t } = useLanguage()

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16">
      <div className="max-w-6xl mx-auto text-center">
        <div className="mb-8">
          <div className="text-6xl sm:text-8xl mb-6 animate-float">
            {theme === 'dark' ? '🚀' : '🌍'}
          </div>
          
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold mb-6">
            <span className="gradient-text">{t('hero.title')}</span>
          </h1>
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-8 opacity-90">
            {theme === 'dark' ? t('hero.subtitle.dark') : t('hero.subtitle.light')}
          </h2>
          
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed mb-12">
            {theme === 'dark' ? t('hero.description.dark') : t('hero.description.light')}
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
          <a 
            href="/cv.pdf" 
            download
            className="btn-primary group flex items-center"
          >
            <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" />
            {t('hero.download.cv')}
          </a>
          
          <a 
            href="#contact"
            className="btn-primary group flex items-center bg-transparent border-2 border-earth-forest dark:border-space-galaxy text-earth-forest dark:text-space-galaxy hover:bg-earth-forest dark:hover:bg-space-galaxy hover:text-white"
            onClick={(e) => {
              e.preventDefault()
              document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
            }}
          >
            <Mail className="mr-2 h-5 w-5 group-hover:animate-bounce" />
            {t('hero.contact.me')}
          </a>
        </div>
        
        {/* Floating elements */}
        <div className="relative">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-float opacity-20"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${i * 0.5}s`,
                animationDuration: `${4 + i}s`
              }}
            >
              {theme === 'dark' ? (
                <Rocket className="h-8 w-8 text-space-cosmic" />
              ) : (
                <Globe className="h-8 w-8 text-earth-forest" />
              )}
            </div>
          ))}
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-gray-400 dark:border-gray-600 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gray-400 dark:bg-gray-600 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  )
}