import React from 'react'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select'

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
        <SelectValue placeholder="All Transactions"/>
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="All Transactions">Entertainment</SelectItem>
        <SelectItem value="Entertainment">Entertainment</SelectItem>
        <SelectItem value="Bills">Bills</SelectItem>
        <SelectItem value="Groceries">Groceries</SelectItem>
        <SelectItem value="Dining Out">Dining Out</SelectItem>
        <SelectItem value="Transportation">Transportation</SelectItem>
        <SelectItem value="Personal-care">Personal Care</SelectItem>
        <SelectItem value="Education">Education</SelectItem>
        <SelectItem value="Lifestyle">Lifestyle</SelectItem>
        <SelectItem value="Shopping">Shopping</SelectItem>
        <SelectItem value="General">General</SelectItem>
      </SelectContent>
    </Select>
    </div>
  )
}

export default SortByCategory
