import React from 'react';
import Image from 'next/image';

const Footer = () => {
    return (
        <div className="container mx-auto flex items-center justify-between p-4 bg-gray-800 text-white">

             <div className="flex items-center justify-between gap-5 p-4 text-white ">
            
                            <Image src="/logo.png" alt="Logo" width={100} height={50} />
                            <h2>FITLOG</h2>
                        </div>
            
            <div>
                <p> @2026 FITLOG.WorkOut Libray.Train Hard</p>
            </div>


            
        </div>
    );
};

export default Footer;