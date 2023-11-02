import { configureStore } from '@reduxjs/toolkit'
import debitReducer from './features/debit-slice'

export const store = configureStore({
  reducer: { debitReducer }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
