// RootLayoutClient.js
"use client";

import React, { useEffect, useState } from 'react';
import LoadingScreen from './components/LoadingScreen';

const RootLayoutClient = ({ children }) => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [showLoadingScreen, setShowLoadingScreen] = useState(true);

    useEffect(() => {
        const loadTimer = setTimeout(() => {
            setIsLoaded(true);
            setShowLoadingScreen(false);
        }, 3000); // Simulating 3 seconds loading time

        return () => {
            clearTimeout(loadTimer);
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
