import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MyFoodRequest = () => {
    const [foodRequests, setFoodRequests] = useState([]);

    useEffect(() => {
        // Fetch food requests data for the logged-in user
        const fetchFoodRequests = async () => {
          try {
            // Replace 'userId' with the actual ID of the logged-in user
            const response = await axios.get(`/api/foodRequests?userId=${userId}`);
            setFoodRequests(response.data);
          } catch (error) {
            console.error('Error fetching food requests:', error);
          }
        };
    
        fetchFoodRequests();
      }, []);

    return (
       <div className="container mx-auto mt-8">
      <h1 className="text-2xl font-bold mb-4">My Food Requests</h1>
      <div className="grid grid-cols-1 gap-4">
        {foodRequests.map(request => (
          <div key={request.id} className="bg-gray-100 p-4 rounded-md">
            <p><span className="font-semibold">Donar Name:</span> {request.donorName}</p>
            <p><span className="font-semibold">Pickup Location:</span> {request.pickupLocation}</p>
            <p><span className="font-semibold">Expire Date:</span> {request.expireDate}</p>
            <p><span className="font-semibold">Request Date:</span> {request.requestDate}</p>
            <p><span className="font-semibold">Your Donation Amount:</span> {request.donationAmount}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyFoodRequest;