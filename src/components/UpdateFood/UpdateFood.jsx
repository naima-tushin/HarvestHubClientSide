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
        const name =  form.itemName.value;
        const imageUrl =  form.imageUrl.value;
        const subcategoryName =  form.subcategoryName.value;
        const shortDescription =  form.shortDescription.value;
        const price =  form.price.value;
        const rating =  form.rating.value;
        const customization =  form.customization.value;
        const processingTime =  form.processingTime.value;
        const stockStatus =  form.stockStatus.value;
     

        const updateCraft = {name, imageUrl, subcategoryName, shortDescription, price, rating, customization, processingTime, stockStatus}
        
        console.log(updateCraft);
        fetch(`http://localhost:5000/foodUpdate/${_id}`, {
                    method: 'PUT',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(updateCraft)
                })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if(data.modifiedCount> 0){
                        Swal.fire({
                            title: `${updateCraft.name} Updated`,
                            text: "Food Update Successfully",
                            icon: "success"
                          });
                    }
                })
               

    }
   
    return (
        <div className="font-roboto h-full flex justify-center items-center border bg-[#322760] bg-opacity-40 mt-8">
    <Helmet>
        <title>Harvest Hub | Update Food</title>
    </Helmet>
    <form onSubmit={handleUpdateFood} className="p-20 items-center gap-20">
        <div className="grid grid-cols-3 gap-6">
            <div>
                <label htmlFor="imageUrl">Food Image URL</label>
                <input type="text" name="imageUrl" defaultValue={foodImage} placeholder="Image URL" className="input input-bordered w-full max-w-xs" />
            </div>
            <div>
                <label htmlFor="itemName">Food Name</label>
                <input type="text" name="itemName" defaultValue={foodName} placeholder="Item Name" className="input input-bordered w-full max-w-xs" />
            </div>
            <div>
                <label htmlFor="subcategoryName">Food Status</label>
                <select name="subcategoryName" defaultValue={foodStatus} className="input input-bordered w-full max-w-xs">
                    <option value="">Select Status</option>
                    <option value="Landscape Painting">Available</option>
                    <option value="Portrait Drawing">Not Available</option>
                </select>
            </div>
            <div>
                <label htmlFor="shortDescription">Quantity</label>
                <input type="text" name="shortDescription" defaultValue={foodQuantity} placeholder="Short Description" className="input input-bordered w-full max-w-xs" />
            </div>
            <div>
                <label htmlFor="price">Pickup Location</label>
                <input type="text" name="price" placeholder="Price" defaultValue={pickupLocation} className="input input-bordered w-full max-w-xs" />
            </div>
            <div>
                <label htmlFor="rating">Rating</label>
                <input type="text" name="rating" placeholder="Rating" defaultValue={additionalNotes} className="input input-bordered w-full max-w-xs" />
            </div>
           
            <div className="mb-4">
                        <label htmlFor="expiredDateTime" className="block text-sm font-medium text-black">Expired Date/Time</label>
                        <input type="datetime-local" name="expiredDateTime" id="expiredDateTime" defaultValue={expiredDateTime} onChange={handleChange} className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded py-2 px-2" />
                    </div>
            <div>
                <label htmlFor="processingTime">Processing Time</label>
                <input type="text" name="processingTime" defaultValue={processingTime} placeholder="Processing Time" className="input input-bordered w-full max-w-xs" />
            </div>
            <div>
                <label htmlFor="stockStatus">Stock Status</label>
                <select name="stockStatus" defaultValue={stockStatus} className="input input-bordered w-full max-w-xs">
                    <option value="">Select Stock Status</option>
                    <option value="In stock">In stock</option>
                    <option value="Made to Order">Made to Order</option>
                </select>
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
