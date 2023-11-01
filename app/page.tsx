'use client'

import Supplier from '@/components/Supplier'

export default function Home() {
  return (
    <main className='p-10'>
      <div className='border-b border-b-zinc-200 pb-5'>
        <h4 className='text-2xl font-bold'>New debit note</h4>
      </div>
      <div className='pt-5'>
        <Supplier />
      </div>
    </main>
  )
}
