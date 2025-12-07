import React, { useMemo } from 'react'
import Image from 'next/image'
import { Progress } from '@/components/ui/progress'
import { Course } from '../../_components/CourseList'

type Props = {
  courseDetail?: Course | undefined
}

const CourseStatus = ({ courseDetail }: Props) => {

  const counts = useMemo(() => {
    if (!courseDetail) return { totalExc: 0, totalXP: 0 }

    let totalExercises = 0
    let totalXP = 0

    courseDetail.chapters?.forEach(chapter => {
      totalExercises += chapter?.exercises?.length || 0
      chapter?.exercises?.forEach(exercise => {
        totalXP += exercise?.xp || 0
      })
    })

    return {
      totalExc: totalExercises,
      totalXP: totalXP
    }
  }, [courseDetail])

  return (
    <div className='font-game border-4 rounded-2xl p-4 w-full'>
      <h2 className='text-3xl'>Course Progress</h2>

      <div className='flex items-center gap-5'>
        <Image src="/book.png" alt="book" width={50} height={50} />
        <div className='w-full'>
          <h3 className='text-2xl flex justify-between'>
            Exercises <span className='text-gray-400'>5/{counts.totalExc}</span>
          </h3>
          <Progress value={33} max={counts.totalExc} className="mt-2" />
        </div>
      </div>

      <div className='flex items-center gap-5'>
        <Image src="/star.png" alt="star" width={50} height={50} />
        <div className='w-full'>
          <h3 className='text-2xl flex justify-between'>
            XP Earned <span className='text-gray-400'>50/{counts.totalXP}</span>
          </h3>
          <Progress value={15} max={counts.totalXP} className="mt-2" />
        </div>
      </div>
    </div>
  )
}

export default CourseStatus
