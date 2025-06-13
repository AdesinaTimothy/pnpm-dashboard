import Image from 'next/image'
import React from 'react'

export type latestSpendingProp = {
    latestSpendingAmount?: number,
    latestSpendingImage? : string,
    latestSpendingDate? : string,
    latestSpendingName? : string,
    id: number,
}

const LatestSpending = ({
    latestSpendingAmount = 10.01, 
    latestSpendingImage = "/images/person2.jpg", 
    latestSpendingDate = "16 Aug 2024",
    latestSpendingName = "Papa Software"
}: latestSpendingProp) => {
  return (
    <div className="w-full flex items-center justify-between">
        <div className="flex items-center justify-start gap-4">
            <div className="">
                <Image src={latestSpendingImage} alt="latest-spending" width={32} height={32} className="rounded-full"/>
            </div>
            <div>
                <h2 className="text-xs font-bold text-gray-900">{latestSpendingName}</h2>
            </div>
        </div>

        <div className="flex flex-col gap-[4px] items-end">
            <p className="font-bold text-gray-900 text-xs">-{latestSpendingAmount}</p>
            <p className="text-gray-500 font-normal text-xs">{latestSpendingDate}</p>
        </div>
    </div>
  )
}

export default LatestSpending
