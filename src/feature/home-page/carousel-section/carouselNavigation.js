import { styled } from "@theme";
// import { VisuallyHidden } from "@components/visually-hidden";

// import { ActiveCircle } from "./activeCircle";
// import { InactiveCircle } from "./inactiveCircle";
import { LeftArrowIcon } from "./leftArrowIcon";
import { RightArrowIcon } from "./rightArrowIcon";

export function CarouselNavigation({ prevSlide, nextSlide }) {
  return (
    <CarouselDesktopNavigationContainer>
      <DesktopNavigationButton
        onClick={prevSlide}
        className="prev-carousel-desktop-navigation"
      >
        {/* <IconArrowPrev /> */}
        <LeftArrowIcon/>
        {/* <VisuallyHidden>{`Go to previous slide`}</VisuallyHidden> */}
      </DesktopNavigationButton>
      <DesktopNavigationButton
        onClick={nextSlide}
        className="next-carousel-desktop-navigation"
      >
        {/* <IconArrowNext /> */}
        <RightArrowIcon />
        {/* <VisuallyHidden>{`Go to next slide`}</VisuallyHidden> */}
      </DesktopNavigationButton>
    </CarouselDesktopNavigationContainer>
  );
}

const CarouselDesktopNavigationContainer = styled("div", {
  position: "relative",

  display: "none",
  "@3": {
    display: "revert",
  },
});

const DesktopNavigationButton = styled("button", {
  // opacity changes when user hovers the parent
  "@media (hover: hover) and (pointer: fine)": {
    // opacity: 0,
  },
  transition: "opacity 0.5s ease",
  zIndex: 1, // this is necessary because the swiper/react slider stays on top

  /* 0.625rem(10px) @ 20rem(320px) increasing to 3.1875rem(51px) @ 160rem(2560px) */
//   "--size":
//     "clamp(0.625rem, calc(0.625rem + ((1vw - 0.2rem) * 1.8304)), 3.1875rem)",


  fontSize: "clamp(2.5rem, calc(2.5rem + ((1vw - 0.34375rem) * 3.4826)), 6.875rem)",

  /* Safari resize fix */
  minHeight: "0vw",

  display: "flex",
  justifyContent: "center",
  alignItems: "center",

  position: "absolute",
  top: "50%",


//   borderColor: "white",
//   borderWidth: "1px",
//   borderStyle: "solid",
//   width: "var(--size)",
//   height: "var(--size)",
//   borderRadius: "$full",
//   backgroundColor: "white",

  "&.next-carousel-desktop-navigation": {
    transform: "translate(calc(-10.4vw + 50%), -50%)",
  }, // right arrow position

//   "@media screen and (orientation: landscape) and (min-width: 500px) and (max-width: 2560px)":
//     {
//       "&.prev-carousel-desktop-navigation": {
//         transform: "translate(-932.5vw, -50%)",
//       },
//     },

  "@media screen and (min-width: 500px)": {
    "&.prev-carousel-desktop-navigation": {
      transform: "translate(-92.5vw, -50%)",
    },
  },
});



// const IconArrowNext = (props) => (
//   <svg
//     xmlns="http://www.w3.org/2000/svg"
//     viewBox="0 0 70 70"
//     style={{
//       enableBackground: "new 0 0 70 70",
//     }}
//     xmlSpace="preserve"
//     width="1em"
//     height="1em"
//     {...props}
//   >
//     <path
//       d="M35 68.88c18.78 0 34-15.22 34-34s-15.22-34-34-34-34 15.22-34 34 15.22 34 34 34"
//       style={{
//         fill: "#fff",
//       }}
//     />
//     <path
//       style={{
//         fill: "none",
//         stroke: "#66675e",
//         strokeWidth: 7,
//       }}
//       d="m26.29 52.3 17.42-17.42-17.42-17.42"
//     />
//   </svg>
// );

// const IconArrowPrev = (props) => (
//   <svg
//     xmlns="http://www.w3.org/2000/svg"
//     viewBox="0 0 70 70"
//     style={{
//       enableBackground: "new 0 0 70 70",
//     }}
//     xmlSpace="preserve"
//     width="1em"
//     height="1em"
//     {...props}
//   >
//     <path
//       d="M35 .88c-18.78 0-34 15.22-34 34s15.22 34 34 34 34-15.22 34-34-15.22-34-34-34"
//       style={{
//         fill: "#fff",
//       }}
//     />
//     <path
//       style={{
//         fill: "none",
//         stroke: "#66675e",
//         strokeWidth: 7,
//       }}
//       d="M43.71 17.46 26.29 34.88 43.71 52.3"
//     />
//   </svg>
// );