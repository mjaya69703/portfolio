'use client'

import React from 'react'
import { useTheme } from './ThemeProvider'

export default function Background() {
  const { theme } = useTheme()

  return (
    <div className="fixed inset-0 z-0">
      {/* Earth Theme Background */}
      <div className={`absolute inset-0 transition-opacity duration-1000 ${theme === 'light' ? 'opacity-100' : 'opacity-0'}`}>
        {/* Sky Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-earth-sky via-blue-200 to-earth-grass"></div>
        
        {/* Sun */}
        <div className="absolute top-16 right-16 w-20 h-20 bg-earth-sun rounded-full shadow-2xl animate-pulse-slow">
          <div className="absolute inset-0 bg-yellow-300 rounded-full animate-ping opacity-20"></div>
        </div>
        
        {/* Clouds */}
        <div className="absolute inset-0">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute bg-white rounded-full opacity-80 animate-float"
              style={{
                top: `${15 + i * 8}%`,
                left: `${10 + i * 15}%`,
                width: `${60 + i * 20}px`,
                height: `${30 + i * 10}px`,
                animationDelay: `${i * 0.5}s`,
                animationDuration: `${4 + i}s`
              }}
            >
              <div className="absolute -top-3 left-4 w-8 h-8 bg-white rounded-full"></div>
              <div className="absolute -top-2 right-4 w-6 h-6 bg-white rounded-full"></div>
            </div>
          ))}
        </div>
        
        {/* Mountains/Hills */}
        <div className="absolute bottom-0 w-full h-1/3">
          <svg viewBox="0 0 1200 300" className="w-full h-full">
            <path
              d="M0,300 L0,180 Q200,120 400,160 Q600,100 800,140 Q1000,80 1200,120 L1200,300 Z"
              fill="url(#mountainGradient)"
            />
            <defs>
              <linearGradient id="mountainGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#228B22" />
                <stop offset="50%" stopColor="#32CD32" />
                <stop offset="100%" stopColor="#7CFC00" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        
        {/* Grass Field */}
        <div className="absolute bottom-0 w-full h-24 bg-gradient-to-t from-green-800 via-green-600 to-green-400">
          {/* Grass blades */}
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute bottom-0 w-1 bg-green-600 rounded-t-full animate-float"
              style={{
                left: `${i * 2}%`,
                height: `${12 + Math.random() * 8}px`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${3 + Math.random() * 2}s`
              }}
            ></div>
          ))}
        </div>
        
        {/* Flowers */}
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute bottom-16 animate-bounce-slow"
            style={{
              left: `${20 + i * 10}%`,
              animationDelay: `${i * 0.3}s`
            }}
          >
            <div className="w-3 h-3 bg-yellow-400 rounded-full relative">
              {[...Array(6)].map((_, j) => (
                <div
                  key={j}
                  className="absolute w-2 h-4 bg-pink-400 rounded-full"
                  style={{
                    transform: `rotate(${j * 60}deg) translateY(-3px)`,
                    transformOrigin: 'center bottom'
                  }}
                ></div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Space Theme Background */}
      <div className={`absolute inset-0 transition-opacity duration-1000 ${theme === 'dark' ? 'opacity-100' : 'opacity-0'}`}>
        {/* Space Gradient */}
        <div className="absolute inset-0 bg-space-gradient"></div>
        
        {/* Stars */}
        <div className="absolute inset-0">
          {[...Array(100)].map((_, i) => (
            <div
              key={i}
              className="absolute bg-space-star rounded-full animate-twinkle"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                width: `${1 + Math.random() * 3}px`,
                height: `${1 + Math.random() * 3}px`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 2}s`
              }}
            ></div>
          ))}
        </div>
        
        {/* Nebula clouds */}
        {[...Array(4)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full opacity-30 animate-float"
            style={{
              top: `${20 + i * 20}%`,
              left: `${10 + i * 25}%`,
              width: `${100 + i * 50}px`,
              height: `${80 + i * 30}px`,
              background: `radial-gradient(circle, ${i % 2 === 0 ? '#8B5CF6' : '#FF69B4'} 0%, transparent 70%)`,
              animationDelay: `${i * 1}s`,
              animationDuration: `${8 + i * 2}s`
            }}
          ></div>
        ))}
        
        {/* Planets */}
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full animate-orbit"
            style={{
              top: `${30 + i * 25}%`,
              right: `${15 + i * 20}%`,
              width: `${20 + i * 15}px`,
              height: `${20 + i * 15}px`,
              background: i === 0 ? '#4169E1' : i === 1 ? '#FF69B4' : '#8B5CF6',
              animationDelay: `${i * 5}s`,
              animationDuration: `${15 + i * 5}s`
            }}
          >
            {/* Planet rings */}
            {i === 1 && (
              <div className="absolute inset-0 border-2 border-space-cosmic rounded-full scale-150 opacity-50"></div>
            )}
          </div>
        ))}
        
        {/* Shooting stars */}
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-20 bg-gradient-to-b from-space-meteor to-transparent opacity-70"
            style={{
              top: `${Math.random() * 50}%`,
              left: `${Math.random() * 100}%`,
              transform: 'rotate(45deg)',
              animation: `shoot 3s linear infinite ${i * 2}s`
            }}
          ></div>
        ))}
      </div>
    </div>
  )
}
