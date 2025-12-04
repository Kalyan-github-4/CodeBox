"use client";

import Image from "next/image";
import { useUser } from "@clerk/nextjs";

const UserStatus = () => {

  const { user } = useUser();
  

  return (
    <div className="p-4 border-4 rounded-2xl">
        <div className="flex gap-3 items-center">

        <Image src="/alex_walk.gif" alt="alex_walk" width={80} height={80}/>
        <h2 className="font-game text-2xl text-gray-300">{user?.primaryEmailAddress?.emailAddress}</h2>
        </div>

        <div className="grid grid-cols-2 gap-5">

            <div  className="flex items-center gap-3">
                <Image src={'/star.png'} alt="star" width={50} height={50}/>
                <div>
                    <h2 className="text-3xl font-game">20</h2>
                    <h2 className="text-xl font-game text-gray-500">Total Rewards</h2>
                </div>
            </div>

            <div  className="flex items-center gap-3">
                <Image src={'/badge.png'} alt="star" width={50} height={50}/>
                <div>
                    <h2 className="text-3xl font-game">3</h2>
                    <h2 className="text-xl font-game text-gray-500">Badges</h2>
                </div>
            </div>

            <div className="flex items-center gap-3">
                <Image src={'/fire.png'} alt="star" width={50} height={50}/>
                <div>
                    <h2 className="text-3xl font-game">20</h2>
                    <h2 className="text-xl font-game text-gray-500">Daily Streak</h2>
                </div>
            </div>
        </div>

   

       
       
    </div>
    
  )
}

export default UserStatus