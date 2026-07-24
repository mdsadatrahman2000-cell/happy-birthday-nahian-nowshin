import { motion } from 'framer-motion'
import { timelineEvents } from '@nahian-birthday/shared'

export default function Timeline() {
  return (
    <div className="min-h-[calc(100vh-4rem)] py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="font-display text-4xl md:text-5xl font-bold text-gray-800 mb-2">
            <span className="bg-gradient-to-r from-pink-500 to-gold-500 bg-clip-text text-transparent">
              Our Journey Together
            </span>
          </h1>
          <p className="font-display text-xl text-gray-600">আমাদের যাত্রা</p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Center line */}
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
                {/* Content */}
                <div className={`w-5/12 ${isLeft ? 'text-right pr-8' : 'text-left pl-8'}`}>
                  <div className="bg-white rounded-2xl p-6 shadow-lg border border-pink-100 hover:shadow-xl transition-shadow">
                    <div className="text-4xl mb-3">{event.emoji}</div>
                    <span className="text-sm font-bold text-pink-500 bg-pink-50 px-3 py-1 rounded-full">
                      {event.year}
                    </span>
                    <h3 className="font-display text-xl font-semibold text-gray-800 mt-3 mb-1">
                      {event.title}
                    </h3>
                    <p className="font-display text-sm text-gold-600 mb-2">{event.titleBn}</p>
                    <p className="text-gray-600 text-sm leading-relaxed">{event.description}</p>
                    <p className="text-gray-500 text-xs mt-1">{event.descriptionBn}</p>
                  </div>
                </div>

                {/* Center dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-gradient-to-r from-pink-400 to-gold-400 flex items-center justify-center shadow-lg z-10">
                  <span className="text-xl">{event.emoji}</span>
                </div>

                {/* Empty space for the other side */}
                <div className="w-5/12" />
              </motion.div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
