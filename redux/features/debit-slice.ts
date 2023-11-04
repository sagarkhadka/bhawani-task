import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { TDebitType } from '@/components/table/TableColumn'

type InitialState = {
  value: TDebitType[] | null
}

const initialState: InitialState = {
  value: null
}

export const debit = createSlice({
  name: 'debit',
  initialState,
  reducers: {
    addDebit: (_, action: PayloadAction<TDebitType[]>) => {
      return {
        value: action.payload
      }
    },

    deleteDebit: (state, action: PayloadAction<number>) => {
      if (state.value) {
        state.value = state.value.filter(
          (item, index) => index !== action.payload
        )
      }
    }
  }
})

export const { addDebit, deleteDebit } = debit.actions
export default debit.reducer
