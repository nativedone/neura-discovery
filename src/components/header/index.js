import { styled } from "@theme";
import { Button } from "@components/button";
import { VisuallyHidden } from "@components/visually-hidden";
import { useEffect, useState } from "react";
import { useViewportScroll, motion } from "framer-motion";
import useDebounce from "react-use/lib/useDebounce";

const headerAnimationVariants = {
  show: { opacity: 1, y: 0 },
  hide: { opacity: 0, y: "-100%" },
};

import { Logo } from "./logo";

export function Header({ shouldSticky = true, animateOnScroll = true }) {
  const { scrollY } = useViewportScroll();

  const [currentScroll, setCurrentScroll] = useState(0);
  const [isHeaderVisible, setHeaderVisibility] = useState(true);
  const [debouncedPreviousScroll, setDebouncedPreviousScroll] = useState(0);

  const [, clearDebounceListener] = useDebounce(
    () => {
      setDebouncedPreviousScroll(currentScroll);
    },
    100,
    [currentScroll]
  );

  useEffect(() => {
    if (!animateOnScroll) {
      return;
    }

    function updateScroll() {
      const y = scrollY.get();

      setCurrentScroll(y);
      const delta = y - debouncedPreviousScroll;

      if (delta > 0) {
        setHeaderVisibility(false);
      } else {
        setHeaderVisibility(true);
      }
    }

    const unsubscribeScrollY = scrollY.onChange(updateScroll);

    return () => {
      unsubscribeScrollY();
      clearDebounceListener();
    };
  }, [animateOnScroll, debouncedPreviousScroll, clearDebounceListener]);

  const stickyClass = shouldSticky ? "is-sticky" : "";
  const isHeaderVisibleClass =
    isHeaderVisible && scrollY.get() > 200 ? "is-visible" : "";

  const headerContainerClass = `${stickyClass} ${isHeaderVisibleClass}`;

  return (
    <MotionHeaderContainer
      animate={isHeaderVisible ? "show" : "hide"}
      variants={headerAnimationVariants}
      className={headerContainerClass}
    >
      <SemanticHeader>
        <GradientLine />
        <SemanticNav>
          <ul>
            <li>
              <a
                href="https://www.neura.edu.au/"
                target="_blank"
                rel="noreferrer"
              >
              <LogoControl>
                <Logo />
              </LogoControl>
              <VisuallyHidden>Visit our Webpage</VisuallyHidden>
              </a>
            </li>
            <li>
              <Button variant="secondary">JOIN US NOW</Button>
            </li>
          </ul>
        </SemanticNav>
      </SemanticHeader>
    </MotionHeaderContainer>
  );
}


const MotionHeaderContainer = styled(motion.div, {
  backgroundColor: "transparent",

  /* 0.21875rem(3.5px) @ 20rem(320px) increasing to 0.96875rem(15.5px) @ 160rem(2560px) */
  "--radius-value":
    "clamp(0.21875rem, calc(0.21875rem + ((1vw - 0.2rem) * 0.5357)), 0.96875rem)",

  "&.is-sticky": {
    position: "fixed",
    top: "0px",
    left: "0px",
    right: "0px",
    zIndex: "$50",
  },

  "&.is-visible": {
    boxShadow: "0 6px 13px rgba(38, 78, 118, 0.1)",

    // header: {
    //   /* From https://css.glass */
    //   background: "rgba(0, 35, 65, 0.1)",
    //   boxShadow: " 0 4px 30px rgba(0, 0, 0, 0.1)",
    //   backdropFilter: "blur(5px)",
    //   WebkitBackdropFilter: "blur(5px)",
    // },
  },
});

const SemanticHeader = styled("header", {
  backgroundColor: "transparent",

  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  zIndex: "$50",

  height: "$2x",

  /* 0.25rem(4px) @ 20rem(320px) increasing to 1.25rem(20px) @ 160rem(2560px) */
  "--height-gradient-line":
    "clamp(0.25rem, calc(0.25rem + ((1vw - 0.2rem) * 0.7143)), 1.25rem)",
});

const GradientLine = styled("div", {
  height: "var(--height-gradient-line)",

  /* Safari resize fix */
  minHeight: "0vw",
  width: "100%",

  background:
    "-webkit-linear-gradient(0deg, var(--color-red-left), var(--color-red-middle) 50%, var(--color-red-right) 100%)",
});

const SemanticNav = styled("nav", {
  height: "calc(100% - var(--height-gradient-line))",

  display: "flex",
  justifyContent: "flex-end",
  alignItems: "center",

  position: "relative",

  margin: "0 auto",
  width: "85vw",

  "ul" : {
    listStyle: "none",
  },

  "@3": {
    width: "75vw",
  },
});

const LogoControl = styled("div", {
  position: 'absolute',
  top: 0,
  left: 0,

  /* 1.23125rem(19.7px) @ 20rem(320px) increasing to 4.6875rem(75px) @ 160rem(2560px) */
  fontSize:
    "clamp(1.23125rem, calc(1.23125rem + ((1vw - 0.2rem) * 2.4688)), 4.6875rem)",

  /* Safari resize fix */
  minHeight: "0vw",
  lineHeight: "1",
  backgroundColor: "#fff",

  /* 0.28125rem(4.5px) @ 20rem(320px) increasing to 1.10625rem(17.7px) @ 160rem(2560px) */
  padding:
    "clamp(0.28125rem, calc(0.28125rem + ((1vw - 0.2rem) * 0.5893)), 1.10625rem)",

  borderBottomLeftRadius: "var(--radius-value)",
  borderBottomRightRadius: "var(--radius-value)",

});
