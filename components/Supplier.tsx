import React from 'react'

import { Button } from './ui/button'
import Input from './forms/Input'

const Supplier = () => {
  return (
    <>
      <form action=''>
        <div className='flex-column mb-8 flex gap-4 md:flex-row'>
          <div className='flex-1'>
            <Input
              type='email'
              placeholder='Eg. Globax Corporation'
              label='Supplier name'
              required={true}
              name='supplier'
            />
          </div>
          <div className='flex-1'>
            <Input type='date' label='Date' required={true} name='date' />
          </div>
        </div>
        <div className='w-1/2'>
          <Input
            type='text'
            placeholder='Enter reference'
            label='Reference'
            required={true}
            name='reference'
          />
        </div>
      </form>
    </>
  )
}

export default Supplier
