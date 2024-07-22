"use client";

import React, { useEffect, useState } from 'react';
import LoadingScreen from './components/LoadingScreen';

const RootLayoutClient = ({ children }) => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [showLoadingScreen, setShowLoadingScreen] = useState(true);

    useEffect(() => {
        // Simulate preloading or initialization here
        const preloadContent = async () => {
            // Simulate a delay for preloading content
            await new Promise(resolve => setTimeout(resolve, 3100)); // 3-second preload time
            setIsLoaded(true);
            setShowLoadingScreen(false); // Hide loading screen after preload
        };

        preloadContent();

        return () => {
            // Cleanup if needed
        };
    }, []);

    return (
        <div>
            {showLoadingScreen && <LoadingScreen />}
            <div style={{ opacity: isLoaded ? 1 : 0, transition: 'opacity 0.5s ease-in' }}>
                {isLoaded && children}
            </div>
        </div>
    );
};

export default RootLayoutClient;
