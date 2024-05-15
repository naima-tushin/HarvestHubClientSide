import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { Helmet } from "react-helmet-async";
import { FaUserAlt, FaMapMarkerAlt, FaClock } from 'react-icons/fa';

const MyFoodRequest = () => {
  const allFood = useLoaderData();

  const formatDateTime = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
    const hours = date.getHours();
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const ampm = hours >= 12 ? 'pm' : 'am';
    const formattedHours = hours % 12 || 12;
    return `${day}-${month}-${year}, ${formattedHours}:${minutes} ${ampm}`;
  };

  return (
    <div className="container mx-auto lg:my-8 my-6">
      <Helmet>
        <title>Harvest Hub | My Food Request</title>
      </Helmet>
      <h1 className="text-3xl font-bold lg:my-10 my-6 text-center text-primary">My Food Requests</h1>
      <div className="w-[95%] gap-6 mx-auto grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
        {allFood.map(request => (
          <div key={request.id} className="flex items-start mb-6">
            <div className="w-1/6 flex flex-col items-center">
              <div className="rounded-full bg-primary text-white p-2 mb-2">
                <FaUserAlt />
              </div>
              <div className="h-full bg-gray-300 w-1"></div>
            </div>
            <div className="w-5/6 bg-gray-100 p-4 rounded-lg shadow-md">
              <p className="text-lg font-semibold mb-2">Donator Name: {request.donatorName}</p>
              <p className="flex items-center text-black mb-2"><FaMapMarkerAlt className="mr-2" /> Pickup Location: {request.pickupLocation}</p>
              <p className="flex items-center text-black mb-2"><FaClock className="mr-2" /> Expire Date: {formatDateTime(request.expiredDateTime)}</p>
              <p className="flex items-center text-black"><FaClock className="mr-2" /> Request Date: {formatDateTime(request.requestDateTime)}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyFoodRequest;
