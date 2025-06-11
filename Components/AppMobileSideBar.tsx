"use client"

import React from 'react'
import MobileNavItem from './MobileNavItem';
import Link from 'next/link';
import { usePathname } from 'next/navigation';


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


const AppMobileSideBar = () => {

    const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 left-0 w-full z-50 flex items-center justify-between bg-gray-900 pt-2 px-10 rounded-t-xl md:hidden">
      {items.map((item) => (
        <Link key={item.url} href={item.url}>
            <MobileNavItem 
            navItemLabel={item.title}
            navImage={item.icon}
            navHoverImage={item.icon2}
            isActive={pathname === item.url}
            />
        </Link>
      ))}
    </nav>
  )
}

export default AppMobileSideBar
