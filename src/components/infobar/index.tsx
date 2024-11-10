import { Book, Headphones, Search } from "lucide-react";
import React from "react";
import { Input } from "@/components/ui/input";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { UserButton } from "@clerk/nextjs";

type Props = {};

const InfoBar = (props: Props) => {
  return (
    <div className="flex flex-row justify-end gap-5 items-center px-4 py-4 w-full dark:bg-black">
      <span className="flex items-center bg-muted px-4 rounded-full">
        <Search />
        <Input
          placeholder="Quick Search"
          className="border-none bg-transparent outline-none"
        />
      </span>
      <TooltipProvider>
        <Tooltip delayDuration={0}>
          <TooltipTrigger>
            <Headphones />
          </TooltipTrigger>
          <TooltipContent>
            <p>Contact Support</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <TooltipProvider>
        <Tooltip delayDuration={0}>
          <TooltipTrigger>
            <Book />
          </TooltipTrigger>
          <TooltipContent>
            <p>Guide</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <UserButton afterSignOutUrl="/" />
    </div>
  );
};

export default InfoBar;
