import * as React from "react";

import Image from "next/image";

export const Logo = () => {
  return (
    <Image
      src="/assets/h100_300dpi.webp"
      layout="responsive"
      alt="neura logo"
      width="2021"
      height="624"
    />
  );
};