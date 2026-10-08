"use client";

import Link from "next/link";
import { useState } from "react";
import { usePlan } from "@/context/PlanContext";
import PlanCard from "@/components/PlanCard";

const MyPlanPage = () => {

    const { plan, saved } = usePlan();

    const [activeTab, setActiveTab] = useState("plan");

    // Which list should we display?
    const currentList = activeTab === "plan" ? plan : saved;

    // Calculate total minutes
    const totalMinutes = plan.reduce(
        (total, item) => total + item.duration,
        0
    );

    // Calculate total calories
    const totalCalories = plan.reduce(
        (total, item) => total + item.caloriesBurned,
        0
    );

    return (
        <main className="max-w-7xl mx-auto px-6 py-12 text-white">

            {/* Header */}
            <div className="mb-10">
                <h1 className="text-5xl font-bold uppercase">
                    MY PLAN
                </h1>

                <p className="text-gray-400 mt-2">
                    Cap of five lifts for today. Finish them, then load more.
                </p>
            </div>


            {/* Metrics */}
            <div className="grid grid-cols-3 gap-6 mb-10">

                <div className="bg-[#181b1d] border border-[#2a2d32] p-6">
                    <p className="text-gray-400 text-sm">
                        EXERCISES
                    </p>

                    <h2 className="text-4xl font-bold mt-2">
                        {plan.length}
                    </h2>
                </div>


                <div className="bg-[#181b1d] border border-[#2a2d32] p-6">
                    <p className="text-gray-400 text-sm">
                        MINUTES
                    </p>

                    <h2 className="text-4xl font-bold mt-2">
                        {totalMinutes}
                    </h2>
                </div>


                <div className="bg-[#181b1d] border border-[#2a2d32] p-6">
                    <p className="text-gray-400 text-sm">
                        CALORIES
                    </p>

                    <h2 className="text-4xl font-bold mt-2">
                        {totalCalories}
                    </h2>
                </div>

            </div>


            {/* Tabs */}
            <div className="flex gap-8 border-b border-[#2a2d32] mb-8">

                <button
                    onClick={() => setActiveTab("plan")}
                    className={`pb-4 font-bold ${
                        activeTab === "plan"
                            ? "border-b-2 border-[#ccff00] text-[#ccff00]"
                            : "text-gray-400"
                    }`}
                >
                    Today's Plan
                </button>


                <button
                    onClick={() => setActiveTab("saved")}
                    className={`pb-4 font-bold ${
                        activeTab === "saved"
                            ? "border-b-2 border-[#ccff00] text-[#ccff00]"
                            : "text-gray-400"
                    }`}
                >
                    Saved
                </button>

            </div>


            {/* Content */}
            <div>

                {currentList.length === 0 ? (

                    <div className="py-20 text-center">

                        <h2 className="text-2xl font-bold">
                            NOTHING HERE YET
                        </h2>

                        <p className="text-gray-400 mt-2">
                            Browse the library and add a lift to get today moving.
                        </p>

                        <Link
                            href="/"
                            className="inline-block mt-6 bg-[#ccff00] text-black px-6 py-3 font-bold"
                        >
                            Go to workouts
                        </Link>

                    </div>

                ) : (

                    <div className="space-y-6">

    {currentList.map((item) => (
        <PlanCard
            key={item.id}
            item={item}
            type={activeTab}
        />
    ))}

</div>
                )}

            </div>

        </main>
    );
};

export default MyPlanPage;