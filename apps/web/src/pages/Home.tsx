import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Heart, ArrowRight } from 'lucide-react'
import { BIRTHDAY_DATE } from '@nahian-birthday/shared'

function calculateTimeLeft() {
  const now = new Date()
  const birthday = new Date(BIRTHDAY_DATE)
  const nextBirthday = new Date(now.getFullYear(), birthday.getMonth(), birthday.getDate())

  if (now > nextBirthday) {
    nextBirthday.setFullYear(nextBirthday.getFullYear() + 1)
  }

  const diff = nextBirthday.getTime() - now.getTime()

  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  }
}

export default function Home() {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft)

  useEffect(() => {
    const timer = setInterval(() => setTimeLeft(calculateTimeLeft()), 1000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center px-4 py-12">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-3xl mx-auto"
      >
        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-8xl mb-6"
        >
          🎂
        </motion.div>

        <h1 className="font-display text-5xl md:text-7xl font-bold mb-4">
          <span className="bg-gradient-to-r from-pink-500 via-pink-400 to-gold-500 bg-clip-text text-transparent">
            Happy Birthday
          </span>
        </h1>

        <h2 className="font-display text-3xl md:text-5xl font-semibold text-gray-800 mb-2">
          Nahian & Nowshin
        </h2>

        <p className="font-display text-xl md:text-2xl text-gray-600 italic mb-4">
          নাহিয়ান ও নাউশিন
        </p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-lg text-gray-500 flex items-center justify-center gap-2 mb-12"
        >
          Two hearts, one soul, endless love
          <Heart className="text-pink-500 fill-pink-500" size={20} />
        </motion.p>

        {/* Countdown Timer */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8 }}
          className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-pink-100 mb-12"
        >
          <h3 className="font-display text-xl text-gray-600 mb-6">Countdown to Next Birthday</h3>
          <div className="flex justify-center gap-4 md:gap-8">
            {[
              { value: timeLeft.days, label: 'Days' },
              { value: timeLeft.hours, label: 'Hours' },
              { value: timeLeft.minutes, label: 'Minutes' },
              { value: timeLeft.seconds, label: 'Seconds' },
            ].map((item) => (
              <div key={item.label} className="text-center">
                <div className="w-16 h-16 md:w-24 md:h-24 rounded-2xl bg-gradient-to-br from-pink-400 to-gold-400 flex items-center justify-center mb-2">
                  <span className="text-2xl md:text-4xl font-bold text-white">{item.value}</span>
                </div>
                <span className="text-sm text-gray-500 font-medium">{item.label}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Twin Cards Preview */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <Link to="/nahian">
            <motion.div
              whileHover={{ scale: 1.02, y: -5 }}
              className="bg-gradient-to-br from-pink-50 to-pink-100 rounded-3xl p-8 border border-pink-200 shadow-lg cursor-pointer"
            >
              <div className="text-5xl mb-4">🌸</div>
              <h3 className="font-display text-2xl font-semibold text-pink-700 mb-2">Nahian</h3>
              <p className="font-display text-lg text-pink-600 mb-4">নাহিয়ান</p>
              <div className="flex items-center gap-2 text-pink-500 font-medium">
                View Page <ArrowRight size={18} />
              </div>
            </motion.div>
          </Link>

          <Link to="/nowshin">
            <motion.div
              whileHover={{ scale: 1.02, y: -5 }}
              className="bg-gradient-to-br from-gold-50 to-gold-100 rounded-3xl p-8 border border-gold-200 shadow-lg cursor-pointer"
            >
              <div className="text-5xl mb-4">✨</div>
              <h3 className="font-display text-2xl font-semibold text-gold-700 mb-2">Nowshin</h3>
              <p className="font-display text-lg text-gold-600 mb-4">নাউশিন</p>
              <div className="flex items-center gap-2 text-gold-500 font-medium">
                View Page <ArrowRight size={18} />
              </div>
            </motion.div>
          </Link>
        </div>

        {/* Quick Links */}
        <div className="flex flex-wrap justify-center gap-3">
          {[
            { to: '/gallery', label: '📸 Gallery', color: 'bg-pink-100 text-pink-700 hover:bg-pink-200' },
            { to: '/timeline', label: '⏳ Timeline', color: 'bg-gold-100 text-gold-700 hover:bg-gold-200' },
            { to: '/card', label: '🎁 Birthday Card', color: 'bg-purple-100 text-purple-700 hover:bg-purple-200' },
          ].map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`px-6 py-3 rounded-full font-medium transition-colors ${link.color}`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </motion.div>
    </div>
  )
}
