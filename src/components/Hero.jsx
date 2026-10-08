import React from 'react';
import Image from 'next/image';

const Hero = () => {
    return (
        <main className="container mx-auto flex items-center justify-between p-4 bg-gray-500 text-white">
            <div className="flex flex-col items-start justify-center gap-4 p-4 text-white">
                <div>
                    <h1>TRAIN WITH INTENT.LOG</h1>
                <h1>EVERY SET.</h1>
                <p>FitLog is a dark, no-nonsense gym companion: pick a lift, lock it into today&apos;s plan, and watch the week&apos;s work add up.</p>
                
                </div>
                <div>
                    
                    <a href="#library" className="bg-blue-500 px-5 py-3 mt-8 rounded-md text-white hover:bg-blue-600 transition-colors">
                      BROWSE WORKOUTS
                    </a>
                </div>
                
            </div>
             <div>
            <Image src="/banner.png" alt="Hero Image" width={600} height={500} />
            </div>        

        </main>
       
    );
};


export default Hero;