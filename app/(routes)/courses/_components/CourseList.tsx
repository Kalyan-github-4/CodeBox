"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import Image from "next/image";
import { ChartNoAxesColumnDecreasing } from "lucide-react";
import Link from "next/link";

export type Course = {
  id: number,
  courseId: number | null,
  title: string,
  description: string,
  bannerImage: string,
  level: string,
  tags: string | null,
  chapters: Chapter[]
}

export type Chapter = {
  id: number,
  chapterId: number,
  courseId: number,
  description: string,
  name: string,
  exercises: Exercise[]
}

export type Exercise = {
  name: string,
  difficulty: string,
  slug: string,
  xp: number
}

const CourseList = () => {

  const [courseList, setCourseList] = useState<Course[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const GetAllCourseList = async () => {
      setLoading(true);
      const result = await axios.get("/api/course");
      console.log("CourseList:", result);
      setCourseList(result.data);


      setLoading(false);
    };

    GetAllCourseList();
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4 mt-3">
      {courseList?.map((course, index) => (

        <Link href={'/courses/' + course?.id} key={index} >
          <div className="border-4 rounded-2xl hover:bg-zinc-900 cursor-pointer">
            <Image src={(course?.bannerImage).trimEnd()} alt={course?.title} width={400} height={400} className=" rounded-t-lg w-full h-[200px] object-cover" />
            <div className="p-4">

              <h2 className="text-2xl font-game mt-2">{course?.title}</h2>
              <p className="text-xl font-game text-gray-500 line-clamp-2">{course?.description}</p>

              <h2 className="text-xl font-game bg-zinc-800 gap-2 items-center rounded-2xl p-1 px-4 inline-flex mt-3">
                <ChartNoAxesColumnDecreasing className="h-4 w-4" />
                {course?.level}
              </h2>

            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default CourseList;
