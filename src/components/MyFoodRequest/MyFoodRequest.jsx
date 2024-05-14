import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { Helmet } from "react-helmet-async";

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
    return `Date: ${day}-${month}-${year} Time: ${formattedHours}:${minutes} ${ampm}`;
  };

  return (
    <div className="container mx-auto mt-8">
      <Helmet>
        <title>Harvest Hub | My Food Request</title>
      </Helmet>
      <h1 className="text-2xl font-bold mb-4">My Food Requests</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {allFood.map(request => (
          <div key={request.id} className="bg-gray-100 p-4 rounded-md items-center justify-center flex">
            <div className="grid grid-cols-3 gap-4">
              <div>
                <p><span className="font-semibold">Donator Name:</span> {request.donatorName}</p>
                <p><span className="font-semibold">Food Name:</span> {request.foodName}</p>
                <p><span className="font-semibold">Food Quantity:</span> {request.foodQuantity}</p>
              </div>
              <div>
                <p><span className="font-semibold">Pickup Location:</span> {request.pickupLocation}</p>
                <p><span className="font-semibold">Expire Date:</span> {formatDateTime(request.expiredDateTime)}</p>
                <p><span className="font-semibold">Request Date:</span> {formatDateTime(request.requestDateTime)}</p>
              </div>
            </div>
          </div>

        ))}
      </div>
    </div>
  );
};

export default MyFoodRequest;
