'use client'

import { ShoppingBag } from 'lucide-react'
import { Button } from './ui/Button'
import { useEffect, useState } from 'react'
import { useCard } from '@/hooks/use-card'
import { useRouter } from 'next/navigation'

export const NavBarActions = () => {
  const { items } = useCard()
  const router = useRouter()
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return
  }

  return (
    <div className="ml-auto flex items-center gap-x-4">
      <Button
        onClick={() => router.push('/cart')}
        className="flex items-center rounded-full bg-black px-4 py-2"
      >
        <ShoppingBag className="h-5 w-5 text-white" />
        <span className="ml-2 text-sm font-medium text-white">
          {items.length}
        </span>
      </Button>
    </div>
  )
}
