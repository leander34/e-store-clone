'use client'
import { cn } from '@/lib/utlis'
import { ComponentProps, FC, ReactElement } from 'react'

type IconButtonProps = ComponentProps<'button'> & {
  icon: ReactElement
}

export const IconButton: FC<IconButtonProps> = ({
  className,
  icon,
  ...props
}) => {
  return (
    <button
      className={cn(
        'rounded-full flex items-center justify-center bg-white border shadow-sm p-2 hover:scale-110 transition',
        className,
      )}
      {...props}
    >
      {icon}
    </button>
  )
}
