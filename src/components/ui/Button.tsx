/* eslint-disable react/display-name */
import { cn } from '@/lib/utlis'
import { ComponentProps, forwardRef } from 'react'

type ButtonProps = ComponentProps<'button'>

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, children, disabled = false, type = 'button', ...props },
    ref,
  ) => {
    return (
      <button
        className={cn(
          'w-auto rounded-full bg-black px-5 py-3 disabled:cursor-not-allowed disabled:opacity-75 hover:opacity-75 transition',
          className,
        )}
        type={type}
        disabled={disabled}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    )
  },
)

Button.displayName = 'Button'
