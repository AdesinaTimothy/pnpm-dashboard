import React from 'react'

const Summary = () => {
  return (
    <div className="w-full rounded-md bg-white flex flex-col gap-5 p-5">
      <div>
        <h3 className="font-bold text-gray-900 text-base">Summary</h3>
      </div>

      <hr className="border-t border-[#696868]/15" />
      <div className="w-full flex items-center justify-between">
      <p className="font-normal text-xs text-gray-500">Paid Bills</p>
      <p className="font-bold text-gray-900 text-xs">4($190.00)</p>
      </div>

      <hr className="border-t border-[#696868]/15" />
      <div className="w-full flex items-center justify-between">
      <p className="font-normal text-xs text-gray-500">Total Upcoming</p>
      <p className="font-bold text-gray-900 text-xs">4($194.98)</p>
      </div>
      
      <hr className="border-t border-[#696868]/15" />
      <div className="w-full flex items-center justify-between">
        <p className="font-normal text-xs text-red-700">Due Soon</p>
        <p className="font-bold text-red-700 text-xs">2($59.98)</p>
      </div>
    </div>
  )
}

export default Summary
