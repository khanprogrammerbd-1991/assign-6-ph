import Image from "next/image";
import Card from "./Card"
import { FullApi } from "@/utils/api";



const LibrarySection = async () => {
  
  const librarysData = await FullApi();

  return (
    <section className="max-w-7xl mx-auto px-4 py-10">
      <div className="mb-8">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
          The Library
        </h2>
        <p className="text-slate-600 dark:text-slate-400 mt-1">
          Twelve lifts covering every major muscle group.
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