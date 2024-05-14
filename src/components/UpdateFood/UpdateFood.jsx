import { Helmet } from "react-helmet-async";
import { useLoaderData } from 'react-router-dom';
import React from "react";
import Swal from "sweetalert2";

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
        <div className="font-roboto h-full flex justify-center items-center border bg-[#322760] bg-opacity-40 mt-8">
            <Helmet>
                <title>Harvest Hub | Update Food</title>
            </Helmet>
            <form onSubmit={handleUpdateFood} className="p-20 items-center gap-20">
                <div className="grid grid-cols-3 gap-6">
                    <div>
                        <label htmlFor="foodImage">Food Image URL</label>
                        <input type="text" name="foodImage" defaultValue={foodImage} placeholder="Food Image" className="input input-bordered w-full max-w-xs" />
                    </div>
                    <div>
                        <label htmlFor="foodName">Food Name</label>
                        <input type="text" name="foodName" defaultValue={foodName} placeholder="Food Name" className="input input-bordered w-full max-w-xs" />
                    </div>
                    <div>
                        <label htmlFor="foodStatus">Food Status</label>
                        <select name="foodStatus" defaultValue={foodStatus} className="input input-bordered w-full max-w-xs">
                            <option value="">Select Status</option>
                            <option value="Available">Available</option>
                            <option value="Not Available">Not Available</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="foodQuantity">Quantity</label>
                        <input type="text" name="foodQuantity" defaultValue={foodQuantity} placeholder="Food Quantity" className="input input-bordered w-full max-w-xs" />
                    </div>
                    <div>
                        <label htmlFor="pickupLocation">Pickup Location</label>
                        <input type="text" name="pickupLocation" placeholder="Pickup Location" defaultValue={pickupLocation} className="input input-bordered w-full max-w-xs" />
                    </div>
                    <div>
                        <label htmlFor="expiredDateTime">Expiry Date and Time</label>
                        <input type="datetime-local" name="expiredDateTime" defaultValue={expiredDateTime} className="input input-bordered w-full max-w-xs" />
                    </div>
                </div>
                <div className="flex justify-center">
                    <button type="submit" className="btn bg-[#322760] hover:bg-[#c54899] text-white px-10 text-xl mt-8">Update</button>
                </div>
            </form>
        </div>
    );
};

export default UpdateFood;
