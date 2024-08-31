import React from "react";
import { cn } from "@/lib/utils";
import { Title } from "./title";

interface Props {
    title: string;
    children?: React.ReactNode;
    className?: string;
}

export const TextBlock: React.FC<Props> = ({ title, children, className }) => {
    return (
        <div className={cn("basis-[50%]", className)}>
            <Title text={title} size="xl" />
            <p>{children}</p>
        </div>
    );
};
