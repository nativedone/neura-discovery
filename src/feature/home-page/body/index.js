import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { useState } from "react";

import { styled } from "@theme";

import { DividerGap } from "@components/divider-gap";

import { IntroSection } from "../intro-section";
import { BannerSection } from "../banner-section";
import { BackgroundVideo } from "../background-video";

const HeroSection = dynamic(() =>
  import("../hero-section").then((mod) => mod.HeroSection)
);

const CarouselSection = dynamic(() =>
  import("../carousel-section").then((mod) => mod.CarouselSection)
);

const BecomePartnerSection = dynamic(() =>
  import("../become-partner-section").then((mod) => mod.BecomePartnerSection)
);

export function Body() {
  const [carouselInView, setCarouselInView] = useState(false);
  const [partnerInView, setPartnerInView] = useState(false);

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

        <LazyLoading
          onViewportEnter={() => {
            setCarouselInView(true);
          }}
        >
          {carouselInView && <CarouselSection />}
        </LazyLoading>

        <LazyLoading
          onViewportEnter={() => {
            setPartnerInView(true);
          }}
        >
          {partnerInView && <BecomePartnerSection />}
        </LazyLoading>

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

const LazyLoading = styled(motion.div, {});