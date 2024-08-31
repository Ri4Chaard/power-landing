"use client";

import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";
import { LoaderCircle } from "lucide-react";

interface Props {
    src: string;
    className?: string;
}

export const ImageBlock: React.FC<Props> = ({ src, className }) => {
    const { resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState(false); //ебаные костыли сука

    //ебаные костыли сука
    useEffect(() => {
        setMounted(true);
    }, []);

    //ебаные костыли сука
    const imageSrc = mounted
        ? resolvedTheme === "light"
            ? src
            : src.slice(0, -4) + "_dark" + ".png"
        : null;

    return (
        <div
            className={cn(
                "basis-[50%] flex items-center justify-center",
                className
            )}
        >
            {imageSrc ? (
                <img src={imageSrc} alt="image" />
            ) : (
                <LoaderCircle className="w-10 h-10 animate-spin" />
            )}
        </div>
    );
};
