import React from 'react';
import heroImage1 from '../assets/images/pics/image-1.jpg';

const AboutPage = () => {
  return (
    <div className='pt-20'>
      <div className="relative h-1/2-screen">
        <img src={heroImage1} alt="Hero 1" className="w-full h-full object-cover" />
        <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-50 text-center">
          <h2 className="text-white text-3xl font-bold">About Horizon School</h2>
        </div>
      </div>
      <div className="h-screen px-20 py-4"></div>
    </div>
  );
}

export default AboutPage;
