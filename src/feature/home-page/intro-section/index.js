import { styled } from "@theme";
import { Card } from "@components/card";
import { DividerGapWithFiller } from "@components/divider-gap-with-filler";

export function IntroSection() {
  return (
    <SectionContainer>
      <Lateral />
      <div>
        <Card
          subheading={`“We know more about space than we do about the brain.” – Dr Steve Kassem`}
          paragraphs={[
            `Our brains are incredible. They have taken us to the moon and will one day take us to Mars. And yet, we still know so little about them. That’s why research into brain function and neuroscience is urgently needed. Because research leads to discoveries, and discoveries lead to cures for conditions that affect millions of people. Will you join NeuRA’s researchers in the greatest discovery mission of your lifetime?`,
          ]}
          imageData={{
            src: "/assets/Dr. Steve - 570x605px - Desktop.webp",
            blurURL: '/assets/Dr. Steve - 570x605px - Desktop-blur.webp',
            alt:"Dr. Steve",
            aspectRatio: {
              width: 570,
              height: 605,
            },
          }}
        />

        <DividerGapWithFiller />

        <Statement>
          Research leads to discoveries. Discoveries lead to cures. At NeuRA, we change lives through brain research. 
        </Statement>

        <DividerGapWithFiller />

        <Card
          layout="reverse"
          subheading={`Bringing hope through medical research`}
          paragraphs={[
            `Every year, 1 in 5 Australians are affected by a major brain or mind disorder. For many, their only hope is medical research.`,

            `As a leader in brain and nervous system research, NeuRA’s goal is to tackle some of the world’s biggest health challenges. Our scientists have pioneered breakthroughs in dementia and schizophrenia research, developed mobile phone apps that can predict falls in older people, and given hope to those living with spinal cord injuries.`,
          ]}
          imageData={{
            src: "/assets/Bringing Hope - 570 x 605px - Desktop.webp",
            blurURL: "/assets/Bringing Hope - 570 x 605px - Desktop-blur.webp",
            alt:"Bringing Hope",
            aspectRatio: {
              width: 570,
              height: 605,
            },
          }}
        />
      </div>
      <Lateral />
    </SectionContainer>
  );
}

const SectionContainer = styled("section", {
  zIndex: "$20",

  display: "grid",
  gridTemplateColumns: "1fr auto 1fr",
  // backgroundColor: "rgb(18, 26, 57)",
});

const Lateral = styled("span", {});

const Statement = styled("h2", {
  color: "#fff",
  backgroundColor: "rgb( 0, 35, 65)",
  fontSize: "$3",
  textAlign: "center",

  margin: "0 auto",
  padding: "$x_2 $x",
  width: "85vw",
  "@3": {
    width: "58vw",
  },
});
