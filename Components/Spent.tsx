import React from 'react'


interface spentProp  {
    spentTitle?: string;
    spentAmount?: number;
    borderColor?: string;
}


const Spent = ({
    spentTitle = "Entertainment", 
    spentAmount = 50.01,
    borderColor = "#277C78"
    }
    : spentProp) => {
  return (
    <div className=
        "w-full flex flex-col gap-2 border-l-3 pl-3 "
        style={{borderLeftColor: borderColor}}
        >
        {/* <div className="w-[3px] h-full">

        </div> */}
        {/* <div>         */}
            <div>
                <p className="text-gray-500 text-xs">{spentTitle}</p>
            </div>
            <div>
                <h3 className="text-gray-900 font-bold text-sm">{`$${spentAmount}`}</h3>
            </div>
        {/* </div> */}
    </div>
  )
}

export default Spent
