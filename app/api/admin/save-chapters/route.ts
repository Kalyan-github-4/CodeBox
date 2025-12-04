import { courseChaptersTable } from "@/config/schema";
import { NextRequest, NextResponse } from "next/server";
import { db } from "@/config/db";


const DATA = [
  {
    "id": 1,
    "name": "Introduction to HTML",
    "description": "Learn what HTML is, how it works, and understand the basic structure of a webpage.",
    "exersices": [
      { "name": "Explore the web skeleton", "xp": 20, "difficulty": "Easy" },
      { "name": "Create a basic HTML page", "xp": 25, "difficulty": "Easy" },
      { "name": "Identify HTML tags in a sample file", "xp": 25, "difficulty": "Easy" }
    ]
  },
  {
    "id": 2,
    "name": "HTML Text & Formatting",
    "description": "Understand headings, paragraphs, bold, italic, and other text formatting tags.",
    "exersices": [
      { "name": "Format a paragraph using tags", "xp": 25, "difficulty": "Easy" },
      { "name": "Create a heading structure (H1–H6)", "xp": 20, "difficulty": "Easy" },
      { "name": "Use bold, italic, and underline in a story", "xp": 30, "difficulty": "Medium" }
    ]
  },
  {
    "id": 3,
    "name": "HTML Links & Images",
    "description": "Learn how to add hyperlinks and display images on a webpage.",
    "exersices": [
      { "name": "Add images and hyperlinks", "xp": 30, "difficulty": "Medium" },
      { "name": "Create an image gallery using <img>", "xp": 35, "difficulty": "Medium" },
      { "name": "Build a navigation menu using links", "xp": 40, "difficulty": "Medium" }
    ]
  },
  {
    "id": 4,
    "name": "HTML Lists",
    "description": "Work with ordered, unordered, and nested lists to structure content.",
    "exersices": [
      { "name": "Create different types of lists", "xp": 25, "difficulty": "Easy" },
      { "name": "Make a nested shopping list", "xp": 30, "difficulty": "Medium" },
      { "name": "Convert a paragraph into a bullet list", "xp": 20, "difficulty": "Easy" }
    ]
  },
  {
    "id": 5,
    "name": "HTML Forms",
    "description": "Learn how forms work and collect user inputs using form elements.",
    "exersices": [
      { "name": "Build a basic form", "xp": 40, "difficulty": "Medium" },
      { "name": "Create a login form", "xp": 45, "difficulty": "Medium" },
      { "name": "Make a survey form with 5 inputs", "xp": 50, "difficulty": "Hard" }
    ]
  }
];



export async function GET(req: NextRequest) {
  try {
    const rows = DATA.map(item => ({
      name: item.name,
      description: item.description,
      exersices: item.exersices,
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