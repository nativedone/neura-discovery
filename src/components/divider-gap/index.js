import { styled } from "@theme";

export function DividerGap() {
  return (
    <DividerContainer>
      <Gap />
    </DividerContainer>
  );
}

const DividerContainer = styled("div", {
  display: "flex",
  margin: "0 auto",
  width: "85vw",
  height: "5px", // Before was 10px all time
  "@3": {
    width: "58vw",
    height: "7.5px",
  },
  "@8": {
    height: "10px",
  }
});

const Gap = styled("div", {
  // backgroundColor: "red",
  backgroundColor: "transparent",
  width: "100%",
  height: "100%",
});
