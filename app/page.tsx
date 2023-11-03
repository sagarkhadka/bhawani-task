'use client'

import { Suspense, useEffect, useMemo } from 'react'
import { ChevronRight } from 'lucide-react'
import { useDispatch, useSelector } from 'react-redux'

import Supplier from '@/components/Supplier'
import DataTable from '@/components/table/DataTable'
import { columns } from '@/components/table/TableColumn'
import CalculateTotal from '@/components/calculate/CalculateTotal'
import { Button } from '@/components/ui/button'
import { addDebit } from '@/redux/features/debit-slice'
import { AppDispatch, RootState } from '@/redux/store'

export default function Home() {
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
        amount: 4140
      },
      {
        product: 'New durbar Black chimney 750ml',
        batch: '4324A',
        warehouse: 'KTM',
        quantity: 5,
        rate: 2300,
        discount: 230,
        tax: 13,
        amount: 4140
      }
    ],
    []
  )

  useEffect(() => {
    if (data) {
      dispacth(addDebit(data))
    }
  }, [data, dispacth])

  return (
    <main className='p-10'>
      <div className='border-b border-b-zinc-200 pb-5'>
        <h4 className='text-2xl font-bold'>New debit note</h4>
      </div>
      <div className='pt-5'>
        <Supplier />
      </div>

      <Suspense fallback={'Loading...'}>
        <div className='mt-5'>
          <DataTable columns={columns} data={debitData.value} />
        </div>
      </Suspense>

      <div className='mt-7'>
        <div className='flex-column flex gap-24 md:flex-row'>
          <div className='flex-1 space-y-4'>
            <div className='space-y-7'>
              <h4 className='text-lg font-semibold'>Note</h4>
              <textarea
                name=''
                id=''
                className='max-h-[20rem] min-h-[7rem] min-w-full rounded-lg border border-zinc-400 bg-accent px-4 py-3 outline-none focus:outline-1 focus:outline-zinc-500/80'
                placeholder='Enter notes'
              />
            </div>
            <span className='text-sm text-zinc-400'>
              * This will appear on print
            </span>
          </div>

          <div className='flex-1'>
            <CalculateTotal billData={debitData.value} />
          </div>
        </div>
      </div>

      <div className='mt-7 border-y-2 border-accent px-3 py-4 duration-200 hover:bg-zinc-100'>
        <div className='flex w-full items-center justify-between'>
          <p>Custom fields</p>
          <ChevronRight />
        </div>
      </div>

      <div className='mt-7'>
        <h4 className='mb-4 text-lg font-semibold'>Terms & Conditions</h4>
        <textarea
          name=''
          id=''
          className='max-h-[20rem] min-h-[7rem] min-w-full rounded-lg border border-zinc-400 bg-accent px-4 py-3 outline-none focus:outline-1 focus:outline-zinc-500/80'
          placeholder='Enter notes'
        />
        <div className='mt-5 flex justify-end'>
          <Button>Save</Button>
        </div>
      </div>
    </main>
  )
}
