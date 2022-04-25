import dynamic from "next/dynamic";
import { styled } from "@theme";

import { DividerGap } from "@components/divider-gap";

import { IntroSection } from "../intro-section";
import { BannerSection } from "../banner-section";
import { CarouselSection } from "../carousel-section";
import { BecomePartnerSection } from "../become-partner-section";

const HeroSection = dynamic(() =>
  import("../hero-section").then((mod) => mod.HeroSection)
);

export function Body() {
  return (
    <BodyContainer>
      <BodyContent>
        <IntroSection />

        <DividerGap />

        <BannerSection
          text={`By taking one small step and partnering with NeuRA, you can help our world take a giant leap towards understanding the human brain.`}
        />

        <DividerGap />

        <CarouselSection />

        <BecomePartnerSection />

        <DividerGap />

        <BannerSection
          text={`The brain is a whole universe yet to be explored — and your support is the rocket fuel.`}
          renderButton
        />
        
        <DividerGap />
      </BodyContent>

      <HeroSection />
    </BodyContainer>
  );
}

const BodyContainer = styled("div", {
  position: "relative",
  width: "100vw",
});

const BodyContent = styled("div", {
  position: "relative",
  zIndex: "$40",

  display: "flex",
  flexDirection: "column",
  width: "100vw",

  marginTop: "30vh",
  "@3": {
    marginTop: "100vh",
  },
});
