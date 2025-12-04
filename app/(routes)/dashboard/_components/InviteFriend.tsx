"use client"

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import Image from 'next/image'

const InviteFriend = () => {
    return (
        <div className='flex flex-col items-center mt-8 gp-4 rounded-xl border p-4 bg-zinc-900'>
            <Image src={'/mail.png'} alt="Invite Friend" height={80} width={80} />
            <h2 className='font-game text-2xl text-gray-300'>Invite Friend</h2>
            <p className='font-game text-xl text-gray-400'>Having Fun? Share the love with your friends! Enter an email to send an invite.</p>

            <div className='grid grid-cols-3 w-full gap-4 p-4 items-center'>

                <Input placeholder='Enter Invite Email' className='col-span-2' />
                <Button variant={'pixel'} size={'lg'}>Invite</Button>
            </div>
        </div>
    )
}

export default InviteFriend