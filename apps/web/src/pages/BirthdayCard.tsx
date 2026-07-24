import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import confetti from 'canvas-confetti'
import { Heart, Sparkles } from 'lucide-react'

export default function BirthdayCard() {
  const [isOpened, setIsOpened] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)

  const fireConfetti = () => {
    const duration = 3000
    const end = Date.now() + duration

    const colors = ['#ff6b9d', '#d4af37', '#ffa3cc', '#eac56b', '#ff3d7f', '#ed1165']

    const frame = () => {
      confetti({
        particleCount: 3,
        angle: 60,
        spread: 55,
        origin: { x: 0, y: 0.7 },
        colors,
      })
      confetti({
        particleCount: 3,
        angle: 120,
        spread: 55,
        origin: { x: 1, y: 0.7 },
        colors,
      })

      if (Date.now() < end) {
        requestAnimationFrame(frame)
      }
    }
    frame()
  }

  useEffect(() => {
    if (isOpened) {
      fireConfetti()
    }
  }, [isOpened])

  return (
    <div className="min-h-[calc(100vh-4rem)] py-12 px-4 flex items-center justify-center">
      <div className="max-w-2xl w-full">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="font-display text-4xl md:text-5xl font-bold text-gray-800 mb-2">
            <span className="bg-gradient-to-r from-pink-500 to-gold-500 bg-clip-text text-transparent">
              Birthday Card
            </span>
          </h1>
          <p className="font-display text-xl text-gray-600">শুভ জন্মদিন কার্ড</p>
        </motion.div>

        {/* Card */}
        <motion.div
          ref={cardRef}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, type: 'spring' }}
          className="relative"
        >
          {!isOpened ? (
            /* Closed Card */
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setIsOpened(true)}
              className="bg-gradient-to-br from-pink-400 via-pink-500 to-gold-500 rounded-3xl p-12 shadow-2xl cursor-pointer text-center relative overflow-hidden"
            >
              {/* Decorative circles */}
              <div className="absolute top-4 left-4 w-8 h-8 rounded-full bg-white/20" />
              <div className="absolute top-8 right-8 w-6 h-6 rounded-full bg-white/15" />
              <div className="absolute bottom-6 left-12 w-10 h-10 rounded-full bg-white/10" />

              <motion.div
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-8xl mb-6"
              >
                🎁
              </motion.div>

              <h2 className="font-display text-3xl font-bold text-white mb-4">
                Open Your Birthday Card!
              </h2>
              <p className="text-white/80 text-lg mb-6">আপনার জন্মদিন কার্ড খুলুন!</p>

              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 text-white font-medium">
                <Sparkles size={18} />
                Click to open
              </div>
            </motion.div>
          ) : (
            /* Opened Card */
            <motion.div
              initial={{ rotateY: 90, opacity: 0 }}
              animate={{ rotateY: 0, opacity: 1 }}
              transition={{ duration: 0.8, type: 'spring' }}
              className="bg-white rounded-3xl shadow-2xl overflow-hidden"
            >
              {/* Card Header */}
              <div className="bg-gradient-to-r from-pink-400 via-pink-500 to-gold-500 p-8 text-center relative overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                  {Array.from({ length: 20 }).map((_, i) => (
                    <div
                      key={i}
                      className="absolute animate-float"
                      style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                        animationDelay: `${Math.random() * 3}s`,
                        animationDuration: `${2 + Math.random() * 2}s`,
                      }}
                    >
                      ✨
                    </div>
                  ))}
                </div>

                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.5, type: 'spring' }}
                  className="text-6xl mb-4 relative z-10"
                >
                  🎂
                </motion.div>
                <h2 className="font-display text-3xl font-bold text-white relative z-10">
                  Happy 20th Birthday!
                </h2>
                <p className="font-display text-xl text-white/90 relative z-10">
                  শুভ ২০তম জন্মদিন!
                </p>
              </div>

              {/* Card Body */}
              <div className="p-8 md:p-12">
                <div className="text-center mb-8">
                  <Heart className="text-pink-500 fill-pink-500 mx-auto mb-4" size={40} />
                  <p className="text-xl text-gray-700 leading-relaxed mb-4">
                    To our beloved Nahian & Nowshin,
                  </p>
                  <p className="text-lg text-gray-600 leading-relaxed mb-6">
                    Twenty years of laughter, love, and memories. You two are the most special gift
                    the world has ever received. May your journey ahead be filled with endless joy,
                    success, and togetherness.
                  </p>
                  <p className="text-lg text-gray-500 leading-relaxed italic">
                    প্রিয় নাহিয়ান ও নাউশিন,
                    <br />
                    বিশ বছরের হাসি, ভালোবাসা ও স্মৃতি। তোমরা দুজনই পৃথিবীর সবচেয়ে বিশেষ উপহার।
                    আগামী যাত্রা অসীম আনন্দ, সফলতা ও একত্বে পরিপূর্ণ হোক।
                  </p>
                </div>

                <div className="flex justify-center">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={fireConfetti}
                    className="bg-gradient-to-r from-pink-500 to-gold-500 text-white px-8 py-3 rounded-full font-medium flex items-center gap-2 shadow-lg"
                  >
                    <Sparkles size={18} />
                    Celebrate Again!
                  </motion.button>
                </div>
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </div>
  )
}
