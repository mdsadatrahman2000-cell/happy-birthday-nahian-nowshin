import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Camera, X } from 'lucide-react'
import { galleryItems } from '@nahian-birthday/shared'

type FilterType = 'all' | 'nahian' | 'nowshin' | 'both'

export default function Gallery() {
  const [filter, setFilter] = useState<FilterType>('all')
  const [selectedPhoto, setSelectedPhoto] = useState<number | null>(null)

  const filtered = filter === 'all' ? galleryItems : galleryItems.filter((item) => item.twin === filter)

  const filters: { label: string; value: FilterType }[] = [
    { label: 'All', value: 'all' },
    { label: '🌸 Nahian', value: 'nahian' },
    { label: '✨ Nowshin', value: 'nowshin' },
    { label: '👯 Together', value: 'both' },
  ]

  return (
    <div className="min-h-[calc(100vh-4rem)] py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="font-display text-4xl md:text-5xl font-bold text-gray-800 mb-2">
            <span className="bg-gradient-to-r from-pink-500 to-gold-500 bg-clip-text text-transparent">
              Our Memories
            </span>
          </h1>
          <p className="font-display text-xl text-gray-600">আমাদের স্মৃতিসমূহ</p>
        </motion.div>

        {/* Filters */}
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
                  : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {f.label}
            </button>
          ))}
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          layout
          className="grid grid-cols-2 md:grid-cols-3 gap-4"
        >
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
                <div className="relative overflow-hidden rounded-2xl aspect-square bg-gradient-to-br from-pink-100 to-gold-100 border-2 border-dashed border-pink-200">
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-pink-400">
                    <Camera size={40} className="mb-2 opacity-50" />
                    <p className="text-sm font-medium">{item.alt}</p>
                    {item.caption && <p className="text-xs text-pink-300 mt-1">{item.caption}</p>}
                  </div>

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-end p-4">
                    <span className="text-white font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                      {item.caption}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Lightbox */}
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
                className="bg-white rounded-3xl p-8 max-w-lg w-full"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex justify-between items-center mb-4">
                  <h3 className="font-display text-xl font-semibold">{filtered[selectedPhoto]?.caption}</h3>
                  <button
                    onClick={() => setSelectedPhoto(null)}
                    className="p-2 rounded-full hover:bg-gray-100"
                  >
                    <X size={20} />
                  </button>
                </div>
                <div className="aspect-square bg-gradient-to-br from-pink-100 to-gold-100 rounded-2xl flex items-center justify-center border-2 border-dashed border-pink-200">
                  <div className="text-center text-pink-400">
                    <Camera size={64} className="mx-auto mb-3" />
                    <p className="font-medium">Photo placeholder</p>
                    <p className="text-sm text-pink-300">Replace with actual photo</p>
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
