"use client"

import * as React from "react"


import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
  getPaginationRowModel,
  SortingState,
  getSortedRowModel,
} from "@tanstack/react-table"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/Components/ui/table"

import { ChevronLeftCircle, ChevronRightCircle,} from "lucide-react"

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[]
  data: TData[]
}

import { Button } from "@/Components/ui/button"


export function DataTable<TData, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) {
    const [sorting, setSorting] = React.useState<SortingState>([])

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    state: {
      sorting,
    },
  })

  return (
    <div className="w-full pt-7 rounded-3xl">
        <div className="w-full flex items-center justify-between mb-5">
        </div>

      <Table>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow 
            key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <TableHead 
                  className="py-3"
                  key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableHead>
                )
              })}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow
                key={row.id}
                data-state={row.getIsSelected() && "selected"}
              >
                {row.getVisibleCells().map((cell) => (
                  <TableCell 
                  className="py-5"
                  key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className="h-24 text-center">
                No results.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>

      <div className="flex items-center mt-5 justify-between space-x-2 py-4">
        <div>
        <Button
          variant="outline"
          size="sm"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
            <ChevronLeftCircle className="w-6 h-6 text-gray-600"/>
            <span>
                Previous
            </span>
        </Button>
        </div>

        <div className="flex gap-2">
            {[...Array(table.getPageCount())].map((_, index) => (
                <Button 
                key={index}
                variant={table.getState().pagination.pageIndex === index ? "default": "outline"}
                size="sm"
                onClick={() => table.setPageIndex(index)}
                >
                    {index + 1}
                </Button>
            ))}
        </div>

        <div>
        <Button
          variant="outline"
          size="sm"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
            <span>
                Next
            </span>
            <ChevronRightCircle className="w-6 h-6 text-gray-600"/>
        </Button>
        </div>
        
      </div>
    </div>
  )
}
