import { Product } from '@/@types'
import toast from 'react-hot-toast'
import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'
interface CartStore {
  items: Product[]
  addItem(data: Product): void
  removeItem(id: string): void
  removeAll(): void
}

export const useCard = create(
  persist<CartStore>(
    (set, get) => ({
      items: [],
      addItem: (data) => {
        const currentItems = get().items
        const existingItem = currentItems.find((item) => item.id === data.id)

        if (existingItem) {
          return toast('Item already in cart.')
        }
        set({ items: [...currentItems, data] })
        toast.success('Item added to cart.')
      },
      removeItem(id) {
        set({ items: get().items.filter((item) => item.id !== id) })
        toast.success('Item removed from cart.')
      },

      removeAll: () => {
        set({ items: [] })
      },
    }),
    {
      name: 'cart-storage',
      storage: createJSONStorage(() => localStorage),
    },
  ),
)
