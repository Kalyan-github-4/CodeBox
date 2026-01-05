"use client";

import { useParams } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import axios from "axios";

import CourseDetailsBanner from "./_components/CourseDetailsBanner";
import CourseChapters from "./_components/CourseChapters";
import CourseStatus from "./_components/CourseStatus";
import UpgradeToPro from "../../dashboard/_components/UpgradeToPro";
import CommunityHelpSection from "./_components/CommunityHelpSection";
import GridCanvas from "@/components/GridCanvas";
import { Course } from "../_components/CourseList";

const CourseDetail = () => {
  const { courseId } = useParams<{ courseId: string }>();

  const [courseDetail, setCourseDetail] = useState<Course | undefined>();
  const [loading, setLoading] = useState(false);

  const getCourseDetail = useCallback(async () => {
    if (!courseId) return;

    try {
      setLoading(true);
      const { data } = await axios.get(
        `/api/course?courseId=${courseId}`
      );
      setCourseDetail(data);
    } catch (error) {
      console.error("Error loading course:", error);
    } finally {
      setLoading(false);
    }
  }, [courseId]);

  useEffect(() => {
    getCourseDetail();
  }, [getCourseDetail]);

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* GridCanvas background — same pattern as Dashboard */}
      <GridCanvas
        particleCount={30}
        gridSize={40}
        connectDistance={150}
        backgroundColor="rgba(15, 23, 42, 0.6)"
        showGradientOverlay={false}
      />

      {/* Content layer */}
      <div className="relative overflow-hidden rounded-b-3xl border-b-2 border-purple-500/30">
        <CourseDetailsBanner
          loading={loading}
          courseDetail={courseDetail}
        />

        <div className="grid grid-cols-3 gap-5 mt-10 p-10 md:px-18 lg:px-28 xl:px-32 ">
          <div className="col-span-2">
            <CourseChapters
              loading={loading}
              courseDetail={courseDetail}
            />
          </div>

          <div>
            <CourseStatus courseDetail={courseDetail} />
            {/* <UpgradeToPro /> */}
            <CommunityHelpSection />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;
