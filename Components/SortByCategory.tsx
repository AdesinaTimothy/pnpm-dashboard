import React from 'react'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select'
import { Separator } from './ui/separator';

interface SortByCategoryProps {
    selectedCategory: string;
    setSelectedCategory: (category: string) => void;
  }

const SortByCategory: React.FC<SortByCategoryProps> = ({selectedCategory, setSelectedCategory}) => {
  return (
    <div className="flex items-center justify-between gap-2">
    <p className="text-sm text-gray-500">
        Category
    </p>
    <Select value={selectedCategory} onValueChange={setSelectedCategory}>
      <SelectTrigger className="w-[180px]">
        <SelectValue className="py-3" placeholder="All Transactions"/>
      </SelectTrigger>
      <SelectContent>
        <SelectItem className="py-3" value="All Transactions">All Transactions</SelectItem>
        <Separator />
        <Separator />
        <SelectItem className="py-3" value="Bills">Bills</SelectItem>
        <Separator />
        <SelectItem className="py-3" value="Groceries">Groceries</SelectItem>
        <Separator />
        <SelectItem className="py-3" value="Dining Out">Dining Out</SelectItem>
        <Separator />
        <SelectItem className="py-3" value="Transportation">Transportation</SelectItem>
        <Separator />
        <SelectItem className="py-3" value="Personal-care">Personal Care</SelectItem>
        <Separator />
        <SelectItem className="py-3" value="Education">Education</SelectItem>
        <Separator />
        <SelectItem className="py-3" value="Lifestyle">Lifestyle</SelectItem>
        <Separator />
        <SelectItem className="py-3" value="Shopping">Shopping</SelectItem>
        <Separator />
        <SelectItem className="py-3" value="General">General</SelectItem>
      </SelectContent>
    </Select>
    </div>
  )
}

export default SortByCategory
