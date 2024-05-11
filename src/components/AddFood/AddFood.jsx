import { Helmet } from "react-helmet-async";
import useAuth from "../../Hooks/useAuth";
import React, { useState } from "react";
// import Swal from "sweetalert2";

const AddFood = () => {
    const { user } = useAuth();
   
    const [formData, setFormData] = useState({
        foodName: "",
        foodImage: "",
        foodQuantity: "",
        pickupLocation: "",
        expiredDateTime: "",
        additionalNotes: "",
        donatorName: user?.displayName || "", // Defaulting to user's display name if available
        donatorEmail: user?.email || "", // Defaulting to user's email if available
        foodStatus: "available", // Default value for food status
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleAddFood = (e) => {
        e.preventDefault();
        
        if (formData.foodName !== '' && formData.foodImage !== '' && formData.foodQuantity !== '' && formData.pickupLocation !== '' && formData.expiredDateTime !== '') {
            console.log(formData); 
            // Example API call to save food data
            fetch('https://your-api-endpoint.com/add_food', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                // Show success message
                Swal.fire({
                    title: `${formData.foodName} is Added`,
                    text: "Food Added Successfully",
                    icon: "success"
                });
            })
            .catch(error => {
                console.error('Error:', error);
                // Show error message
                Swal.fire({
                    title: 'Error',
                    text: 'Failed to add food. Please try again later.',
                    icon: 'error'
                });
            });
        } else {
            // Show validation error message
            Swal.fire({
                title: 'All fields are required',
                text: 'Please fill in all the required fields',
                icon: 'error'
            });
        }
    };

    return (
        <div className="font-roboto h-full flex justify-center items-center border bg-[#322760] bg-opacity-40 mt-8">
            <Helmet>
                <title>Harvest Hub | Add Food</title>
            </Helmet>
            <form onSubmit={handleAddFood} className="p-16 gap-20">
                <div className="grid grid-cols-4 gap-6">
                    <div>
                        <label htmlFor="foodName">Food Name</label>
                        <input type="text" name="foodName" id="foodName" value={formData.foodName} onChange={handleChange} placeholder="Food Name" className="input input-bordered w-full max-w-xs" />
                    </div>
                    <div>
                        <label htmlFor="foodImage">Food Image</label>
                        <input type="text" name="foodImage" id="foodImage" value={formData.foodImage} onChange={handleChange} placeholder="Food Image URL" className="input input-bordered w-full max-w-xs" />
                    </div>
                    <div>
                        <label htmlFor="foodQuantity">Food Quantity</label>
                        <input type="text" name="foodQuantity" id="foodQuantity" value={formData.foodQuantity} onChange={handleChange} placeholder="Food Quantity" className="input input-bordered w-full max-w-xs" />
                    </div>
                    <div>
                        <label htmlFor="pickupLocation">Pickup Location</label>
                        <input type="text" name="pickupLocation" id="pickupLocation" value={formData.pickupLocation} onChange={handleChange} placeholder="Pickup Location" className="input input-bordered w-full max-w-xs" />
                    </div>
                    <div>
                        <label htmlFor="expiredDateTime">Expired Date/Time</label>
                        <input type="datetime-local" name="expiredDateTime" id="expiredDateTime" value={formData.expiredDateTime} onChange={handleChange} className="input input-bordered w-full max-w-xs" />
                    </div>
                    <div>
                        <label htmlFor="additionalNotes">Additional Notes</label>
                        <textarea name="additionalNotes" id="additionalNotes" value={formData.additionalNotes} onChange={handleChange} placeholder="Additional Notes" className="input input-bordered w-full max-w-xs" rows="3" />
                    </div>
                </div>
                <div className="flex justify-center">
                    <button type="submit" className="btn bg-[#322760] hover:bg-[#c54899] text-white px-10 text-xl mt-8">Add</button>
                </div>
            </form>
        </div>
    );
};

export default AddFood;
