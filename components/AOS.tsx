"use client";

import { useEffect } from "react";
import AOS from "aos";

export default function AOSInit() {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
            offset: 100,
        });

        const handleLoaderComplete = () => {
            requestAnimationFrame(() => {
                requestAnimationFrame(() => {

                    AOS.refreshHard();

                    /*
                     * Force AOS to check the current viewport.
                     */
                    window.dispatchEvent(new Event("scroll"));

                });
            });
        };

        window.addEventListener(
            "loaderComplete",
            handleLoaderComplete
        );

        return () => {
            window.removeEventListener(
                "loaderComplete",
                handleLoaderComplete
            );
        };
    }, []);

    return null;
}