import React, { useState } from "react";
import { useLoaderData, useParams, Link } from "react-router";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";
import { GoDownload } from "react-icons/go";
import { IoMdStar } from "react-icons/io";
import { FaThumbsUp } from "react-icons/fa";
import { addToStoredDB } from "../../utilities/AddToDb";

import NotFound from "../../Components/NotFound/NotFound";
import AnimLoading from "../../Components/Loading/Loading";


const AppDetails = () => {
  const { id } = useParams();
  const appId = parseInt(id);
  const [installed, setInstalled] = useState(false);
  const data = useLoaderData();
  if (!data || data.length === 0) {
    return <AnimLoading></AnimLoading>
  }
  const singleData = data.find((app) => app.id === appId);

  

  if (!singleData) {
    return (
      <NotFound></NotFound>
    );
  }

  const {
    image,
    title,
    companyName,
    description,
    reviews,
    ratingsAvg,
    downloads,
    size,
    ratings = [],
  } = singleData;

  
  const ratingData = [
    ratings.find(r => r.name.toLowerCase().includes("5")) || { count: 0, name: "5 Star" },
    ratings.find(r => r.name.toLowerCase().includes("4")) || { count: 0, name: "4 Star" },
    ratings.find(r => r.name.toLowerCase().includes("3")) || { count: 0, name: "3 Star" },
    ratings.find(r => r.name.toLowerCase().includes("2")) || { count: 0, name: "2 Star" },
    ratings.find(r => r.name.toLowerCase().includes("1")) || { count: 0, name: "1 Star" },
  ];

  const handleInstall = (id) => {
    setInstalled(true);
    addToStoredDB(id);
  }

  return (
    <div className="max-w-5xl mx-auto bg-gray-100 p-6 mt-10 rounded-xl">
      <div className="flex flex-col md:flex-row items-center md:items-start gap-6 bg-white p-8 rounded-xl shadow-md">
        <img src={image} className="w-40 h-40 object-contain rounded-md shadow-sm"/>
        <div className="flex-1">
          <h1 className="text-3xl font-bold text-black">{title}</h1>
          <p className="text-gray-500 mt-1 border-b border-gray-300 p-4">Developed by
            <span className="text-purple-600 font-medium"> {companyName}</span>
          </p>
          <div className="flex flex-wrap items-center gap-6 mt-4 text-gray-700 border-b border-gray-300 p-4">
            <div className="flex flex-col items-center">
                <GoDownload className="text-5xl text-green-500"></GoDownload>
             <p>
              <span className="font-semibold text-green-600">{downloads} </span>
              Downloads
             </p>
            </div>
            <div className="flex flex-col items-center">
             <IoMdStar className="text-5xl text-amber-500"></IoMdStar>
             <p><span className="font-semibold">{ratingsAvg}</span> Rating</p>
            </div>
            <div className="flex flex-col items-center">
             <FaThumbsUp className="bg-purple-500 text-white text-5xl p-2"></FaThumbsUp> 
             <p><span className="font-semibold">{reviews}</span> Reviews</p>
            </div>
          </div>
          <button onClick={()=>handleInstall(id)} disabled={installed} className={`mt-4 px-6 py-2 rounded-md transition
              ${installed 
                ? "bg-gray-400 cursor-not-allowed text-white" 
                : "bg-green-600 hover:bg-green-700 text-white"
              }`}
          >
            {installed ? "Installed ✅" : `Install Now (${size} MB)`}
          </button>
        </div>
      </div>

      
      <div className="mt-10 bg-white p-8 rounded-xl shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Ratings</h2>
        <div className="w-full h-64">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              layout="vertical"
              data={ratingData}
              margin={{ top: 10, right: 30, left: 40, bottom: 10 }}
            >
              <XAxis type="number" hide />
              <YAxis type="category" dataKey="name" />
              <Tooltip cursor={{ fill: "rgba(0,0,0,0.05)" }} />
              <Bar dataKey="count" radius={[0, 10, 10, 0]}>
                {ratingData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill="#f97316" />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      
      <div className="mt-10 bg-white p-8 rounded-xl shadow-md">
        <h2 className="text-2xl font-semibold mb-4 text-black">Description</h2>
        <p className="text-gray-700 leading-relaxed">{description}</p>
      </div>

      
      <div className="flex justify-center mt-10">
        <Link
          to="/"
          className="px-10 py-2 bg-gradient-to-r from-purple-900 to-purple-500 text-white rounded-md hover:scale-105 transition"
        >
          Go Back
        </Link>
      </div>
    </div>
  );
};

export default AppDetails;
