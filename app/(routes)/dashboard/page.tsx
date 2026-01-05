import React from 'react'
import WelcomeBanner from './_components/WelcomeBanner'
import EnrolledCourses from './_components/EnrolledCourses'
import ExploreMore from './_components/ExploreMore'
import InviteFriend from './_components/InviteFriend'
import UserStatus from './_components/UserStatus'
import UpgradeToPro from './_components/UpgradeToPro'
import GridCanvas from '../../../components/GridCanvas'

const Dashboard = () => {
  return (
    <div className='p-10 md:px-20 lg:px-32 xl:px-48 relative min-h-screen overflow-hidden'>
      {/* GridCanvas background - subtle version for dashboard */}
      <GridCanvas 
        particleCount={30} 
        gridSize={40} 
        connectDistance={150}
        backgroundColor='rgba(15, 23, 42, 0.6)'
        showGradientOverlay={false} 
      />
      
      {/* Content with higher z-index */}
      <div className='mt-20 relative z-10'>
        <div className='grid grid-cols-3 gap-7'>
            <div className='col-span-2'>
                <WelcomeBanner />
                <EnrolledCourses />
                <ExploreMore />
            </div>
            <div>
                <UserStatus/>
                <UpgradeToPro/>
                <InviteFriend />
            </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard