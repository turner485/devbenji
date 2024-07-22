// LoadingScreen.js
"use client";

import React, { useEffect, useState } from 'react';
import styles from './styles/loadingScreen.module.css';

const LoadingScreen = () => {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(false);
        }, 3000); // Simulating a 3-second loading time

        return () => clearTimeout(timer); // Cleanup timer on unmount
    }, []);

    return (
        <div className={`${styles.loadingScreen} ${isVisible ? styles.visible : ''}`}>
            <div className={styles.loadingText} style={{ fontFamily: 'Pixel Digivolve, sans-serif' }}>
                &#47;&#47;devbenji
                <span className={`${styles.dot} ${styles.dot1}`}>.</span>
                <span className={`${styles.dot} ${styles.dot2}`}>.</span>
                <span className={`${styles.dot} ${styles.dot3}`}>.</span>
            </div>
        </div>
    );
};

export default LoadingScreen;
