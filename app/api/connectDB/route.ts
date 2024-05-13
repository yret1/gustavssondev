import { connectToMongoDB } from "@/lib/mongo";
import { NextRequest, NextResponse } from "next/server";


export async function POST(req: NextRequest, res: NextResponse) {


    try {

        const client = await connectToMongoDB();

        const db = await client.db("portfolio");
        const collection = await db.collection("projects");

        const projects = await collection.find().toArray();

        return Response.json({ data: projects });

    }catch(e) {
        return Response.error()
    }
}