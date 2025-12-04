import React from "react";
import { Course } from "../../_components/CourseList";
import { Skeleton } from "@/components/ui/skeleton";
import Image from "next/image";

type Props = {
  loading: boolean;
  courseDetail: Course | undefined;
};

const CourseDetailsBanner = ({ loading, courseDetail }: Props) => {
  // Safe banner URL
  const bannerUrl =
    typeof courseDetail?.bannerImage === "string"
      ? courseDetail.bannerImage.trim()
      : "/hero2.gif"; // (add a fallback image in public folder)

  return (
    <div>
      {loading ? (
        <Skeleton className="w-full h-[300px] rounded-2xl" />
      ) : !courseDetail ? (
        <Skeleton className="w-full h-[300px] rounded-2xl" />
      ) : (
        <div>
          <Image
            src={bannerUrl}
            alt={courseDetail.title}
            width={1400}
            height={300}
            className="w-full h-[300px] object-cover rounded-2xl"
          />
        </div>
      )}
    </div>
  );
};

export default CourseDetailsBanner;
