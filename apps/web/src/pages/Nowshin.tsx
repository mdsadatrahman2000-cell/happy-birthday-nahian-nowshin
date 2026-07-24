import { motion } from 'framer-motion'
import { Heart, Star, Camera } from 'lucide-react'
import { twins } from '@nahian-birthday/shared'

const nowshin = twins.find((t) => t.slug === 'nowshin')!

export default function Nowshin() {
  return (
    <div className="min-h-[calc(100vh-4rem)] py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <motion.div
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-8xl mb-6"
          >
            {nowshin.emoji}
          </motion.div>

          <h1 className="font-display text-5xl md:text-6xl font-bold text-gold-600 mb-2">
            Happy Birthday, Nowshin!
          </h1>
          <p className="font-display text-2xl text-gold-500 mb-6">শুভ জন্মদিন, নাউশিন!</p>

          <div className="inline-flex items-center gap-2 bg-gold-100 rounded-full px-6 py-2">
            <Heart className="text-gold-500 fill-gold-500" size={20} />
            <span className="text-gold-700 font-medium">Turning {nowshin.age} today!</span>
          </div>
        </motion.div>

        {/* Birthday Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gold-100 mb-12"
        >
          <div className="text-center mb-8">
            <Star className="text-gold-500 fill-gold-500 mx-auto mb-4" size={32} />
            <h2 className="font-display text-2xl font-semibold text-gray-800 mb-4">A Message For You</h2>
          </div>

          <blockquote className="text-lg md:text-xl text-gray-700 text-center italic leading-relaxed mb-6">
            "{nowshin.message}"
          </blockquote>

          <blockquote className="text-lg md:text-xl text-gray-600 text-center italic leading-relaxed">
            "{nowshin.messageBn}"
          </blockquote>
        </motion.div>

        {/* Traits */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mb-12"
        >
          <h2 className="font-display text-2xl font-semibold text-center text-gray-800 mb-6">
            What Makes Nowshin Special
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {nowshin.traits.map((trait, i) => (
              <motion.div
                key={trait}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 + i * 0.1 }}
                className="bg-gradient-to-r from-gold-400 to-gold-500 text-white px-6 py-3 rounded-full font-medium shadow-lg"
              >
                {nowshin.emoji} {trait}
              </motion.div>
            ))}
          </div>
          <div className="flex flex-wrap justify-center gap-3 mt-3">
            {nowshin.traitsBn.map((trait, i) => (
              <motion.div
                key={trait}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 + i * 0.1 }}
                className="bg-gradient-to-r from-gold-300 to-gold-400 text-white px-6 py-3 rounded-full font-medium shadow-lg"
              >
                {trait}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Photo Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="text-center"
        >
          <h2 className="font-display text-2xl font-semibold text-gray-800 mb-6 flex items-center justify-center gap-2">
            <Camera className="text-gold-500" />
            Nowshin's Moments
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {nowshin.photos.map((photo, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + i * 0.1 }}
                className="bg-gradient-to-br from-gold-100 to-gold-200 rounded-2xl aspect-square flex items-center justify-center border-2 border-dashed border-gold-300"
              >
                <div className="text-center text-gold-400">
                  <Camera size={48} className="mx-auto mb-2" />
                  <p className="text-sm">{photo.alt}</p>
                  <p className="text-xs text-gold-300 mt-1">Add photo here</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}
