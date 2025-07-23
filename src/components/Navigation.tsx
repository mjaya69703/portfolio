'use client'

import React, { useState, useEffect } from 'react'
import { useTheme } from './ThemeProvider'
import { useLanguage } from './LanguageProvider'
import { Sun, Moon, Menu, X, Rocket, Globe } from 'lucide-react'

export default function Navigation() {
  const { theme, toggleTheme } = useTheme()
  const { language, toggleLanguage, t } = useLanguage()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  const navItems = [
    { href: '#hero', label: t('nav.home') },
    { href: '#about', label: t('nav.about') },
    { href: '#experience', label: t('nav.experience') },
    { href: '#education', label: t('nav.education') },
    { href: '#skills', label: t('nav.skills') },
    { href: '#projects', label: t('nav.projects') },
    { href: '#contact', label: t('nav.contact') }
  ]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMenuOpen(false)
    }
  }

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'backdrop-blur-lg bg-white/10 dark:bg-black/10' : ''
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            {theme === 'dark' ? (
              <Rocket className="h-8 w-8 text-space-cosmic" />
            ) : (
              <Globe className="h-8 w-8 text-earth-forest" />
            )}
            <span className="text-xl font-bold bg-gradient-to-r from-earth-forest to-earth-grass dark:from-space-cosmic dark:to-space-galaxy bg-clip-text text-transparent">
              {theme === 'dark' ? 'CosmicDev' : 'EarthDev'}
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => handleNavClick(item.href)}
                  className="relative px-3 py-2 text-sm font-medium transition-all duration-300 text-gray-700 dark:text-gray-200 hover:text-earth-forest dark:hover:text-space-cosmic group"
                >
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-earth-forest dark:bg-space-cosmic transition-all duration-300 group-hover:w-full"></span>
                </button>
              ))}
            </div>
          </div>

          {/* Theme Toggle & Language Toggle & Mobile Menu */}
          <div className="flex items-center space-x-2">
            {/* Language Toggle */}
            <button
              onClick={toggleLanguage}
              className="p-2 rounded-full glass-effect hover:scale-110 transition-all duration-300 border border-white/20 dark:border-gray-600/50"
              aria-label={t('nav.toggle.language')}
              title={language === 'id' ? t('nav.switch.english') : t('nav.switch.indonesian')}
            >
              <span className="text-lg">
                {language === 'id' ? '🇮🇩' : '🇺🇸'}
              </span>
            </button>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full glass-effect hover:scale-110 transition-all duration-300 border border-white/20 dark:border-gray-600/50"
              aria-label={t('nav.toggle.theme')}
            >
              {theme === 'dark' ? (
                <Sun className="h-5 w-5 text-yellow-400" />
              ) : (
                <Moon className="h-5 w-5 text-gray-600" />
              )}
            </button>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-full glass-effect border border-white/20 dark:border-gray-600/50 transition-all duration-300"
                aria-label={t('nav.toggle.menu')}
              >
                {isMenuOpen ? (
                  <X className="h-5 w-5 text-gray-700 dark:text-gray-200" />
                ) : (
                  <Menu className="h-5 w-5 text-gray-700 dark:text-gray-200" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 glass-effect rounded-lg mt-2 border border-white/10 dark:border-gray-700/50">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => handleNavClick(item.href)}
                  className="block w-full text-left px-4 py-3 text-base font-medium transition-all duration-300 text-gray-700 dark:text-gray-200 hover:text-earth-forest dark:hover:text-space-cosmic hover:bg-white/10 dark:hover:bg-gray-800/50 rounded-md"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
