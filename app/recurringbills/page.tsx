
import BudgetsArea from '@/Components/BudgetsArea'
import RecurringHeading from '@/Components/RecurringHeading'
import Sortby from '@/Components/Sortby'
import Summary from '@/Components/Summary'
import TotalBills from '@/Components/TotalBills'
import { Search } from 'lucide-react'
import { CheckCheckIcon } from 'lucide-react'
import React from 'react'


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


const page = () => {
  return (
    <div className="w-full mt-8">
     <RecurringHeading />

     {/* lOWER DIV for the Recurring Bill */}
     <div className="grid grid-cols-1 lg:grid-cols-[32%_1fr] gap-8 mt-4">
      <div className="w-full flex flex-col gap-y-6 md:flex-row md:gap-x-6 lg:flex-col lg:gap-y-6">
        <TotalBills />
        <Summary />
      </div>

      <div className="w-full flex  bg-white flex-col rounded-2xl gap-y-6 p-8">
        {/* UPPER SECTION */}
        <div className="w-full flex flex-col justify-center items-start gap-y-6 md:flex-row md:justify-between">
          <div className="relative max-w-xs">
            <input
              type="text"
              placeholder="Search..."
              className="w-full pl-4 pr-10 py-2 border rounded-md focus:outline-none"
            />
            <Search className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-900 pointer-events-none" />
          </div>

          <Sortby />
        </div>

        <div>
          <BudgetsArea />
        </div>

      </div>

     </div>
    </div>
  )
}

export default page
