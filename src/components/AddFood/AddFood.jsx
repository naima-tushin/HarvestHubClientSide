import { useState } from "react";
import useAuth from "../../Hooks/useAuth";
import { Helmet } from "react-helmet-async";
import backgroundImg from '../../assets/images/bg_addFood.avif';
import logo from '../../assets/images/logo1.png';
import Swal from "sweetalert2";

const AddFood = () => {
    
    const { user } = useAuth();

    const [formData, setFormData] = useState({
        foodName: "",
        foodImage: "",
        foodQuantity: "",
        pickupLocation: "",
        expiredDateTime: "",
        additionalNotes: "",
        donatorImage: user?.photoURL || "",
        donatorName: user?.displayName || "",
        donatorEmail: user?.email || "",
        foodStatus: "Available",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleAddFood = (e) => {
        e.preventDefault();

        if (formData.foodName !== '' && formData.foodImage !== '' && formData.foodQuantity !== '' && formData.pickupLocation !== '' && formData.expiredDateTime !== '') {
            console.log(formData);
            fetch('http://localhost:5000/addFood', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            })
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return response.json();
                })
                .then(data => {
                    console.log(data);
                    // Show success message
                    Swal.fire({
                        title: `${formData.foodName} is Added`,
                        text: "Food Added Successfully",
                        icon: "success"
                    });
                    
                    setFormData({
                        foodName: "",
                        foodImage: "",
                        foodQuantity: "",
                        pickupLocation: "",
                        expiredDateTime: "",
                        additionalNotes: "",
                        donatorImage: user?.photoURL || "",
                        donatorName: user?.displayName || "",
                        donatorEmail: user?.email || "",
                        foodStatus: "Available",
                    });
                    
                })
                .catch(error => {
                    // console.error('Error:', error);
                    // Show error message
                    Swal.fire({
                        title: `Failed to add food`,
                        text: "Please try again later.",
                        icon: "error"
                    });
                });
        } else {
            // Show validation error message
            Swal.fire({
                title: `All fields are required`,
                text: "Please fill in all the required fields",
                icon: "error"
            });
        }
    };

    return (
        <div className="lg:flex md:flex justify-end items-center  overflow-hidden lg:gap-10" style={{ backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.7), rgba(0,0,0,0.3)), url(${backgroundImg})`, backgroundSize: 'cover' }}>
            <Helmet>
                <title>Harvest Hub | Add Foods</title>
            </Helmet>
            <form onSubmit={handleAddFood} className="bg-secondary p-8 rounded-lg shadow-md md:my-10 md:ml-5">
                <img className="w-[15%] flex items-center justify-center mx-auto " src={logo} alt="" />
                <h2 className="text-2xl font-semibold mb-4 text-center">Add Foods</h2>
                <div className="grid lg:grid-cols-2 md:grid-cols-2 gap-4">
                    <div className="mb-4">
                        <label htmlFor="foodName" className="block text-sm font-medium text-black">Food Name</label>
                        <input type="text" name="foodName" id="foodName" value={formData.foodName} onChange={handleChange} placeholder="Food Name" className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded py-2 px-2" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="foodImage" className="block text-sm font-medium text-black">Food Image URL</label>
                        <input type="text" name="foodImage" id="foodImage" value={formData.foodImage} onChange={handleChange} placeholder="Food Image URL" className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded py-2 px-2" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="foodQuantity" className="block text-sm font-medium text-black">Food Quantity</label>
                        <input type="number" name="foodQuantity" id="foodQuantity" value={formData.foodQuantity} onChange={handleChange} placeholder="Food Quantity" className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded py-2 px-2" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="pickupLocation" className="block text-sm font-medium text-black">Pickup Location</label>
                        <input type="text" name="pickupLocation" id="pickupLocation" value={formData.pickupLocation} onChange={handleChange} placeholder="Pickup Location" className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded py-2 px-2" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="expiredDateTime" className="block text-sm font-medium text-black">Expired Date/Time</label>
                        <input type="datetime-local" name="expiredDateTime" id="expiredDateTime" value={formData.expiredDateTime} onChange={handleChange} className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded py-2 px-2" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="additionalNotes" className="block text-sm font-medium text-black">Additional Notes</label>
                        <input type="text" name="additionalNotes" id="additionalNotes" value={formData.additionalNotes} onChange={handleChange} placeholder="Additional Notes" className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded py-2 px-2" />
                    </div>
                    
                </div>
                <div className="flex justify-end mt-6">
                    <button type="submit" className="inline-flex justify-center py-2 px-4  shadow-sm text-sm font-medium rounded-md text-accent border border-white bg-black hover:bg-primary hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2">
                        Add Food
                    </button>
                </div>
            </form>
            <div className="max-w-xs text-center lg:mr-20 lg:block md:block hidden">
                <h1 className="text-3xl font-bold mb-4 text-black">Share Your Food, Spread Happiness</h1>
                <p className="text-lg text-accent mb-8">Help those in need by sharing your surplus food. Your donation can make a huge difference in someone's life, providing nourishment and comfort to those who need it most. By contributing, you're not just giving food, but also spreading happiness and hope in our communities. Fill out the form to donate food items.</p>
            </div>
        </div>
    );
};

export default AddFood;