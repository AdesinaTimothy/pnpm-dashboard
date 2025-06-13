"use client"

import SpendingSummary from '@/Components/BudgetsComponents/SpendingSummary'
import { Separator } from '@/Components/ui/separator'
import React from 'react'
// import { SpendingSummaryProp } from '@/Components/BudgetsComponents/SpendingSummary';
import AppPieCharts from '@/Components/AppPieCharts';
import BudgetSingular from '@/Components/BudgetsComponents/BudgetSingular';
import BudgetsHeading from '@/Components/BudgetsComponents/BudgetsHeading';

type SpendingSummaryProp  = {
  spendingTitle? : string,
  spent? : number,
  budgetted? : number,
  borderColor?: string
}


 const spendingSummary: SpendingSummaryProp[] = [
  {
    spendingTitle: "Entertainment",
    spent: 15,
    budgetted: 50.01,
    borderColor: "#277c78",
  },
  {
    spendingTitle: "Bills",
    spent: 120,
    budgetted: 200.2,
    borderColor: "#82C9D7", // orange‑600
  },
  {
    spendingTitle: "Dining Out",
    spent: 45,
    budgetted: 100.01,
    borderColor: "#F2CDAC", // indigo‑600
  },
  {
    spendingTitle: "Personal Care",
    spent: 30,
    budgetted: 75.01,
    borderColor: "#626070", // fuchsia‑500
  },
];


const page = () => {
  return (
    <div className="mt-5 mb-2">

      <BudgetsHeading />


      <div className="my-7 grid grid-cols-1 md:grid-cols-[40.38%_1fr] gap-8 mt-4">

      
      {/* Left Side of the Budjets Page */}
      <div className="">

        <div className="bg-white flex flex-col gap-8 p-8 rounded-lg lg:flex-col">

        {/* Chart Side */}
          <div className="">
                    <AppPieCharts />
          </div>



        {/* Spending Summary Side */}
        <div className="flex flex-col items-start gap-3">
          <h1 className="text-gray-900 font-bold text-xl">Spending Summary</h1>
          <div className="w-full flex flex-col gap-3">
            {spendingSummary.map((each) => (
              <div className="flex flex-col gap-4" key={each.spendingTitle}>
                <SpendingSummary spendingTitle={each.spendingTitle} spent={each.spent} budgetted={each.budgetted} borderColor={each.borderColor}/>
                <Separator />
              </div>
            ))}
          </div>
        </div>
        </div>
        
      </div>


      {/* Right Side of the Budgets Page */}
      <div className="flex flex-col gap-6">
        <BudgetSingular />
        <BudgetSingular />
        <BudgetSingular />
        <BudgetSingular />
      </div>

     </div>
    </div>
  )
}

export default page
