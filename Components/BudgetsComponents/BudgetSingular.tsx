

import React from 'react'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from '../ui/dropdown-menu'
import { MoreHorizontal } from 'lucide-react'
import { Progress } from '../ui/progress'
import SmallContentTitle from '../SmallContentTitle'
import LatestSpending from './LatestSpending'
import { Separator } from '../ui/separator'



const latestSpendingData = () => ([
    {
      latestSpendingAmount: 10.01,
      latestSpendingImage: "https://randomuser.me/api/portraits/men/4.jpg",
      latestSpendingDate: "16 Aug 2024",
      latestSpendingName: "Papa Software",
      id: 1,
    },
    {
      latestSpendingAmount: 24.99,
      latestSpendingImage: "https://randomuser.me/api/portraits/women/7.jpg",
      latestSpendingDate: "14 Aug 2024",
      latestSpendingName: "Netflix",
      id: 2,
    },
    {
      latestSpendingAmount: 7.5,
      latestSpendingImage: "https://randomuser.me/api/portraits/men/12.jpg",
      latestSpendingDate: "12 Aug 2024",
      latestSpendingName: "Coffee Shop",
      id: 3,
    },
  ])



const BudgetSingular = () => {
    const latestSpendingdatas =  latestSpendingData();


  return (
    <div className="w-full  flex flex-col p-8 gap-5 bg-white rounded-xl">
      {/* Heading  */}
      <div className='w-full flex items-center justify-between'>
        <div className="flex items-center justify-start gap-3">
        <div className="rounded-full bg-green-800 w-[16px] h-[16px] "></div>
            <h2 className="font-bold text-xl text-gray-900">Entertainment</h2>
        </div>
        <div>
        <DropdownMenu>
                <DropdownMenuTrigger>
                        <MoreHorizontal className="cursor-pointer text-gray-300"/>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                    <DropdownMenuItem>Edit Budget</DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem variant="destructive">Delete Budget</DropdownMenuItem>
                </DropdownMenuContent>
        </DropdownMenu>
        </div>
      </div>

      {/* Middle Comp */}
      <div className="w-full flex flex-col items-start gap-4">
        <div>
            <h2>Maximum of $50.00</h2>
        </div>

        <div className="w-full bg-[#F8F4F0] rounded-sm h-8 p-1 relative">
            <Progress value={39} className="bg-transparent [&>div]:bg-[#277C78] [&>div]:rounded h-full rounded-sm"/>
        </div>

        <div className="w-full flex items-center justify-between gap-4">
            <div className="w-full flex flex-col gap-[4px] border-l-3 border-l-[#277C78] pl-4">
                <p className="text-xs font-normal text-gray-500">Spent</p>
                <p className="text-sm font-bold text-gray-900">$15.02</p>
            </div>

            <div className="w-full flex flex-col gap-[4px] border-l-3 border-l-[#277C78]] pl-4">
                <p className="text-xs font-normal text-gray-500">Spent</p>
                <p className="text-sm font-bold text-gray-900">$35.02</p>
            </div>
        </div>

        {/* Lower Comp */}
        <div className="w-full flex flex-col gap-5 p-4 md:p-5 bg-[#F8F4F0] rounded-lg">
            <SmallContentTitle headingTitle="Latest Spending" titlesize={16}/>
            <div className="flex flex-col gap-3">
                {latestSpendingdatas.map((latest) => (
                    <div key={latest.id} className="flex flex-col gap-3">
                        <LatestSpending 
                        latestSpendingAmount={latest.latestSpendingAmount} 
                        latestSpendingDate={latest.latestSpendingDate}
                        latestSpendingImage={latest.latestSpendingImage}
                        latestSpendingName={latest.latestSpendingName}
                        id={latest.id}
                        />
                        <Separator />
                    </div>
                ))}
            </div>

        </div>

      </div>


    </div>
  )
}

export default BudgetSingular
