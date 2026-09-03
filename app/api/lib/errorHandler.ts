import { NextResponse } from "next/server";
import { NextError } from "./NextError";

export function errorHandler(error: unknown) {

    console.log(error);

    if (error instanceof NextError) {

        return NextResponse.json(
            {
                success: false,
                message: error.message
            },
            {
                status: error.statusCode
            }
        );
    }

    console.error(error);

    return NextResponse.json(
        {
            success: false,
            message: "Internal Server Error"
        },
        {
            status: 500
        }
    );
}