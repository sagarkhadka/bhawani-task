export type tableProps = {
  product: string
  batch: string
  watehouse: string
  quantity: number
  rate: number
  discount: number
  tax: number
  amount: number
}

export const defaultTableData: tableProps[] = [
  {
    product: 'Old durbar Black chimney 750ml',
    batch: '4324A',
    watehouse: 'KTM',
    quantity: 2,
    rate: 2300,
    discount: 230,
    tax: 13,
    amount: 4140
  }
]
