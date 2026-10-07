import Image from "next/image";
import Card from "./Card"


const GetLibraryData = async () => {
  const response = await fetch("https://api.api-store.workers.dev/api/fitlog");
  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }
  const data = await response.json();
  return data;
};

const LibrarySection = async () => {
  const librarysData = await GetLibraryData();

  return (
    <section className="max-w-7xl mx-auto px-4 py-10">
      <div className="mb-8">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
          Exercise Library
        </h2>
        <p className="text-slate-600 dark:text-slate-400 mt-1">
          Explore structured workouts, target muscle groups, and proper technique guides.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {librarysData.map((item, ind) => {
            return <Card key={ind}  item={item}/>
        })}
      </div>
    </section>
  );
};

export default LibrarySection;