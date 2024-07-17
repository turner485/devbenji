"use client"

import React, { useState } from 'react';
import ClientReposWrapper from './client/ClientReposWrapper';
import WorkExperience from './Work Expeiance';
import Freelance from './Freelance';

const RightModule = () => {
    const [activeMenu, setActiveMenu] = useState('github'); // State to track active menu

    const handleMenuChange = (menu) => {
        setActiveMenu(menu);
    };

    return (
        <div className='w-1/2 ml-6 mt-2'>
            <div className="right-module">
                <div className="menu-buttons mb-4 flex flex-col">
                    <div className='hover-underline-wrapper'>
                        <a className={`mt-2 text-4xl ${activeMenu === 'github' ? ' text-white underline after:bg-slate-600' : 'hover-underline'}`} onClick={() => handleMenuChange('github')} style={{ fontFamily: 'Pixel Digivolve, sans-serif' }}>GitHub</a>
                    </div>
                    <div className='hover-underline-wrapper'>
                        <a className={`mt-2 text-4xl ${activeMenu === 'work-experience' ? 'text-white underline' : 'hover-underline'}`} onClick={() => handleMenuChange('work-experience')} style={{ fontFamily: 'Pixel Digivolve, sans-serif' }}>Work Experience</a>
                    </div>
                    <div className='hover-underline-wrapper'>
                        <a className={`mt-2 text-4xl ${activeMenu === 'freelance' ? ' text-white underline' : 'hover-underline'}`} onClick={() => handleMenuChange('freelance')} style={{ fontFamily: 'Pixel Digivolve, sans-serif' }}>Freelance</a>
                    </div>
                </div>

                <div className="menu-content">
                    {activeMenu === 'github' && <ClientReposWrapper />}
                    {activeMenu === 'work-experience' && <WorkExperience />}
                    {activeMenu === 'freelance' && <Freelance />}
                </div>
            </div>
        </div>
    );
};

export default RightModule;
