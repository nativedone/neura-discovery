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
  "@3": {
    width: "58vw",
  },
  height: "10px",
});

const Filler = styled("div", {
  backgroundColor: "rgb( 0, 35, 65)",

  width: "$x",
  height: "100%",
});
