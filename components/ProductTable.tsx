'use client'

import React, { useState, useMemo, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import DataTable from './table/DataTable'
import { AppDispatch, RootState } from '@/redux/store'
import { addDebit } from '@/redux/features/debit-slice'
import { columns } from '@/components/table/TableColumn'
import { Button } from './ui/button'
import PopupModal from './PopupModal'
import AddProductForm from './AddProductForm'

const ProductTable = () => {
  const [isOpen, setIsOpen] = useState(false)

  const dispacth = useDispatch<AppDispatch>()
  const debitData = useSelector((state: RootState) => state.debitReducer)

  const data = useMemo(
    () => [
      {
        product: 'Old durbar Black chimney 750ml',
        batch: '4324A',
        warehouse: 'KTM',
        quantity: 2,
        rate: 2300,
        discount: 230,
        tax: 13,
        amount: 4002
      }
      // {
      //   product: 'New durbar Black chimney 750ml',
      //   batch: '4324A',
      //   warehouse: 'KTM',
      //   quantity: 5,
      //   rate: 2300,
      //   discount: 230,
      //   tax: 13,
      //   amount: 10005
      // }
    ],
    []
  )

  useEffect(() => {
    if (data) {
      console.log('first')
      dispacth(addDebit(data))
    }
  }, [])

  const onClose = () => {
    setIsOpen((prev) => !prev)
  }

  const onAddSuccess = (value: boolean) => {
    setIsOpen(value)
  }

  return (
    <>
      <div className='mt-5'>
        <DataTable columns={columns} data={debitData.value ?? []} />

        {debitData?.value && debitData?.value.length > 0 ? (
          <Button
            onClick={() => {
              setIsOpen((prev) => !prev)
            }}
            variant={'link'}
            className='px-2 text-sm text-zinc-400'
          >
            Add code or product
          </Button>
        ) : null}
      </div>

      <PopupModal isOpen={isOpen} onClose={onClose} title='Add new product'>
        <AddProductForm onSuccess={onAddSuccess} />
      </PopupModal>
    </>
  )
}

export default ProductTable
