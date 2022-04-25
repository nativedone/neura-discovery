import dynamic from "next/dynamic";
import { styled } from "@theme";

const BackgroundVideo = dynamic(() =>
  import("./background-video").then((mod) => mod.BackgroundVideo)
);

export function HeroSection() {
  return (
    <HeroSectionContainer>
      <BackgroundVideo />

      <HeroTextContainer>
        <h1>Join us on the discovery mission of your lifetime</h1>
      </HeroTextContainer>
    </HeroSectionContainer>
  );
}

const HeroSectionContainer = styled("div", {
  position: "fixed",
  top: "0",
  left: "0",
  width: "100vw",
  aspectRatio: "507 / 320",

  zIndex: "$20",
  backgroundColor: "#1E2C38",
});

const HeroTextContainer = styled("div", {
  position: "absolute",
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: "$20",
  height: "100%",
  maxHeight: "100vh",

  fontSize: "$5", // TODO: confirm b/c design says 72px
  fontWeight: "$bold",
  color: "rgb(0, 35, 65)",

  margin: "0 auto",
  width: "75vw",
  textAlign: "center",

  textShadow: "-4px -4px 15px #fff, 4px 4px 15px #fff",

  "@3": {
    width: "50vw",
    padding: "0 $x_4",
  },
});
