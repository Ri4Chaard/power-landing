import React from "react";
import { cn } from "@/lib/utils";

interface Props {
  src: string;
  className?: string;
}

export const ImageBlock: React.FC<Props> = ({ src, className }) => {
  return (
    <div
      className={cn("basis-[50%] flex items-center justify-center", className)}
    >
      <img src={src} alt="image" />
    </div>
  );
};
