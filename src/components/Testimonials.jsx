import React from "react";
import Slider from "react-slick";

const TestimonialData = [
  {
    id: 1,
    name: "Victor",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
    img: "https://picsum.photos/101/101",
  },
  {
    id: 2,
    name: "Satya Nadella",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
    img: "https://picsum.photos/102/102",
  },
  {
    id: 3,
    name: "Virat Kohli",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
    img: "https://picsum.photos/104/104",
  },
  {
    id: 5,
    name: "Sachin Tendulkar",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
    img: "https://picsum.photos/103/103",
  },
];

const Testimonials = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: { slidesToShow: 3, slidesToScroll: 1, infinite: true },
      },
      { breakpoint: 1024, settings: { slidesToShow: 2, slidesToScroll: 1 } },
      { breakpoint: 640, settings: { slidesToShow: 1, slidesToScroll: 1 } },
    ],
  };

  return (
    <div
      className="py-16
      bg-gradient-to-r from-gray-300 via-gray-400 to-gray-500
      dark:from-gray-800 dark:via-gray-900 dark:to-black
      transition-all duration-500"
    >
      <div className="container">
        {/* Header */}
        <div className="text-center mb-12 max-w-[600px] mx-auto">
          <p
            data-aos="fade-up"
            className="text-sm font-medium text-gray-100 dark:text-gray-300 uppercase tracking-wide"
          >
            What our customers are saying
          </p>
          <h1
            data-aos="fade-up"
            className="text-3xl sm:text-4xl font-extrabold
            bg-gradient-to-r from-gray-700 via-gray-600 to-gray-800
            dark:from-gray-200 dark:via-gray-400 dark:to-gray-500
            text-transparent bg-clip-text"
          >
            Testimonials
          </h1>
          <p
            data-aos="fade-up"
            className="mt-2 text-sm sm:text-base text-gray-100 dark:text-gray-300"
          >
            Our customers love us! Read what they have to say about our products
            and service.
          </p>
        </div>

        {/* Slider */}
        <div data-aos="zoom-in">
          <Slider {...settings}>
            {TestimonialData.map((data) => (
              <div key={data.id} className="my-6 px-2">
                <div
                  className="flex flex-col gap-4 p-6 rounded-xl shadow-lg
                  bg-gradient-to-br from-gray-400 via-gray-500 to-gray-600
                  dark:from-gray-700 dark:via-gray-800 dark:to-gray-900
                  transition-transform duration-300 hover:scale-105 relative"
                >
                  <img
                    src={data.img}
                    alt={data.name}
                    className="rounded-full w-20 h-20 mx-auto"
                  />
                  <p className="text-sm text-gray-100 dark:text-gray-300 text-center">
                    {data.text}
                  </p>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-100 dark:text-gray-200 text-center">
                    {data.name}
                  </h3>
                  <p className="absolute top-0 right-2 text-black/20 dark:text-white/20 text-7xl font-serif">
                    ,,
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
