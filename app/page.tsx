import Cards from "@/Components/Cards";

export default function Home() {
  return (
    <div className="w-full">
      {/* TOP SECTION OF OVERVIEW */}
    <div className="w-full flex flex-col gap-8">
      <h1 className="text-[32px] font-bold text-gray-900 ">Overview</h1>
      <div className="w-full flex flex-col md:flex-row md:items-center md:justify-between gap-x-6 ">
        <Cards bgColor="bg-gray-900" hColor="text-white" pColor="text-white" amount={4836.04} amountTitle="Current Balance"/>
        <Cards bgColor="bg-white" hColor="text-gray-900" pColor="text-gray-500" amount={3814.25} amountTitle="Income"/>
        <Cards bgColor="bg-white" hColor="text-gray-900" pColor="text-gray-500" amount={1700.50} amountTitle="Expenses"/>
      </div>
    </div>


    <div></div>
    </div>
  );
}
