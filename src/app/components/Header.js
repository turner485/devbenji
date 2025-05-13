// components/Header.js

import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faTwitch } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import Link from 'next/link'

const Header = () => {
    return (
        <div className='header'>
            <div className="flex justify-center">
                <div className='w-2/3'>
                    <div className='header-wrapper flex justify-center md:justify-between'>
                        <div className="flex justify-center">
                            <h2 className="text-4xl ml-2 mt-3" style={{ fontFamily: 'Pixel Digivolve, sans-serif' }}>
                                &#47;&#47;devbenji...
                            </h2>
                            <Image
                                src="/images/Square_ben_v1.png"
                                alt="Logo"
                                width={50}
                                height={30}
                                className="ml-1 mt-[7px] rounded-full hidden md:flex"
                            />
                        </div>

                        <div className="flex mt-3 space-x-3 mr-2 hidden md:flex">
                            
                            <Link href="https://github.com/turner485" target="_blank" rel="noopener noreferrer" className='fa-icon'>
                                <FontAwesomeIcon icon={faGithub} className="text-4xl text-white hover:text-[#7395c0] ease-out duration-300 mt-[4px]" />
                            </Link>
                            <Link href="https://www.linkedin.com/in/benjaminturner11/" target="_blank" rel="noopener noreferrer" className='fa-icon'>
                                <FontAwesomeIcon icon={faLinkedin} className="text-4xl text-white hover:text-[#0072b1] ease-out duration-300 mt-[5px]" />
                            </Link>
                            <Link href="https://www.twitch.tv/benjaminmcp0tv" className='fa-icon'>
                                <FontAwesomeIcon icon={faTwitch} className="text-4xl text-white hover:text-[#6441a5] ease-out duration-300 mt-[7px]" />
                            </Link>
                            <Link href="mailto:benjamin@devbenji.co.uk" className='fa-icon'>
                                <FontAwesomeIcon icon={faEnvelope} className="text-4xl text-white hover:text-[#7395c0] ease-out duration-300 mt-1" />
                            </Link> 
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-2 w-full border-solid border-b-white border-b-2"></div>
        </div>
    );
};


export default Header;
