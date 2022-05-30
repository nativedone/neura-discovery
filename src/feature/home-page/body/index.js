import dynamic from "next/dynamic";
import { styled } from "@theme";

import { DividerGap } from "@components/divider-gap";

import { IntroSection } from "../intro-section";
import { BannerSection } from "../banner-section";
import { CarouselSection } from "../carousel-section";
import { BecomePartnerSection } from "../become-partner-section";
import { BackgroundVideo } from "../background-video";

const HeroSection = dynamic(() =>
  import("../hero-section").then((mod) => mod.HeroSection)
);

export function Body() {
  return (
    <BodyContainer>
      <BodyContent>
        <HeroSection />

        <IntroSection />

        <DividerGap />

        <BannerSection
          text={`With one small step in partnering with NeuRA, you can help us take a giant leap towards understanding the human brain.`}
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

      <BackgroundVideo />
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
});
