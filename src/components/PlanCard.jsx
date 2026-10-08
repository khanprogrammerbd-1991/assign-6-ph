"use client";

import Image from "next/image";
import Link from "next/link";
import { usePlan } from "@/context/PlanContext";

const PlanCard = ({ item, type }) => {

    const { plan, setPlan, saved, setSaved } = usePlan();

    const handleRemove = () => {

        if (type === "plan") {
            const updatedPlan = plan.filter(
                (workout) => workout.id !== item.id
            );

            setPlan(updatedPlan);
        }

        if (type === "saved") {
            const updatedSaved = saved.filter(
                (workout) => workout.id !== item.id
            );

            setSaved(updatedSaved);
        }
    };


    return (
        <div className="grid grid-cols-[220px_1fr] gap-6 bg-[#181b1d] border border-[#2a2d32] p-5">

            {/* Image */}
            <div>
                <Image
                    src={item.image}
                    alt={item.name}
                    width={220}
                    height={220}
                    className="w-full h-[220px] object-cover"
                />
            </div>


            {/* Information */}
            <div className="flex flex-col justify-between">

                <div>

                    <p className="text-sm text-[#ccff00] uppercase font-bold">
                        {item.difficulty}
                    </p>

                    <h2 className="text-2xl font-bold uppercase mt-2">
                        {item.name}
                    </h2>

                    <p className="text-gray-400 mt-3">
                        {item.description}
                    </p>


                    {/* Basic information */}
                    <div className="flex gap-8 mt-5 text-sm">

                        <div>
                            <p className="text-gray-500">
                                DURATION
                            </p>

                            <p className="font-bold">
                                {item.duration} min
                            </p>
                        </div>


                        <div>
                            <p className="text-gray-500">
                                CALORIES
                            </p>

                            <p className="font-bold">
                                {item.caloriesBurned} kcal
                            </p>
                        </div>


                        <div>
                            <p className="text-gray-500">
                                RATING
                            </p>

                            <p className="font-bold">
                                {item.rating}
                            </p>
                        </div>

                    </div>

                </div>


                {/* Buttons */}
                <div className="flex gap-4 mt-6">

                    <Link
                        href={`/workout/${item.id}`}
                        className="bg-[#ccff00] text-black px-5 py-3 font-bold"
                    >
                        View Details
                    </Link>


                    <button
                        onClick={handleRemove}
                        className="border border-gray-600 px-5 py-3 font-bold text-white"
                    >
                        Remove
                    </button>

                </div>

            </div>

        </div>
    );
};

export default PlanCard;