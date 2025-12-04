import { db } from "@/config/db";
import { courseTable } from "@/config/schema";
import { eq, asc } from "drizzle-orm";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const courseIdParam = searchParams.get("courseId");

    if (courseIdParam) {
      const courseId = Number(courseIdParam);

      if (isNaN(courseId)) {
        return NextResponse.json(
          { message: "Invalid courseId" },
          { status: 400 }
        );
      }

      const result = await db
        .select()
        .from(courseTable)
        .where(eq(courseTable.courseId, courseId))
        .limit(1);

      if (result.length === 0) {
        return NextResponse.json(
          { message: "Course not found" },
          { status: 404 }
        );
      }

      return NextResponse.json(result[0]);
    }

    const result = await db
      .select()
      .from(courseTable)
      .orderBy(asc(courseTable.id));

    return NextResponse.json(result);
  } catch (error) {
    console.error("Error fetching courses:", error);
    return NextResponse.json(
      { message: "Server error", error },
      { status: 500 }
    );
  }
}
