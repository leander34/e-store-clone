'use client'
import { Color, Size } from '@/@types'
import { Button } from '@/components/ui/Button'
import { IconButton } from '@/components/ui/IconButton'
import { Dialog } from '@headlessui/react'
import { Plus, X } from 'lucide-react'
import { FC, useState } from 'react'
import { Filter } from './Filter'

interface MobileFiltersProps {
  sizes: Size[]
  colors: Color[]
}

export const MobileFilters: FC<MobileFiltersProps> = ({ colors, sizes }) => {
  const [open, setOpen] = useState(false)
  const onOpen = () => {
    setOpen(true)
  }

  const onClose = () => {
    setOpen(false)
  }
  return (
    <Button
      onClick={onOpen}
      className="flex items-center gap-x-2 lg:hidden text-white"
    >
      Filters
      <Plus className="h-5 w-5" />
      <Dialog
        open={open}
        onClose={onClose}
        as="div"
        className="relative z-40 lg:hidden"
      >
        <div className="fixed inset-0 bg-black/25" />

        <div className="fixed inset-0 z-40 flex">
          <Dialog.Panel className="relative ml-auto flex-h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-6 shadow-xl">
            <div className="flex items-center justify-end px-4">
              <IconButton icon={<X className="h-4 w-4" />} onClick={onClose} />
            </div>

            <div className="p-4">
              <Filter valueKey="sizeId" name="Sizes" data={sizes} />
              <Filter valueKey="colorId" name="Colors" data={colors} />
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </Button>
  )
}
