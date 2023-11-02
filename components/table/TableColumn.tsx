'use client'

import { ColumnDef } from '@tanstack/react-table'
import { X } from 'lucide-react'

export type DebitType = {
  product: string
  batch: string
  warehouse: string
  quantity: number
  rate: number
  discount: number
  tax: number
  amount: number
}

export const defaultTableData: DebitType[] = [
  {
    product: 'Old durbar Black chimney 750ml',
    batch: '4324A',
    warehouse: 'KTM',
    quantity: 2,
    rate: 2300,
    discount: 230,
    tax: 13,
    amount: 4140
  }
]

export const columns: ColumnDef<DebitType>[] = [
  {
    accessorKey: 'product',
    header: 'Items/Products'
  },

  {
    accessorKey: 'batch',
    header: 'Batch'
  },

  {
    accessorKey: 'warehouse',
    header: 'Wharehouse'
  },

  {
    accessorKey: 'quantity',
    header: 'Qty',
    cell: ({ row }) => {
      return (
        <div className='flex items-center gap-3'>
          {row.getValue('quantity')}
          <select
            name='qty'
            id=''
            className='bg-transparent text-zinc-500 outline-none'
          >
            <option value='Btl'>Btl</option>
            <option value='Pkt'>Pkt</option>
          </select>
        </div>
      )
    }
  },

  {
    accessorKey: 'rate',
    header: 'Rate',
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue('rate'))
      const formatted = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'Nrs'
      }).format(amount)

      return <div className=''>{formatted}</div>
    }
  },

  {
    accessorKey: 'discount',
    header: 'Discount'
  },

  {
    accessorKey: 'tax',
    header: 'Tax'
  },

  {
    accessorKey: 'amount',
    header: 'Amount',
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue('amount'))
      const formatted = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'Nrs'
      }).format(amount)

      return <div className=''>{formatted}</div>
    }
  },

  {
    id: 'actions',
    cell: ({ row }) => {
      return (
        <button className='bg-transparent'>
          <X color='#ef4444' />
        </button>
      )
    }
  }
]
