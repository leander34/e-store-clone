import { FC } from 'react'
import { Image as ImageType } from '@/@types'
import { Tab } from '@headlessui/react'
import Image from 'next/image'
import { cn } from '@/lib/utlis'
interface GalleryTabProps {
  image: ImageType
}

export const GalleryTab: FC<GalleryTabProps> = ({ image }) => {
  return (
    <Tab className="relative flex items-center justify-center aspect-square cursor-pointer rounded-md bg-white">
      {({ selected }) => (
        <div className="">
          <span className="absolute h-full w-full aspect-square inset-0 overflow-hidden rounded-md">
            <Image
              src={image.url}
              alt="Image"
              fill
              className="object-cover object-center"
            />
          </span>
          <span
            className={cn(
              'absolute inset-0 rounded-md ring-2 ring-offset-2',
              {
                'ring-black': selected,
              },
              {
                'ring-transparent': !selected,
              },
            )}
          ></span>
        </div>
      )}
    </Tab>
  )
}
