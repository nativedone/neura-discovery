import { styled } from "@theme";
import * as ScrollAreaPrimitive from "@radix-ui/react-scroll-area";

import { ImageWithBlur } from "@components/image-with-blur";

const SCROLLBAR_SIZE = 6;

const StyledScrollArea = styled(ScrollAreaPrimitive.Root, {
  width: "100%",
  height: "100%",
  borderRadius: 4,
  overflow: "hidden",
  // boxShadow: `0 2px 10px ${blackA.blackA7}`,
  "@3": {
    width: "50%",
    width: "calc(50%  + 6px)",

    // height: '630px', // 2560px
    // height: '117px', // 576px
    /* 7.3125rem(117px) @ 36rem(576px) increasing to 39.375rem(630px) @ 160rem(2560px) */
    height:
      "clamp(7.3125rem, calc(7.3125rem + ((1vw - 0.36rem) * 25.8569)), 39.375rem)",

    /* Safari resize fix */
    minHeight: "0vw",

    paddingRight: "12px",
  },
});

const StyledViewport = styled(ScrollAreaPrimitive.Viewport, {
  width: "100%",
  height: "100%",
  borderRadius: "inherit",
});

const StyledScrollbar = styled(ScrollAreaPrimitive.Scrollbar, {
  display: "flex",
  // ensures no selection
  userSelect: "none",
  // disable browser handling of all panning and zooming gestures on touch devices
  touchAction: "none",
  padding: 1,
  background: "transparent",
  transition: "background 160ms ease-out",
  "&:hover": { background: "rgba(0, 0, 0, 0.5)" },
  '&[data-orientation="vertical"]': { width: SCROLLBAR_SIZE },
  '&[data-orientation="horizontal"]': {
    flexDirection: "column",
    height: SCROLLBAR_SIZE,
  },
});

const StyledThumb = styled(ScrollAreaPrimitive.Thumb, {
  flex: 1,
  background: "hsl(253 3.5% 53.5%)",
  borderRadius: SCROLLBAR_SIZE,
  // increase target size for touch devices https://www.w3.org/WAI/WCAG21/Understanding/target-size.html
  position: "relative",
  "&::before": {
    content: '""',
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "100%",
    height: "100%",
    minWidth: 44,
    minHeight: 44,
  },
});

const StyledCorner = styled(ScrollAreaPrimitive.Corner, {
  background: "hsl(0 0% 78.0%)",
});

export const ScrollArea = StyledScrollArea;
export const ScrollAreaViewport = StyledViewport;
export const ScrollAreaScrollbar = StyledScrollbar;
export const ScrollAreaThumb = StyledThumb;
export const ScrollAreaCorner = StyledCorner;

export function Card({ layout, subheading, author, paragraphs, imageData }) {
  return (
    <CardContainer variantLayout={layout}>
      <ScrollArea type="auto">
        <ScrollAreaViewport css={{}}>
          <TextContainer>
            <H2>{subheading}</H2>
            <Span>{author}</Span>
            {paragraphs.map((paragraph) => (
              <P key={paragraph}>{paragraph}</P>
            ))}
          </TextContainer>
        </ScrollAreaViewport>
        <ScrollAreaScrollbar orientation="vertical" css={{}}>
          <ScrollAreaThumb />
        </ScrollAreaScrollbar>
        <ScrollAreaCorner />
      </ScrollArea>
      <ImageContainer>
        <ImageWithBlur  
          src={imageData.src}
          alt={imageData.alt}
          aspect_ratio={imageData.aspectRatio}
          layout="responsive"
          blurURL={imageData.blurURL || "https://a.storyblok.com/f/145688/570x605/5a9665afd2/dr-steve-570x605px-desktop.jpg/m/50x0/filters:quality(10):blur(10)"} // update to use a very small image
        />
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
    gap: "calc(var(--x) - 6px)",
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
  color: "#fff",
  maxWidth: "100%",
  "@3": {
    minWidth: "10%",
    maxWidth: "100%",
  },
  fontWeight: "$bold",
});

const H2 = styled("h2", {
  fontSize: "$2",
  fontWeight: "$bold",
});

const P = styled("p", {
  fontSize: "$0",
  paddingTop: "$x_2",
  fontWeight: "$normal",
});

const Span = styled("p", {
  fontSize: "$0",
  paddingTop: "$x_8",
  fontWeight: "$normal",
});
