import React from "react";
import Image1 from "../../assets/hero/women.png";
import Image2 from "../../assets/hero/shopping.png";
import Image3 from "../../assets/hero/sale.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ImageList = [
  {
    id: 1,
    img: Image1,
    title: "Upto 50% off on all Men's Wear",
    Description:
      "Discover the latest trends in men’s fashion. From casual tees to formal suits, upgrade your wardrobe without breaking the bank.",
  },
  {
    id: 2,
    img: Image2,
    title: "30% off on all Women's Wear",
    Description:
      "Unleash your style with our stunning women’s collection. Dresses, tops, and more—crafted for comfort and elegance.",
  },
  {
    id: 3,
    img: Image3,
    title: "70% off on all Products Sale",
    Description:
      "The biggest sale of the season! Shop trendy outfits and must-have accessories at unbeatable prices. Hurry, limited time only!",
  },
];

const Hero = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    cssEase: "ease-in-out",
    autoplaySpeed: 3000,
    pauseOnHover: false,
    arrows: false,
  };

  return (
    <div
      className="relative overflow-hidden min-h-[550px] sm:min-h-[650px] 
      bg-white dark:bg-neutral-900 dark:text-white duration-200"
    >
      {/* Decorative div */}
      <div
        className="h-[700px] w-[700px] bg-gradient-to-br from-gray-200 via-gray-400 to-gray-500 
        dark:from-gray-700 dark:via-gray-800 dark:to-gray-900
        absolute -top-1/2 right-0 rounded-3xl rotate-45 -z-0"
      ></div>

      <div className="container pb-8 sm:pb-0">
        <Slider {...settings}>
          {ImageList.map((data) => (
            <div key={data.id}>
              <div className="grid grid-cols-1 sm:grid-cols-2 items-center min-h-[550px] sm:min-h-[650px] relative z-10">
                {/* Text Section */}
                <div className="flex flex-col justify-center gap-6 text-center sm:text-left px-4 order-2 sm:order-1">
                  <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight bg-gradient-to-r from-gray-400 via-gray-600 to-gray-800 text-transparent bg-clip-text">
                    {data.title}
                  </h1>
                  <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 max-w-md mx-auto sm:mx-0">
                    {data.Description}
                  </p>
                  <div>
                    <button className="mt-4 px-6 py-3 rounded-full bg-gradient-to-r from-gray-300 via-gray-400 to-gray-500 text-white font-semibold shadow-md hover:scale-110 hover:shadow-xl transition duration-300">
                      Order Now
                    </button>
                    <button className="ml-4 mt-4 px-6 py-3 rounded-full bg-gray-200 text-black font-semibold shadow-md hover:bg-gray-300 transition">
                      Explore
                    </button>
                  </div>
                </div>

                {/* Image Section */}
                <div className="flex justify-center order-1 sm:order-2">
                  <img
                    src={data.img}
                    alt={data.title}
                    className="w-[300px] h-[300px] sm:w-[450px] sm:h-[450px] sm:scale-110 object-contain"
                  />
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Hero;
