import { useDispatch } from 'react-redux'
import { X } from 'lucide-react'

import { deleteDebit } from '@/redux/features/debit-slice'
import { AppDispatch } from '@/redux/store'

const DeleteRow = ({ rowIndex }: { rowIndex: number }) => {
  const dispacth = useDispatch<AppDispatch>()

  const handleClick = () => {
    dispacth(deleteDebit(rowIndex))
  }
  return (
    <button onClick={handleClick} className='bg-transparent'>
      <X color='#ef4444' />
    </button>
  )
}

export default DeleteRow
