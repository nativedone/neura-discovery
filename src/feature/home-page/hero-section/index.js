import { styled } from "@theme";

export function HeroSection() {
  return (
    <>
      <HeroSectionContainer>
        <HeroTextContainer>
          <h1>Join us on the discovery mission of your lifetime</h1>
        </HeroTextContainer>
      </HeroSectionContainer>
    </>
  );
}

const HeroSectionContainer = styled("div", {
  position: "relative",
  top: "0",
  left: "0",
  width: "100vw",
  "--mobile-height": "calc(243 / 320)",
  height: "calc(100vw * var(--mobile-height))",

  zIndex: "$20",

  "@3": {
    height: '100vh'
  },


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

  fontWeight: "$bold",
  color: "rgb(0, 35, 65)",

  margin: "0 auto",
  width: "75vw",
  textAlign: "center",

  textShadow: "-4px -4px 15px #fff, 4px 4px 15px #fff",

  fontSize: "$3",
  "@1": {
    fontSize: "$4",
  },
  "@3": {
    fontSize: "$5", //
    width: "50vw",
    padding: "0 $x_4",
  },
});
