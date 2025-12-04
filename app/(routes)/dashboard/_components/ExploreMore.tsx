"use client"
import Image from 'next/image';


const ExploreOptions = [
  {
    id: 1,
    title: "Quize Pack",
    description: "Practice what you learned from bit-sized challenges.",
    icon: "/tree.png"
  },
  {
    id: 2,
    title: "Community Projects",
    description: "Build real-world apps collaborate with the community.",
   icon: "/growth.png"
  },
  {
    id: 3,
    title: "Video Courses",
    description: "Learn with structured video lessons taught step-by-step.",
    icon: "/game.png"
  },
  {
    id: 4,
    title: "Explore Apps",
    description: "Explore prebuild app which you can try demo and build it yourself.",
    icon: "/start-up.png"
  }
];


const ExploreMore = () => {
  return (
    <div className='mt-8'>
        <h2 className="font-game text-3xl mb-2">Explore More Courses</h2>

        <div className='grid grid-cols-2 gap-5'>
            {ExploreOptions.map((option, index) => (
                <div key={index} className='flex gap-2 bg-zinc-900 rounded-xl p-2 border items-center'>

                    <Image src={option?.icon} alt={option?.title} height={80} width={80}/>
                    <div>
                        <h2 className='font-game text-2xl font-medium'>{option?.title}</h2>
                        <p className='font-game text-gray-400 text-sm'>{option?.description}</p>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default ExploreMore