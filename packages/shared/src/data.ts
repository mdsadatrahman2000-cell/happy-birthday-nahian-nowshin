import { Twin, TimelineEvent, GalleryItem } from './types'

export const BIRTHDAY_DATE = new Date('2006-07-23')
export const BIRTHDAY_MONTH = 6 // July (0-indexed)
export const BIRTHDAY_DAY = 23

export const twins: Twin[] = [
  {
    name: 'Nahian',
    nameBn: 'নাহিয়ান',
    slug: 'nahian',
    birthday: BIRTHDAY_DATE,
    age: 20,
    message: "To my amazing twin sister — every birthday is a celebration of US. Two hearts, one soul. Happy 20th Birthday, Nahian!",
    messageBn: "আমার অসাধারণ যমজ বোনকে — প্রতিটি জন্মদিন আমাদের উদযাপন। দুইটি হৃদয়, একটি আত্মা। শুভ জন্মদিন, নাহিয়ান!",
    traits: ['Creative', 'Adventurous', 'Kind-hearted', 'Dreamer', 'Loyal'],
    traitsBn: ['সৃজনশীল', 'সাহসী', 'দয়ালু', 'স্বপ্নদ্রষ্টা', 'অনুগত'],
    color: '#ff6b9d',
    emoji: '🌸',
    photos: [
      { src: '/photos/nahian-1.jpg', alt: 'Nahian smiling' },
      { src: '/photos/nahian-2.jpg', alt: 'Nahian with sister' },
      { src: '/photos/nahian-3.jpg', alt: 'Nahian candid' },
    ],
  },
  {
    name: 'Nowshin',
    nameBn: 'নাউশিন',
    slug: 'nowshin',
    birthday: BIRTHDAY_DATE,
    age: 20,
    message: "To my other half — you make every day brighter just by being you. Happy 20th Birthday, Nowshin!",
    messageBn: "আমার অর্ধেককে — তুমি প্রতিদিন আরও উজ্জ্বল করো। শুভ জন্মদিন, নাউশিন!",
    traits: ['Intelligent', 'Compassionate', 'Witty', 'Brave', 'Thoughtful'],
    traitsBn: ['বুদ্ধিমতী', 'সহানুভূতিশীল', 'পরিহাসক্ষম', 'সাহসী', 'চিন্তাশীল'],
    color: '#d4af37',
    emoji: '✨',
    photos: [
      { src: '/photos/nowshin-1.jpg', alt: 'Nowshin smiling' },
      { src: '/photos/nowshin-2.jpg', alt: 'Nowshin with sister' },
      { src: '/photos/nowshin-3.jpg', alt: 'Nowshin candid' },
    ],
  },
]

export const timelineEvents: TimelineEvent[] = [
  {
    year: 2006,
    title: 'The Day We Met the World',
    titleBn: 'যেদিন আমরা পৃথিবীর সাথে দেখা করলাম',
    description: 'Two beautiful souls arrived on the same day, bringing double the joy.',
    descriptionBn: 'দুটি সুন্দর আত্মা একই দিনে এসেছে, দ্বিগুণ আনন্দ নিয়ে।',
    emoji: '👶',
  },
  {
    year: 2008,
    title: 'First Steps Together',
    titleBn: 'একসাথে প্রথম পদক্ষেপ',
    description: 'Learning to walk, always side by side.',
    descriptionBn: 'হাঁটা শেখা, সবসময় পাশাপাশি।',
    emoji: '👣',
  },
  {
    year: 2012,
    title: 'School Days Begin',
    titleBn: 'স্কুল জীবন শুরু',
    description: 'Starting school adventures together, sharing everything.',
    descriptionBn: 'একসাথে স্কুলের অ্যাডভেঞ্চার শুরু, সবকিছু ভাগ করে নেওয়া।',
    emoji: '🎒',
  },
  {
    year: 2016,
    title: 'Growing Up',
    titleBn: 'বড় হওয়া',
    description: 'Becoming teenagers, navigating life as a team.',
    descriptionBn: 'কিশোরী হয়ে ওঠা, দল হিসেবে জীবনে পথ চলা।',
    emoji: '🌟',
  },
  {
    year: 2020,
    title: 'Through the Storm',
    titleBn: 'ঝড়ের মধ্য দিয়ে',
    description: 'Pandemic couldn\'t separate us — closer than ever.',
    descriptionBn: 'মহামারী আমাদের আলাদা করতে পারেনি — আগের চেয়ে কাছাকাছি।',
    emoji: '🌈',
  },
  {
    year: 2024,
    title: 'Adventures & Dreams',
    titleBn: 'অ্যাডভেঞ্চার ও স্বপ্ন',
    description: 'Chasing dreams while keeping our bond strong.',
    descriptionBn: 'স্বপ্ন অনুসরণ করা এবং আমাদের বন্ধন শক্তিশালী রাখা।',
    emoji: '🚀',
  },
  {
    year: 2026,
    title: 'Happy 20th Birthday!',
    titleBn: 'শুভ ২০তম জন্মদিন!',
    description: 'Two decades of sisterhood, friendship, and endless love.',
    descriptionBn: 'বোনত্ব, বন্ধুত্ব ও অসীম ভালোবাসার দুই দশক।',
    emoji: '🎂',
  },
]

export const galleryItems: GalleryItem[] = [
  { src: '/photos/together-1.jpg', alt: 'Twin sisters together', caption: 'Our first photo together', twin: 'both' },
  { src: '/photos/nahian-1.jpg', alt: 'Nahian portrait', caption: 'Nahian being Nahian', twin: 'nahian' },
  { src: '/photos/nowshin-1.jpg', alt: 'Nowshin portrait', caption: 'Nowshin being Nowshin', twin: 'nowshin' },
  { src: '/photos/together-2.jpg', alt: 'Twin sisters laughing', caption: 'Laughing together', twin: 'both' },
  { src: '/photos/nahian-2.jpg', alt: 'Nahian candid', caption: 'Candid Nahian', twin: 'nahian' },
  { src: '/photos/nowshin-2.jpg', alt: 'Nowshin candid', caption: 'Candid Nowshin', twin: 'nowshin' },
  { src: '/photos/together-3.jpg', alt: 'Twin sisters at celebration', caption: 'Celebrating life', twin: 'both' },
  { src: '/photos/nahian-3.jpg', alt: 'Nahian smiling', caption: 'That smile', twin: 'nahian' },
  { src: '/photos/nowshin-3.jpg', alt: 'Nowshin smiling', caption: 'Pure joy', twin: 'nowshin' },
]
