// RootLayoutClient.js
"use client";

import React, { useState } from 'react';
import LoadingScreen from './components/LoadingScreen';

const RootLayoutClient = ({ children }) => {
    const [isLoaded, setIsLoaded] = useState(false);

    const handleLoadingComplete = () => {
        setIsLoaded(true);
    };

    return (
        <div>
            <LoadingScreen onComplete={handleLoadingComplete} />
            <div style={{
                opacity: isLoaded ? 1 : 0,
                transition: 'opacity 0.5s ease-in-out',
                pointerEvents: isLoaded ? 'auto' : 'none' // Prevent interaction with hidden content
            }}>
                {isLoaded && children}
            </div>
        </div>
    );
};

export default RootLayoutClient;
