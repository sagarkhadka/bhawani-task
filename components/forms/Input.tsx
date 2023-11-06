import { cn } from '@/lib/utils'
import React, { forwardRef, InputHTMLAttributes, Ref } from 'react'

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  type?: string
  placeholder?: string
  className?: string
  label: string
  required?: boolean
  isError?: boolean
  errorMessage?: string
}

const Input = forwardRef(
  (
    {
      type = 'text',
      placeholder,
      className,
      label,
      required,
      isError,
      errorMessage,
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
            className={cn(
              'w-full rounded-lg border border-zinc-400 bg-accent px-4 py-3 focus:outline-1 focus:outline-zinc-500/80',
              className,
              {
                'border-red-500 text-red-500 placeholder-red-500 focus:outline-red-500/80':
                  errorMessage !== undefined
              }
            )}
            {...rest}
          />
          {errorMessage ? (
            <p className='pl-4 text-sm text-red-500'>{errorMessage}</p>
          ) : null}
        </div>
      </>
    )
  }
)

Input.displayName = 'Input'

export default Input
