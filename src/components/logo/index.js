import * as React from "react";

import Image from "next/image";

export const Logo = () => {
  return (
    <Image
      src="/assets/h50_300dpi.webp"
      layout="responsive"
      alt="neura logo"
      width="2021"
      height="624"
      priority
      placeholder="blur"
      blurDataURL="/assets/h50_300dpi-blur-w50-q10-b10.webp"
    />
  );
};