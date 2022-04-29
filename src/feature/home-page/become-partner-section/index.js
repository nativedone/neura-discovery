import { styled } from "@theme";
import { Card } from "@components/card";
import { DividerGapWithFiller } from "@components/divider-gap-with-filler";

export function BecomePartnerSection() {
  return (
    <SectionContainer>
      <Lateral />
      <div>
        <FullFiller />
        <DividerGapWithFiller />

        <Statement>
          Become a Discovery Partner today and change the world of brain
          research.
        </Statement>

        <DividerGapWithFiller />

        <Card
          subheading={`“The generosity of everyday Australians keeps our research going” – Professor XXXXXXXXXXXXXX.`}
          paragraphs={[
            `NeuRA’s team of scientists and researchers are among the best in the world. But their life-changing work is only made possible by ongoing support from regular donors who are passionate about finding ways to cure, treat and prevent diseases, disabilities and injuries of the brain.`,

            `You can be a part of this extraordinary journey to unlocking the secrets of the brain and helping millions of people around the world live fuller, healthier and more enriched lives.`,
          ]}
          imageData={{
            src: "/assets/The Generosity - 570x605px - Desktop.jpg",
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

const FullFiller = styled("div", {
  backgroundColor: "rgb( 0, 35, 65)",
  width: "100%",
  height: "$x",
});

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
