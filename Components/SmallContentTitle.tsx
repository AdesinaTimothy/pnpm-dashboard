"use client"
import { useRouter } from 'next/navigation';
import React from 'react'
import Image from 'next/image'



type SmallContentTitleProp = {
    headingTitle?: string;
    buttonName?: string;
    // onClick?:  () => void;
    navigateTo?: string;
}

const SmallContentTitle: React.FC<SmallContentTitleProp> = ({
    headingTitle = "Recurring Bills", 
    buttonName = "See Details",
    navigateTo, 
}) => {
    const router = useRouter();

    const handleClick = () => {
        if(navigateTo) {
            router.push(navigateTo);
        }
    }

  return (
    <div className="w-full flex h-auto items-align justify-between">
        <div>
            <h3 className='text-2xl text-gray-900 font-bold'>
               {headingTitle}
            </h3>
        </div>

        <div onClick={handleClick}
        className="flex items-center justify-between space-x-3 cursor-pointer group">
            <p className='text-gray-500 font-normal text-sm group-hover:text-gray-800'>{buttonName}</p>

            <div className="group-hover:brightness-80">
            <Image 
                src="/images/forward.svg" 
                alt="forward image icon"
                width={6} 
                height={4}
                className="block mx-auto"
            />
            </div>
        </div>
    </div>
  )
}

export default SmallContentTitle