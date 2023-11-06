import { Reducer } from 'react'

enum ReducerActionType {
  ADD_
}

export type TCalculate = {
  total: number
  totalExciseDuty: number
  discount: number
  nonTaxableTotal: number
  taxableTotal: number
  vat: number
}

export type ReducerAction = {
  type: ReducerActionType
  payload?: TCalculate
}

export const INITIAL_STATE = [
  {
    total: 0,
    totalExciseDuty: 0,
    discount: 0,
    nonTaxableTotal: 0,
    taxableTotal: 0,
    vat: 0
  }
]

export const calculateReducer: Reducer<TCalculate[], ReducerAction> = (
  state,
  action
) => {
  const { type } = action

  switch (type) {
    case ReducerActionType.ADD_:
      console.log('Added')
      return {
        ...state
      }

    default:
      console.log('Action type not matched')
      return state
  }
}
