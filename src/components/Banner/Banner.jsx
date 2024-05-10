import banner1 from '../../assets/images/banner_1.jpg'
import banner2 from '../../assets/images/banner_2.jpg'
import banner3 from '../../assets/images/banner_3.webp'
import banner4 from '../../assets/images/banner_4.jpeg'
import banner5 from '../../assets/images/banner_5.avif'


const Banner = () => {
    return (
        <div>
            <div className="carousel w-full mb-12">

                {/* Slide1 */}
                <div id="slide1" class="carousel-item relative w-full">
                    <img src={banner1} class="carousel-image w-full h-[650px] md:h-[450px] lg:h-[550px]" alt="Banner Image" />
                    <div class="absolute inset-0 flex flex-col justify-center items-end bg-gradient-to-r from-transparent to-[#322760]  text-white p-8">
                        <div class="text-right">
                            <h2 class="text-3xl md:text-5xl lg:text-6xl font-bold mb-4">Painting & Drawing Supplies</h2>
                            <p class="text-lg md:text-xl lg:text-2xl font-semibold">Unleash Your Creativity with Our Premium Selection</p>
                        </div>
                        <div class="mt-8">
                            <a href="#slide4" class="btn btn-circle bg-[#c54899] hover:bg-gray-500 text-white text-xl md:text-2xl lg:text-2xl mx-2">&lt;</a>
                            <a href="#slide2" class="btn btn-circle bg-[#c54899] hover:bg-gray-500 text-white text-xl md:text-2xl lg:text-2xl mx-2">&gt;</a>
                        </div>
                    </div>
                </div>

                {/* Slide 2 */}
                <div id="slide2" class="carousel-item relative w-full">
                    <img src={banner2} class="carousel-image w-full h-[650px] md:h-[450px] lg:h-[550px]" alt="Banner Image" />
                    <div class="absolute inset-0 flex flex-col justify-center items-end bg-gradient-to-r from-transparent to-[#322760]  text-white p-8">
                        <div class="text-right">
                            <h2 class="text-3xl md:text-5xl lg:text-6xl font-bold mb-4">Brushes & Paints</h2>
                            <p class="text-lg md:text-xl lg:text-2xl font-semibold">Discover High-Quality Tools for Your Masterpieces</p>
                        </div>
                        <div class="mt-8">
                            <a href="#slide1" class="btn btn-circle bg-[#c54899] hover:bg-gray-500 text-white text-xl md:text-2xl lg:text-2xl mx-2">&lt;</a>
                            <a href="#slide3" class="btn btn-circle bg-[#c54899] hover:bg-gray-500 text-white text-xl md:text-2xl lg:text-2xl mx-2">&gt;</a>
                        </div>
                    </div>
                </div>

                {/* Slide 3 */}
                <div id="slide3" class="carousel-item relative w-full">
                    <img src={banner3} class="carousel-image w-full h-[650px] md:h-[450px] lg:h-[550px]" alt="Banner Image" />
                    <div class="absolute inset-0 flex flex-col justify-center items-end bg-gradient-to-r from-transparent to-[#322760]  text-white p-8">
                        <div class="text-right">
                            <h2 class="text-3xl md:text-5xl lg:text-6xl font-bold mb-4">Canvas & Paper</h2>
                            <p class="text-lg md:text-xl lg:text-2xl font-semibold">Create on the Perfect Surface</p>
                        </div>
                        <div class="mt-8">
                            <a href="#slide2" class="btn btn-circle bg-[#c54899] hover:bg-gray-500 text-white text-xl md:text-2xl lg:text-2xl mx-2">&lt;</a>
                            <a href="#slide4" class="btn btn-circle bg-[#c54899] hover:bg-gray-500 text-white text-xl md:text-2xl lg:text-2xl mx-2">&gt;</a>
                        </div>
                    </div>
                </div>

                {/* Slide 4 */}
                <div id="slide4" class="carousel-item relative w-full">
                    <img src={banner4} class="carousel-image  w-full h-[650px] md:h-[450px] lg:h-[550px]" alt="Banner Image" />
                    <div class="absolute inset-0 flex flex-col justify-center items-end bg-gradient-to-r from-transparent to-[#322760]  text-white p-8">
                        <div class="text-right">
                            <h2 class="text-3xl md:text-5xl lg:text-6xl font-bold mb-4">Drawing Accessories</h2>
                            <p class="text-lg md:text-xl lg:text-2xl font-semibold">Enhance Your Skills with the Right Tools</p>
                        </div>
                        <div class="mt-8">
                            <a href="#slide3" class="btn btn-circle bg-[#c54899] hover:bg-gray-500 text-white text-xl md:text-2xl lg:text-2xl mx-2">&lt;</a>
                            <a href="#slide1" class="btn btn-circle bg-[#c54899] hover:bg-gray-500 text-white text-xl md:text-2xl lg:text-2xl mx-2">&gt;</a>
                        </div>
                    </div>
                </div>
                {/* Slide 5 */}
                <div id="slide3" class="carousel-item relative w-full">
                    <img src={banner5} class="carousel-image w-full h-[650px] md:h-[450px] lg:h-[550px]" alt="Banner Image" />
                    <div class="absolute inset-0 flex flex-col justify-center items-end bg-gradient-to-r from-transparent to-[#322760]  text-white p-8">
                        <div class="text-right">
                            <h2 class="text-3xl md:text-5xl lg:text-6xl font-bold mb-4">Canvas & Paper</h2>
                            <p class="text-lg md:text-xl lg:text-2xl font-semibold">Create on the Perfect Surface</p>
                        </div>
                        <div class="mt-8">
                            <a href="#slide2" class="btn btn-circle bg-[#c54899] hover:bg-gray-500 text-white text-xl md:text-2xl lg:text-2xl mx-2">&lt;</a>
                            <a href="#slide4" class="btn btn-circle bg-[#c54899] hover:bg-gray-500 text-white text-xl md:text-2xl lg:text-2xl mx-2">&gt;</a>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Banner;