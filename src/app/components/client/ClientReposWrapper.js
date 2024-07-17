// components/ReposWrapper.js
"use client"

import dynamic from 'next/dynamic';

const Repos = dynamic(() => import('../Repos'), {
    ssr: false // Ensure component is not server-side rendered
});

export default function ClientReposWrapper() {
    return <Repos />;
}
