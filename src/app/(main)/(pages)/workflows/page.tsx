import React from "react";
import WorkflowButton from "./_components/workflow-button";

type Props = {};

const Workflows = (props: Props) => {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="sticky top-0 z-[10] flex items-center justify-between border-b bg-background/50 p-5 text-2xl backdrop-blur-lg">
        Workflows
        <WorkflowButton />
      </h1>
    </div>
  );
};

export default Workflows;
