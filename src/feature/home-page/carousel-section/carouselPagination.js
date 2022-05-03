import { styled } from "@theme";

import { VisuallyHidden } from "@components/visually-hidden";

import { InactiveCircle } from "./inactiveCircle";
import { ActiveCircle } from "./activeCircle";

export function CarouselPagination({ index, data, slideTo }) {
  return (
    <CarouselPaginationContainer>
      {data.map((_, i) => (
        <button key={`nav${i}`} onClick={() => slideTo(i)}>
          {i === index ? <ActiveCircle /> : <InactiveCircle />}
          <VisuallyHidden>{`Go to slide ${i + 1}`}</VisuallyHidden>
        </button>
      ))}
    </CarouselPaginationContainer>
  );
}

const CarouselPaginationContainer = styled("div", {
  zIndex: 1, // this is necessary because the swiper/react slider stays on top

  /* 0.9625rem(15.4px) @ 20rem(320px) increasing to 1.928125rem(30.85px) @ 160rem(2560px) */
  "--size":
    "clamp(0.9625rem, calc(0.9625rem + ((1vw - 0.2rem) * 0.6897)), 1.928125rem)",
  fontSize: "var(--size)",

  /* Safari resize fix */
  minHeight: "0vw",

  position: "absolute",
  bottom: "$x",

  display: "flex",
  justifyContent: "center",

  button: {
    width: "var(--size)",
    height: "var(--size)",
    maxHeight: "var(--size)",
    borderRadius: "$full",
    backgroundColor: "transparent",
    position: "relative",

    "+ button": {
      /* 19.9px @ 320px increasing to 51.25px @ 2560px */
      marginLeft:
        "clamp(19.9px, calc(1.24375rem + ((1vw - 3.2px) * 1.3996)), 51.25px)",
    },
  },

  "@3": {
    bottom: "$x_2",
  },
  "@9": {
    bottom: "$3x_2",
  }
});
