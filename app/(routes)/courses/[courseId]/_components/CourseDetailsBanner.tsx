import { useState } from "react";
import { Course } from "../../_components/CourseList";
import { Skeleton } from "@/components/ui/skeleton";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { Loader2Icon } from "lucide-react";

type Props = {
  loading: boolean;
  courseDetail: Course | undefined;
};

const CourseDetailsBanner = ({ loading, courseDetail }: Props) => {
  const [loadingEnroll, setLoadingEnroll] = useState(false);

  const EnrollCourse = async () => {
    setLoadingEnroll(true);
    const result = await axios.post("/api/enroll-course", {
      courseId: courseDetail?.courseId
    })
    console.log("EnrollCourse Result:", result);
    setLoadingEnroll(false);
  }

  // Safe banner URL
  const bannerUrl =
    typeof courseDetail?.bannerImage === "string"
      ? courseDetail.bannerImage.trim()
      : "/hero2.gif";


  return (
    <div>
      {loading ? (
        <Skeleton className="w-full h-[300px] rounded-2xl mt-20" />
      ) : !courseDetail ? (
        <Skeleton className="w-full h-[300px] rounded-2xl mt-20" />
      ) : (
        <div className="relative mt-20 overflow-hidden rounded-b-3xl border-b-2 border-purple-500/30">
          <Image
            src={bannerUrl}
            alt={courseDetail.title}
            width={1400}
            height={300}
            className="w-full h-[300px] object-cover"
          />
          <div className="font-game absolute top-0 pt-15 h-full p-10 md:px-24 lg:px-36 bg-linear-to-r from-black/80 to to-white-50/50">
            <h2 className="text-6xl">{courseDetail.title}</h2>
            <p className="text-2xl text-gray-300 mt-3">{courseDetail.description}</p>
            {!courseDetail?.userEnrolled?<Button variant={'pixel'} className="mt-7 w-36" onClick={EnrollCourse} disabled={loadingEnroll}>
              {loadingEnroll&& <Loader2Icon className="animate-spin" />}Enroll Now
            </Button> : <Button variant={'pixel'} className="mt-7 w-36 text-2xl">Continue Learning...</Button>}
          </div>
        </div>
      )}
    </div>
  );
};

export default CourseDetailsBanner;
