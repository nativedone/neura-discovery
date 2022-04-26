import { styled } from "@theme";
import Image from 'next/image';

// import heroImageOne from "../../../public/assets/DSC07357.jpeg";
// import heroImageTwo from "../../../public/assets/RxMobile.PNG";


export function Card({ layout, subheading, paragraphs, imageData }) {
  console.log(imageData, "imageData");
  return (
    <CardContainer variantLayout={layout}>
      <TextContainer>
        <H2>{subheading}</H2>
        {paragraphs.map((paragraph) => (
          <P key={paragraph}>{paragraph}</P>
        ))}
      </TextContainer>
        <ImageContainer>         
              <Image src={imageData.src} width={imageData.aspectRatio.width} height={imageData.aspectRatio.height}/>
        </ImageContainer>
    </CardContainer>
  );
}

const CardContainer = styled("div", {
  display: "flex",
  justifyContent: "space-between",
  backgroundColor: "rgb( 0, 35, 65)",
  margin: "0 auto",
  padding: "$x $x $3x_2 $x",
  objectFit: "contain",
  

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
  // display: "flex",
  width: "100%",
  // objectFit: "contain",
  "@3": {
    width: "50%",
    // objectFit: "cover",
  },
  // aspectRatio: "1",
  // backgroundColor: "red",
});

const TextContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  color: "#fff",
  
  
  "@3": {
    maxWidth: '50%',
  },
  // backgroundColor: "blue",

  //   fontSize: "$5", // TODO: confirm b/c design says 72px
  fontWeight: "$bold",
});

const H2 = styled("h2", {
    fontSize: "$2",
    paddingBottom: "$x_2",
    fontWeight: "bold",
});

const P = styled("p", {
  fontSize: "$normal",
  paddingBottom: "$x_2",
  fontWeight: "regular",
});



// const data = [
//   {
//     id: 0,
//     landscape: {
//       image: heroImageOne,
//       width: 400,
//       height: 400,
//     },
//     // portrait: {
//     //   image: heroImageOne,
//     //   width: 249,
//     //   height: 216,
//     // },
//   },
//   {
//     id: 1,
//     landscape: {
//       image: heroImageTwo,
//       width: 400,
//       height: 400,
//     },
//     // portrait: {
//     //   image: heroImageTwo,
//     //   width: 249,
//     //   height: 216,
//     // },
//   },
// ];





// const HeroImageTwo = (props) => {
//   return (

//     <Image
//       src={heroImageTwo}
//       width="400px"
//       height="100%"
//       // layout="fill"
//       priority={true}
//       loading="eager"
//     />
//   )
// }
