import clsx from 'clsx'
import React from 'react'

interface cardProps {
    amount?: number,
    amountTitle?: string,
    bgColor?: string,
    pColor?: string,
    hColor?: string,
}

const Cards = ({
    amount = 4836.04,
    amountTitle = "Current Balance",
    bgColor = "bg-gray-900",
    pColor = "text-white",
    hColor = "text-white",
    }: cardProps) => {
  return (
    <div className={clsx(
        "w-full flex  flex-col p-6 rounded-xl items-start gap-y-3",
        bgColor
        )}>
      <div>
        <p className={clsx(
          "text-sm font-normal",
          pColor
          )}>
          {amountTitle}
        </p>
      </div>

      <div>
        <h1 className={clsx(
          "text-[32px] font-bold",
          hColor
          )}>
          {`$${amount}`}
        </h1>
      </div>
    </div>
  )
}

export default Cards
