import { db } from "@/config/db";
import { usersTable } from "@/config/schema";
import { currentUser } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";
import { eq } from "drizzle-orm"; 


export async function POST(req: NextRequest){

    const user = await currentUser();

    //IF USER ALREADY EXIST
    //@ts-ignore
    const users = await db.select().from(usersTable).where(eq(usersTable.email,user?.primaryEmailAddress?.emailAddress))

    //IF USER DOESN'T EXIST, CREATE A NEW USER
    if(users?.length<= 0){
        const newUser = {
            name:user?.fullName??'',
            email:user?.primaryEmailAddress?.emailAddress??'',
            points: 0
        }

        const result = await db.insert(usersTable).values(newUser).returning()
        return NextResponse.json(result[0])
    }

    return NextResponse.json(users[0]);
}