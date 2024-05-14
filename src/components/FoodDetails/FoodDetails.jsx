import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";

const FoodDetails = () => {
    const { user } = useAuth();
    const foodDetails = useLoaderData();
    const [showModal, setShowModal] = useState(false);
    const [additionalNotes, setAdditionalNotes] = useState('');

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

    const handleRequestClick = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    const handleRequestFood = async () => {
        try {
            const response = await fetch('http://localhost:5000/addRequestFood', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    foodName: foodDetails.foodName,
                    foodImage: foodDetails.foodImage,
                    foodQuantity: foodDetails.foodQuantity,
                    pickupLocation: foodDetails.pickupLocation,
                    expiredDateTime: foodDetails.expiredDateTime,
                    requestDateTime: new Date().toISOString(),
                    additionalNotes: additionalNotes,
                    donatorName: foodDetails.donatorName,
                    donatorEmail: foodDetails.donatorEmail,
                    foodStatus: 'Available',
                    userEmail: user?.email,
                })
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const updateFood = { foodStatus: "Requested" };
            await fetch(`http://localhost:5000/foodUpdateFoodStatus/${foodDetails._id}`, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(updateFood)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);

                });

            setShowModal(false);
            setAdditionalNotes('');
            Swal.fire({
                title: `Request Sent`,
                text: "Successful",
                icon: "success"
            });
        } catch (error) {
            console.error('There was a problem with the request:', error);
        }
    };

    const handleAdditionalNotesChange = (event) => {
        setAdditionalNotes(event.target.value);
    };

    return (
        <div className="container mx-auto px-5 py-8 relative">
            <Helmet>
                <title>Harvest Hub | {foodDetails.foodStatus === 'Available' ? 'Available' : 'Featured'} Food Details</title>
            </Helmet>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="md:col-span-1 relative">
                    <div className="relative">
                        <div className="absolute inset-0 bg-black opacity-50 rounded-lg"></div>
                        <img className="w-full rounded-lg shadow-md" src={foodDetails.foodImage} alt={'Food Image'} />
                        <h2 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-purple-800 text-white px-8 py-4 rounded text-xl">{foodDetails.foodName}</h2>
                    </div>
                </div>
                <div className="md:col-span-1 flex flex-col justify-center">
                    <h1 className="text-3xl font-bold text-purple-800 mb-4">{foodDetails.foodName}</h1>
                    <div className="flex items-center mb-4">
                        <img src={foodDetails.donatorImage} alt={foodDetails.donatorName} className="w-10 h-10 rounded-full mr-2" />
                        <p className="text-gray-700">{foodDetails.donatorName}</p>
                    </div>
                    <p className="text-gray-700 mb-4"><span className="font-bold">Food Quantity:</span> {foodDetails.foodQuantity} servings</p>
                    <p className="text-gray-700 mb-4"><span className="font-bold">Pickup Location:</span> {foodDetails.pickupLocation}</p>
                    <p className="text-gray-700 mb-4"><span className="font-bold">Expired:</span> {formatDateTime(foodDetails.expiredDateTime)}</p>
                    <p className="text-gray-700 mb-4"><span className="font-bold">Additional Notes:</span> {foodDetails.additionalNotes}</p>
                    {foodDetails.foodStatus === 'Available' &&
                        <button className="bg-black text-accent border-accent border-4 hover:border-black hover:bg-accent hover:text-white px-4 py-2 rounded-md mx-auto flex" onClick={handleRequestClick}>Request Food</button>
                    }
                </div>
            </div>
            {showModal && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <div className="bg-white p-8 rounded-lg">
                        <h2 className="text-2xl font-bold mb-4">Request Food</h2>
                        <div className="mb-4">
                            <img className="w-20 h-20 rounded-lg shadow-md" src={foodDetails.foodImage} alt={'Food Image'} />
                            <h1 className="text-3xl font-bold text-purple-800 mb-4">{foodDetails.foodName}</h1>
                            <p className="text-gray-700 mb-2"><span className="font-bold">Donor Name:</span> {foodDetails.donatorName}</p>
                            <p className="text-gray-700 mb-2"><span className="font-bold">Donor Email:</span> {foodDetails.donatorEmail}</p>
                            <p className="text-gray-700 mb-2"><span className="font-bold">Food Quantity:</span> {foodDetails.foodQuantity} servings</p>
                            <p className="text-gray-700 mb-2"><span className="font-bold">Pickup Location:</span> {foodDetails.pickupLocation}</p>
                            <p className="text-gray-700 mb-2"><span className="font-bold">Expired:</span> {formatDateTime(foodDetails.expiredDateTime)}</p>
                            <label className="block text-gray-700 font-bold mb-2">Additional Notes:</label>
                            <textarea value={additionalNotes} onChange={handleAdditionalNotesChange} className="w-full px-3 py-2 border rounded-md" />
                        </div>
                        <p className="text-gray-700 mb-2"><span className="font-bold">Your Email</span> {user.email}</p>
                        <div className="flex justify-between">
                            <button className="bg-red-500 text-white px-4 py-2 rounded-md" onClick={handleCloseModal}>Cancel</button>
                            <button className="bg-green-500 text-white px-4 py-2 rounded-md" onClick={handleRequestFood}>Request</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default FoodDetails;
