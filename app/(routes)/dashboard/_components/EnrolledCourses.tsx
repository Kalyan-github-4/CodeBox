"use client"
import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

type EnrolledCourse = {
    id: string;
    title: string;
    progress: number;
}

const EnrolledCourses = () => {
    const [enrolledCourses] = useState<EnrolledCourse[]>([]);

    return (
        <div className="mt-8">
            {/* Header */}
            <div className="flex items-center gap-3 mb-6">
                <div className="w-1 h-8 bg-yellow-600 rounded-full"></div>
                <h2 className="font-game text-3xl text-white">
                    <span className="bg-linear-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                        Enroll Courses
                    </span>
                </h2>
            </div>

            {/* Empty State */}
            {enrolledCourses?.length === 0 ? (
                <div className="relative p-8 rounded-2xl border-2 border-blue-500/30 bg-slate-900/60 
                    backdrop-blur-sm overflow-hidden text-center group hover:border-blue-500/50 transition-all duration-300">

                    {/* Background pattern */}
                    <div className="absolute inset-0 opacity-10">
                        <div className="absolute top-1/4 left-1/4 w-30 h-30 bg-blue-700 blur-2xl rounded-full"></div>
                        <div className="absolute bottom-1/4 right-1/4 w-30 h-30 bg-purple-700 blur-2xl rounded-full"></div>
                    </div>

                    {/* Content */}
                    <div className="relative z-10 px-8 font-game">
                        {/* Animated icon */}
                        <div className="relative inline-flex items-center justify-center mb-6 group">

                            {/* Glow */}
                            <div className="absolute -inset-6 rounded-full bg-blue-500/30 blur-2xl opacity-50 transition-opacity duration-300 group-hover:opacity-70 -z-10" />

                            {/* Icon container */}
                            <div className="inline-flex rounded-2xl bg-slate-900/50 border-2 border-blue-500/30 transition-all duration-300 group-hover:border-blue-500/60 group-hover:bg-blue-950/50">
                                <Image
                                    src="/all-courses.gif"
                                    alt="book"
                                    width={100}
                                    height={100}
                                    className="relative z-10"
                                />
                            </div>
                        </div>


                        <h2 className="text-4xl text-white mb-3 tracking-wide">
                            Ready to Start Learning?
                        </h2>

                        <p className=" text-gray-400 mb-8 max-w-md mx-auto">
                            Your coding journey begins here! Explore our courses
                            and start building real projects.
                        </p>

                        {/* CTA */}
                        <Link href={"/courses"}>
                            <Button
                                variant={'pixel'}
                                size={'lg'}
                                className="rounded-none py-5"
                            >
                                BROWSE ALL COURSES
                            </Button>
                        </Link>

                        {/* Quick tip */}
                        <div className="mt-8 pt-6 border-t border-gray-800/50">
                            <p className="font-game text-sm text-gray-400 flex items-center justify-center gap-2">
                                <span className="text-green-400">💡</span>
                                Pro tip: Start with &quot;JavaScript Fundamentals&quot; for beginners.
                            </p>
                            {/* `"` can be escaped with `&quot;`, `&ldquo;`, `&#34;`, `&rdquo;`. */}
                        </div>
                    </div>
                </div>
            ) : (
                <div>
                    {/* Courses list would go here */}
                    <div className="text-center p-8 border-2 border-dashed border-blue-500/30 rounded-xl">
                        <p className="font-game text-gray-400">Your enrolled courses will appear here.</p>
                    </div>
                </div>
            )}
        </div>
    )
}

export default EnrolledCourses