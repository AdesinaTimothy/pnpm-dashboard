import Image from 'next/image'
import React from 'react'

const TotalBills = () => {
  return (
    <div className="w-full bg-gray-900 flex items-center  gap-x-5  py-6 px-5 md:flex-col md:gap-y-6 md:items-start  rounded-md ">
      <div className="flex items-center justify-start">
        <Image 
        src={"/images/totalbills.svg"}
        alt='total bills images'
        width={31.88}
        height={26.88}
        />
      </div>

      <div className="w-full flex flex-col gap-[11px]">
        <p className="text-white text-[14px]">Total bills</p>
        <h2 className="text-white font-bold text-[32px]">$384.98</h2>
      </div>
    </div>
  )
}

export default TotalBills
