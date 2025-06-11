import PotCards from '@/Components/PotCards'
import PotHeading from '@/Components/PotHeading'
import React from 'react'

const page = () => {
  return (
    <div className="w-full mt-8">
      <PotHeading />

      {/* POTS GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 my-4">
      <PotCards />
      <PotCards />
      <PotCards />
      <PotCards />
      <PotCards />
      </div>
    </div>
  )
}

export default page
