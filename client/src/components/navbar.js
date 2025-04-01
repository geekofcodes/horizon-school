// import React, { useState, useEffect } from 'react';
// import logoImg from '../assets/images/logos/loggo_transparent_grey.png'

// const Navbar = () => {
//   const [isScrolled, setIsScrolled] = useState(false);

//   const handleScroll = () => {
//     const offset = window.scrollY;
//     if (offset > 100) {
//       setIsScrolled(true);
//     } else {
//       setIsScrolled(false);
//     }
//   };

//   useEffect(() => {
//     window.addEventListener('scroll', handleScroll);
//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   return (
//     <div className="fixed w-full z-50">
//       {!isScrolled && (
//         <div className="bg-blue-500 text-white py-2 flex justify-between items-center px-20 transition duration-300 ease-in-out">
//           <div>Phone: (123) 456-7890</div>
//           <div>Email: example@example.com</div>
//         </div>
//       )}
//       <div className={`bg-white shadow-md py-5 px-20 flex justify-between items-center transition duration-300 ease-in-out ${isScrolled ? 'fixed w-full top-0' : ' mt-0'}`}>
//         <div>
//           <img className='w-28' src={logoImg} alt='logo' />
//         </div>
//         <div className="navbar-item space-x-4">
//           <a href="/" className="text-gray-700 hover:text-blue-500">Home</a>
//           <a href="/about" className="text-gray-700 hover:text-blue-500">About</a>
//           <a href="/contact" className="text-gray-700 hover:text-blue-500">Contact</a>
//           <a href="/academics" className="text-gray-700 hover:text-blue-500">Academics</a>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;

import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logoImg from '../assets/images/logos/loggo_transparent_grey.png';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 100) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const getLinkClass = (path) => {
    return location.pathname === path ? 'text-blue-500' : 'text-gray-700 hover:text-blue-500';
  };

  return (
    <div className="fixed w-full z-50">
      {!isScrolled && (
        <div className="bg-blue-500 text-white py-2 flex justify-between items-center px-20 transition duration-300 ease-in-out">
          <div>Phone: (123) 456-7890</div>
          <div>Email: example@example.com</div>
        </div>
      )}
      <div className={`bg-white shadow-md py-5 px-20 flex justify-between items-center transition duration-300 ease-in-out ${isScrolled ? 'fixed w-full top-0' : ' mt-0'}`}>
        <div>
          <img className='w-28' src={logoImg} alt='logo' />
        </div>
        <div className="navbar-item space-x-4">
          <Link to="/" className={getLinkClass('/')}>Home</Link>
          <Link to="/about" className={getLinkClass('/about')}>About</Link>
          <Link to="/contact" className={getLinkClass('/contact')}>Contact</Link>
          <Link to="/academics" className={getLinkClass('/academics')}>Academics</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;




