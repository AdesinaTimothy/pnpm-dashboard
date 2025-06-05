import React from 'react'


type RecurringBillsProps = {
    bills: string;
    amountBills: number; 
    borderColor: string;
}

const RecurringBillsComp: React.FC<RecurringBillsProps> = ({
    bills = "Paid Bils", 
    amountBills = "$194.98",
    borderColor = "277C78",
}) => {

  return (
    <div className="bg-[#F8F4F0] w-full h-auto py-5 px-4 flex items-center justify-between border-l-4 rounded-lg"
    style={{borderLeftColor: borderColor}}
    
    >
      <div>
        <p className="text-gray-500 text-sm">{bills}</p>
      </div>

      <div>
        <p className="text-gray-900 text-sm font-semibold">{`$${amountBills}`}</p>
      </div>
    </div>
  )
}

export default RecurringBillsComp
