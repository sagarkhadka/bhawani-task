'use client'

import React, { useState } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { useDispatch } from 'react-redux'
import toast from 'react-hot-toast'

import Input from './forms/Input'
import { Button } from './ui/button'
import { addProductValidation } from '@/utils/formValidation'
import { AppDispatch } from '@/redux/store'
import { addDebit } from '@/redux/features/debit-slice'

type Inputs = {
  product: string
  batch: string
  warehouse: string
  quantity: number
  rate: number
  discount: number
  amount: number
  tax: number
}

type TOnSuccess = {
  onSuccess: (value: boolean) => void
}

const AddProductForm = ({ onSuccess }: TOnSuccess) => {
  const [grandTotal, setGrandTotal] = useState(0)
  const [isSuccess, setIsSuccess] = useState(false)

  const dispatch = useDispatch<AppDispatch>()

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm<Inputs>({
    resolver: yupResolver<Inputs | any>(addProductValidation)
  })

  const calculateTotal = () => {
    const quantity = watch('quantity') || 0
    const rate = watch('rate') || 0
    const discount = watch('discount')
    const tax = 13

    const calculatedAmount = quantity * rate - discount
    const calculatedGrandTotal =
      calculatedAmount + calculatedAmount * (tax / 100)

    setGrandTotal(calculatedGrandTotal)
  }

  const onSubmit = (data: Inputs) => {
    data.tax = 13
    data.amount = grandTotal

    const addProduct = async () => {
      try {
        const add = dispatch(addDebit([data]))
        console.log(add)
        if (add) {
          setIsSuccess(true)
          onSuccess(false)
          toast.success('Product added sucessfully.')
        }
      } catch (error) {
        console.log(error)
        setIsSuccess(false)
      }
    }
    addProduct()
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='space-y-5 pb-4'>
          <div className=''>
            <Input
              label='Item/Product name'
              type='text'
              placeholder='Product name'
              required={true}
              errorMessage={errors.product?.message}
              {...register('product')}
            />
          </div>

          <div className='flex gap-4'>
            <div className='flex-1'>
              <Input
                label='Batch'
                placeholder='Product batch number'
                required={true}
                errorMessage={errors.batch?.message}
                {...register('batch')}
              />
            </div>
            <div className='flex-1'>
              <Input
                label='Warehouse'
                placeholder='Product warehouse'
                required={true}
                errorMessage={errors.warehouse?.message}
                {...register('warehouse')}
              />
            </div>
            <div className='flex-1'>
              <Input
                type='number'
                label='Quantity'
                placeholder='Product quantity'
                required={true}
                errorMessage={errors.quantity?.message}
                {...register('quantity', { onChange: calculateTotal })}
              />
            </div>
          </div>

          <div className='flex gap-4'>
            <div className='flex-1'>
              <Input
                type='number'
                label='Rate'
                placeholder='Product rate'
                required={true}
                errorMessage={errors.rate?.message}
                {...register('rate', { onChange: calculateTotal })}
              />
            </div>
            <div className='flex-1'>
              <Input
                type='number'
                label='Discount'
                placeholder='Product discount'
                required={true}
                errorMessage={errors.discount?.message}
                {...register('discount', { onChange: calculateTotal })}
              />
            </div>
            <div className='flex-1'>
              <Input
                type='number'
                disabled
                label='Total amount'
                placeholder='Total amount'
                required={true}
                value={grandTotal}
                {...register('amount')}
              />
            </div>
          </div>
        </div>

        <Button type='submit'>Save</Button>
      </form>
    </>
  )
}

export default AddProductForm
