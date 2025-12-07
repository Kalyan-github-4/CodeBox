import { Button } from '@/components/ui/button'
const CommunityHelpSection = () => {
  return (
    <div className='flex flex-col items-center p-4 border-4 rounded-xl mt-7 w-full font-game text-center'>
        <h2 className='text-3xl'>Need Help?</h2>
        <p className='text-xl text-gray-500'>Connect with other learners and get support from the community.</p>
        <Button variant={'pixel'} className='rounded-lg mt-2'>Go To Community</Button>
    </div>
  )
}

export default CommunityHelpSection