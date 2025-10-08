import React, { Suspense, useState } from 'react';
import { useLoaderData } from 'react-router';
import { CiSearch } from "react-icons/ci";
import App from '../App/App';

const AllApps = () => {
  const data = useLoaderData();
  const [search, setSearch] = useState('');


  const filtered = data.filter(d =>
    d.title.toLowerCase().includes(search.toLowerCase())
  );

  const handleSearch = e => {
      setSearch(e.target.value)
  }

  return (
    <div className='max-w-[1440px] mx-auto px-4'>
      
      <div className='flex flex-col items-center m-4 text-center'>
        <h1 className='text-5xl text-black font-bold'>Our All Applications</h1>
        <p className='text-gray-500 mt-4'>
          Explore All Apps on the Market developed by us. We code for Millions
        </p>
      </div>


      <div className='flex flex-col md:flex-row justify-between items-center gap-4 mb-6'>
        <h3 className='text-lg font-medium text-gray-700'>({filtered.length}) Apps Found</h3>
       <div className='flex items-center border border-gray-300 px-4 py-2 w-full md:w-1/3'>
          <CiSearch className='text-gray-500 text-xl mr-2' />
          <input type='text' placeholder='seacrh Apps' value={search}
            onChange={handleSearch}
            className='outline-none flex-1 text-gray-700'
          />
        </div>
      </div>

      
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-items-center gap-8'>
        <Suspense fallback={<span>Loading...</span>}>
          {filtered.map((d) => (
            <App key={d.id} d={d} />
          ))}
        </Suspense>
      </div>
    </div>
  );
};

export default AllApps;
