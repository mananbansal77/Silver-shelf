import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero/Hero";
import Products from "./components/Products";
import AOS from "aos";
import "aos/dist/aos.css";
import TopProducts from "./components/TopProducts";
import Banner from "./components/Banner";
import Subscribe from "./components/Subscribe";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import Popup from "./components/Popup";

const App = () => {
  const [orderPopup, setOrderPopup] = useState(false);

  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <div>
      {/* Pass setOrderPopup to Navbar */}
      <Navbar setOrderPopup={setOrderPopup} />

      <Hero />
      <Products />
      <TopProducts />
      <Banner />
      <Testimonials />
      <Subscribe />
      <Footer />

      {/* Pass orderPopup state and setter to Popup */}
      <Popup orderPopup={orderPopup} setOrderPopup={setOrderPopup} />
    </div>
  );
};

export default App;
