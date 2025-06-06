"use client"

import AppMobileSideBar from "@/Components/AppMobileSideBar";
import AppPieCharts from "@/Components/AppPieCharts";
import Cards from "@/Components/Cards";
import RecurringBillsComp from "@/Components/RecurringBillsComp";
import SmallContentTitle from "@/Components/SmallContentTitle";
import Spent from "@/Components/Spent";
import TotalSaved from "@/Components/TotalSaved";
import TransactionList from "@/Components/TransactionList";

export default function Home() {
  return (
    <div className="w-full flex flex-col gap-6">
      {/* TOP SECTION OF OVERVIEW */}
    <div className="w-full flex flex-col gap-3">
      <h1 className="text-[32px] font-bold text-gray-900 ">Overview</h1>
      <div className="w-full flex flex-col gap-y-4 md:flex-row md:items-center md:justify-between gap-x-6 ">
        <Cards bgColor="bg-gray-900" hColor="text-white" pColor="text-white" amount={4836.04} amountTitle="Current Balance"/>
        <Cards bgColor="bg-white" hColor="text-gray-900" pColor="text-gray-500" amount={3814.25} amountTitle="Income"/>
        <Cards bgColor="bg-white" hColor="text-gray-900" pColor="text-gray-500" amount={1700.50} amountTitle="Expenses"/>
      </div>
    </div>

    {/* LOWER SECTION OF THE OVERVIEW PAGE */}
    <div className="w-full grid grid-cols-1 lg:grid-cols-[58%_auto] gap-6">

        {/* LEFT SECTION OF THE OVERVIEW */}
        <div className="flex flex-col gap-6">

          {/* POTS SECTION OF THE OVERVIEW */}
          <div className="w-full flex flex-col bg-white p-8 rounded-xl gap-5">
            <div>
              <SmallContentTitle headingTitle="Pots" buttonName="See Details"  navigateTo='/pots'/>
            </div>
            <div className="w-full flex flex-col items-start md:flex-row md:items-center md:justify-between gap-x-8">
                  <div className="min-w-[247px]">
                    <TotalSaved  savedAmount={850}/>
                  </div>

                  <div className="w-full flex items-center justify-start gap-x-4">
                    <div className="flex flex-col gap-y-2">
                      <Spent spentAmount={159} spentTitle="Savings" borderColor="#277C78"/>
                      <Spent spentAmount={110} spentTitle="Concert Ticket" borderColor="#626070"/>
                    </div>

                    <div className="flex flex-col gap-y-2">
                      <Spent spentAmount={40} spentTitle="Gift" borderColor="#82C9D7"/>
                      <Spent spentAmount={10} spentTitle="New Laptop" borderColor="#F2CDAC"/>
                    </div>
                  </div>
                </div>
          </div>

          {/* TRANSACTION SECTION OF THE OVERVIEW */}
          <div className="w-full flex flex-col bg-white p-8 rounded-xl gap-8">
            <div>
              <SmallContentTitle headingTitle="Transactions" buttonName="View All" navigateTo='/transactions'/>
            </div>

            <div className="flex flex-col gap-y-4">
                <TransactionList UserBalance="+$75.50" UserDate="19 Aug 2024" UserName="Emma Richardson" UserImage={{ src: "/images/person1.jpg", alt: "User Profile Image"}} />
                <hr className="border-gray-100"/>
                <TransactionList UserBalance="+$55.50" UserDate="19 Aug 2024" UserName="Savory Bites Bistro" UserImage={{ src: "/images/logo8.jpg", alt: "User Profile Image"}} />
                <hr className="border-gray-100"/>
                <TransactionList UserBalance="+$42.40" UserDate="18 Aug 2024" UserName="Daniel Carter" UserImage={{ src: "/images/person9.jpg", alt: "User Profile Image"}} />
                <hr className="border-gray-100"/>
                <TransactionList UserBalance="+$120.00" UserDate="17 Aug 2024" UserName="Sun Park" UserImage={{ src: "/images/person2.jpg", alt: "User Profile Image"}} />
                <hr className="border-gray-100"/>
                <TransactionList UserBalance="+$65.00" UserDate="17 Aug 2024" UserName="Urban Services Hub" UserImage={{ src: "/images/logo14.jpg", alt: "User Profile Image"}} />
              </div>

          </div>
        </div>

        {/* RIGHT SECTION OF THE OVERVIEW */}
        <div className="flex flex-col gap-6">

          {/* BUDGETS SECTION OF THE OVERVIEW PAGE */}
            <div className="w-full flex flex-col bg-white p-8 rounded-xl gap-8">
              <SmallContentTitle headingTitle="Budgets" buttonName="See Details" navigateTo='/budgets'/>

              <div className="w-full flex justify-between">
                <div className="w-[60%] h-[250px]">
                 <AppPieCharts />
                </div>
                <div className="flex flex-col gap-3">
                    <Spent spentAmount={50.01} spentTitle="Entertainment" borderColor="#277C78"/>
                    <Spent spentAmount={750.01} spentTitle="Bills" borderColor="#82C9D7"/>
                    <Spent spentAmount={75.01} spentTitle="Dinning Out" borderColor="#F2CDAC"/>
                    <Spent spentAmount={100.01} spentTitle="Personal Care" borderColor="#626070"/>
                </div>
              </div>
            </div>




          {/* RECURRING BILLS SECTION OF THE OVERVIEW PAGE */}
          <div className="w-full p-8 bg-white rounded-xl space-y-8">
                <div className='w-full h-auto'>
                  <SmallContentTitle headingTitle="Recurring Bills" buttonName="See Details" navigateTo='/recurringbills'/>
                </div>

                <div className= "w-full h-auto space-y-3 bg-white">
                <RecurringBillsComp bills="Paid Bills" amountBills={190.23} borderColor="#277C78"/>
                <RecurringBillsComp bills="Total Upcoming" amountBills={194.98} borderColor="#F2CDAC" />
                <RecurringBillsComp bills="Due Soon" amountBills={59.98} borderColor="#82C9D7"/>
                </div>

                
          </div>
        </div>
    </div>
    </div>

   
   
  );
}
