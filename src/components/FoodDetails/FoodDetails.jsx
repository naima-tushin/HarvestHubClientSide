import React, { useState, useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';
import useAuth from "../../Hooks/useAuth";
import { Helmet } from "react-helmet-async";
import backgroundImg from '../../assets/images/bgDetails.jpg';
import Swal from 'sweetalert2';
import Reviews from '../ReviewSection/ReviewSection';

const FoodDetails = () => {
    const { user } = useAuth();
    const foodDetails = useLoaderData();
    const [showModal, setShowModal] = useState(false);
    const [additionalNotes, setAdditionalNotes] = useState('');
    const [showSuccessModal, setShowSuccessModal] = useState(false);
    const [showReviewModal, setShowReviewModal] = useState(false);
    const [reviewText, setReviewText] = useState('');
    const [rating, setRating] = useState(0);
    const [reviewCount, setReviewCount] = useState(0);

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

    const handleReviewClick = () => {
        setShowReviewModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setShowReviewModal(false);
    };

    const handleRequestFood = async () => {
        try {
            const response = await fetch('https://harvest-hub-server-nine.vercel.app/addRequestFood', {
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
            await fetch(`https://harvest-hub-server-nine.vercel.app/foodUpdateFoodStatus/${foodDetails._id}`, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(updateFood)
            });

            setShowModal(false);
            setAdditionalNotes('');
            setShowSuccessModal(true);
        } catch (error) {
            console.error('There was a problem with the request:', error);
        }
    };

    const handleSuccessAcknowledge = () => {
        setShowSuccessModal(false);
        window.location.href = '/availableFood';
    };

    const handleAdditionalNotesChange = (event) => {
        setAdditionalNotes(event.target.value);
    };

    const handleReviewSubmit = async () => {
        try {
            if (reviewText === '') {
                Swal.fire({
                    title: `Add a Review`,
                    text: "Review cannot be empty",
                    icon: "error"
                });
            } else if (rating === 0) {
                Swal.fire({
                    title: `Add a Rating`,
                    text: "Rating cannot be 0",
                    icon: "error"
                });
            } else {
                const response = await fetch('https://harvest-hub-server-nine.vercel.app/addReview', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        foodId: foodDetails._id,
                        reviewText: reviewText,
                        rating: rating,
                        userEmail: user?.email,
                        userName: user?.displayName,
                    })
                });

                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }

                setShowReviewModal(false);
                Swal.fire({
                    title: `Review Added`,
                    text: "Thank you for your feedback",
                    icon: "success"
                });
                setReviewText('');
                setRating(0);
                setReviewCount(reviewCount + 1);
                window.location.reload();
            }
        } catch (error) {
            console.error('There was a problem with the request:', error);
        }
    };

    const handleRatingChange = (newRating) => {
        setRating(newRating);
    };

    return (
        <div className="container mx-auto px-2 lg:px-5">
            <Helmet>
                <title>Harvest Hub | {foodDetails.foodStatus === 'Available' ? 'Available' : 'Featured'} Food Details</title>
            </Helmet>
            <div className="w-full lg:w-[95%] rounded-xl mx-auto mt-10 mb-10">
                <div className="inset-0 flex flex-col justify-center items-center px-4 md:px-0 lg:px-32 py-10 rounded-xl shadow-xl shadow-black" style={{ backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${backgroundImg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-0">
                        <div className="md:col-span-1">
                            <div className="">
                                <div className="inset-0 opacity-50 rounded-lg"></div>
                                <img className="lg:w-[70%] md:w-[80%] rounded-lg ml-0 md:ml-20 lg:ml-40 opacity-75 shadow-lg shadow-black" src={foodDetails.foodImage} alt={'Food Image'} />
                            </div>
                        </div>
                        <div className="md:col-span-1 flex flex-col justify-center items-center">
                            <h1 className="text-xl lg:text-3xl font-bold text-accent mb-2 lg:mb-4">{foodDetails.foodName}</h1>
                            <p className="text-secondary lg:text-xl mb-2 lg:mb-4"><span className="font-bold text-white">Donor:</span> {foodDetails.donatorName}</p>
                            <p className="text-secondary lg:text-xl mb-2 lg:mb-4"><span className="font-bold text-white">Food Quantity:</span> {foodDetails.foodQuantity} servings</p>
                            <p className="text-secondary lg:text-xl mb-2 lg:mb-4"><span className="font-bold text-white">Pickup Location:</span> {foodDetails.pickupLocation}</p>
                            <p className="text-secondary lg:text-xl text-center mb-2 lg:mb-4"><span className="font-bold text-white">Expired:</span> {formatDateTime(foodDetails.expiredDateTime)}</p>
                            <p className="text-secondary w-full md:w-[80%] lg:text-xl text-center mb-2 lg:mb-4"><span className="font-bold text-white">Additional Notes:</span> {foodDetails.additionalNotes}</p>
                        </div>
                    </div>
                    {foodDetails.foodStatus === 'Available' &&
                        <button className="bg-black text-accent border-accent border-4 hover:border-black hover:bg-accent hover:text-white px-4 py-2 rounded-md mx-auto flex mt-4 lg:mt-8" onClick={handleRequestClick}>Request Food</button>
                    }
                    <button className="bg-black text-accent border-accent border-4 hover:border-black hover:bg-accent hover:text-white px-4 py-2 rounded-md mx-auto flex mt-4 lg:mt-8" onClick={handleReviewClick}>Add Review</button>
                </div>
            </div>
            {showModal && (
                <div className="lg:fixed md:fixed inset-0 lg:bg-black lg:bg-opacity-50 flex items-center justify-center">
                    <div className="bg-secondary lg:bg-white p-8 rounded-lg mb-5 lg:mb-0">
                        <h2 className="text-lg lg:text-2xl font-bold lg:mb-4 md:mb-2 text-center text-primary">Request Food</h2>
                        <div className="mb-4 flex flex-col items-center">
                            <img className="w-20 h-20 rounded-lg shadow-md lg:mb-4 md:mb-2" src={foodDetails.foodImage} alt={'Food Image'} />
                            <h1 className="text-lg lg:text-3xl font-bold text-primary lg:mb-4 md:mb-2 text-center">{foodDetails.foodName}</h1>
                            <div className='lg:flex flex-col md:flex-col gap-6 w-full'>
                                <div>
                                    <p className="text-gray-700 lg:mb-4 md:mb-2"><span className="font-bold">Donator Name:</span> {foodDetails.donatorName}</p>
                                    <p className="text-gray-700 lg:mb-4 md:mb-2"><span className="font-bold">Donator Email:</span> {foodDetails.donatorEmail}</p>
                                </div>
                                <div>
                                    <p className="text-gray-700 lg:mb-4 md:mb-2"><span className="font-bold">Pickup Location:</span> {foodDetails.pickupLocation}</p>
                                    <p className="text-gray-700 lg:mb-4 md:mb-2"><span className="font-bold">Expired:</span> {formatDateTime(foodDetails.expiredDateTime)}</p>
                                </div>
                            </div>
                            <p className="text-gray-700 lg:mb-4 md:mb-2 text-center"><span className="font-bold">Request Date:</span> {formatDateTime(new Date())}</p>
                            <label className="block text-gray-700 font-bold lg:mb-2 md:mb-2">Additional Notes:</label>
                            <textarea value={additionalNotes} onChange={handleAdditionalNotesChange} className="w-full px-3 py-2 border rounded-md" />
                        </div>
                        <p className="text-gray-700 lg:mb-4 text-center md:mb-2"><span className="font-bold">Your Email:</span> {user.email}</p>

                        <div className="flex justify-between">
                            <button className="bg-accent text-black border-2 border-black hover:bg-black hover:text-accent hover:accent px-4 py-2 rounded-md" onClick={handleCloseModal}>Cancel</button>
                            <button className="bg-black text-accent border-2 border-accent hover:bg-accent hover:text-black hover:border-black px-4 py-2 rounded-md" onClick={handleRequestFood}>Request</button>
                        </div>
                    </div>
                </div>
            )}

            {/* Review Modal */}
            {showReviewModal && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <div className="bg-white p-8 rounded-lg mb-5 lg:mb-0">
                        <h2 className="text-lg lg:text-2xl font-bold lg:mb-4 md:mb-2 text-center text-primary">Add Review</h2>
                        <div className="mb-4">
                            <label className="block text-gray-700 font-bold mb-2">Your Review:</label>
                            <textarea value={reviewText} onChange={(e) => setReviewText(e.target.value)} className="w-full px-3 py-2 border rounded-md" />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 font-bold mb-2">Rating:</label>
                            <div className="flex">
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <button key={star} className={`text-xl ${star <= rating ? 'text-yellow-500' : 'text-gray-400'}`} onClick={() => handleRatingChange(star)}>★</button>
                                ))}
                            </div>
                        </div>
                        <div className="flex justify-between">
                            <button className="bg-accent text-black border-2 border-black hover:bg-black hover:text-accent hover:accent px-4 py-2 rounded-md" onClick={handleCloseModal}>Cancel</button>
                            <button className="bg-black text-accent border-2 border-accent hover:bg-accent hover:text-black hover:border-black px-4 py-2 rounded-md" onClick={handleReviewSubmit}>Submit Review</button>
                        </div>
                    </div>
                </div>
            )}

            {/* Success modal */}
            {showSuccessModal && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <div className="bg-white p-8 rounded-lg border-black border-4 shadow-2xl shadow-primary">
                        <h2 className="text-2xl font-bold mb-4">Request Sent</h2>
                        <p className="text-gray-700 mb-4 text-center">Successful</p>
                        <button className="bg-black text-accent border-2 border-accent hover:bg-accent hover:text-black hover:border-black px-4 py-2 rounded-md mx-auto flex" onClick={handleSuccessAcknowledge}>Okay</button>
                    </div>
                </div>
            )}

            <Reviews foodId={foodDetails._id} onReviewAdded={() => setReviewCount(reviewCount + 1)} />
        </div>
    );
};

export default FoodDetails;
