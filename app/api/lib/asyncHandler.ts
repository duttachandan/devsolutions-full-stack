import { NextRequest, NextResponse } from "next/server";
import { errorHandler } from "./errorHandler"

type RouteHandler = (
    request: NextRequest,
    context?: any
) => Promise<NextResponse>;

export function asyncHandler(handler: RouteHandler) {
    

    return async (
        request: NextRequest,
        context?: any
    ) => {

        try {

            return await handler(request, context);

        } catch (error) {

            return errorHandler(error);

        }

    };
}