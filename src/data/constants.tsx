import { LucideIcon, MessagesSquare, Search } from 'lucide-react'

type connectFact = {
  icon: LucideIcon
  title: string
  description: string
}

export const CONNECT_FACTS: connectFact[] = [
  {
    icon: Search,
    title: 'Discover',
    description:
      'Discover new recipes from a diverse range of cuisines and culinary traditions',
  },
  {
    icon: MessagesSquare,
    title: 'Connect',
    description:
      'Connect with like-minded food lovers and explore a world of mouthwatering recipes.',
  },
]
