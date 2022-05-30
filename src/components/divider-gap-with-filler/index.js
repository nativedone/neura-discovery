import { styled } from "@theme";

import { DividerGap } from "@components/divider-gap";

export function DividerGapWithFiller() {
  return (
    <DividerContainer>
      <Filler />
      <DividerGap />
      <Filler />
    </DividerContainer>
  );
}

const DividerContainer = styled("div", {
  display: "flex",
  margin: "0 auto",
  width: "85vw",
  height: "5px",
  "@3": {
    width: "58vw",
    height: "7.5px",
  },
  "@8": {
    height: "10px",
  }
});


const Filler = styled("div", {
  backgroundColor: "rgb( 0, 35, 65)",

  width: "$x",
  height: "100%",
});
