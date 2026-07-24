export interface Twin {
  name: string
  nameBn: string
  slug: string
  birthday: Date
  age: number
  message: string
  messageBn: string
  traits: string[]
  traitsBn: string[]
  color: string
  emoji: string
  photos: Photo[]
}

export interface Photo {
  src: string
  alt: string
  caption?: string
  crop?: 'top' | 'center' | 'bottom'
}

export interface TimelineEvent {
  year: number
  title: string
  titleBn: string
  description: string
  descriptionBn: string
  emoji: string
}

export interface GalleryItem {
  src: string
  alt: string
  caption?: string
  twin?: 'nahian' | 'nowshin' | 'both'
  crop?: 'top' | 'center' | 'bottom'
}
