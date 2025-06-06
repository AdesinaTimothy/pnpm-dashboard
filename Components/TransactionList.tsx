import React from 'react'
import Image from 'next/image'


type UserTransactionsDetails = {
    UserImage?: {
        src: string;
        alt: string;
    } 
    UserName?: string;
    UserBalance?: string;
    UserDate?: string;
}

const TransactionList:React.FC<UserTransactionsDetails> = ({
    UserImage = {src: "/images/default-user.png", alt: "User Profile Picture"}, 
    UserName = "Emma Richardson", 
    UserBalance = "-$65.20", 
    UserDate = "19 Aug 2024"}) => {



  return (
    <div className='flex items-center justify-between w-full h-auto'>

        {/* Left Side */}
      <div className= "flex items-center justify-start h-auto gap-x-4">

        <div className="relative w-[32px] h-[32px] md:w-[40px] md:h-[40px] rounded-full overflow-hidden">
            <Image
            // className="w-10 h-10 rounded-full object-cover"
            src={UserImage.src} 
            alt={UserImage.alt} 
            fill
            className="object-cover"
            />    
        </div>
        <div className="text-sm font-bold text-gray-900 ">
            {UserName}
        </div>
      </div>

        {/* Right Side */}
      <div className="flex flex-col space-y-2">
        <h5 className="text-sm font-bold text-green-600">{UserBalance}</h5>
        <p className="text-xs font-normal">{UserDate}</p>
      </div>
    </div>
  )
}

export default TransactionList
