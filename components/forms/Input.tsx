import { cn } from '@/lib/utils'
import React, { forwardRef, InputHTMLAttributes, Ref } from 'react'

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  type?: string
  placeholder?: string
  className?: string
  label: string
  required?: boolean
}

const Input = forwardRef(
  (
    {
      type = 'text',
      placeholder,
      className,
      label,
      required,
      ...rest
    }: InputProps,
    ref: Ref<HTMLInputElement>
  ) => {
    return (
      <>
        <div className='space-y-2'>
          <label
            className={cn('relative', {
              'after:ml-0.5 after:text-red-500 after:content-["*"]': required
            })}
          >
            {label}
          </label>
          <input
            type={type}
            placeholder={placeholder}
            ref={ref}
            {...rest}
            className={cn(
              'bg-accent w-full rounded-lg border border-zinc-400 px-4 py-3 focus:outline-1 focus:outline-zinc-500/80',
              className
            )}
          />
        </div>
      </>
    )
  }
)

Input.displayName = 'Input'

export default Input
