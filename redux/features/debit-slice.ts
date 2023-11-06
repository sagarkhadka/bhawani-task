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
    addDebit: (state, action: PayloadAction<TDebitType[]>) => {
      // console.log('hello')
      // console.log(action.payload)
      const newValue = action.payload || []
      return {
        ...state,
        value: state.value ? [...state.value, ...newValue] : [...newValue]
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
