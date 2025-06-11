"use client"

import PotsAdd from './PotsAdd'
import PotsWithdraw from './PotsWithdraw'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from './ui/dropdown-menu'
import { MoreHorizontal } from 'lucide-react'
import { Progress } from './ui/progress'


interface PotSavingProp {
    savingsPercentage?: number;
    savingsTarget?: number;
    savingsAmount?: number;
    savingsTitle?: string;
}

const PotCards: React.FC<PotSavingProp> = ({
    savingsPercentage = 7.9,
    savingsTarget = 2000.09, 
    savingsAmount = 159.09, 
    savingsTitle = "Savings"
})  => {
  return (
    <div className="w-full flex flex-col p-6 rounded-lg bg-[#ffffff] gap-y-8">
        {/* Card header */}
        <div className="flex items-center justify-between">
            <div className="flex items-center justify-start gap-4">
                <div className="rounded-full bg-[#277C78] h-[16px] w-[16px]"></div>
                <h2 className="font-bold text-xl text-gray-900">{savingsTitle}</h2>
            </div>

            <div>
            <DropdownMenu>
                <DropdownMenuTrigger>
                        <MoreHorizontal className="cursor-pointer text-gray-300"/>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                    <DropdownMenuItem>Edit Pot</DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem variant="destructive">Delete Pot</DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
            </div>
        </div>

        {/* Card Content */}
        <div className="w-full flex flex-col gap-4">
            <div className="w-full flex items-center justify-between">
                <p className="text-gray-500 text-sm">Total Saved</p>
                <h1 className="font-bold text-gray-900 text-[30px]">{savingsAmount}</h1>
            </div>

            <div>
                <Progress value={savingsPercentage} className="bg-[#F8F4F0] [&>div]:bg-[#277C78]"/>
            </div>

            <div className="w-full flex items-center justify-between">
                <p className="text-gray-500 font-bold text-xs">{savingsPercentage}</p>
                <p className="text-gray-500 text-xs">Target of ${savingsTarget}</p>
            </div>
        </div>

        {/* Card Footer */}
            <div className='flex gap-4'>
                <PotsAdd />
                <PotsWithdraw />
            </div>
    </div>
  )
}

export default PotCards
