import dynamic from "next/dynamic";
import { styled } from "@theme";

import { useState } from "react";

import { Button } from "@components/button";
import { Card } from "@components/card";

const HeroSection = dynamic(() =>
  import("../hero-section").then((mod) => mod.HeroSection)
);

const SubscribeForm = dynamic(() =>
  import("../subscribe-form").then((mod) => mod.SubscribeForm)
);

const Quiz = dynamic(() => import("../quiz").then((mod) => mod.Quiz));

// -------- States
// idle: user has landed into the page
// subscribing: user is filling in the consent form
// answering: user is answering the quiz

export function Body() {
  const [state, setState] = useState("idle");
  return (
    <BodyContainer className={state}>
      {/* <Text>MAX15Characters</Text> */}
      {/* <div style={{ marginTop: 300 }}> */}
      <Card />
      <Card layout="reverse"/>
        {/* <SectionDummyContainer />
        <SectionDummyContainer />
        <SectionDummyContainer />
        <SectionDummyContainer />
        <SectionDummyContainer />
        <SectionDummyContainer />
        <SectionDummyContainer />
        <SectionDummyContainer />
        <SectionDummyContainer /> */}
      {/* </div> */}
      {/* {state === "idle" && (
        <ButtonContainer>
          <Button onClick={() => setState("subscribing")}>TAKE THE QUIZ</Button>
        </ButtonContainer>
      )} */}

      {/* <HeroSection /> */}
    </BodyContainer>
  );
}

const BodyContainer = styled("div", {
  // overflow: "hidden",

  position: "relative",

  display: "flex",
  flexDirection: "column",
  justifyContent: "center",

  // paddingTop: "100vh",
  // paddingBottom: "$x",

  // backgroundColor: "red",

  width: "100vw",

  width: "100vw",
  paddingTop: "calc(507 / 320 * 100vw)",
  // height: "100vh",

  alignItems: "flex-end",
  "&.idle": {
    alignItems: "center",
  },
  "@3": {
    alignItems: "center",
  },
});

const SectionDummyContainer = styled("div", {
  zIndex: "$50",

  width: "100vw",
  height: "30vh",
  marginBottom: "10px",
  backgroundColor: "red",
});

const Text = styled("h1", {
  zIndex: "$50",
  fontSize: "72px",
  fontWeight: "$bold",
  background:
    "-webkit-linear-gradient(0deg, var(--color-red-left), var(--color-red-middle) 50%, var(--color-red-right) 100%)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
});
