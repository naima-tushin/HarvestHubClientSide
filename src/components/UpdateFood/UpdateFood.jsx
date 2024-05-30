import { Helmet } from "react-helmet-async";
import { useLoaderData } from 'react-router-dom';
import React from "react";
import Swal from "sweetalert2";
import backgroundImg from '../../assets/images/bg_addFood.avif';
import logo from '../../assets/images/logo1.png';



const UpdateFood = () => {

    const food = useLoaderData();
    const {_id, foodName, foodImage, foodQuantity, pickupLocation, expiredDateTime, additionalNotes, foodStatus } = food;

    const handleUpdateFood = event => {
        event.preventDefault();
        const form =  event.target;
        const foodName =  form.foodName.value;
        const foodImage =  form.foodImage.value;
        const foodStatus =  form.foodStatus.value;
        const foodQuantity =  form.foodQuantity.value;
        const pickupLocation =  form.pickupLocation.value;
        const expiredDateTime = form.expiredDateTime.value;
     
        const updateFood = {foodName, foodImage, foodStatus, foodQuantity, expiredDateTime, pickupLocation};
        
        console.log(updateFood);
        fetch(`http://localhost:5000/foodUpdate/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateFood)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.modifiedCount > 0){
                Swal.fire({
                    title: `${updateFood.foodName} Updated`,
                    text: "Food Updated Successfully",
                    icon: "success"
                });
            }
        });
    }
   
    return (
        <div className="lg:flex md:flex justify-center items-center overflow-hidden lg:gap-10" style={{ backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.7), rgba(0,0,0,0.3)), url(${backgroundImg})`, backgroundSize: 'cover' }}>
            <Helmet>
                <title>Harvest Hub | Update Foods</title>
            </Helmet>
            <form onSubmit={handleUpdateFood} className="bg-secondary lg:p-8 p-4 rounded-lg shadow-md my-5 md:my-10 md:ml-5 lg:ml-40">
            <img className="w-[15%] flex items-center justify-center mx-auto " src={logo} alt="" />
                <h2 className="lg:text-2xl font-semibold lg:mb-4 mb-2 text-center">Update Food</h2>
                <div className="grid lg:grid-cols-2 md:grid-cols-2 lg:gap-4 md:gap-4">
                    <div className="lg:mb-4 mb-2">
                        <label htmlFor="foodImage" className="block text-sm font-medium text-black">Food Image URL</label>
                        <input type="text" name="foodImage" defaultValue={foodImage} placeholder="Food Image" className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded py-1 px-1 lg:py-2 lg:px-2" />
                    </div>
                    <div className="lg:mb-4 mb-2">
                        <label htmlFor="foodName" className="block text-sm font-medium text-black">Food Name</label>
                        <input type="text" name="foodName" defaultValue={foodName} placeholder="Food Name" className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded py-1 px-1 lg:py-2 lg:px-2" />
                    </div>
                    <div className="lg:mb-4 mb-2">
                        <label htmlFor="foodStatus" className="block text-sm font-medium text-black">Food Status</label>
                        <select name="foodStatus" defaultValue={foodStatus} className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded py-1 px-1 lg:py-2 lg:px-2">
                            <option value="">Select Status</option>
                            <option value="Available">Available</option>
                            <option value="Not Available">Not Available</option>
                        </select>
                    </div>
                    <div className="lg:mb-4 mb-2">
                        <label htmlFor="foodQuantity" className="block text-sm font-medium text-black">Quantity</label>
                        <input type="text" name="foodQuantity" defaultValue={foodQuantity} placeholder="Food Quantity" className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded py-1 px-1 lg:py-2 lg:px-2" />
                    </div>
                    <div className="lg:mb-4 mb-2">
                        <label htmlFor="pickupLocation" className="block text-sm font-medium text-black">Pickup Location</label>
                        <input type="text" name="pickupLocation" placeholder="Pickup Location" defaultValue={pickupLocation} className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded py-1 px-1 lg:py-2 lg:px-2" />
                    </div>
                    <div className="lg:mb-4 mb-2">
                        <label htmlFor="expiredDateTime" className="block text-sm font-medium text-black">Expiry Date and Time</label>
                        <input type="datetime-local" name="expiredDateTime" defaultValue={expiredDateTime} className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded py-1 px-1 lg:py-2 lg:px-2" />
                    </div>
                </div>
                <div className="flex justify-end lg:mt-6 mt-3">
                    <button type="submit" className="inline-flex justify-center py-2 px-4 shadow-sm text-sm font-medium rounded-md text-accent border border-white bg-black hover:bg-primary hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2">
                        Update Food
                    </button>
                </div>
            </form>
        </div>
    );
};    

export default UpdateFood;
