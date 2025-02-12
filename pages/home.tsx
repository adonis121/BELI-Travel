import React from "react";
// import BlogPostSlider from '@/components/blog-post-slider' 
import PlaneSection from "@/components/plane";
import {TravelSlider} from "@/components/travel-slider";
import TravelSection from "@/components/TravelSection";
import BlogSection from "@/components/BlogSection";
import HeroSection from "@/components/HeroSection";
import BusSection from "@/components/bus";
import BlogSlider from "@/components/blog-slider";

const Home: React.FC = () => {
  return (
    <div className="padding-top:20%">
      {/* Hero Section 
      <div className="h-screen w-full absoulte">
      <img
        src="/heropic.jpg"
        alt="Hero Image"
        className="relative  w-full h-full" 
      />
      </div>
     */}
      <HeroSection />
      <TravelSection />
      <TravelSlider /> 
      <BusSection />
      <PlaneSection /> 
      <BlogSection />  
      <BlogSlider />
    </div>
  );
};

export default Home;

