"use client"
import { useParticipantsStore } from '@/store/useParticipantsStore';
import React, { useState } from 'react'
import { GrSearch } from "react-icons/gr";

const SearchInput = () => {
  const searchQuery = useParticipantsStore(state => state.searchQuery);
  const setSearchQuery = useParticipantsStore(state => state.setSearchQuery);

  const [search, setSearch] = useState<string>('')
  // debounce the search query
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    setTimeout(() => {
      setSearchQuery(e.target.value);
    }, 500);
  };


  return (
    <div className='flex rounded-md bg-white w-full px-5 py-3 shadow-sm'>
      <input type='text' className=' border-none w-full outline-none' placeholder='Search patients...' onChange={handleSearch} />
      <GrSearch className='text-[#000000] text-xl font-bold mr-3' />
    </div>
  )
}

export default SearchInput