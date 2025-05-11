import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  const youtubeEmbedUrl = "https://www.youtube.com/embed/nLCo3qwpEKU?autoplay=1&mute=1&loop=1&controls=0&playlist=nLCo3qwpEKU&rel=0&modestbranding=1";

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* YouTube Video Container - Responsive Aspect Ratio */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
        <iframe
          src={youtubeEmbedUrl}
          className="absolute top-1/2 left-1/2 w-[300%] h-[300%] -translate-x-1/2 -translate-y-1/2 min-w-[100vw] min-h-[100vh] object-cover"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Hero Background Video"
        ></iframe>
      </div>

      {/* Overlay (optional dark tint) - Reduced opacity for better visibility */}
      <div className="absolute inset-0 bg-black/30 z-10"></div>

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-center px-4 text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Your Awesome Heading
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mb-8">
          This is a compelling hero section paragraph.
        </p>
        <Link
          to="/contact"
          className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg text-lg font-semibold transition duration-300"
        >
          Consult Our Expert
        </Link>
      </div>
    </div>
  );
};

export default Hero;