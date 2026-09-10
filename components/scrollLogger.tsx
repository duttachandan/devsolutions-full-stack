'use client'
import { useLenis } from "lenis/react";

export default function ScrollLogger() {
    useLenis((lenis) => {
        console.log("Scroll Position", lenis.scroll);
    })
    return null;
}


