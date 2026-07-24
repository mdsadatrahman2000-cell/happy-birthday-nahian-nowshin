import { Link, useLocation } from 'react-router-dom'
import { Home, User, Image, Clock, Gift, Layers, Sun, Moon, Globe } from 'lucide-react'
import { motion } from 'framer-motion'
import { useTheme } from '../contexts/ThemeContext'
import { useLanguage } from '../contexts/LanguageContext'

const navItems = [
  { path: '/', label: 'Home', labelBn: 'হোম', icon: Home },
  { path: '/nahian', label: 'Nahian', labelBn: 'নাহিয়ান', icon: User },
  { path: '/nowshin', label: 'Nowshin', labelBn: 'নাউশিন', icon: User },
  { path: '/gallery', label: 'Gallery', labelBn: 'গ্যালারি', icon: Image },
  { path: '/timeline', label: 'Timeline', labelBn: 'টাইমলাইন', icon: Clock },
  { path: '/cards', label: 'Cards', labelBn: 'কার্ড', icon: Layers },
  { path: '/card', label: 'Card', labelBn: 'কার্ড', icon: Gift },
]

export default function Navigation() {
  const location = useLocation()
  const { theme, toggleTheme } = useTheme()
  const { lang, toggleLanguage } = useLanguage()

  return (
    <nav className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-pink-100 dark:border-gray-800 shadow-sm">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2">
            <span className="text-2xl">🎂</span>
            <span className="font-display text-lg font-semibold bg-gradient-to-r from-pink-500 to-gold-500 bg-clip-text text-transparent">
              Nahian & Nowshin
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path
              const Icon = item.icon
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className="relative px-3 py-2 rounded-full transition-colors"
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 bg-gradient-to-r from-pink-400 to-pink-500 rounded-full"
                      transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  <span className={`relative z-10 flex items-center gap-1.5 text-sm font-medium ${isActive ? 'text-white' : 'text-gray-600 dark:text-gray-300 hover:text-pink-500'}`}>
                    <Icon size={16} />
                    {lang === 'en' ? item.label : item.labelBn}
                  </span>
                </Link>
              )
            })}
          </div>

          {/* Controls */}
          <div className="flex items-center gap-2">
            {/* Language toggle */}
            <button
              onClick={toggleLanguage}
              className="p-2 rounded-full bg-pink-50 dark:bg-gray-800 hover:bg-pink-100 dark:hover:bg-gray-700 transition-colors"
              title={lang === 'en' ? 'বাংলায় পরিবর্তন করুন' : 'Switch to English'}
            >
              <Globe size={18} className="text-pink-500" />
              <span className="sr-only">Toggle Language</span>
            </button>

            {/* Theme toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-pink-50 dark:bg-gray-800 hover:bg-pink-100 dark:hover:bg-gray-700 transition-colors"
              title={theme === 'light' ? 'ডার্ক মোড' : 'লাইট মোড'}
            >
              {theme === 'light' ? (
                <Moon size={18} className="text-pink-500" />
              ) : (
                <Sun size={18} className="text-gold-400" />
              )}
              <span className="sr-only">Toggle Theme</span>
            </button>

            {/* Mobile menu */}
            <div className="lg:hidden flex items-center gap-1">
              {navItems.map((item) => {
                const isActive = location.pathname === item.path
                const Icon = item.icon
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`p-2 rounded-full transition-colors ${isActive ? 'bg-pink-500 text-white' : 'text-gray-500 dark:text-gray-400 hover:bg-pink-50 dark:hover:bg-gray-800'}`}
                  >
                    <Icon size={18} />
                  </Link>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
