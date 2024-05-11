import React from 'react';

const FeaturedFoodsHomeDetails = () => {
    // Sample food data
    const food = {
        id: 1,
        name: "Spaghetti Bolognese",
        donator: {
            image: "donator1.jpg",
            name: "Donator Name 1"
        },
        quantity: 10,
        pickupLocation: "Restaurant XYZ",
        expiryDateTime: "May 15, 2024 - 6:00 PM",
        notes: "This dish contains gluten.",
        image: "spaghetti_bolognese_image.jpg"
    };

    if (!food) {
        console.error('Food data not found');
        return <div>Food details not found</div>;
    }

    const { name, donator, quantity, pickupLocation, expiryDateTime, notes, image } = food;

    return (
        <div className="container mx-auto px-5 py-8 relative">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="md:col-span-1 relative">
                    <div className="relative">
                        <div className="absolute inset-0 bg-black opacity-50 rounded-lg"></div>
                        <img className="w-full rounded-lg shadow-md" src={image} alt={name} />
                        <h2 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-purple-800 text-white px-8 py-4 rounded text-xl">{name}</h2>
                    </div>
                </div>
                <div className="md:col-span-1 flex flex-col justify-center">
                    <h1 className="text-3xl font-bold text-purple-800 mb-4">{name}</h1>
                    <div className="flex items-center mb-4">
                        <img src={donator.image} alt={donator.name} className="w-10 h-10 rounded-full mr-2" />
                        <p className="text-gray-700">{donator.name}</p>
                    </div>
                    <p className="text-gray-700 mb-4"><span className="font-bold">Food Quantity:</span> {quantity} servings</p>
                    <p className="text-gray-700 mb-4"><span className="font-bold">Pickup Location:</span> {pickupLocation}</p>
                    <p className="text-gray-700 mb-4"><span className="font-bold">Expired:</span> {expiryDateTime}</p>
                    <p className="text-gray-700 mb-4"><span className="font-bold">Additional Notes:</span> {notes}</p>
                </div>
            </div>
        </div>
    );
};

export default FeaturedFoodsHomeDetails;
