'use client'

import React from 'react'
import { useTheme } from './ThemeProvider'
import { useLanguage } from './LanguageProvider'

export default function Contact() {
  const { theme } = useTheme()
  const { t } = useLanguage()

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gradient mb-8">
            {theme === 'dark' ? t('contact.title.dark') : t('contact.title.light')}
          </h2>
          <p className="text-xl opacity-80 mb-12 max-w-3xl mx-auto">
            {t('contact.subtitle')}
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {[
            {
              icon: '📧',
              titleKey: 'contact.info.email',
              value: 'mjaya69703@gmail.com',
              link: 'mailto:mjaya69703@gmail.com'
            },
            {
              icon: '📱',
              titleKey: 'contact.info.phone',
              value: '+62 878-4879-9145',
              link: 'tel:+6287848799145'
            },
            {
              icon: '💼',
              titleKey: 'contact.info.linkedin',
              value: 'mjaya69703',
              link: 'https://linkedin.com/in/mjaya69703'
            },
            {
              icon: '🐙',
              titleKey: 'contact.info.github',
              value: '@mjaya69703',
              link: 'https://github.com/mjaya69703'
            },
            {
              icon: '🌍',
              titleKey: 'contact.info.portfolio',
              value: 'mjaya69703.idev-fun.org',
              link: 'https://mjaya69703.idev-fun.org'
            },
            {
              icon: '📍',
              titleKey: 'contact.info.location',
              value: 'Indonesia',
              link: '#'
            }
          ].map((contact, index) => (
            <a
              key={contact.titleKey}
              href={contact.link}
              target={contact.link.startsWith('http') ? '_blank' : '_self'}
              rel={contact.link.startsWith('http') ? 'noopener noreferrer' : ''}
              className="glass-effect p-6 rounded-xl card-hover group transition-all duration-300 hover:scale-105 block"
            >
              <div className="text-center">
                <div className="text-4xl mb-4 group-hover:animate-bounce transition-all duration-300">
                  {contact.icon}
                </div>
                <h3 className="text-xl font-bold mb-2 text-gradient">{t(contact.titleKey)}</h3>
                <p className="opacity-80 group-hover:opacity-100 transition-opacity duration-300">
                  {contact.value}
                </p>
              </div>
            </a>
          ))}
        </div>
        
        {/* Call to Action */}
        <div className="text-center">
          <div className="glass-effect p-8 rounded-2xl max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              {theme === 'dark' ? t('contact.cta.title.dark') : t('contact.cta.title.light')}
            </h3>
            <p className="opacity-80 mb-6 leading-relaxed">
              {t('contact.cta.description')}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="mailto:mjaya69703@gmail.com"
                className="btn-primary group"
              >
                <span className="mr-2 group-hover:animate-bounce">📧</span>
                {t('contact.action.email')}
              </a>
              <a 
                href="tel:+6287848799145"
                className="btn-primary group"
              >
                <span className="mr-2 group-hover:animate-bounce">📞</span>
                {t('contact.action.phone')}
              </a>
            </div>
            
            <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
              <p className="text-sm opacity-60">
                {t('contact.response.time')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
