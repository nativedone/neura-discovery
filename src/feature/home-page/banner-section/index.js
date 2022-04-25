import { styled } from "@theme";
import { Button } from "@components/button";

export function BannerSection({ text, renderButton }) {
  return (
    <BannerSectionContainer>
      <h2>{text}</h2>
      {renderButton && (
        <Button variant="secondary" css={{ marginTop: "$x_4" }}>
          JOIN US NOW
        </Button>
      )}
    </BannerSectionContainer>
  );
}

const BannerSectionContainer = styled("section", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "$x 0",
  background:
    "-webkit-linear-gradient(0deg, var(--color-red-left), var(--color-red-middle) 50%, var(--color-red-right) 100%)",
});
