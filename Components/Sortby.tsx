
import React from 'react'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select'

const Sortby = () => {
  return (
    <div className="flex items-center gap-x-3 justify-start">
      <p className="text-sm text-gray-500">Sort by</p>
      <Select>
        <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Latest" />
        </SelectTrigger>
        <SelectContent>
            <SelectItem value="Latest">Latest</SelectItem>
            <SelectItem value="Oldest">Oldest</SelectItem>
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
