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
  "@3": {
    width: "58vw",
  },
  height: "10px",
});

const Gap = styled("div", {
  backgroundColor: "transparent",
  width: "100%",
  height: "100%",
});
