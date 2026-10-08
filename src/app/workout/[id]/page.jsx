import Image from "next/image";
import { SingleApi } from "@/utils/api";
import WorkoutActions from "@/components/WorkoutActions";

const WorkoutDetailsPage = async ({ params }) => {

    const { id } = await params;

    const workout = await SingleApi(id);

    return (
        <main className="max-w-7xl mx-auto px-6 py-12">

            <div className="grid grid-cols-2 gap-12">

                {/* LEFT */}
                <div>
                    <Image
                        src={workout.image}
                        alt={workout.name}
                        width={700}
                        height={700}
                        className="w-full"
                    />
                </div>


                {/* RIGHT */}
                <div className="text-white">

                    <h1 className="text-5xl font-bold uppercase">
                        {workout.name}
                    </h1>

                    <p className="mt-5 text-gray-400">
                        {workout.description}
                    </p>


                    {/* Categories */}
                    <div className="flex gap-2 mt-5">

                        {workout.muscleGroups.map((muscle, index) => (
                            <span
                                key={index}
                                className="px-3 py-1 border border-gray-600 text-sm uppercase"
                            >
                                {muscle}
                            </span>
                        ))}

                    </div>


                    {/* Specs */}
                    <div className="mt-8">

                        <h2 className="text-xl font-bold mb-4">
                            KEY SPECS
                        </h2>

                        <div className="grid grid-cols-2 gap-4">

                            <div>
                                <p className="text-gray-500 text-sm">
                                    EQUIPMENT
                                </p>
                                <p>{workout.equipment}</p>
                            </div>

                            <div>
                                <p className="text-gray-500 text-sm">
                                    DIFFICULTY
                                </p>
                                <p>{workout.difficulty}</p>
                            </div>

                            <div>
                                <p className="text-gray-500 text-sm">
                                    SETS
                                </p>
                                <p>{workout.sets}</p>
                            </div>

                            <div>
                                <p className="text-gray-500 text-sm">
                                    REPS
                                </p>
                                <p>{workout.reps}</p>
                            </div>

                            <div>
                                <p className="text-gray-500 text-sm">
                                    DURATION
                                </p>
                                <p>{workout.duration} min</p>
                            </div>

                            <div>
                                <p className="text-gray-500 text-sm">
                                    CALORIES
                                </p>
                                <p>{workout.caloriesBurned} kcal</p>
                            </div>

                            <div>
                                <p className="text-gray-500 text-sm">
                                    RATING
                                </p>
                                <p>{workout.rating}</p>
                            </div>

                        </div>

                    </div>


                    {/* Instructions */}
                    <div className="mt-8">

                        <h2 className="text-xl font-bold mb-4">
                            INSTRUCTIONS
                        </h2>

                        <ol className="space-y-3">
                            {workout.instructions.map((instruction, index) => (
                                <li key={index}>
                                    <span className="font-bold mr-3">
                                        {index + 1}.
                                    </span>

                                    {instruction}
                                </li>
                            ))}
                        </ol>

                    </div>


                    {/* Buttons */}
                    <WorkoutActions workout={workout} />

                </div>

            </div>

        </main>
    );
};

export default WorkoutDetailsPage;