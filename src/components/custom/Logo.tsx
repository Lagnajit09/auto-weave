import Image from "next/image";
import React from "react";

type Props = {};

const Logo = (props: Props) => {
  return (
    <>
      <Image
        src="/Beta.png"
        alt="Beta"
        width={35}
        height={35}
        className="bg-white rounded"
      />

      <p className="text-3xl font-bold">lync.</p>
    </>
  );
};

export default Logo;
