import { ColumnDef } from '@tanstack/react-table'

import DeleteRow from './DeleteRow'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue
} from '@/components/ui/Select'

export type TDebitType = {
  product: string
  batch: string
  warehouse: string
  quantity: number
  rate: number
  discount: number
  tax: number
  amount: number
}

export const columns: ColumnDef<TDebitType>[] = [
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
          {/* <select
            name='qty'
            id=''
            className='bg-transparent text-zinc-500 outline-none'
          >
            <option value='Btl'>Btl</option>
            <option value='Pkt'>Pkt</option>
          </select> */}
          <Select>
            <SelectTrigger className='border-none shadow-none'>
              <SelectValue placeholder='Btl.' />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Fruits</SelectLabel>
                <SelectItem value='apple'>Apple</SelectItem>
                <SelectItem value='banana'>Banana</SelectItem>
                <SelectItem value='blueberry'>Blueberry</SelectItem>
                <SelectItem value='grapes'>Grapes</SelectItem>
                <SelectItem value='pineapple'>Pineapple</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
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
    accessorKey: 'id',
    header: '',
    cell: ({ row }) => {
      return <DeleteRow rowIndex={row?.index} />
    }
  }
]
