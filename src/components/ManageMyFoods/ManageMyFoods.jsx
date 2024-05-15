import React, { useState } from 'react';
import { Helmet } from "react-helmet-async";
import { useLoaderData } from 'react-router-dom';
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const ManageMyFoods = () => {
  const allLoadedFood = useLoaderData();
  const [allFood, setAllFood] = useState(allLoadedFood);

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

  const handleDelete = _id => {
  Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#928170",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!"
  }).then((result) => {
    if (result.isConfirmed) {
      fetch(`https://harvest-hub-server-nine.vercel.app/foodDelete/${_id}`, {
        method: 'DELETE'
      })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if(data.deletedCount > 0){
          const updatedFoodList = allLoadedFood.filter(food => food._id !== _id);
          setAllFood(updatedFoodList);
          const deletedFood = allLoadedFood.find(food => food._id === _id);
          Swal.fire({
            title: `${deletedFood.foodName} is Deleted!`,
            text: "Your food has been deleted.",
            icon: "success"
          });
          window.location.reload(); 
        } else {
          console.log("Deletion failed.");
        }
      })
    }
  });
}


  return (
    <div className="container mx-auto">
      <Helmet>
        <title>Harvest Hub | Manage My Foods</title>
      </Helmet>
      <h1 className="text-3xl font-bold text-center text-primary my-8">Manage Foods</h1>
      <div className="overflow-x-auto">
        <table className="hidden md:hidden lg:table   w-full md:w-max lg:w-[95%] mx-auto mb-8">
          <thead>
            <tr className='text-center'>
              <th className="text-black text-base px-4 py-2">Food Name</th>
              <th className="text-black text-base px-4 py-2">Quantity</th>
              <th className="text-black text-base px-4 py-2">Pickup Location</th>
              <th className="text-black text-base px-4 py-2">Expiry</th>
              <th className="text-black text-base px-4 py-2 md:w-40">Additional Notes</th>
              <th className="text-black text-base px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {allLoadedFood && allLoadedFood.map(food => (
              <tr key={food.id}>
                <td className="border-2 border-primary px-4 py-2">{food.foodName}</td>
                <td className="border-2 border-primary px-4 py-2">{food.foodQuantity}</td>
                <td className="border-2 border-primary px-4 py-2">{food.pickupLocation}</td>
                <td className="border-2 border-primary px-4 py-2">{formatDateTime(food.expiredDateTime)}</td>
                <td className="border-2 border-primary px-4 py-2 md:w-40">{food.additionalNotes}</td>
                <td className="border-2 border-primary px-4 py-2">
                  <Link to={`/updateFood/${food._id}`}>
                    <button className="bg-black hover:bg-secondary text-accent hover:text-white border-2 border-accent hover:border-black font-bold py-2 px-4 mb-4 rounded mr-2">Update</button>
                  </Link>
                  <button className="bg-accent hover:bg-secondary text-black hover:text-white border-2 border-black hover:border-black font-bold py-2 px-4 rounded" onClick={() => handleDelete(food._id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="grid grid-cols-1 lg:hidden md:grid-cols-2 lg:grid-cols-3 gap-4 p-2 mb-8">
        {allLoadedFood && allLoadedFood.map(food => (
          <div key={food.id} className="bg-secondary shadow-md rounded p-4">
            <div className="font-bold text-xl mb-2">{food.foodName}</div>
            <p><span className="font-bold">Quantity:</span> {food.foodQuantity}</p>
            <p><span className="font-bold">Pickup Location:</span> {food.pickupLocation}</p>
            <p><span className="font-bold">Expiry:</span> {formatDateTime(food.expiredDateTime)}</p>
            <div className="overflow-hidden md:w-40">
              <p><span className="font-bold">Additional Notes:</span> {food.additionalNotes}</p>
            </div>
            <div className="text-center mt-4">
              <Link to={`/updateFood/${food._id}`}>
                <button className="bg-black hover:bg-secondary text-accent hover:text-white border-2 border-accent hover:border-black font-bold py-2 px-4 mb-4 rounded mr-2">Update</button>
              </Link>
              <button className="bg-accent hover:bg-secondary text-black hover:text-white border-2 border-black hover:border-black font-bold py-2 px-4 rounded" onClick={() => handleDelete(food._id)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManageMyFoods;
