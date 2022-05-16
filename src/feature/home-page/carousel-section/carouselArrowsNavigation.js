import { styled } from "@theme";
import { VisuallyHidden } from "@components/visually-hidden";

import { LeftArrowIcon } from "./leftArrowIcon";
import { RightArrowIcon } from "./rightArrowIcon";

export function CarouselArrowsNavigation({ prevSlide, nextSlide }) {
  return (
    <CarouselDesktopNavigationContainer>
      <DesktopNavigationButton 
        className="navigation-arrow"
        onClick={prevSlide}
      >
        <LeftArrowIcon/>
      </DesktopNavigationButton>
      <DesktopNavigationButton 
        className="navigation-arrow"
        onClick={nextSlide}
      >
        <RightArrowIcon />
        <VisuallyHidden>{`Go to next slide`}</VisuallyHidden>
      </DesktopNavigationButton>
    </CarouselDesktopNavigationContainer>
  );
}

const CarouselDesktopNavigationContainer = styled("div", {
  position: "absolute",
  height: '100%',

  display: "none",
  // TODO: see if we will render these buttons for ipad mini etc.
  "@3": {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: '85%'
  },
  "@8": {
    width: '75%'
  }
});

const DesktopNavigationButton = styled("button", {
  zIndex: 1, // this is necessary because the swiper/react slider stays on top

  // opacity changes when user hovers the parent
  "@media (hover: hover) and (pointer: fine)": {
    opacity: 0,
  },
  transition: "opacity 0.5s ease",

  fontSize: "clamp(2.5rem, calc(2.5rem + ((1vw - 0.34375rem) * 3.4826)), 6.875rem)",

  /* Safari resize fix */
  minHeight: "0vw",
});
