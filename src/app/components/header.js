// components/Header.js

import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import Link from 'next/link'

const Header = () => {
    return (
        <div className='header'>
            <div className="w-full flex justify-center">
                <div className='w-2/3'>
                    <div className='header-wrapper flex justify-between'>
                        <div className="flex">
                            <h2 className="text-4xl ml-2 mt-3" style={{ fontFamily: 'Pixel Digivolve, sans-serif' }}>
                                //devbenji...
                            </h2>
                            <Image
                                src="/images/circle_logo.gif"
                                alt="Logo"
                                width={50}
                                height={40}
                                className="ml-1 mt-[7px]"
                            />
                        </div>

                        <div className="flex mt-3 space-x-3 mr-2">
                            <Link href="https://github.com/turner485" target="_blank" rel="noopener noreferrer" className='fa-icon'>
                                <FontAwesomeIcon icon={faGithub} className="text-2xl text-white hover:text-[#00ff00] mt-[4px]" />
                            </Link>
                            <Link href="https://www.linkedin.com/in/benjaminturner11/" target="_blank" rel="noopener noreferrer" className='fa-icon'>
                                <FontAwesomeIcon icon={faLinkedin} className="text-2xl text-white hover:text-[#00ff00] mt-[2px]" />
                            </Link>
                            <Link href="mailto:turner485@hotmail.co.uk" className='fa-icon'>
                                <FontAwesomeIcon icon={faEnvelope} className="text-2xl text-white hover:text-[#00ff00] mt-1" />
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
