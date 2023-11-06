import React, { useEffect } from 'react'
import { X } from 'lucide-react'

type TPopupProps = {
  isOpen: boolean
  onClose: React.ComponentProps<'button'>['onClick']
  children: React.ReactNode
  title: string
}

const PopupModal = ({ isOpen, onClose, children, title }: TPopupProps) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  return (
    <>
      {isOpen && (
        <div className='popup fixed inset-0 z-[999] flex items-center justify-center overflow-y-auto overflow-x-hidden bg-zinc-700/20 outline-none backdrop-blur-sm focus:outline-none'>
          <div className='relative z-30 mx-auto my-6 w-auto max-w-3xl px-5'>
            <div className='relative flex max-h-[35rem] w-full min-w-[30rem] flex-col overflow-auto rounded-md bg-white shadow-lg outline-none focus:outline-none'>
              <div className='flex  items-start justify-between rounded-t-md border-b border-solid border-gray-300 px-5 py-3'>
                <h3 className='m-0 text-xl font-semibold'>{title}</h3>
                <button
                  className='float-right ml-auto border-0 bg-transparent p-1 text-3xl font-semibold leading-none text-black outline-none focus:outline-none'
                  onClick={onClose}
                >
                  <span className='block h-6 w-6 bg-transparent text-2xl text-zinc-700 outline-none duration-200 hover:text-zinc-500 focus:outline-none'>
                    <X size={20} />
                  </span>
                </button>
              </div>
              <div className='popup-body relative z-50 flex-auto overflow-x-hidden px-6 py-4'>
                {children}
              </div>
            </div>
          </div>
          {/* <div className='absolute inset-0 bg-black opacity-25 backdrop:blur-md'></div> */}
        </div>
      )}
    </>
  )
}

export default PopupModal
