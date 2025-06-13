import React from 'react'

 type SpendingSummaryProp  = {
    spendingTitle? : string,
    spent? : number,
    budgetted? : number,
    borderColor?: string
}

const SpendingSummary = ({
    spendingTitle = "Entertainment", 
    spent = 15, 
    borderColor = "#277c78",
    budgetted = 50.01}: SpendingSummaryProp) => {
  return (
    <div className="w-full flex items-center justify-between border-l-3 pl-2" 
    style={{borderLeftColor: borderColor}}>
        <h4 className="text-sm font-normal text-gray-500">{spendingTitle}</h4>
      
        <div className="flex items-center justify-between gap-2">
            <h5 className="text-gray-900 font-bold text-base">{`$${budgetted}`}</h5>
            <p className="text-gray-500 text-xs">{`of $${spent}`}</p>
        </div>
    </div>
  )
}

export default SpendingSummary
