"use client";

import { usePlan } from "@/context/PlanContext";
import { toast } from "react-hot-toast";

const WorkoutActions = ({ workout }) => {

    const { plan, setPlan, saved, setSaved } = usePlan();

    const addToPlan = () => {

        const alreadyAdded = plan.some(
            (item) => item.id === workout.id
        );

        if (alreadyAdded) {
            toast.error("Already in today's plan");
            return;
        }

        if (plan.length >= 5) {
            toast.error("Today's plan is limited to 5 workouts");
            return;
        }

        setPlan([...plan, workout]);

        toast.success("Added to today's plan");
    };


    const saveForLater = () => {

        const alreadySaved = saved.some(
            (item) => item.id === workout.id
        );

        if (alreadySaved) {
            toast.error("Already saved");
            return;
        }

        setSaved([...saved, workout]);

        toast.success("Saved for later");
    };


    return (
        <div className="flex gap-4 mt-8">

            <button
                onClick={addToPlan}
                className="bg-[#ccff00] text-black px-6 py-3 font-bold"
            >
                Add to today's plan
            </button>

            <button
                onClick={saveForLater}
                className="border border-gray-600 px-6 py-3 text-white"
            >
                Save for later
            </button>

        </div>
    );
};

export default WorkoutActions;