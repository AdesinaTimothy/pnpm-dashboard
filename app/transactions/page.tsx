"use client"

import React, { useEffect, useMemo, useState } from 'react'
import { DataTable } from './datatable';
import columns from './columns';
import TransactionHeading from '@/Components/TransactionHeading';
import { Search } from 'lucide-react';
import Sortby from '@/Components/Sortby';
import SortByCategory from '@/Components/SortByCategory';

type TransactionProp = {
  id: number,
  name: string;
  category: 'General' | 'Bills' | 'Dining Out' | 'Entertainment' | 'Groceries' | 'Education' | 'Transportation' | 'Personal Care' | 'Lifestyle' | 'Shopping';
  date: string; 
  amount: number; 
  image: string; 
}

const transactions = async (): Promise<TransactionProp[]> => {
  return [
    { id: 1, name: "James Thompson", category: "Entertainment", date: "2024-08-19", amount: -5.00, image: "https://randomuser.me/api/portraits/men/7.jpg" },
    { id: 2, name: "Sun Park", category: "Education", date: "2024-08-18", amount: 120.00, image: "https://randomuser.me/api/portraits/men/3.jpg" },
    { id: 3, name: "Liam Hughes", category: "Groceries", date: "2024-08-17", amount: 65.75, image: "https://randomuser.me/api/portraits/men/4.jpg" },
    { id: 4, name: "Henry Nguyen", category: "Shopping", date: "2024-08-16", amount: 80.00, image: "https://randomuser.me/api/portraits/men/9.jpg" },
    { id: 5, name: "Cody Wells", category: "Transportation", date: "2024-08-15", amount: -18.25, image: "https://randomuser.me/api/portraits/men/12.jpg" },
    { id: 6, name: "Emma Richardson", category: "General", date: "2024-08-14", amount: 75.50, image: "https://randomuser.me/api/portraits/women/1.jpg" },
    { id: 7, name: "Savory Bites Bistro", category: "Dining Out", date: "2024-08-13", amount: -55.50, image: "https://img.icons8.com/emoji/48/fork-and-knife-with-plate-emoji.png" },
    { id: 8, name: "Urban Services Hub", category: "Personal Care", date: "2024-08-12", amount: -65.00, image: "https://img.icons8.com/color/48/000000/services.png" },
    { id: 9, name: "Daniel Carter", category: "Lifestyle", date: "2024-08-11", amount: -42.30, image: "https://randomuser.me/api/portraits/men/2.jpg" },
    { id: 10, name: "Electric Company", category: "Bills", date: "2024-08-10", amount: -120.50, image: "https://img.icons8.com/color/48/electricity.png" },
    { id: 11, name: "Pixel Playground", category: "Entertainment", date: "2024-08-09", amount: -10.00, image: "https://img.icons8.com/fluency/48/controller.png" },
    { id: 12, name: "Marcus Green", category: "Education", date: "2024-08-08", amount: 110.00, image: "https://randomuser.me/api/portraits/men/24.jpg" },
    { id: 13, name: "Olivia Martin", category: "Groceries", date: "2024-08-07", amount: 40.20, image: "https://randomuser.me/api/portraits/women/8.jpg" },
    { id: 14, name: "TechMart", category: "Shopping", date: "2024-08-06", amount: -150.00, image: "https://img.icons8.com/color/48/000000/shop.png" },
    { id: 15, name: "Ryan Ford", category: "Transportation", date: "2024-08-05", amount: 92.75, image: "https://randomuser.me/api/portraits/men/28.jpg" },
    { id: 16, name: "Lily Ramirez", category: "General", date: "2024-08-04", amount: 50.00, image: "https://randomuser.me/api/portraits/women/5.jpg" },
    { id: 17, name: "Ethan Clark", category: "Dining Out", date: "2024-08-03", amount: -32.50, image: "https://randomuser.me/api/portraits/men/6.jpg" },
    { id: 18, name: "Molly Price", category: "Personal Care", date: "2024-08-02", amount: -13.00, image: "https://randomuser.me/api/portraits/women/35.jpg" },
    { id: 19, name: "Samantha Adams", category: "Lifestyle", date: "2024-08-01", amount: 60.00, image: "https://randomuser.me/api/portraits/women/16.jpg" },
    { id: 20, name: "Water Authority", category: "Bills", date: "2024-07-31", amount: -85.25, image: "https://img.icons8.com/color/48/water.png" },
    { id: 21, name: "Grace Lee", category: "Entertainment", date: "2024-07-30", amount: -12.00, image: "https://randomuser.me/api/portraits/women/10.jpg" },
    { id: 22, name: "Online Academy", category: "Education", date: "2024-07-29", amount: -49.99, image: "https://img.icons8.com/color/48/graduation-cap.png" },
    { id: 23, name: "Amanda Torres", category: "Groceries", date: "2024-07-28", amount: 33.45, image: "https://randomuser.me/api/portraits/women/11.jpg" },
    { id: 24, name: "Fashion Plaza", category: "Shopping", date: "2024-07-27", amount: -89.99, image: "https://img.icons8.com/color/48/shopping-bag.png" },
    { id: 25, name: "Nathan Cooper", category: "Transportation", date: "2024-07-26", amount: 25.75, image: "https://randomuser.me/api/portraits/men/36.jpg" },
    { id: 26, name: "Dylan Smith", category: "General", date: "2024-07-25", amount: 45.00, image: "https://randomuser.me/api/portraits/men/14.jpg" },
    { id: 27, name: "Burger Bliss", category: "Dining Out", date: "2024-07-24", amount: -27.90, image: "https://img.icons8.com/emoji/48/hamburger-emoji.png" },
    { id: 28, name: "Bella Salon", category: "Personal Care", date: "2024-07-23", amount: -45.00, image: "https://img.icons8.com/color/48/hair-salon.png" },
    { id: 29, name: "Home Decor Plus", category: "Lifestyle", date: "2024-07-22", amount: -125.00, image: "https://img.icons8.com/color/48/interior-design.png" },
    { id: 30, name: "Internet Provider", category: "Bills", date: "2024-07-21", amount: -65.00, image: "https://img.icons8.com/color/48/wifi.png" },
    { id: 31, name: "Max Chen", category: "Entertainment", date: "2024-07-20", amount: -15.00, image: "https://randomuser.me/api/portraits/men/15.jpg" },
    { id: 32, name: "Study Hub", category: "Education", date: "2024-07-19", amount: -75.00, image: "https://img.icons8.com/color/48/book-shelf.png" },
    { id: 33, name: "Golden Grocers", category: "Groceries", date: "2024-07-18", amount: -38.80, image: "https://img.icons8.com/color/48/grocery-store.png" },
    { id: 34, name: "Book Corner", category: "Shopping", date: "2024-07-17", amount: -25.50, image: "https://img.icons8.com/color/48/book.png" },
    { id: 35, name: "Metro Transit", category: "Transportation", date: "2024-07-16", amount: -12.50, image: "https://img.icons8.com/color/48/bus.png" },
    { id: 36, name: "Sarah Scott", category: "General", date: "2024-07-15", amount: 90.00, image: "https://randomuser.me/api/portraits/women/17.jpg" },
    { id: 37, name: "Hannah Brooks", category: "Dining Out", date: "2024-07-14", amount: -22.50, image: "https://randomuser.me/api/portraits/women/13.jpg" },
    { id: 38, name: "Spa Retreat", category: "Personal Care", date: "2024-07-13", amount: -80.00, image: "https://img.icons8.com/color/48/spa.png" },
    { id: 39, name: "Garden Center", category: "Lifestyle", date: "2024-07-12", amount: -67.50, image: "https://img.icons8.com/color/48/garden.png" },
    { id: 40, name: "Phone Company", category: "Bills", date: "2024-07-11", amount: -45.99, image: "https://img.icons8.com/color/48/phone.png" },
    { id: 41, name: "Emma Gray", category: "Entertainment", date: "2024-07-10", amount: -6.75, image: "https://randomuser.me/api/portraits/women/19.jpg" },
    { id: 42, name: "Learning Center", category: "Education", date: "2024-07-09", amount: -35.00, image: "https://img.icons8.com/color/48/classroom.png" },
    { id: 43, name: "Daily Fresh Market", category: "Groceries", date: "2024-07-08", amount: -49.99, image: "https://img.icons8.com/color/48/supermarket.png" },
    { id: 44, name: "Electronics World", category: "Shopping", date: "2024-07-07", amount: -199.99, image: "https://img.icons8.com/color/48/electronics.png" },
    { id: 45, name: "City Cab", category: "Transportation", date: "2024-07-06", amount: -15.00, image: "https://img.icons8.com/color/48/taxi.png" },
    { id: 46, name: "Jacob Miller", category: "General", date: "2024-07-05", amount: 70.00, image: "https://randomuser.me/api/portraits/men/18.jpg" },
    { id: 47, name: "Fast Feast", category: "Dining Out", date: "2024-07-04", amount: -29.00, image: "https://img.icons8.com/emoji/48/takeout-box-emoji.png" },
    { id: 48, name: "Fitness Club", category: "Personal Care", date: "2024-07-03", amount: -60.00, image: "https://img.icons8.com/color/48/gym.png" },
    { id: 49, name: "Craft Store", category: "Lifestyle", date: "2024-07-02", amount: -33.25, image: "https://img.icons8.com/color/48/paint-palette.png" },
    { id: 50, name: "Gas Company", category: "Bills", date: "2024-07-01", amount: -95.75, image: "https://img.icons8.com/color/48/gas.png" }
]
  
} 




const Page =  () => {
  const [data, setData] = useState<TransactionProp[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("All Transactions")
  const [selectedSort, setSelectedSort] = useState<string>("latest")



  useEffect(() => {
    transactions().then((transactions) => {
      setData(transactions);
    });
  }, []);


  const sortedData = useMemo(() => {
    const filtered = selectedCategory === 'All Transactions' 
      ? data 
      : data.filter(item => item.category === selectedCategory);

    switch (selectedSort) {
      case 'latest':
        return [...filtered].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
      case 'oldest':
        return [...filtered].sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
      case 'AtoZ':
        return [...filtered].sort((a, b) => a.name.localeCompare(b.name));
      case 'ZtoA':
        return [...filtered].sort((a, b) => b.name.localeCompare(a.name));
      case 'highest':
        return [...filtered].sort((a, b) => b.amount - a.amount);
      case 'lowest':
        return [...filtered].sort((a, b) => a.amount - b.amount);
      default:
        return filtered;
    }
  }, [data, selectedCategory, selectedSort]);

  return (
    <div className="w-full mt-8 flex flex-col gap-8">
      <TransactionHeading />
      
      {/* Main content container */}
      <div className="bg-white px-8 rounded-2xl">
        {/* Search and filter controls */}
        <div className="flex mt-8 items-center justify-between">
          {/* Search input */}
          <div className="relative max-w-xs">
            <input
              type="text"
              placeholder="Search..."
              className="w-full pl-4 pr-10 py-2 border rounded-md focus:outline-none"
            />
            <Search className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-900 pointer-events-none" />
          </div>
          
          {/* Filter controls */}
          <div className="flex gap-5">
            <Sortby 
            selectedSort={selectedSort}
            setSelectedSort={setSelectedSort}
            />
            <SortByCategory 
              selectedCategory={selectedCategory} 
              setSelectedCategory={setSelectedCategory}
            />
          </div>
        </div>
        
        {/* Data table */}
        <DataTable columns={columns} data={sortedData} />
      </div>
    </div>
  );
}

export default Page
