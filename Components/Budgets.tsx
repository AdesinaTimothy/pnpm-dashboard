import clsx from 'clsx'
import Image from 'next/image'
import React from 'react'
import { CircleAlert } from 'lucide-react'
import { CircleCheck } from 'lucide-react'


interface budgetsProp {
    budgetAmount?: number, 
    budgetDate?: string, 
    budgetsName?: string, 
    budgetImage1?: string, 
    budgetImage2?: string,
    dueSoon?: boolean,
}

const Budgets = ({budgetAmount, budgetDate, budgetsName, budgetImage1, dueSoon}: budgetsProp) => {
  return (
    <div className="w-full flex flex-col items-center gap-y-5 justify-between">
      <hr className="w-full border-t border-[#696868]/15" />
      <div className="w-full flex items-center justify-between gap-x-4">
            <div className="flex items-center justify-start gap-x-4 flex-[0_0_215px] min-w-[150px]">  
            {budgetImage1 && (
                    <Image
                    src={budgetImage1}
                    alt="image1"
                    width={30}
                    height={30}
                    className="rounded-full"
                />
          )}
          <h4 className="font-bold text-gray-900 text-sm">{budgetsName}</h4>
            </div>

            <div className="flex gap-x-2 items-center justify-end min-w-[100px]">
                <p className="text-xs text-green-900">{budgetDate}</p>
                {dueSoon ? (
                    <CircleAlert size={13} className="text-red-600" />
                    ) : (
                    <CircleCheck size={13} className="text-green-600" />
                )}
            </div>
                
            <div className="">
                <p
                className={clsx(
                    "font-bold text-sm text-gray-900 flex-end",
                    {
                         "text-red-600": dueSoon,
                         "text-gray-900": !dueSoon,
                    }
                )}
                >{`$${budgetAmount?.toFixed(2)}`}</p>
            </div>
      </div>
    </div>
  )
}

export default Budgets
