import { useEffect, useState } from 'react'

interface Sparkle {
  id: number
  x: number
  y: number
  size: number
  color: string
  duration: number
}

const COLORS = ['#ff6b9d', '#d4af37', '#ffa3cc', '#eac56b', '#fff']

export default function Sparkles() {
  const [sparkles, setSparkles] = useState<Sparkle[]>([])

  useEffect(() => {
    const createSparkle = (): Sparkle => ({
      id: Math.random(),
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 2,
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
      duration: Math.random() * 3 + 2,
    })

    setSparkles(Array.from({ length: 20 }, createSparkle))

    const interval = setInterval(() => {
      setSparkles((prev) => {
        const newSparkles = [...prev]
        const idx = Math.floor(Math.random() * newSparkles.length)
        newSparkles[idx] = createSparkle()
        return newSparkles
      })
    }, 500)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {sparkles.map((sparkle) => (
        <div
          key={sparkle.id}
          className="absolute animate-sparkle"
          style={{
            left: `${sparkle.x}%`,
            top: `${sparkle.y}%`,
            width: `${sparkle.size}px`,
            height: `${sparkle.size}px`,
            backgroundColor: sparkle.color,
            borderRadius: '50%',
            animationDuration: `${sparkle.duration}s`,
            filter: 'blur(0.5px)',
          }}
        />
      ))}
    </div>
  )
}
