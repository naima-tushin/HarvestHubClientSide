import React, { useState, useEffect } from 'react';

const StarRating = ({ rating }) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
        if (i < rating) {
            stars.push(<span key={i} className="text-yellow-500">&#9733;</span>); // Filled star
        } else {
            stars.push(<span key={i} className="text-gray-400">&#9734;</span>); // Empty star
        }
    }
    return <div>{stars}</div>;
};

const Reviews = ({ foodId, onReviewAdded }) => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetchReviews();
    }, [foodId]);

    const fetchReviews = async () => {
        try {
            const response = await fetch(`http://localhost:5000/fetchReviews/${foodId}`);
            const data = await response.json();
            setReviews(data);
        } catch (error) {
            console.error('Error fetching reviews:', error);
        }
    };

    useEffect(() => {
        // Notify parent component when a new review is added
        if (onReviewAdded && reviews.length > 0) {
            onReviewAdded();
        }
    }, [reviews, onReviewAdded]);

    return (
        <div className="reviews-section w-[95%] mx-auto">
            <h2 className="text-3xl font-bold my-14 text-primary text-center">Reviews</h2>
            <div className='grid grid-cols-2 gap-10'>
            {reviews.length > 0 ? (
                reviews.map(review => (
                    <div key={review._id} className="mb-4 p-4 border rounded-md  bg-slate-200 ">
                        <h3 className="font-bold text-accent">{review.userName}</h3>
                        <p>{review.reviewText}</p>
                        <div className='flex flex-row'><p className='mr-4'>Rating: </p>
                        <StarRating rating={review.rating} /> </div>
                    </div>
                ))
            ) : (
                <p className='text-xl font-semibold my-10'>No reviews yet.</p>
            )}
            </div>
        </div>
    );
};

export default Reviews;
