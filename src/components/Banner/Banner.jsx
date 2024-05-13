import React, { useState } from 'react';
import banner1 from '../../assets/images/banner_2.jpg';
import banner2 from '../../assets/images/banner_3.webp';
import banner3 from '../../assets/images/banner_1.jpg';
import banner4 from '../../assets/images/banner_4.jpeg';
import backgroundImg from '../../assets/images/bg_banner.jpg';

const bannersData = [
    { image: banner1, title: "Nourishing Unity on Wheels", description: "A brightly decorated van arrives, brimming with fresh produce and hearty meals, offering a lifeline of hope to the community. Residents gather eagerly as volunteers distribute nourishment and groceries, igniting a spirit of unity and support. Through each delivery, bonds strengthen, showcasing the resilience of compassion in challenging times." },

    { image: banner2, title: "Sharing Generosity, Spreading Kindness", description: "Acts of kindness abound as neighbors extend help to those in need, creating an atmosphere filled with compassion. The aroma of freshly prepared dishes mixes with smiles and gratitude, transcending language barriers and fostering solidarity within the community." },

    { image: banner3, title: "Community Gardens for All", description: "Community members join hands in planting a communal garden, aiming to provide fresh produce for those in need. With care and smiles, they cultivate a sense of empowerment and solidarity as they work together towards a future where nutritious food is accessible to all." },

    { image: banner4, title: "Sharing the Bounty, Reducing Waste", description: "Members of a vibrant community gather, dishes brimming with food in hand. Laughter, stories, and smiles fill the air as neighbors bond over shared meals, embodying abundance and generosity. Together, they minimize waste, fostering connections and promoting a culture of care for people and the planet." }
];

const Banner = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const goToSlide = (index) => {
        setActiveIndex(index);
    };

    return (
        <div className="relative w-[95%] rounded-xl mx-auto lg:h-screen overflow-hidden lg:mt-20 mt-10" style={{ backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.7), rgba(0,0,0,0.3)), url(${backgroundImg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            {bannersData.map((banner, index) => (
                <div
                    key={index}
                    className={`relative lg:absolute inset-0 flex-col flex lg:flex-row ${activeIndex === index ? 'opacity-100' : 'opacity-0'
                        }`}
                >
                    <div className={`lg:w-1/2 h-full flex flex-col justify-center items-start p-2 lg:pl-56 md:p-6 ${activeIndex === index ? 'block' : 'hidden'
                        }`}>
                        <h2 className="text-xl md:text-4xl lg:text-5xl font-bold mt-2 mb-2 lg:mb-0 lg:mt-0 text-accent">{banner.title}</h2>
                        <p className="text-xs md:text-xl lg:text-2xl font-semibold text-secondary mb-2 lg:mb-0">{banner.description}</p>
                    </div>
                    <div className={`lg:w-1/2 h-full flex justify-center items-center mb-2 ${activeIndex === index ? 'block' : 'hidden'
                        }`}>
                        <img src={banner.image} alt={`Banner ${index + 1}`} className="h-[60%] w-[90%] rounded-xl shadow-2xl shadow-black" />
                    </div>
                </div>
            ))}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {bannersData.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`h-6 w-6 rounded-full ${activeIndex === index ? 'bg-black' : 'bg-gray-300'
                            }`}
                    />
                ))}
            </div>
        </div>
    );
};

export default Banner;
