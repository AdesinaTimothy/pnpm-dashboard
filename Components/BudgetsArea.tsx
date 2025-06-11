import React from 'react'
import { ScrollArea, ScrollBar } from './ui/scroll-area'
import { CheckCheckIcon } from 'lucide-react'
import Budgets from '@/Components/Budgets'


const budgetsDatas = [
    {
      budgetsName: "Spark Electric Solutions",
      budgetDate: "Monthly - 2nd",
      budgetAmount: 100.0,
      budgetImage1: "/images/logo3.jpg",
      budgetImage2: {CheckCheckIcon},
      dueSoon: false,
    },
    {
      budgetsName: "Serenity Spa & Wellness",
      budgetDate: "Monthly - 3rd",
      budgetAmount: 30.0,
      budgetImage1: "/images/logo2.jpg",
      budgetImage2: {CheckCheckIcon},
      dueSoon: false,
    },
    {
      budgetsName: "Elevate Education",
      budgetDate: "Monthly - 4th",
      budgetAmount: 50.0,
      budgetImage1: "/images/logo1.jpg",
      budgetImage2: {CheckCheckIcon},
      dueSoon: false,
    },
    {
      budgetsName: "Pixel Playground",
      budgetDate: "Monthly - 11th",
      budgetAmount: 10.0,
      budgetImage1: "/images/logo5.jpg",
      budgetImage2: {CheckCheckIcon},
      dueSoon: false,
    },
    {
      budgetsName: "Nimbus Data Storage",
      budgetDate: "Monthly - 21st",
      budgetAmount: 9.99,
      budgetImage1: "/images/logo15.jpg",
      budgetImage2: {CheckCheckIcon},
      dueSoon: true,
    },
    {
      budgetsName: "ByteWise",
      budgetDate: "Monthly - 23rd",
      budgetAmount: 49.99,
      budgetImage1: "/images/logo13.jpg",
      budgetImage2: {CheckCheckIcon},
      dueSoon: true,
    },
    {
      budgetsName: "EcoFuel Energy",
      budgetDate: "Monthly - 29th",
      budgetAmount: 35.0,
      budgetImage1: "/images/logo7.jpg",
      budgetImage2: {CheckCheckIcon},
      dueSoon: false,
    },
    {
      budgetsName: "Aqua Flow Utilities",
      budgetDate: "Monthly - 30th",
      budgetAmount: 100.0,
      budgetImage1: "/images/logo6.jpg",
      budgetImage2: {CheckCheckIcon},
      dueSoon: false,
    }
  ];

const BudgetsArea = () => {
  return (
        <ScrollArea className="w-full overflow-x-auto">
        <div className="flex flex-col gap-y-5 sm:w-full min-w-[550px] sm:min-w-0 px-2">
          {budgetsDatas.map((budgetsdata) => (
            <Budgets key={budgetsdata.budgetsName} 
            budgetImage1={budgetsdata.budgetImage1} 
            dueSoon={budgetsdata.dueSoon} 
            budgetAmount={budgetsdata.budgetAmount} 
            budgetDate={budgetsdata.budgetDate} 
            budgetsName={budgetsdata.budgetsName}
            />
          ))}
        </div>
        <ScrollBar orientation="horizontal" />
        </ScrollArea>

  )
}

export default BudgetsArea

