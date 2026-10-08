import React from 'react';
import Image from 'next/image';

const Hero = () => {
    return (
        <main className="container mx-auto flex items-center justify-between p-4 bg-gray-500 text-white">
            <div>
                <div>
                    <h1>TRAIN WITH INTENT.LOG</h1>
                <h1>EVERY SET.</h1>
                <p>FitLog is a dark, no-nonsense gym companion: pick a lift, lock it into today&apos;s plan, and watch the week&apos;s work add up.</p>
                
                </div>
                <div>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold my-5 py-2 px-4 rounded">
                        Browse Workout
                    </button>
                </div>
                
            </div>
             <div>
            <Image src="/banner.png" alt="Hero Image" width={600} height={500} />
            </div>        

        </main>
       
    );
};


export default Hero;