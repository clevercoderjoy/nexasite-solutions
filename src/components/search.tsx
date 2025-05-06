import React from 'react';
import { Input } from './ui/input';
import { LuSearch } from 'react-icons/lu';

const Search = () => {
  return (
    <div className="flex justify-center my-8">
      <div className="relative w-1/2">
        <Input
          placeholder="Search..."
          className="h-16 w-full bg-[#f3f3f3] border-0 outline-none leading-loose tracking-widest text-lg rounded-2xl py-4 pr-14 pl-6 focus:ring-0 focus:outline-none"
        />
        <LuSearch className="absolute right-5 top-1/2 transform -translate-y-1/2 text-3xl text-gray-500" />
      </div>
    </div>
  );
};

export default Search;
