import { connectToMongoDB } from "@/lib/mongo";
import { NextRequest, NextResponse } from "next/server";


export async function POST(req: NextRequest, res: NextResponse) {


    try {

        const client = await connectToMongoDB();

        const db = await client.db("portfolio");
        const collection = await db.collection("projects");

        const projects = await collection.find().toArray();

        const orderedProjectsOnDate = projects.sort((a :any ,b : any) => {
            return new Date(b.date).getTime() - new Date(a.date).getTime()
        })

        return Response.json({ data: orderedProjectsOnDate });

    }catch(e) {
        return Response.error()
    }
}