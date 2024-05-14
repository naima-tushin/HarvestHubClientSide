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
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {
            fetch(`http://localhost:5000/foodDelete/${_id}`, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
              console.log(data);
              if(data.deletedCount > 0){
                  const deletedFood = allLoadedFood.find(food => food._id === _id);
                  Swal.fire({
                      title: `${deletedFood.foodName} is Deleted!`,
                      text: "Your food has been deleted.",
                      icon: "success"
                  });
                  setAllFood(allFood => allFood.filter(food => food._id !== _id)); 
                  
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
      <h1 className="text-2xl font-bold mb-4">Manage Foods</h1>
      <table className="table-auto">
        <thead>
          <tr>
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">Quantity</th>
            <th className="px-4 py-2">Pickup Location</th>
            <th className="px-4 py-2">Expiry</th>
            <th className="px-4 py-2">Additional Note</th>
            <th className="px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {allLoadedFood && allLoadedFood.map(food => (
            <tr key={food.id}>
              <td className="border px-4 py-2">{food.foodName}</td>
              <td className="border px-4 py-2">{food.foodQuantity}</td>
              <td className="border px-4 py-2">{food.pickupLocation}</td>
              <td className="border px-4 py-2">{formatDateTime(food.expiredDateTime)}</td>
              <td className="border px-4 py-2">{food.additionalNotes}</td>

              <td className="border px-4 py-2">
                <Link to={`/updateFood/${food._id}`}>
                  <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mb-4 rounded mr-2"
                  > Update
                  </button>
                </Link>

                <button
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                  onClick={() => handleDelete(food._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageMyFoods;
