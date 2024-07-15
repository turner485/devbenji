// LoadingScreen.js
"use client";

import React, { useEffect, useState } from 'react';
import styles from './styles/loadingScreen.module.css';

const LoadingScreen = ({ onComplete }) => {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(false);
            onComplete(); // Notify parent that loading is complete
        }, 3000); // Duration for loading screen

        return () => clearTimeout(timer);
    }, [onComplete]);

    return (
        <div className={`${styles.loadingScreen} ${isVisible ? styles.visible : ''}`}>
            <div className={styles.loadingText} style={{ fontFamily: 'Pixel Digivolve, sans-serif' }}>
                //devbenji
                <span className={`${styles.dot} ${styles.dot1}`}>.</span>
                <span className={`${styles.dot} ${styles.dot2}`}>.</span>
                <span className={`${styles.dot} ${styles.dot3}`}>.</span>
            </div>
        </div>
    );
};

export default LoadingScreen;
