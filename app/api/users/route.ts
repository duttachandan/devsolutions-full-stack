import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "../lib/mongodb";
import { NextError } from "@/app/api/lib/NextError";
import { asyncHandler } from "../lib/asyncHandler";
import { UserSchema } from "../models/UserSchema";


export const GET = asyncHandler(
    async function (request: NextRequest) {
        return NextResponse.json({
            message: "Hello From Backend"
        })
    }
)

export const POST = asyncHandler(
    async function (request: NextRequest) {
        await connectDB();
        const { email, name } = await request.json();
        if (!email || !name) {
            throw new NextError(404, "Email or Name not found");
        }
        const existingUser = await UserSchema.findOne({ email });
        if (!existingUser) {
            throw new NextError(404, "No User Found");
        }
        console.log(existingUser);
        return NextResponse.json({
            data: existingUser,
            success: true,
        });
    }
)




