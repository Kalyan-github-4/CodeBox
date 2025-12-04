"use client"
import Image from 'next/image'
import { useUser } from '@clerk/nextjs'
const WelcomeBanner = () => {

    const {user} = useUser();

  return (
    <div className='flex gap-3 items-center'>
        <Image src={'/machine.webp'} alt='robo' height={120} width={120}/>
        <h2 className='font-game text-2xl bg-zinc-800 rounded-lg p-4 rounded-bl-none'>Welcome Back <span className='text-yellow-400'>{user?.fullName},</span> Start Learning Something New</h2>
    </div>
  )
}

export default WelcomeBanner