import { styled } from "@theme";

export function Card({ layout }) {
  return (
    <CardContainer variantLayout={layout}>
      <TextContainer>
        <h2>Join us on the discovery mission of your lifetime</h2>
        <p>Join us on the discovery mission of your lifetime</p>
        <p>Join us on the discovery mission of your lifetime</p>
        <p>Join us on the discovery mission of your lifetime</p>
      </TextContainer>

      <ImageContainer />
     
    </CardContainer>
  );
}

const CardContainer = styled("div", {
    display: "flex",
    marginBottom: '20px',


    variants: {
      variantLayout: {
        row: {
          flexDirection: 'column',

          "@3": {
            flexDirection: 'row',
          }

        },
        reverse: {
          flexDirection: 'column-reverse',
          "@3": {
            flexDirection: 'row-reverse',
          }
        },
      }
    },
    defaultVariants: {
      variantLayout: 'row'
    }

});
const ImageContainer = styled("div", {
    display: "flex",
    width: "300px",
    height: "300px",

    backgroundColor: 'red'

});

const TextContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",

  backgroundColor: 'blue',


//   fontSize: "$5", // TODO: confirm b/c design says 72px
  fontWeight: "$bold",


});
