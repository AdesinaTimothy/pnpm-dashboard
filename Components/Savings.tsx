
type savedAmountProp = {
    savingsAmount : number;
    savingsType : string;
    borderColor : string;
}



const Savings:React.FC<savedAmountProp> = ({
    savingsAmount = 159 , 
    savingsType =  "Savings",
    borderColor = "#277C78"
}) => {
  return (
    <div className="flex flex-col w-full max-w-[130px] h-auto border-l-4 border-l-${borderColor} space-y-4 pl-3"
    style={{borderLeftColor: borderColor}}
    >
      <div>
        <p className="text-xs text-gray-500">{savingsType}</p>
      </div>
      <div>
        <p className="text-sm font-bold text-gray-900">
        {`$${savingsAmount}`}
        </p>
      </div>
    </div>
  )
}

export default Savings
