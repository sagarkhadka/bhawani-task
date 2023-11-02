import React from 'react'

import { Button } from './ui/button'
import Input from './forms/Input'

const Supplier = () => {
  return (
    <>
      <form action=''>
        <div className='grid grid-cols-2 gap-8'>
          <div className='w-full'>
            <Input
              type='email'
              placeholder='Eg. Globax Corporation'
              label='Supplier name'
              required={true}
              name='supplier'
            />
          </div>
          <div className='w-full'>
            <Input type='date' label='Date' required={true} name='date' />
          </div>
          <div className='w-full'>
            <Input
              type='text'
              placeholder='Enter reference'
              label='Reference'
              required={true}
              name='reference'
            />
          </div>
        </div>
      </form>
    </>
  )
}

export default Supplier
