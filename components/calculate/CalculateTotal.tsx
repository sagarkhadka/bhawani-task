'use client'

import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

import { cn } from '@/lib/utils'
import { RootState } from '@/redux/store'

type TFieldProps = {
  title: string
  value: number
  className?: string
}

const BillField = ({ title, value, className }: TFieldProps) => {
  return (
    <div className={cn('flex items-center py-2', className)}>
      <p className='flex-1 text-left'>{title}</p>
      <p className='flex-1 text-right'>{value}</p>
    </div>
  )
}

const CalculateTotal = () => {
  const [total, setTotal] = useState(0)
  const [discount, setDiscount] = useState(0)
  const [grandAmount, setGrandAmount] = useState(0)
  // const [grandAmount, setGrandAmount] = useState(0)

  const data = useSelector((state: RootState) => state.debitReducer)

  useEffect(() => {
    if (Array.isArray(data.value)) {
      const totalDiscount = data.value.reduce(
        (prev, current) => prev + current.discount,
        0
      )
      const totalAmount = data.value.reduce(
        (prev, current) => prev + current.amount,
        0
      )

      setDiscount(totalDiscount)
      setTotal(totalAmount)
    } else {
      setDiscount(0)
      setTotal(0)
    }
  }, [data])

  useEffect(() => {
    if (total) {
      const newTotal = total - discount
      setGrandAmount(newTotal)
    }
  }, [total, discount])

  return (
    <>
      <div className='p-2'>
        <BillField title='Total' value={total} />
        <BillField title='Total Excise Duty' value={0} />
        <BillField title='Discount' value={discount} />
        <BillField title='Non-taxable Total' value={0} />
        <BillField title='Taxable Total' value={0} />
        <BillField title='VAT' value={0} className='' />
        <BillField
          title='Grand Total'
          value={grandAmount}
          className='border-t-2 border-t-black/20 font-bold'
        />
      </div>
    </>
  )
}

export default CalculateTotal
