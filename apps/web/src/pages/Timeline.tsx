import { motion } from 'framer-motion'
import { timelineEvents } from '@nahian-birthday/shared'
import { useLanguage } from '../contexts/LanguageContext'

export default function Timeline() {
  const { t } = useLanguage()

  return (
    <div className="min-h-[calc(100vh-4rem)] py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="font-display text-4xl md:text-5xl font-bold text-gray-800 dark:text-gray-100 mb-2">
            <span className="bg-gradient-to-r from-pink-500 to-gold-500 bg-clip-text text-transparent">
              {t('Our Journey Together', 'আমাদের যাত্রা')}
            </span>
          </h1>
          <p className="font-display text-xl text-gray-600 dark:text-gray-400">আমাদের যাত্রা</p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-pink-400 via-gold-400 to-pink-400 rounded-full" />

          {timelineEvents.map((event, i) => {
            const isLeft = i % 2 === 0
            return (
              <motion.div
                key={event.year}
                initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.2 }}
                className={`relative flex items-center mb-12 ${isLeft ? 'flex-row' : 'flex-row-reverse'}`}
              >
                <div className={`w-5/12 ${isLeft ? 'text-right pr-8' : 'text-left pl-8'}`}>
                  <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-lg border border-pink-100 dark:border-gray-800 hover:shadow-xl transition-shadow">
                    <div className="text-4xl mb-3">{event.emoji}</div>
                    <span className="text-sm font-bold text-pink-500 bg-pink-50 dark:bg-pink-950 px-3 py-1 rounded-full">
                      {event.year}
                    </span>
                    <h3 className="font-display text-xl font-semibold text-gray-800 dark:text-gray-100 mt-3 mb-1">
                      {t(event.title, event.titleBn)}
                    </h3>
                    <p className="font-display text-sm text-gold-600 dark:text-gold-400 mb-2">{event.titleBn}</p>
                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{t(event.description, event.descriptionBn)}</p>
                    <p className="text-gray-500 dark:text-gray-500 text-xs mt-1">{event.descriptionBn}</p>
                  </div>
                </div>

                <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-gradient-to-r from-pink-400 to-gold-400 flex items-center justify-center shadow-lg z-10">
                  <span className="text-xl">{event.emoji}</span>
                </div>

                <div className="w-5/12" />
              </motion.div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
