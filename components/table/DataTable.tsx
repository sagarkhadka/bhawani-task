'use client'

import React from 'react'
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable
} from '@tanstack/react-table'

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[]
  data: TData[]
}

const DataTable = <TData, TValue>({
  columns,
  data
}: DataTableProps<TData, TValue>) => {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel()
    // initialState: {
    //   hiddenColumns: ['id']
    // }
  })

  return (
    <>
      <div className='py-3'>
        <table className='w-full'>
          <thead className='border-y'>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th key={header.id} className='px-2 py-3 text-left'>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <tr
                  key={row.id}
                  className='border-b duration-200 hover:bg-zinc-100'
                >
                  {row.getVisibleCells().map((cell) => (
                    <td key={cell.id} className='px-2 py-3 text-left'>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </td>
                  ))}
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan={columns.length}
                  className='py-10 text-center align-top text-tertiary'
                >
                  Add code or product
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default DataTable
