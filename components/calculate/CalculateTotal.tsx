'use client'

import React from 'react'
import { TDebitType } from '../table/TableColumn'

type TCalculateProps = {
  billData: TDebitType[]
}

const CalculateTotal = ({ billData }: TCalculateProps) => {
  return (
    <>
      <div className='p-2'>
        <div className='flex items-center py-2'>
          <p className='flex-1 text-left'>Total</p>
          <p className='flex-1 text-right'>0</p>
        </div>

        <div className='flex items-center py-2'>
          <p className='flex-1 text-left'>Total Excise Duty</p>
          <p className='flex-1 text-right'>0</p>
        </div>

        <div className='flex items-center py-2'>
          <p className='flex-1 text-left'>Discount</p>
          <p className='flex-1 text-right'>0</p>
        </div>

        <div className='flex items-center py-2'>
          <p className='flex-1 text-left'>Non-taxable Total</p>
          <p className='flex-1 text-right'>0</p>
        </div>

        <div className='flex items-center py-2'>
          <p className='flex-1 text-left'>Taxable Total</p>
          <p className='flex-1 text-right'>0</p>
        </div>

        <div className='flex items-center py-2'>
          <p className='flex-1 text-left'>VAT</p>
          <p className='flex-1 text-right'>0</p>
        </div>

        <hr className='my-2 border-t-2 border-zinc-700' />

        <div className='flex items-center py-2'>
          <p className='flex-1 text-left font-bold '>Grand Total</p>
          <p className='flex-1 text-right font-bold '>0</p>
        </div>
      </div>
    </>
  )
}

export default CalculateTotal
