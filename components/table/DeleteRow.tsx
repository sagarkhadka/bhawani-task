import { useDispatch } from 'react-redux'
import { X } from 'lucide-react'
import toast from 'react-hot-toast'

import { deleteDebit } from '@/redux/features/debit-slice'
import { AppDispatch } from '@/redux/store'

const DeleteRow = ({ rowIndex }: { rowIndex: number }) => {
  const dispacth = useDispatch<AppDispatch>()

  const handleClick = async () => {
    try {
      const deleteRow = dispacth(deleteDebit(rowIndex))
      console.log(deleteRow)
      if (deleteRow) {
        toast.success('Deleted sucessfully.')
      }
    } catch (error) {
      console.log(error)
      toast.success('Something went wrong.')
    }
  }

  return (
    <button onClick={handleClick} className='bg-transparent'>
      <X color='#ef4444' />
    </button>
  )
}

export default DeleteRow
