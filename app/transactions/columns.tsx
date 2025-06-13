"use client"

import { ColumnDef } from "@tanstack/react-table"
import clsx from "clsx";

export type TransactionProp = {
    name: string;
    category: 'General' | 'Bills' | 'Dining Out' | 'Entertainment' | 'Groceries' | 'Education' | 'Transportation' | 'Personal Care' | 'Lifestyle' | 'Shopping';
  date: string; 
  amount: number; 
  image: string; 
}

export const columns: ColumnDef<TransactionProp>[] = [
    {
      accessorKey: "status",
      header: () => <div className="text-left py-3">
        <p className="font-normal text-xs text-gray-600">Recipient /Sender</p>
        </div>,
    },

    {
      accessorKey: "category",
      header: () => <div className="text-left">
        <p className="font-normal text-xs text-gray-600">Category</p>
        </div>,
        cell: ({row}) => {
            const category = row.getValue("category") as string;
            return (
                <div className="">
                    <p className="text-gray-600">{category}</p>
                </div>
            )
        }
    },


    {
      accessorKey: "date",
      header: () => <div className="text-left">
        <p className="font-normal text-xs text-gray-600">Transaction Date</p>
        </div>,
        cell: ({row}) => {
            const transactionDate = row.getValue("date") as string;
            const formattedDate = new Date(transactionDate).toLocaleDateString("en-GB", {
                day: "2-digit",
                month: "short",
                year: "numeric",
            });

            return (
                <div className="">
                    <p className="text-gray-600">{formattedDate}</p>
                </div>
            )
        }
    },


    {
      accessorKey: "amount",
      header: () => <div className="text-right">
        <p className="font-normal text-xs text-gray-600">Amount</p>
        </div>,
      cell: ({row}) => {
        const amount = parseFloat(row.getValue("amount"))
        const formatted = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
        }).format(amount)

        return <div className="text-right ">
            <p className={clsx(
                "text-sm font-bold",
                amount > 0 ? "text-green-700" : "text-gray-900"
            )}>
                {formatted}
            </p>
            </div>
      }
    },
  ]
  



// const columnss = () => {
//   return (
//     <div>
      
//     </div>
//   )
// }

export default columns
