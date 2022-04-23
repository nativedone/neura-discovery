import { styled } from "@theme";

// TODO: add carousel lib react/swiper
// TODO: add images to data
// TODO: use map to render each carousel item

export function CarouselSection() {
  return (
    <CarouselSectionContainer>
    {/* Example of one item */}
      <CarouselItem
        subheading={data[0].subheading}
        paragraph={data[0].paragraph}
      />
    </CarouselSectionContainer>
  );
}

const CarouselSectionContainer = styled("section", {
  zIndex: "$20",

  backgroundColor: 'white' // TODO: fix me
});

const CarouselItem = ({ subheading, paragraph }) => {
  return (
    <CarouselItemContainer>
      <CarouselSubheading>{subheading}</CarouselSubheading>
      <CarouselParagraph>{paragraph}</CarouselParagraph>
    </CarouselItemContainer>
  );
};

const CarouselItemContainer = styled("div", {});

const CarouselSubheading = styled("span", {
  zIndex: "$40",
  fontSize: "$5",
  fontWeight: "$bold",
  background:
    "-webkit-linear-gradient(0deg, var(--color-red-left), var(--color-red-middle) 50%, var(--color-red-right) 100%)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
});
const CarouselParagraph = styled("p", {
  zIndex: "$40",
  fontSize: "$0",
  lineHeight: "$tight",
  fontWeight: "$normal",
});

const data = [
  {
    key: "carousel-item1",
    subheading: "The Brain Atlas",
    paragraph: `Like all explorers, neuroscientists need maps to guide their path to success. World-renowned brain cartographer and NeuRA scientist Professor George Paxinos AO made medical history in 2019 when he launched the most comprehensive atlas of the human brainstem ever made. His work has assisted in the development of treatments for conditions like Parkinson’s and Alzheimer’s disease and is now considered the foundation for all neuroscientific research.`,
  },
  {
    key: "carousel-item2",
    subheading: "Connecting young & old",
    paragraph: `Inspired by the ABC’s Old People’s Home for 4 Year Olds, NeuRA scientists launched an intergenerational integration study that placed older Australians with pre-schoolers to see what physical, cognitive and social benefits could be brought to both groups. Early research suggests that coming together for purposeful activities could reduce frailty and feelings of loneliness in older people, while boosting social and language skills for children.`,
  },
  {
    key: "carousel-item3",
    subheading: "Sydney Brain Bank",
    paragraph: `Can you imagine a bank that houses not money, but human brain and spinal cord tissue? Well, the Sydney Brain Bank does exactly that. This NeuRA facility collects, stores and distributes tissue samples for research into conditions such as Alzheimer’s, Parkinson’s and motor neuron disease. The bank currently holds brain tissue from over 700 donors and donates around 6,000 specimens every year to research groups here and overseas to facilitate advances in medical research.`,
  },

  {
    key: "carousel-item4",
    subheading: "The MUGgLE Study",
    paragraph: `In the world of Harry Potter, Muggles didn’t have any magical abilities. But at NeuRA, MUGgLEs have very special powers — they help researchers understand more about how muscles grow and develop in children with cerebral palsy. More than 34,000 Australians live with this condition, which has no known cure. Data from the 320 participants aged 5–14 will help researchers track muscles over time, creating a vital foundation for further investigation. Pretty magical stuff!`,
  },
  {
    key: "carousel-item5",
    subheading: "Supporting schizophrenia",
    paragraph: `One in 100 people live with schizophrenia, a serious mental disorder that causes people to misinterpret reality. Current treatments only partially address psychotic symptoms and don’t restore people to their full potential. NeuRA’s Schizophrenia Research Institute is the only national institute solely dedicated to discovering ways to treat, prevent and cure this disorder and in 2020, our scientists made a discovery that opened a new avenue for more effective treatment.`,
  },
];
