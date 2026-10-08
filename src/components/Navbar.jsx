
"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePlan } from "@/context/PlanContext";

const Navbar = () => {
  const { plan, saved } = usePlan();
    return (
        <nav className="container mx-auto flex items-center justify-between p-2 bg-gray-800 text-white">
            <div className="flex items-center justify-between gap-5 p-4 text-white ">

                <Image src="/logo.png" alt="Logo" width={100} height={50} />
                <h2>FITLOG</h2>
            </div>



            <div className="flex items-center justify-between gap-5 p-4 text-white">
                <ul className="flex items-center justify-between gap-5 p-4 text-white ">

                    <Link href="/workout"><li>Workout</li></Link>
                    <Link href="/my-plan"><li>My Plan</li></Link>
                </ul>

            </div>


            {/* <!-- Right Section: Badges (Plan & Saved) --> */}
    <div className="flex items-center gap-6">
      {/* <!-- Plan Badge --> */}
      <Link
  href="/my-plan"
  className="flex items-center gap-2 text-sm font-medium text-gray-300 hover:text-white transition-colors"
>
    <span>Plan</span>

    <span className="inline-flex items-center justify-center w-[22px] h-[22px] rounded-full bg-brand text-white text-xs font-bold">
        {plan.length}
    </span>
</Link>

      {/* <!-- Saved Badge --> */}
      <div>
          <Link
  href="/my-plan"
  className="flex items-center gap-2 text-sm font-medium text-gray-300 hover:text-white transition-colors"
>
    <span>Saved</span>

    <span className="inline-flex items-center justify-center w-[22px] h-[22px] rounded-full bg-[#181b1d] border border-[#2a2d32] text-white text-xs font-bold">
        {saved.length}
    </span>
</Link>
      </div>
   
    </div>





        </nav>
        
    );
};

export default Navbar;