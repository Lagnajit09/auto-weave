import React from "react";
import Workflow from "./workflow";

type Props = {};

const Workflows = (props: Props) => {
  return (
    <div className="relative flex flex-col gap-4">
      <section className="flex flex-col m-2">
        <Workflow
          name="Test"
          description="A test workflow"
          id="1jhas7c6dsc"
          publish={false}
        />
      </section>
    </div>
  );
};

export default Workflows;
