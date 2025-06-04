"use client"

import React, { useState } from 'react'
import NavItem from './NavItem'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import clsx from 'clsx';


const items = [
    {
      title: "Overview",
      url: "/",
      icon: "/images/home.svg",
      icon2: "/images/homeactive.png"
    },
    {
      title: "Transactions",
      url: "/transactions",
      icon: "/images/transaction.svg",
      icon2: "/images/transactionactive.png"
    },
    {
      title: "Budgets",
      url: "/budgets",
      icon: "/images/budgets.svg",
      icon2: "/images/budjetsactive.png",
    },
    {
      title: "Pots",
      url: "/pots",
      icon: "/images/pots.svg",
      icon2: "/images/potsactive.png",
    },
    {
      title: "Recurring Bills",
      url: "/recurringbills",
      icon: "/images/bills.svg",
      icon2: "/images/billsvector.png",
    },
  ];

const AppSideBar = () => {

    const [isCollapsed, setIsCollapsed] = useState(false);

    const pathname = usePathname();
  return (
    <aside className={clsx(
        "flex flex-col justify-start h-full bg-gray-900 rounded-r-2xl transition-[width] duration-300 ease-in-out",
            isCollapsed ? "w-[90px] pr-3": "w-[300px] pr-6",
        )}>
        {/* LOGO AREA */}
        <div className="w-full py-10 pl-8 cursor-pointer">
            <Image 
            src={isCollapsed? "images/f.svg" : "/images/mainlogo.svg"}
            alt="logo-image"
            width= {isCollapsed ? 12.19 : 120}
            height={isCollapsed ? 22.19 :22}
            />
        </div>

        {/* NAV MENU AREA */}
        <nav className="flex flex-col gap-1">
            {items.map((item) => (
                <Link key={item.url} href={item.url}>
                    <NavItem 
                    navItemLabel={item.title}
                    navImage={item.icon}
                    navHoverImage={item.icon2}
                    isActive={pathname === item.url}
                    isCollapsed={isCollapsed}
                    />
                </Link>
            ))}
        </nav>

        <footer onClick={() => setIsCollapsed(!isCollapsed)}
        className="mt-auto mb-6 pl-6 py-4 flex gap-4 cursor-pointer">
            <div className={clsx(
                "transition-transform duration-300",
                isCollapsed ? "rotate-180" : "rotate-0"
            )}>
            <Image 
            src= "/images/minimize.svg"
            alt="logo-image"
            width= {20}
            height={20}
            />
            </div>
        </footer>
    </aside>
  )
}

export default AppSideBar
