import { styled } from "@theme";

export function Card({ layout, subheading, paragraphs }) {
  return (
    <CardContainer variantLayout={layout}>
      <TextContainer>
        <h2>{subheading}</h2>
        {paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </TextContainer>

      <ImageContainer />
    </CardContainer>
  );
}

const CardContainer = styled("div", {
  display: "flex",
  backgroundColor: "rgb( 0, 35, 65)",

  margin: "0 auto",
  padding: "$x $x $3x_2 $x",
  width: "75vw",
  "@3": {
    width: "58vw",
  },

  variants: {
    variantLayout: {
      row: {
        flexDirection: "column",

        "@3": {
          flexDirection: "row",
        },
      },
      reverse: {
        flexDirection: "column-reverse",
        "@3": {
          flexDirection: "row-reverse",
        },
      },
    },
  },
  defaultVariants: {
    variantLayout: "row",
  },
});

const ImageContainer = styled("div", {
  display: "flex",
  width: "100%",
  "@3": {
    width: '50%',
  },
  aspectRatio: "1",

  backgroundColor: "red",
});

const TextContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",

  "@3": {
    maxWidth: '50%',
  },
  backgroundColor: "blue",

  //   fontSize: "$5", // TODO: confirm b/c design says 72px
  fontWeight: "$bold",
});
