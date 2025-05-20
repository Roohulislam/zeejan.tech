import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden bg-[#F6F5F5]">
      {/* Background Video (Autoplay, Loop, Muted) */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="../../src/assets/image/bgpre.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/30 z-10"></div>

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center justify-end h-full text-center px-4 text-white pb-20">
        <h1 className="text-4xl font-bold mb-4">Code For Future</h1>
        <p className="text-xl max-w-2xl mb-8">
          Software Solutions for a Smarter World
        </p>
        <Link
          to="/contactus"
          className="bg-[#0C359E] hover:bg-[#0a2d85] text-white px-8 py-3 rounded-lg font-semibold transition duration-300"
        >
          Contact Us
        </Link>
      </div>
    </div>
  );
};

export default Hero;