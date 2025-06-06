import Image from 'next/image'
import { clsx } from "clsx"

interface NavItemProp {
    navItemLabel?: string;
    navImage?: string;
    navHoverImage?: string;
    isActive?: boolean;
    isCollapsed?: boolean
}

const MobileNavItem = ({
    navItemLabel = "Overview", 
    navImage = "/images/home.svg",
    navHoverImage = "/images/homeactive.png",
    isActive = false,
    // isCollapsed = false
   }: NavItemProp) => {
  return (
    <div className={clsx(
        "w-full flex flex-col items-center justify-center gap-3 px-5 pt-2 pb-3 transition-all cursor-pointer group rounded-t-xl",
        {
            "bg-[#F8F4F0] border-b-4 border-b-[#277c78]": isActive,
        }
    )}>
        <Image 
            className={clsx(
                "transition-all duration-200 brightness-100 shrink-0",
                {
                    "group-hover:brightness-140": !isActive
                }
            )}
            src={isActive ? navHoverImage : navImage}
            alt={navItemLabel}
            width={19}
            height={19}
        /> 

       
        <span className= {clsx(
            "text-gray-300 text-xs font-bold transition-all duration-200",
            {
                "group-hover:text-gray-50": !isActive,
                "text-gray-900": isActive,
            }
          )}>
            {navItemLabel}
          </span>
       
    </div>
  )
}

export default MobileNavItem
