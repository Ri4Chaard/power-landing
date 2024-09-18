import React from "react";
import { cn } from "@/lib/utils";
import { Container } from "./container";

interface Props {
  className?: string;
}

export const Header: React.FC<Props> = ({ className }) => {
  return (
    <header className={cn("", className)}>
      <Container className="flex items-center justify-between py-8">
        <div className="flex items-center gap-4">
          {/* <Image
            src="/logo.png"
            alt="logo"
            width={50}
            height={50}
            className="rounded-full"
          /> */}
          {/* <div className="w-[75px] h-[75px] flex items-center justify-center rounded-full select-none font-bold bg-black">
                        <p className="text-2xl uppercase font-black select-none">
                            {"<力/> "}
                        </p>
                    </div> */}

          <h1 className="text-3xl uppercase font-black select-none">
            Chikara IT круто {"<力/> "}
          </h1>
        </div>
      </Container>
    </header>
  );
};
