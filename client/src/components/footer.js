import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-12">
            <div className="container mx-auto px-6 lg:px-20">
                <div className="lg:flex lg:justify-between">
                    <div className="footer-item lg:w-1/3 mb-6 lg:mb-0">
                        <h2 className="text-xl font-bold mb-4">Contact Us</h2>
                        <p className="mb-2"><FontAwesomeIcon icon={faEnvelope} /> info@horizonschool.com</p>
                        <p className="mb-2">Phone: (123) 456-7890</p>
                        <p>Address: 123 Street, City, Country</p>
                    </div>
                    <div className="footer-item lg:w-1/3 mb-6 lg:mb-0">
                        <h2 className="text-xl font-bold mb-4">Quick Links</h2>
                        <ul>
                            <li className="mb-2"><a href="/" className="hover:text-gray-400">Home</a></li>
                            <li className="mb-2"><a href="/about" className="hover:text-gray-400">About</a></li>
                            <li className="mb-2"><a href="/contact" className="hover:text-gray-400">Contact</a></li>
                            <li><a href="/academics" className="hover:text-gray-400">Academics</a></li>
                        </ul>
                    </div>
                    <div className="lg:w-1/3">
                        <h2 className="text-xl font-bold mb-4">Follow Us</h2>
                        <div className="flex space-x-4 mb-4">
                            <a href="https://www.facebook.com" className="hover:text-gray-400"><FontAwesomeIcon icon={faFacebook} size="2x" /></a>
                            <a href="https://www.twitter.com" className="hover:text-gray-400"><FontAwesomeIcon icon={faTwitter} size="2x" /></a>
                            <a href="https://instagram.com" className="hover:text-gray-400"><FontAwesomeIcon icon={faInstagram} size="2x" /></a>
                            <a href="https://www.linkedin.com" className="hover:text-gray-400"><FontAwesomeIcon icon={faLinkedin} size="2x" /></a>
                        </div>
                        <h2 className="text-xl font-bold mb-4">Subscribe to our Newsletter</h2>
                        <form>
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="w-full px-4 py-2 mb-4 text-gray-800"
                            />
                            <button className="footer-item w-full bg-blue-500 text-white py-2 hover:bg-blue-600 transition duration-300">
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>
                <div className="footer-item text-center mt-8">
                    <p>&copy; 2024 Horizon School Andaman. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
