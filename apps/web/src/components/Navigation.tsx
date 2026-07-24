import { Link, useLocation } from 'react-router-dom'
import { Home, User, Image, Clock, Gift, Layers } from 'lucide-react'
import { motion } from 'framer-motion'

const navItems = [
  { path: '/', label: 'Home', icon: Home },
  { path: '/nahian', label: 'Nahian', icon: User },
  { path: '/nowshin', label: 'Nowshin', icon: User },
  { path: '/gallery', label: 'Gallery', icon: Image },
  { path: '/timeline', label: 'Timeline', icon: Clock },
  { path: '/cards', label: 'Cards', icon: Layers },
  { path: '/card', label: 'Card', icon: Gift },
]

export default function Navigation() {
  const location = useLocation()

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-pink-100 shadow-sm">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2">
            <span className="text-2xl">🎂</span>
            <span className="font-display text-lg font-semibold bg-gradient-to-r from-pink-500 to-gold-500 bg-clip-text text-transparent">
              Nahian & Nowshin
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-1">
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
                  <span className={`relative z-10 flex items-center gap-1.5 text-sm font-medium ${isActive ? 'text-white' : 'text-gray-600 hover:text-pink-500'}`}>
                    <Icon size={16} />
                    {item.label}
                  </span>
                </Link>
              )
            })}
          </div>

          {/* Mobile menu */}
          <div className="md:hidden flex items-center gap-2">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path
              const Icon = item.icon
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`p-2 rounded-full transition-colors ${isActive ? 'bg-pink-500 text-white' : 'text-gray-500 hover:bg-pink-50'}`}
                >
                  <Icon size={18} />
                </Link>
              )
            })}
          </div>
        </div>
      </div>
    </nav>
  )
}
