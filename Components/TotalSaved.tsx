import React from 'react'
import Image from 'next/image'

type totalSavedProp = {
    savedAmount: number;  
}


const TotalSaved:React.FC<totalSavedProp> = ({
    savedAmount = 850,
}) => {
  return (
    <div className="flex bg-[#F8F4F0] h-[110] items-center justify-start gap-x-6 p-4 rounded-xl">
      <div>
        <Image 
            src="/images/totalSaved.svg" 
            alt="Total Saved Image"
            width={27} 
            height={35}
        />
      </div>

      <div className="flex flex-col space-y-3">
        <p className="text-sm text-gray-500 font-normal">
            Total Saved
        </p>

        <h2 className="text-4xl font-bold">
            {`$${savedAmount}`}
        </h2>
      </div>
    </div>
  )
}

export default TotalSaved
