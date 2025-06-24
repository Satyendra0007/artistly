import CategoryCard from "./components/CategoryCard";
import categories from "@/app/data/categories.json"

export default function Home() {
  return (
    <>
      {/*-------------------- herosection -------------------------------------*/}
      <div className="herosection h-[70vh] md:h-[90vh] relative ">
        <div className="image h-full absolute top-0 left-0 -z-10 ">
          <img className="h-full object-cover " src="https://cdn.eventplanner.net/imgs/adv-3812/12437-hp-sb-desktop-sprdlux-events@2x.jpg" alt="" />
        </div>
        <div className="desc h-full bg-black/50  text-white flex justify-center items-center p-2">
          <div className="text max-w-xl md:max-w-3xl space-y-6">
            <h1 className="text-4xl font-bold md:text-5xl">EventSphere — Manage Your Events Effortlessly</h1>
            <p className="font-semibold text-justify text-sm  md:text-base  ">EventSphere is a smart event management platform that helps you plan, organize, and manage events of any size with ease. From guest lists to schedules, handle everything in one place.</p>
          </div>
        </div>
      </div>
      {/*-------------------- category section -------------------------------------*/}
      <div className="container mx-auto py-6 ">
        <div className="heading my-6 text-center">
          <h1 className="font-semibold text-2xl">All Categories </h1>
        </div>
        <div className="cards flex justify-center items-center flex-wrap gap-8">
          {categories.map((category, index) => {
            return <CategoryCard key={index} {...category} />
          })}
        </div>
      </div>
    </>
  );
}
