import React from "react";
import WorkflowButton from "./_components/workflow-button";
import Workflows from "./_components";

type Props = {};

const page = (props: Props) => {
  return (
    <div className="flex flex-col relative">
      <h1 className="sticky top-0 z-[10] flex items-center justify-between border-b bg-background/50 p-5 text-2xl backdrop-blur-lg">
        Workflows
        <WorkflowButton />
      </h1>
      <Workflows />
      <Workflows />
      <Workflows />
      <Workflows />
      <Workflows />
    </div>
  );
};

export default page;
