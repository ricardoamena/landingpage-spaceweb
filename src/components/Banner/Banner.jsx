import React from "react";
import satelite1 from "../../assets/satelite1.jpg";

const Banner = () => {
  return (
    <div className="bg-black text-white pb-12 relative z-50">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
          <div>
            <img data-aos='zoom-in' src={satelite1} alt="" className="rounded-md"/>
          </div>
          <div className="space-y-3 xl:pr-36 p-4 border-r-2 border-b-2 
          border-b-sky-800 broder-r-sky-800">
            <p data-aos='fade-up' className="text-sky-800 uppercase">Our Mision</p>
            <h1 data-aos='fade-up' data-aos-delay='300' className="uppercase text-5xl">Rapidcast</h1>
            <p data-aos='fade-up' data-aos-delay='300'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
              architecto dolor culpa voluptatum error asperiores nostrum at
              natus! Similique impedit aperiam necessitatibus earum est. Unde
              odit laudantium hic tempora illo?
            </p>
            <button data-aos='fade-up' data-aos-delay='700' className="primary-button">Learn More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
