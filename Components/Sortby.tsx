
import React from 'react'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select'


type SortbyProps = {
  selectedSort?: string;
  setSelectedSort?: (value: string) => void;
}

const Sortby: React.FC<SortbyProps> = ({selectedSort, setSelectedSort}) => {
  return (
    <div className="flex items-center gap-x-2 justify-start">
      <p className="text-sm text-gray-500">Sort by</p>
      <Select value={selectedSort} onValueChange={setSelectedSort}>
        <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Latest" />
        </SelectTrigger>
        <SelectContent>
            <SelectItem value="latest">Latest</SelectItem>
            <SelectItem value="oldest">Oldest</SelectItem>
            <SelectItem value="AtoZ">A to Z</SelectItem>
            <SelectItem value="ZtoA">Z to A</SelectItem>
            <SelectItem value="highest">Highest</SelectItem>
            <SelectItem value="lowest">Lowest</SelectItem>
        </SelectContent>
        </Select>
    </div>
  )
}

export default Sortby
