import React from 'react'

interface cardProps {
    amount?: number,
    amountTitle?: string,
}

const Card = ({
    amount = 4836.04,
    amountTitle = "Current Balance"
    }: cardProps) => {
  return (
    <div className="w-full flex flex-col p-6 rounded-xl items-start">
      <div><p>{amountTitle}</p></div>
      <div><h1>{`$${amount}`}</h1></div>
    </div>
  )
}

export default Card
