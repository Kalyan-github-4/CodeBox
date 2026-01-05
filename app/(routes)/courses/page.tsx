import Image from "next/image";
import CourseList from "./_components/CourseList";
import GridCanvas from "@/components/GridCanvas";

const Courses = () => {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <GridCanvas 
        particleCount={45} 
        gridSize={70} 
        connectDistance={180}
      />
      
      {/* Animated Header Section */}
      <div className="relative mt-20 overflow-hidden rounded-b-3xl border-b-2 border-purple-500/30">
        <Image 
          src={'/course-banner.gif'} 
          alt="Courses Banner" 
          width={1200} 
          height={400} 
          className="w-full h-[400px] object-cover"
        />
        <div className="absolute inset-0 flex flex-col justify-center px-10 md:px-24 lg:px-36">
          <div className="mb-4">
            <h2 className="stroke-1 font-game text-6xl lg:text-8xl bg-linear-to-r from-yellow-300 to-orange-500 text-transparent bg-clip-text  animate-linear-x">
              EXPLORE COURSES
            </h2>
            <div className="h-1 w-64 bg-linear-to-r from-yellow-500 to-orange-600 rounded-full mt-2" />
          </div>
          <p className="font-game text-2xl text-gray-200 max-w-2xl">
            Level up your skills with our interactive learning paths. 
            <span className="block text-slate-300 mt-2">Unlock achievements • Earn XP • Master coding</span>
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative px-10 md:px-24 lg:px-36 mt-16 mb-20">

        {/* <div className="relative mb-12">
          <div className="absolute -inset-1 bg-linear-to-r from-purple-600 to-cyan-600 rounded-lg blur opacity-20 animate-pulse" />
          <div className="relative border-2 border-purple-500/30 rounded-xl bg-slate-900/80 backdrop-blur-sm p-6">
            <h2 className="font-game text-5xl bg-linear-to-r from-white to-cyan-300 bg-clip-text text-transparent">
              ALL COURSES
            </h2>
            <p className="font-game text-xl text-cyan-100 mt-2">
              Select your learning path and begin your journey
            </p>
            
            <div className="flex gap-4 mt-6">
              {['All', 'Beginner', 'Intermediate', 'Advanced'].map((level) => (
                <button
                  key={level}
                  className="font-game px-6 py-2 border-2 border-cyan-500/30 rounded-lg 
                           hover:bg-cyan-500/10 hover:border-cyan-500 
                           transition-all duration-300 text-cyan-100
                           hover:scale-105 hover:shadow-glow"
                >
                  {level}
                </button>
              ))}
            </div>
          </div>
        </div> */}

        {/* Course List */}
        <CourseList />
      </div>
    </div>
  )
}

export default Courses;