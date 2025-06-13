import React from 'react'

const BudgetsHeading = () => {
  return (
    <div className="w-full flex items-center justify-between">
      <h1 className="text-gray-900 font-bold text-3xl">Budgets</h1>
      <button className="p-4 flex gap bg-gray-900 rounded-lg cursor-pointer hover:bg-gray-800">
        <span className="text-white font-bold text-sm">+  Add New Budget</span>
      </button>
    </div>
  )
}

export default BudgetsHeading
