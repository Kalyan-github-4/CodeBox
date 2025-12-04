"use client";

import { useParams } from "next/navigation";
import CourseDetailsBanner from "./_components/CourseDetailsBanner";
import axios from "axios";
import { useEffect, useState } from "react";
import { Course } from "../_components/CourseList";

const CourseDetail = () => {
  const { courseId } = useParams<{ courseId: string }>();
  const [courseDetail, setCourseDetail] = useState<Course>();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (courseId) GetCourseDetail();
  }, [courseId]);

  const GetCourseDetail = async () => {
    try {
      setLoading(true);

      const result = await axios.get(`/api/course?courseId=${courseId}`);

      console.log(result.data);
      setCourseDetail(result.data);
    } catch (error) {
      console.error("Error loading course:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <CourseDetailsBanner loading={loading} courseDetail={courseDetail} />
    </div>
  );
};

export default CourseDetail;
