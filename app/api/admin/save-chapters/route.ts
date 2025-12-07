import { courseChaptersTable } from "@/config/schema";
import { NextRequest, NextResponse } from "next/server";
import { db } from "@/config/db";


const DATA = [
  {
    id: 1,
    name: "Introduction to HTML",
    description: "Learn what HTML is, how it works, and understand the basic structure of a webpage.",
    exercises: [
      { name: "Create a basic HTML file", xp: 20, difficulty: "Easy" },
      { name: "Add a title inside <head>", xp: 25, difficulty: "Easy" },
      { name: "Explore the structure of <html>, <head>, <body>", xp: 25, difficulty: "Easy" }
    ]
  },
  {
    id: 2,
    name: "Text & Formatting",
    description: "Learn headings, paragraphs, bold, italic, underline, and semantic text tags.",
    exercises: [
      { name: "Create a heading structure (H1–H6)", xp: 25, difficulty: "Easy" },
      { name: "Format text using <b>, <i>, <u>", xp: 20, difficulty: "Easy" },
      { name: "Use semantic tags like <strong> & <em>", xp: 30, difficulty: "Medium" }
    ]
  },
  {
    id: 3,
    name: "Links & Images",
    description: "Insert hyperlinks, image elements, and understand attributes like href, src, alt, and target.",
    exercises: [
      { name: "Add images and hyperlinks", xp: 30, difficulty: "Medium" },
      { name: "Create an image gallery using <img>", xp: 35, difficulty: "Medium" },
      { name: "Build a navigation menu using <a> links", xp: 40, difficulty: "Medium" }
    ]
  },
  {
    id: 4,
    name: "Lists",
    description: "Use ordered lists, unordered lists, and nested lists to structure content.",
    exercises: [
      { name: "Create ordered and unordered lists", xp: 25, difficulty: "Easy" },
      { name: "Make a nested shopping list", xp: 30, difficulty: "Medium" },
      { name: "Convert text into a bullet list", xp: 20, difficulty: "Easy" }
    ]
  },
  {
    id: 5,
    name: "HTML Forms",
    description: "Learn how to collect user input using form elements such as input, textarea, select, and button.",
    exercises: [
      { name: "Build a basic form with inputs", xp: 40, difficulty: "Medium" },
      { name: "Create a login form", xp: 45, difficulty: "Medium" },
      { name: "Make a multi-question survey form", xp: 50, difficulty: "Hard" }
    ]
  }
];




export async function GET(req: NextRequest) {
  try {
    const rows = DATA.map(item => ({
      name: item.name,
      description: item.description,
      exercises: (item.exercises),
      chapterId: item.id,           
      courseId: 1,             
    }));
   
    await db.insert(courseChaptersTable).values(rows);

    return NextResponse.json({ message: "HTML chapters inserted for courseId 1" });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Insert failed" }, { status: 500 });
  }
}