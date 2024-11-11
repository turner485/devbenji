// components/Freelance.js
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCogs } from '@fortawesome/free-solid-svg-icons';

const Freelance = () => {
    return (
        <div className="freelance">
            <li className='flex flex-col rounded bg-slate-700 hover:bg-[#7395c0] ease-out duration-300 mb-6 px-6 pt-4 pb-4 min-h-72 relative'>
                <p className='text-xl font-bold'>WooCommerce Build</p>
                <p className='text-base'>
                    E-commerce website built using WordPress with WooCommerce for a friend&rsquo;s business. The site features a user-friendly interface, secure payment options, and a responsive design to ensure a seamless shopping experience across all devices. The project included custom theme development, integration of various plugins for enhanced functionality, and optimization for SEO to drive organic traffic.<br /><br />
                </p>
                <p className='text-lg'>[Currently in development]</p>
                <div className='fa-wrapper fa-icon'>
                    <FontAwesomeIcon icon={faCogs} className="text-4xl text-white absolute right-1 bottom-1" />
                </div>
            </li>
            <p className="text-lg"></p>
        </div>
    );
};

export default Freelance;
