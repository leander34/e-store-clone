'use client'
import { Product } from '@/@types'
import Image from 'next/image'
import { FC, MouseEventHandler, useEffect, useState } from 'react'
import { IconButton } from './IconButton'
import { Expand, ShoppingCart } from 'lucide-react'
import { Currency } from './Currency'
import { useRouter } from 'next/navigation'
import { usePreviewModal } from '@/hooks/use-preview-modal'
import { useCard } from '@/hooks/use-card'

interface ProductCardProps {
  data: Product
}

export const ProductCard: FC<ProductCardProps> = ({ data }) => {
  const { onOpen } = usePreviewModal()
  const { addItem } = useCard()
  const route = useRouter()
  const handleClick = () => {
    route.push(`/product/${data.id}`)
  }
  const handlePreview: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.stopPropagation()
    onOpen(data)
  }

  const handleAddToCard: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.stopPropagation()
    addItem(data)
  }
  return (
    <div
      onClick={handleClick}
      className="bg-white group cursor-pointer rounded-xl border p-3 space-y-4"
    >
      <div className="aspect-square rounded-xl bg-gray-100 relative">
        <Image
          src={data.images?.[0]?.url}
          alt=""
          fill
          className="aspect-square object-cover rounded-md"
        />
        <div className="opacity-0 group-hover:opacity-100 transition absolute w-full px-6 bottom-5">
          <div className="flex gap-x-6 justify-center">
            <IconButton
              icon={<Expand className="h-5 w-5 text-gray-600" />}
              onClick={handlePreview}
              className=""
            />
            <IconButton
              icon={<ShoppingCart className="h-5 w-5 text-gray-600" />}
              onClick={handleAddToCard}
              className=""
            />
          </div>
        </div>
      </div>
      {/*  */}
      <div>
        <p className="font-semibold text-lg">{data.name}</p>
        <p className="text-sm text-gray-500">{data.category?.name}</p>
      </div>
      {/*  */}

      <div className="flex items-center justify-between">
        <Currency value={data.price} />
      </div>
    </div>
  )
}
