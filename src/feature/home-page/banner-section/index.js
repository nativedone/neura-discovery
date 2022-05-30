import { styled } from "@theme";
import { Button } from "@components/button";

export function BannerSection({ text, renderButton }) {
  return (
    <BannerSectionContainer>
      <H2>{text}</H2>
      {renderButton && (
        <Button variant="secondary" css={{ marginTop: "$x_2" }}>
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
  textAlign: "center",
  padding: "$x 0",
  background:
    "-webkit-linear-gradient(0deg, var(--color-red-left), var(--color-red-middle) 50%, var(--color-red-right) 100%)",

    zIndex: '$20',
});

const H2 = styled("h2", {
  fontSize: "$3",
  fontWeight: "medium",
  color:"#fff",
  width: "85vw",
  "@3": {
    width: "75vw",
  },
});
