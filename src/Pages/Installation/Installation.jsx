import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import AnimLoading from '../../Components/Loading/Loading';
import { getStoredApp, removeFromDb } from '../../utilities/AddToDb';
import InstalledApps from '../InstalledApps/InstalledApps';
import { toast } from 'react-toastify';

const Installation = () => {
  const data=useLoaderData() || [];
  const [appList, setAppList] = useState([]);
  const [sort, setSort] = useState('');
  useEffect(()=>{
      const storedAppData = getStoredApp();
      const ConvertedStoredApps = storedAppData.map(id=>parseInt(id));
      const myAppList = data.filter(app=>ConvertedStoredApps.includes(app.id));
      setAppList(myAppList);
  },[data]);

  const handleSort = (type) => {
    setSort(type);
    if (type === "htol"){
        const sortedHightoLow=[...appList].sort((a,b)=>b.downloads-a.downloads);
        setAppList(sortedHightoLow);
    }
    if (type === "ltoh"){
        const sortedLowtoHigh=[...appList].sort((a,b)=>a.downloads-b.downloads);
        setAppList(sortedLowtoHigh);
    }
  }
  
  const handleUninstall = (id) => {
    removeFromDb(id);
    const updatedList = appList.filter(app => app.id !== id);
    setAppList(updatedList);
    toast.success("App Uninstalled!!!");
  };
  
  if (!data.length) {
    return <AnimLoading></AnimLoading>
  }
  
  return (
    <div className='max-w-[1440px] mx-auto mb-10'>
      <div className='text-center flex flex-col items-center mt-10 gap-2'>
        <h1 className='text-5xl font-bold text-black'>Your Installed Apps</h1>
        <p className='text-gray-600'>Explore All Trending Apps on the Market developed by us</p>
      </div>
      <div className='mt-10 mb-8 flex items-center justify-between'>
        <h1 className='text-2xl text-black font-semibold'>{appList.length} Apps Found</h1>
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn m-1">Sort By Size</div>
          <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 md:w-52 p-2 shadow-sm">
            <li><a onClick={()=>handleSort("htol")}>High to Low</a></li>
            <li><a onClick={()=>handleSort("ltoh")}>Low to High</a></li>
          </ul>
        </div>
      </div>
      <div>
        {
          appList.map(a=><InstalledApps key={a.id} a={a} onUninstall={handleUninstall}></InstalledApps>)
        }
      </div>
    </div>
  );
};

export default Installation;