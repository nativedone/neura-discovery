import { styled } from "@theme";
import Image from 'next/image';
import { violet, mauve, blackA } from '@radix-ui/colors';
import * as ScrollAreaPrimitive from '@radix-ui/react-scroll-area';


const SCROLLBAR_SIZE = 6;

const StyledScrollArea = styled(ScrollAreaPrimitive.Root, {
  width: '100%',
  height: '100%',
  borderRadius: 4,
  overflow: 'hidden',
  // boxShadow: `0 2px 10px ${blackA.blackA7}`,
  "@3": {
    width: '50%',
    // height: '630px', // 2560px
    // height: '117px', // 576px

    /* 7.3125rem(117px) @ 36rem(576px) increasing to 39.375rem(630px) @ 160rem(2560px) */
    height: 'clamp(7.3125rem, calc(7.3125rem + ((1vw - 0.36rem) * 25.8569)), 39.375rem)',

    /* Safari resize fix */
    minHeight: '0vw',
  },
});

const StyledViewport = styled(ScrollAreaPrimitive.Viewport, {
  width: '97.5%',
  height: '100%',
  borderRadius: 'inherit',
});

const StyledScrollbar = styled(ScrollAreaPrimitive.Scrollbar, {
  display: 'flex',
  // ensures no selection
  userSelect: 'none',
  // disable browser handling of all panning and zooming gestures on touch devices
  touchAction: 'none',
  padding: 1,
  background: blackA.blackA6,
  transition: 'background 160ms ease-out',
  '&:hover': { background: blackA.blackA8 },
  '&[data-orientation="vertical"]': { width: SCROLLBAR_SIZE },
  '&[data-orientation="horizontal"]': {
    flexDirection: 'column',
    height: SCROLLBAR_SIZE,
  },
});

const StyledThumb = styled(ScrollAreaPrimitive.Thumb, {
  flex: 1,
  background: mauve.mauve10,
  borderRadius: SCROLLBAR_SIZE,
  // increase target size for touch devices https://www.w3.org/WAI/WCAG21/Understanding/target-size.html
  position: 'relative',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '100%',
    height: '100%',
    minWidth: 44,
    minHeight: 44,
  },
});

const StyledCorner = styled(ScrollAreaPrimitive.Corner, {
  background: blackA.blackA8,
});


export const ScrollArea = StyledScrollArea;
export const ScrollAreaViewport = StyledViewport;
export const ScrollAreaScrollbar = StyledScrollbar;
export const ScrollAreaThumb = StyledThumb;
export const ScrollAreaCorner = StyledCorner;


export function Card({ layout, subheading, paragraphs, imageData }) {
  console.log(imageData, "imageData");
  return (
    <CardContainer variantLayout={layout}>
      <ScrollArea>
        <ScrollAreaViewport css={{ }}>
          <TextContainer>
            <H2>{subheading}</H2>
            {paragraphs.map((paragraph) => (
            <P key={paragraph}>{paragraph}</P>
            ))}
          </TextContainer>
        </ScrollAreaViewport>
        <ScrollAreaScrollbar orientation="vertical" css={{ }}>
          <ScrollAreaThumb />
        </ScrollAreaScrollbar>
        <ScrollAreaScrollbar orientation="horizontal">
          <ScrollAreaThumb />
        </ScrollAreaScrollbar>
        <ScrollAreaCorner />
      </ScrollArea>
      <ImageContainer>         
        <Image src={imageData.src} width={imageData.aspectRatio.width} height={imageData.aspectRatio.height} layout="responsive"/>
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
  gap: "$x",
  width: "85vw",
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
  // justifyContent: "center",
  alignItems: "center",
  color: "#fff",
  maxWidth: '100%',
  "@3": {
    minWidth:'10%',
    maxWidth: '100%',
  },
  // backgroundColor: "blue",

  //   fontSize: "$5", // TODO: confirm b/c design says 72px
  fontWeight: "$bold",
});

const H2 = styled("h2", {
    fontSize: "$2",
    paddingBottom: "$x_2",
    fontWeight: "$bold",
});

const P = styled("p", {
  fontSize: "$0",
  paddingBottom: "$x_2",
  fontWeight: "$normal",
});
