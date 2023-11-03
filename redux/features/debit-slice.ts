import { TDebitType } from '@/components/table/TableColumn'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type InitialState = {
  value: TDebitType[]
}

const initialState: InitialState = {
  value: [
    {
      product: '',
      batch: '',
      warehouse: '',
      quantity: 0,
      rate: 0,
      discount: 0,
      tax: 0,
      amount: 0
    }
  ]
}

export const debit = createSlice({
  name: 'debit',
  initialState,
  reducers: {
    addDebit: (_, action: PayloadAction<TDebitType[]>) => {
      return {
        value: action.payload
      }
    }
  }
})

export const { addDebit } = debit.actions
export default debit.reducer
