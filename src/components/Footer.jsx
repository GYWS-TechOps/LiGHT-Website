import React from 'react';
import { Link } from 'react-router-dom';
import Facebook from '../assets/Facebook.svg';
import Insta from '../assets/Insta.svg';
import LinkedIn from '../assets/LinkedIn.svg';
import Twitter from '../assets/Twitter.svg';
import Logo from '../assets/Logo.png';

const Footer = () => {
    return (
        <div className="bg-gray-200 shadow-inner">
            <footer className="w-full">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-6 md:px-16 py-8">
                    {/* About Us */}
                    <div>
                        <div className="flex items-center space-x-3 mb-4">
                            <img src={Logo} alt="GYWS Logo" className="w-16" />
                            <h2 className="text-2xl font-semibold text-gray-800">GYWS</h2>
                        </div>
                        <p className="text-gray-700 text-justify">
                            Gopali Youth Welfare Society is a registered voluntary non-governmental organisation run by IIT Kharagpur students along with some faculty members with the support of local members from Gopali.
                        </p>
                        <ul className="grid grid-cols-4 mt-4 space-x-2">
                            {/* <li>
                                <a href="https://www.facebook.com/gyws.iitkgp" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-cyan-500 text-2xl">
                                    <Facebook />
                                </a>
                            </li> */}

                            <li>
                                <a
                                    href="https://www.facebook.com/gyws.iitkgp"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <img
                                        src={Facebook}
                                        alt="Facebook"
                                        className="w-8 h-8 hover:scale-110 transition-transform"
                                    />
                                </a>
                            </li>

                            {/* <li>
                                <a href="https://www.instagram.com/gyws_ngo.iitkgp/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-cyan-500 text-2xl">
                                    <Instagram />
                                </a>
                            </li> */}
                            <li>
                                <a
                                    href="https://www.instagram.com/gyws_ngo.iitkgp/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <img
                                        src={Insta}
                                        alt="Facebook"
                                        className="w-8 h-8 hover:scale-110 transition-transform"
                                    />
                                </a>
                            </li>

                            {/* <li>
                                <a href="https://www.linkedin.com/company/gopali-youth-welfare-society/mycompany/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-cyan-500 text-2xl">
                                    <Linkedin />
                                </a>
                            </li> */}

                            <li>
                                <a
                                    href="https://www.linkedin.com/company/gopali-youth-welfare-society/mycompany/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <img
                                        src={LinkedIn}
                                        alt={LinkedIn}
                                        className="w-8 h-8 hover:scale-110 transition-transform"
                                    />
                                </a>
                            </li>
                            {/* <li>
                                <a href="https://twitter.com/gopali_youth" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-cyan-500 text-2xl">
                                    <Twitter />
                                </a>
                            </li> */}
                            
                            <li>
                                <a
                                    href="https://twitter.com/gopali_youth"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <img
                                        src={Twitter}
                                        alt={LinkedIn}
                                        className="w-8 h-8 hover:scale-110 transition-transform"
                                    />
                                </a>
                            </li>
                            
                        </ul>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h2 className="text-xl font-semibold text-gray-800 mb-3">QUICK LINKS</h2>
                        <ul className="space-y-2 text-gray-700">
                            <li>
                                <Link to="/"  className="hover:text-cyan-500 transition">Home</Link>
                                <hr />
                            </li>
                            <li>
                                <Link to="/about"  className="hover:text-cyan-500 transition">About Us</Link>
                                <hr />
                            </li>
                            <li>
                                <Link to="/centers"  className="hover:text-cyan-500 transition">Centers</Link>
                                <hr />
                            </li>
                            <li>
                                <Link to="/initiatives"  className="hover:text-cyan-500 transition">Initiatives</Link>
                                <hr />
                            </li>
                            <li>
                                <Link to="/join"  className="hover:text-cyan-500 transition">Join Us</Link>
                                <hr />
                            </li>
                            <li>
                                <Link to="/members"  className="hover:text-cyan-500 transition">Members</Link>
                                <hr />
                            </li>
                            <li>
                                <Link to="/contact"  className="hover:text-cyan-500 transition">Contact</Link>
                                <hr />
                            </li>
                        </ul>
                    </div>

                    {/* Contact Us */}
                    <div>
                        <h2 className="text-xl font-semibold text-gray-800 mb-3">CONTACT US</h2>
                        <ul className="space-y-2 text-gray-700">
                            <li>
                                <p>Gopali (No-shooting Area)</p>
                                <p><strong>P.O.:</strong> Salua <br /><strong>Dist.:</strong> Paschim Medinipur</p>
                                <p>West Bengal, 721145</p>
                            </li>
                            <li>
                                <a href="tel:+918158878735" className="flex items-center hover:text-cyan-500">
                                    <div className="w-6 mr-2"> +91 8158878735</div>
                                </a>
                            </li>
                            <li>
                                <a href="mailto:gywsociety@gmail.com" className="flex items-center hover:text-cyan-500">
                                    <div className="w-6 mr-2" /> gywsociety@gmail.com
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="bg-purple-700 text-white text-center text-sm py-2 font-medium">
                    <p>© 2024 GYWS. All Rights Reserved</p>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
