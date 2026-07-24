import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Lock, Unlock, X, Sparkles, Clock } from 'lucide-react'
import { birthdayWishes, BIRTHDAY_DATE } from '@nahian-birthday/shared'
import { useLanguage } from '../contexts/LanguageContext'

const CURRENT_AGE = 20
const BIRTHDAY = new Date(BIRTHDAY_DATE)

function getTimeUntilUnlock(targetAge: number) {
  const now = new Date()
  const unlockYear = BIRTHDAY.getFullYear() + targetAge
  const unlockDate = new Date(unlockYear, BIRTHDAY.getMonth(), BIRTHDAY.getDate())

  if (now >= unlockDate) return null

  const diff = unlockDate.getTime() - now.getTime()
  const days = Math.floor(diff / (1000 * 60 * 60 * 24))
  const months = Math.floor(days / 30)
  const remainingDays = days % 30

  return { months, days: remainingDays, totalDays: days }
}

function CountdownBadge({ targetAge }: { targetAge: number }) {
  const [time, setTime] = useState(() => getTimeUntilUnlock(targetAge))

  useEffect(() => {
    const timer = setInterval(() => setTime(getTimeUntilUnlock(targetAge)), 60000)
    return () => clearInterval(timer)
  }, [targetAge])

  if (!time) return null

  return (
    <div className="absolute bottom-1.5 left-1.5 right-1.5 bg-black/40 backdrop-blur-sm rounded-lg px-1.5 py-1 text-center">
      <div className="flex items-center justify-center gap-1">
        <Clock size={9} className="text-white/70" />
        <span className="text-[9px] text-white/90 font-medium leading-tight">
          {time.months > 0 && `${time.months}m `}
          {time.days}d
        </span>
      </div>
    </div>
  )
}

export default function CardCollection() {
  const [selectedCard, setSelectedCard] = useState<number | null>(null)
  const [filter, setFilter] = useState<'all' | 'unlocked' | 'locked'>('all')
  const { t } = useLanguage()

  const isUnlocked = (age: number) => age <= CURRENT_AGE

  const filtered = birthdayWishes.filter((w) => {
    if (filter === 'unlocked') return isUnlocked(w.age)
    if (filter === 'locked') return !isUnlocked(w.age)
    return true
  })

  const unlockedCount = birthdayWishes.filter((w) => isUnlocked(w.age)).length

  return (
    <div className="min-h-[calc(100vh-4rem)] py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-3">
            <span className="bg-gradient-to-r from-pink-500 to-gold-500 bg-clip-text text-transparent">
              {t('100 Birthday Wishes', '১০০টি জন্মদিনের শুভেচ্ছা')}
            </span>
          </h1>
          <p className="font-display text-xl text-gray-600 dark:text-gray-400 mb-2">
            {t('Each card unlocks on the corresponding birthday.', 'প্রতিটি কার্ড সংশ্লিষ্ট জন্মদিনে আনলক হয়।')}
          </p>
          <p className="text-gray-500 dark:text-gray-400 mb-6">
            <span className="text-pink-500 font-semibold">
              {unlockedCount}/101 {t('unlocked', 'আনলক')}
            </span>
          </p>

          <div className="max-w-md mx-auto bg-gray-200 dark:bg-gray-800 rounded-full h-3 mb-8 overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${(unlockedCount / 101) * 100}%` }}
              transition={{ duration: 1.5, ease: 'easeOut' }}
              className="h-full bg-gradient-to-r from-pink-400 to-gold-400 rounded-full"
            />
          </div>

          <div className="flex justify-center gap-2 flex-wrap">
            {[
              { label: 'All Cards', labelBn: 'সব কার্ড', value: 'all' as const, count: 101 },
              { label: 'Unlocked', labelBn: 'আনলক', value: 'unlocked' as const, count: unlockedCount },
              { label: 'Locked', labelBn: 'লক', value: 'locked' as const, count: 101 - unlockedCount },
            ].map((f) => (
              <button
                key={f.value}
                onClick={() => setFilter(f.value)}
                className={`px-5 py-2.5 rounded-full font-medium transition-all ${
                  filter === f.value
                    ? 'bg-gradient-to-r from-pink-500 to-gold-500 text-white shadow-lg scale-105'
                    : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700'
                }`}
              >
                {t(f.label, f.labelBn)} ({f.count})
              </button>
            ))}
          </div>
        </motion.div>

        {/* Cards Grid */}
        <motion.div layout className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-3 md:gap-4">
          {filtered.map((wish, i) => {
            const unlocked = isUnlocked(wish.age)
            return (
              <motion.div
                key={wish.age}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ delay: Math.min(i * 0.02, 0.5) }}
                onClick={() => unlocked && setSelectedCard(wish.age)}
                className={`relative aspect-[3/4] rounded-2xl cursor-pointer transition-all duration-300 overflow-hidden ${
                  unlocked
                    ? 'hover:scale-105 hover:shadow-xl hover:-translate-y-1'
                    : 'cursor-default'
                }`}
              >
                {/* Card background */}
                <div
                  className={`absolute inset-0 ${
                    unlocked
                      ? 'bg-gradient-to-br from-pink-400 via-pink-500 to-gold-400'
                      : 'bg-gradient-to-br from-gray-300 dark:from-gray-700 via-gray-400 dark:via-gray-600 to-gray-500 dark:to-gray-500'
                  }`}
                />

                {/* Decorative circles */}
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute top-2 right-2 w-6 h-6 rounded-full border-2 border-white/40" />
                  <div className="absolute bottom-3 left-2 w-4 h-4 rounded-full border-2 border-white/30" />
                </div>

                {/* Content */}
                <div className="relative h-full flex flex-col items-center justify-center p-3 text-white text-center">
                  <span className="text-2xl md:text-3xl mb-1">{wish.emoji}</span>
                  <span className="text-xl md:text-2xl font-bold">{wish.age}</span>
                  <span className="text-[9px] opacity-70 mt-0.5">
                    {wish.age === 0 ? 'Year' : 'Years'}
                  </span>

                  {unlocked ? (
                    <Unlock size={14} className="absolute top-2 right-2 opacity-60" />
                  ) : (
                    <Lock size={14} className="absolute top-2 right-2 opacity-60" />
                  )}
                </div>

                {/* Countdown for locked cards */}
                {!unlocked && <CountdownBadge targetAge={wish.age} />}

                {/* Hover glow for unlocked */}
                {unlocked && (
                  <div className="absolute inset-0 bg-white/0 hover:bg-white/10 transition-colors" />
                )}
              </motion.div>
            )
          })}
        </motion.div>

        {/* Detail Modal */}
        <AnimatePresence>
          {selectedCard !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedCard(null)}
            >
              <motion.div
                initial={{ scale: 0.8, y: 50 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.8, y: 50 }}
                transition={{ type: 'spring', bounce: 0.3 }}
                onClick={(e) => e.stopPropagation()}
                className="relative w-full max-w-md"
              >
                <div className="bg-white dark:bg-gray-900 rounded-3xl shadow-2xl overflow-hidden">
                  {/* Card header */}
                  <div className="bg-gradient-to-r from-pink-400 via-pink-500 to-gold-400 p-8 text-center relative">
                    <div className="absolute inset-0 opacity-10">
                      {Array.from({ length: 15 }).map((_, j) => (
                        <div
                          key={j}
                          className="absolute animate-float"
                          style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 3}s`,
                          }}
                        >
                          <Sparkles size={12} className="text-white" />
                        </div>
                      ))}
                    </div>
                    <button
                      onClick={() => setSelectedCard(null)}
                      className="absolute top-4 right-4 p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors text-white"
                    >
                      <X size={18} />
                    </button>
                    <span className="text-5xl mb-3 block relative z-10">
                      {birthdayWishes.find((w) => w.age === selectedCard)?.emoji}
                    </span>
                    <h2 className="font-display text-3xl font-bold text-white relative z-10">
                      {t('Age', 'বয়স')} {selectedCard}
                    </h2>
                    <p className="text-white/80 text-sm relative z-10 mt-1">
                      {selectedCard === 0
                        ? t('Year Zero', 'শূন্য বছর')
                        : `${selectedCard} ${t('Years', 'বছর')}`}
                    </p>
                  </div>

                  {/* Card body */}
                  <div className="p-8">
                    <p className="text-lg text-gray-700 dark:text-gray-300 text-center leading-relaxed mb-4">
                      {birthdayWishes.find((w) => w.age === selectedCard)?.wish}
                    </p>
                    <div className="w-16 h-px bg-gradient-to-r from-pink-300 to-gold-300 mx-auto my-4" />
                    <p className="text-base text-gray-500 dark:text-gray-400 text-center italic leading-relaxed">
                      {birthdayWishes.find((w) => w.age === selectedCard)?.wishBn}
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
