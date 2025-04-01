// import React from 'react';
// // import CarouselComponent from '../components/image-carousel';
// import { Carousel } from 'react-responsive-carousel';
// import "react-responsive-carousel/lib/styles/carousel.min.css";
// import heroImage1 from '../assets/images/pics/image-1.jpg';
// import heroImage2 from '../assets/images/pics/image-2.jpg';
// import heroImage3 from '../assets/images/pics/image-3.jpg';

// const HomePage = () => {
//   return (
//     <div>
//       <Carousel
//         autoPlay
//         infiniteLoop
//         showThumbs={false}
//         showStatus={false}
//         className="carousel-container"
//       >
//         <div className="relative">
//           <img src={heroImage1} alt="Hero 1" className="carousel-image" />
//           <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-50 text-center">
//             <h3 className="text-white text-3xl ">Best School Awarded in Andaman and Nicobar Islands</h3>
//             <h2 className="text-white text-4xl font-bold">Horizon School</h2>
//             <button className="mt-4 px-6 py-3 bg-blue-500 text-white text-lg font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300">
//               Know More
//             </button>
//           </div>
//         </div>
//         <div className="relative">
//           <img src={heroImage2} alt="Hero 2" className="carousel-image" />
//           <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-50 text-center">
//             <h3 className="text-white text-3xl ">Best School Awarded in Andaman and Nicobar Islands</h3>
//             <h2 className="text-white text-4xl font-bold">Horizon School</h2>
//             <button className="mt-4 px-6 py-3 bg-blue-500 text-white text-lg font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300">
//               Know More
//             </button>
//           </div>
//         </div>
//         <div className="relative">
//           <img src={heroImage3} alt="Hero 3" className="carousel-image" />
//           <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-50 text-center">
//             <h3 className="text-white text-3xl ">Best School Awarded in Andaman and Nicobar Islands</h3>
//             <h2 className="text-white text-4xl font-bold">Horizon School</h2>
//             <button className="mt-4 px-6 py-3 bg-blue-500 text-white text-lg font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300">
//               Know More
//             </button>
//           </div>
//         </div>
//       </Carousel>
//       <div className="px-20 py-4">
//         <h1 className="text-3xl font-bold">Welcome to Our Website</h1>
//         <p className="mt-4">
//           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
//         </p>
//         <p className="mt-4">
//           Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
//         </p>
//         <div className="h-96 mt-10 bg-gray-200">More Content Here</div>
//         <div className="h-96 mt-10 bg-gray-200">More Content Here</div>
//         <div className="h-96 mt-10 bg-gray-200">More Content Here</div>
//         <div className="h-96 mt-10 bg-gray-200">More Content Here</div>
//       </div>
//       {/* <Footer /> */}
//     </div>
//   );
// };

// export default HomePage;

import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import heroImage1 from '../assets/images/pics/image-1.jpg';
import heroImage2 from '../assets/images/pics/image-2.jpg';
import heroImage3 from '../assets/images/pics/image-3.jpg';

const HomePage = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div>
      <Carousel
        autoPlay
        infiniteLoop
        showThumbs={false}
        showStatus={false}
        className="carousel-container"
      >
        {[heroImage1, heroImage2, heroImage3].map((image, index) => (
          <div key={index} className="relative">
            <img src={image} alt={`Hero ${index + 1}`} className="carousel-image" />
            <motion.div
              className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-50 text-center"
              initial="hidden"
              animate="visible"
              transition={{ duration: 1.0, delay: index * 0.3 }}
              variants={fadeInUp}
            >
              <h3 className="text-white text-3xl">Best School Awarded in Andaman and Nicobar Islands</h3>
              <h2 className="text-white text-4xl font-bold">Horizon School</h2>
              <motion.button
                className="mt-4 px-6 py-3 bg-blue-500 text-white text-lg font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                Know More
              </motion.button>
            </motion.div>
          </div>
        ))}
      </Carousel>
      <div className="px-20 py-4">
        <InViewComponent>
          <h1 className="text-3xl font-bold">Welcome to Our Website</h1>
          <p className="mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <p className="mt-4">
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </InViewComponent>
        {[...Array(4)].map((_, index) => (
          <InViewComponent key={index}>
            <div className="h-96 mt-10 bg-gray-200">More Content Here</div>
          </InViewComponent>
        ))}
      </div>
      {/* <Footer /> */}
    </div>
  );
};

const InViewComponent = ({ children }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 }
      }}
      transition={{ duration: 0.6 }}
    >
      {children}
    </motion.div>
  );
};

export default HomePage;


// import React from 'react';
// import { Carousel } from 'react-responsive-carousel';
// import "react-responsive-carousel/lib/styles/carousel.min.css";
// import { motion } from 'framer-motion';
// import heroImage1 from '../assets/images/pics/image-1.jpg';
// import heroImage2 from '../assets/images/pics/image-2.jpg';
// import heroImage3 from '../assets/images/pics/image-3.jpg';

// const HomePage = () => {
//   const fadeInUp = {
//     hidden: { opacity: 0, y: 50 },
//     visible: { opacity: 1, y: 0 }
//   };

//   return (
//     <div>
//       <Carousel
//         autoPlay
//         infiniteLoop
//         showThumbs={false}
//         showStatus={false}
//         className="carousel-container"
//       >
//         {[heroImage1, heroImage2, heroImage3].map((image, index) => (
//           <div key={index} className="relative">
//             <img src={image} alt={`Hero ${index + 1}`} className="carousel-image" />
//             <motion.div
//               className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-50 text-center"
//               initial="hidden"
//               animate="visible"
//               transition={{ duration: 1.0, delay: index * 0.3 }}
//               variants={fadeInUp}
//             >
//               <h3 className="text-white text-3xl">Best School Awarded in Andaman and Nicobar Islands</h3>
//               <h2 className="text-white text-4xl font-bold">Horizon School</h2>
//               <motion.button
//                 className="mt-4 px-6 py-3 bg-blue-500 text-white text-lg font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
//                 whileHover={{ scale: 1.1 }}
//                 whileTap={{ scale: 0.9 }}
//               >
//                 Know More
//               </motion.button>
//             </motion.div>
//           </div>
//         ))}
//       </Carousel>
//       <motion.div
//         className="px-20 py-4"
//         initial="hidden"
//         animate="visible"
//         transition={{ duration: 0.6, delay: 0.9 }}
//         variants={fadeInUp}
//       >
//         <h1 className="text-3xl font-bold">Welcome to Our Website</h1>
//         <p className="mt-4">
//           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
//         </p>
//         <p className="mt-4">
//           Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
//         </p>
//         {[...Array(4)].map((_, index) => (
//           <motion.div
//             key={index}
//             className="h-96 mt-10 bg-gray-200"
//             initial="hidden"
//             animate="visible"
//             transition={{ duration: 0.6, delay: 1.2 + index * 0.3 }}
//             variants={fadeInUp}
//           >
//             More Content Here
//           </motion.div>
//         ))}
//       </motion.div>
//       {/* <Footer /> */}
//     </div>
//   );
// };

// export default HomePage;
