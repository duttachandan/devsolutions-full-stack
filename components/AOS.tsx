"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function AOSInit() {
    useEffect(() => {
        AOS.init({
            offset: 100,
            duration: 500,
            easing: "ease-in-sine",
            delay: 0,
        });
    }, []);

    return null;
}