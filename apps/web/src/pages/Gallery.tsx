import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'
import { galleryItems } from '@nahian-birthday/shared'
import { useLanguage } from '../contexts/LanguageContext'

type FilterType = 'all' | 'nahian' | 'nowshin' | 'both'

export default function Gallery() {
  const [filter, setFilter] = useState<FilterType>('all')
  const [selectedPhoto, setSelectedPhoto] = useState<number | null>(null)
  const { t } = useLanguage()

  const filtered = filter === 'all' ? galleryItems : galleryItems.filter((item) => item.twin === filter)

  const filters: { label: string; labelBn: string; value: FilterType }[] = [
    { label: 'All', labelBn: 'সব', value: 'all' },
    { label: 'Nahian', labelBn: 'নাহিয়ান', value: 'nahian' },
    { label: 'Nowshin', labelBn: 'নাউশিন', value: 'nowshin' },
    { label: 'Together', labelBn: 'একসাথে', value: 'both' },
  ]

  return (
    <div className="min-h-[calc(100vh-4rem)] py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="font-display text-4xl md:text-5xl font-bold text-gray-800 dark:text-gray-100 mb-2">
            <span className="bg-gradient-to-r from-pink-500 to-gold-500 bg-clip-text text-transparent">
              {t('Our Memories', 'আমাদের স্মৃতিসমূহ')}
            </span>
          </h1>
          <p className="font-display text-xl text-gray-600 dark:text-gray-400">আমাদের স্মৃতিসমূহ</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="flex justify-center gap-2 mb-10 flex-wrap"
        >
          {filters.map((f) => (
            <button
              key={f.value}
              onClick={() => setFilter(f.value)}
              className={`px-5 py-2.5 rounded-full font-medium transition-all ${
                filter === f.value
                  ? 'bg-gradient-to-r from-pink-500 to-gold-500 text-white shadow-lg scale-105'
                  : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700'
              }`}
            >
              {t(f.label, f.labelBn)}
            </button>
          ))}
        </motion.div>

        <motion.div layout className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <AnimatePresence mode="popLayout">
            {filtered.map((item, i) => (
              <motion.div
                key={item.src}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ delay: i * 0.05 }}
                onClick={() => setSelectedPhoto(i)}
                className="group cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-2xl aspect-square">
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    style={{ objectPosition: item.crop === 'top' ? 'top center' : 'center' }}
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-end p-4">
                    <span className="text-white font-medium opacity-0 group-hover:opacity-100 transition-opacity text-sm drop-shadow-lg">
                      {item.caption}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <AnimatePresence>
          {selectedPhoto !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedPhoto(null)}
            >
              <motion.div
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.9 }}
                className="bg-white dark:bg-gray-900 rounded-3xl p-4 md:p-6 max-w-2xl w-full"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex justify-between items-center mb-4">
                  <h3 className="font-display text-xl font-semibold text-gray-800 dark:text-gray-100">{filtered[selectedPhoto]?.caption}</h3>
                  <button onClick={() => setSelectedPhoto(null)} className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800">
                    <X size={20} className="text-gray-600 dark:text-gray-300" />
                  </button>
                </div>
                <div className="rounded-2xl overflow-hidden">
                  <img
                    src={filtered[selectedPhoto]?.src}
                    alt={filtered[selectedPhoto]?.alt}
                    className="w-full h-auto max-h-[70vh] object-contain"
                  />
                </div>
                {filtered[selectedPhoto]?.alt && (
                  <p className="text-center text-gray-500 dark:text-gray-400 text-sm mt-3">{filtered[selectedPhoto]?.alt}</p>
                )}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
