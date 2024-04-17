import React from 'react'
import { GrSearch } from "react-icons/gr";

const SearchInput = () => {
  return (
    <div className='flex rounded-md bg-white w-full px-5 py-3 shadow-sm'>
        <input type='text' className=' border-none w-full outline-none' placeholder='Search patients...' />
        <GrSearch className='text-[#000000] text-xl font-bold mr-3' />
    </div>
  )
}

export default SearchInput