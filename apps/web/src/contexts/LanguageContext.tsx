import { createContext, useContext, useEffect, useState, ReactNode } from 'react'

type Language = 'en' | 'bn'

interface LanguageContextType {
  lang: Language
  toggleLanguage: () => void
  t: (en: string, bn: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Language>(() => {
    if (typeof window !== 'undefined') {
      return (localStorage.getItem('language') as Language) || 'en'
    }
    return 'en'
  })

  useEffect(() => {
    localStorage.setItem('language', lang)
  }, [lang])

  const toggleLanguage = () => setLang((prev) => (prev === 'en' ? 'bn' : 'en'))

  const t = (en: string, bn: string) => (lang === 'en' ? en : bn)

  return (
    <LanguageContext.Provider value={{ lang, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) throw new Error('useLanguage must be used within LanguageProvider')
  return context
}
