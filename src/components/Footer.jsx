import React from 'react';
import { Link } from 'react-router-dom';
import Facebook from '../assets/Facebook.svg';
import Insta from '../assets/Insta.svg';
import LinkedIn from '../assets/LinkedIn.svg';
import Twitter from '../assets/Twitter.svg';
import Logo from '../assets/Logo.jpg';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-[#1a1a1a] text-gray-300">
            {/* Main footer */}
            <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-12">

                {/* About Section */}
                <div>
                    <img
                        src={Logo}
                        alt="Logo"
                        className="w-14 h-14 mb-4 rounded-full"
                    />
                    <p className="text-sm leading-relaxed">
                        LiGHT is an initiative of one of India's largest student-run government registered NGO
                        Gopali Youth Welfare Society, based in IIT Kharagpur. Gopali Youth Welfare Society aims
                        at the overall socio-economic development of the underprivileged near the IIT Kharagpur campus.
                    </p>
                    <div className="flex gap-4 mt-4">
                        <a href="https://www.facebook.com/gyws.iitkgp" className="text-yellow-400 hover:text-white">
                            <FaFacebookF className="text-base" />
                        </a>
                        <a href="https://x.com/gopali_youth" className="text-yellow-400 hover:text-white">
                            <FaTwitter className="text-base" />
                        </a>
                        <a href="https://www.linkedin.com/company/gopali-youth-welfare-society/posts/?feedView=all" className="text-yellow-400 hover:text-white">
                            <FaLinkedinIn className="text-base" />
                        </a>
                        <a href="https://www.instagram.com/gyws_ngo.iitkgp/" className="text-yellow-400 hover:text-white">
                            <FaInstagram className="text-base" />
                        </a>
                        <a href="https://api.whatsapp.com/send?phone=918957557713&text=Hi" className="text-yellow-400 hover:text-white">
                            <FaWhatsapp className="text-base" />
                        </a>
                    </div>
                </div>
                <div>
                    <h3 className="text-lg font-semibold mb-4">Useful Links</h3>
                    <ul className="space-y-2 text-sm">
                        <li><a href="#" className="hover:text-yellow-400">Home</a></li>
                        <li><a href="#" className="hover:text-yellow-400">About Us</a></li>
                        <li><a href="#" className="hover:text-yellow-400">Initiatives</a></li>
                        <li><a href="#" className="hover:text-yellow-400">Media</a></li>
                        <li><a href="#" className="hover:text-yellow-400">Members</a></li>
                        <li><a href="#" className="hover:text-yellow-400">Gallery</a></li>
                        <li><a href="#" className="hover:text-yellow-400">Contact Us</a></li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
                    <ul className="space-y-3 text-sm">
                        <li className="flex items-center gap-2">
                            <FaEnvelope className="text-yellow-400" /> gywsociety@gmail.com
                        </li>
                        <li className="flex items-center gap-2">
                            <FaPhone className="text-yellow-400" /> +91 897557713
                        </li>
                        <li className="flex items-start gap-2">
                            <FaMapMarkerAlt className="text-yellow-400 mt-1" />
                            <span>
                                Gopali (No-shooting Area), P.O.: Salua, Dist.: Paschim Medinipur,
                                West Bengal, 721145
                            </span>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Bottom bar */}
            <div className="border-t border-gray-700 py-4 px-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
                <p>
                    Copyright © {new Date().getFullYear()} GYWS. All rights reserved | Developed by Maggyan Solutions Pvt. Ltd.{" "}
                    
                </p>
                <div className="flex gap-6 mt-2 md:mt-0">
                    <a href="#" className="hover:text-yellow-400">Privacy Policy</a>
                    <a href="#" className="hover:text-yellow-400">Terms & Conditions</a>
                </div>
            </div>
        </footer>

    );
};

export default Footer;
