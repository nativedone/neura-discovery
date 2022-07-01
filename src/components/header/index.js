import { styled } from "@theme";
import { Button } from "@components/button";
import { VisuallyHidden } from "@components/visually-hidden";
import { useEffect, useState } from "react";
import { useViewportScroll, motion } from "framer-motion";
import useDebounce from "react-use/lib/useDebounce";
import Link from "next/link";

import * as gtag from "@lib/gtm";

const headerAnimationVariants = {
  show: { opacity: 1, y: 0 },
  hide: { opacity: 0, y: "-100%" },
};

// import { Logo } from "./logo";
import { Logo } from "../logo";

export function Header({ animateOnScroll = true }) {
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

  return (
    <MotionHeaderContainer
      id="header"
      animate={isHeaderVisible ? "show" : "hide"}
      variants={headerAnimationVariants}
    >
      <GradientLine />
      <SemanticHeader>
        <SemanticNav>
          <ul>
            <li>
              <SlowLink href="/">
                <LogoPadding>
                  <LogoControl>
                    <Logo />
                  </LogoControl>
                </LogoPadding>
                <VisuallyHidden>Visit our Webpage</VisuallyHidden>
              </SlowLink>
            </li>
            <li>
              <Link href="/donate/?form=discovery" passHref>
                <Button
                  onClick={() =>
                    gtag.event({
                      category: "Buttons",
                      action: "Click",
                      label: "Clicked 'JOIN US NOW' at header",
                    })
                  }
                  as="a"
                  variant="primary"
                >
                  JOIN US NOW
                </Button>
              </Link>
            </li>
          </ul>
        </SemanticNav>
      </SemanticHeader>
    </MotionHeaderContainer>
  );
}

const SlowLink = styled("a", {}); // We don't use next/link here to give time to the donation form to load

const MotionHeaderContainer = styled(motion.div, {
  backgroundColor: "transparent",

  /* 0.21875rem(3.5px) @ 20rem(320px) increasing to 0.96875rem(15.5px) @ 160rem(2560px) */
  "--radius-value":
    "clamp(0.21875rem, calc(0.21875rem + ((1vw - 0.2rem) * 0.5357)), 0.96875rem)",

  position: "fixed",
  top: "0px",
  left: "0px",
  right: "0px",
  zIndex: "$50",

  "&.totally-hidden": {
    display: "none",
  },
});

const SemanticHeader = styled("header", {
  backgroundColor: "transparent",
  zIndex: "$50",
});

const GradientLine = styled("div", {
  /* 0.25rem(4px) @ 20rem(320px) increasing to 1.25rem(20px) @ 160rem(2560px) */
  height: "clamp(0.25rem, calc(0.25rem + ((1vw - 0.2rem) * 0.7143)), 1.25rem)",

  /* Safari resize fix */
  minHeight: "0vw",
  width: "100%",

  background:
    "-webkit-linear-gradient(0deg, var(--color-red-left), var(--color-red-middle) 50%, var(--color-red-right) 100%)",
});

const SemanticNav = styled("nav", {
  position: "relative",

  margin: "0 auto",
  width: "85vw",

  ul: {
    listStyle: "none",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },

  "@3": {
    width: "75vw",
  },
});


const LogoControl = styled("div", {
  /* 7.088125rem(113.41px) @ 20rem(320px) increasing to 15.181875rem(242.91px) @ 160rem(2560px) */
  width:
    "clamp(7.088125rem, calc(7.088125rem + ((1vw - 0.2rem) * 5.7813)), 15.181875rem)",

  /* 2.5rem(40px) @ 20rem(320px) increasing to 5.25rem(84px) @ 160rem(2560px) */
  height: "clamp(2.5rem, calc(2.5rem + ((1vw - 0.2rem) * 1.9643)), 5.25rem)",
  /* 7.088125rem(113.41px) @ 20rem(320px) increasing to 15.181875rem(242.91px) @ 160rem(2560px) */
  minWidth:
    "clamp(7.088125rem, calc(7.088125rem + ((1vw - 0.2rem) * 5.7813)), 15.181875rem)",

  /* 2.5rem(40px) @ 20rem(320px) increasing to 5.25rem(84px) @ 160rem(2560px) */
  minHeight: "clamp(2.5rem, calc(2.5rem + ((1vw - 0.2rem) * 1.9643)), 5.25rem)",

});

const LogoPadding = styled("div", {
  backgroundColor: "#fff",

  /* 0.28125rem(4.5px) @ 20rem(320px) increasing to 1.10625rem(17.7px) @ 160rem(2560px) */
  padding:
    "clamp(0.28125rem, calc(0.28125rem + ((1vw - 0.2rem) * 0.5893)), 1.10625rem)",

  borderBottomLeftRadius: "var(--radius-value)",
  borderBottomRightRadius: "var(--radius-value)",
});

