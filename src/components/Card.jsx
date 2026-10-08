import React from 'react';
import Link from "next/link";

const Card = ({item}) => {
    return (
       <Link href={`/workout/${item.id}`}>
        <div className="group relative flex flex-col overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
          >
            {/* Header Image & Badges */}
            <div className="relative h-52 w-full overflow-hidden bg-slate-100 dark:bg-slate-800">
              <img
                src={item.image}
                alt={item.name}
                className="h-full w-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />

              {/* Rating Badge */}
              <div className="absolute top-3 right-3 flex items-center gap-1 rounded-full bg-slate-900/80 backdrop-blur-md px-2.5 py-1 text-xs font-semibold text-amber-400">
                <svg
                  className="w-3.5 h-3.5 fill-current"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                </svg>
                <span>{item.rating}</span>
              </div>

              {/* Difficulty Tag */}
              <div className="absolute top-3 left-3 rounded-full bg-indigo-600/90 backdrop-blur-md px-3 py-1 text-xs font-medium text-white shadow-sm">
                {item.difficulty}
              </div>

              {/* Title inside Overlay */}
              <div className="absolute bottom-3 left-4 right-4">
                <h3 className="text-xl font-bold text-white tracking-tight leading-snug">
                  {item.name}
                </h3>
              </div>
            </div>

            {/* Content Body */}
            <div className="flex flex-1 flex-col justify-between p-5">
              <div>
                {/* Muscle Groups */}
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {item.muscleGroups.map((muscle, idx) => (
                    <span
                      key={idx}
                      className="rounded-md bg-indigo-50 dark:bg-indigo-950/50 px-2 py-0.5 text-xs font-semibold text-indigo-600 dark:text-indigo-400 border border-indigo-100 dark:border-indigo-900/50"
                    >
                      {muscle}
                    </span>
                  ))}
                </div>

                <p className="text-sm text-slate-600 dark:text-slate-300 line-clamp-2 leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Key Metrics Bar */}
              <div className="mt-5 grid grid-cols-3 gap-2 border-y border-slate-100 dark:border-slate-800/80 py-3 text-center">
                <div>
                  <p className="text-[10px] font-medium uppercase tracking-wider text-slate-400">
                    Sets x Reps
                  </p>
                  <p className="text-sm font-bold text-slate-800 dark:text-slate-200 mt-0.5">
                    {item.sets} × {item.reps}
                  </p>
                </div>
                <div>
                  <p className="text-[10px] font-medium uppercase tracking-wider text-slate-400">
                    Time
                  </p>
                  <p className="text-sm font-bold text-slate-800 dark:text-slate-200 mt-0.5">
                    {item.duration}m
                  </p>
                </div>
                <div>
                  <p className="text-[10px] font-medium uppercase tracking-wider text-slate-400">
                    Burn
                  </p>
                  <p className="text-sm font-bold text-orange-500 mt-0.5">
                    {item.caloriesBurned} kcal
                  </p>
                </div>
              </div>

              {/* Equipment Footnote */}
              <div className="mt-4 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
                <span className="truncate">
                  <strong className="font-semibold text-slate-700 dark:text-slate-300">
                    Equipment:
                  </strong>{" "}
                  {item.equipment}
                </span>
              </div>
            </div>
          </div>
          </Link>
    );
};

export default Card;