import React from "react";
import { Link } from "react-router-dom"; // Use React Router for navigation
import heroVideo from "/hero-v.mp4"; // Import video directly (Vite handles this)

const Hero = () => {
  return (
    <div className="relative mb-8 mt-4 h-screen w-full overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src={heroVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay (optional dark tint) */}
      <div className="absolute inset-0 bg-black/50 z-10"></div>

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-center px-4 text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Your Awesome Heading
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mb-8">
          This is a compelling hero section paragraph.
        </p>
        <Link
          to="/contact" // React Router uses "to" instead of "href"
          className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg text-lg font-semibold transition duration-300"
        >
          Consult Our Expert
        </Link>
      </div>
    </div>
  );
};

export default Hero;