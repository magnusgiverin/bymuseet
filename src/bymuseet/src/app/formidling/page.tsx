'use client';

import { useEffect } from 'react';

// Extend the Window interface to include the FB property
declare global {
  interface Window {
    FB: any;
  }
}

export default function Formidling() {
    useEffect(() => {
        // Load the Facebook SDK script dynamically
        const script = document.createElement('script');
        script.async = true;
        script.defer = true;
        script.crossOrigin = 'anonymous';
        script.src = 'https://connect.facebook.net/en_GB/sdk.js#xfbml=1&version=v20.0';
        script.nonce = 'Alu3a2Sb';
        document.body.appendChild(script);

        // Initialize the Facebook SDK
        script.onload = () => {
            if (window.FB) {
                window.FB.XFBML.parse();
            }
        };

        // Clean up the script when the component unmounts
        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <div className="fb-page"
                data-href="https://www.facebook.com/bymuseetilevanger"
                data-tabs="timeline, events"
                data-width=""
                data-height=""
                data-small-header="false"
                data-adapt-container-width="true"
                data-hide-cover="false"
                data-show-facepile="true">
                <blockquote cite="https://www.facebook.com/bymuseetilevanger" className="fb-xfbml-parse-ignore">
                    <a href="https://www.facebook.com/bymuseetilevanger">Bymuseet i Levanger</a>
                </blockquote>
            </div>
        </main>
    );
}
