"use client"
import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const EnrolledCourses = () => {

    const [enrolledCourses, setEnrolledCourses] = useState<any[]>([]);
  return (
    
    <div className="mt-8">
        <h2 className="font-game text-3xl mb-2">Your Enrolled Courses</h2>
        {enrolledCourses?.length == 0 ?
    <div className="flex flex-col items-center gap-3 bg-zinc-900 p-7 rounded-2xl border">
        <Image src={'/books.png'} alt="book" width={90} height={90} />
        <h2 className="font-game text-2xl">You Don't Have any Enrolled Courses</h2>

        <Link href={"/courses"}>
        <Button variant={'pixel'} size={'lg'}>Browse All Courses</Button>
        
        </Link>
    </div> 
    :
    <div>
        list
    </div>   
    }
    </div>
  )
}

export default EnrolledCourses