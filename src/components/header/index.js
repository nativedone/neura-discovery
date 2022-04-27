import { styled } from "@theme";
import { Button } from "@components/button";

// import { LogoMenuLink } from "./logo-menu-link";
import { Logo } from "./logo";

export function Header() {
  return (
    <SemanticHeader>
      <GradientLine />
      <SemanticNav>
        {/* <LogoMenuLink /> */}
        <LogoControl>
          <Logo/>
        </LogoControl>
        <Button variant="secondary">JOIN US NOW</Button>
      </SemanticNav>
    </SemanticHeader>
  );
}

const SemanticHeader = styled("header", {
  backgroundColor: "transparent",

  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  zIndex: "$50",

  height: "$2x",

   /* 0.25rem(4px) @ 20rem(320px) increasing to 1.25rem(20px) @ 160rem(2560px) */
   "--height-gradient-line": "clamp(0.25rem, calc(0.25rem + ((1vw - 0.2rem) * 0.7143)), 1.25rem)",

   borderBottom: '1px solid purple'
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
  justifyContent: "space-between",
  alignItems: "center",

  position: "relative",

  margin: "0 auto",
  width: "85vw",

  "@3": {
    width: "75vw",
  },
});

const LogoControl = styled("div",{
/* 2.5rem(40px) @ 20rem(320px) increasing to 9.25rem(148px) @ 160rem(2560px) */
  fontSize: "clamp(2.5rem, calc(2.5rem + ((1vw - 0.2rem) * 4.8214)), 9.25rem)",
  /* Where: 4.8214 = 100 * font-size_difference / viewport_width_difference */

  /* Safari resize fix */
  minHeight: "0vw",
  lineHeight: "1",
  backgroundColor: "#fff",
 
  /* 0.5625rem(9px) @ 20rem(320px) increasing to 1.625rem(26px) @ 160rem(2560px) */
  padding: "clamp(0.5625rem, calc(0.5625rem + ((1vw - 0.2rem) * 0.7589)), 1.625rem)",
  borderBottomLeftRadius: "clamp(0.5625rem, calc(0.5625rem + ((1vw - 0.2rem) * 0.7589)), 1.625rem)",
  borderBottomRightRadius: "clamp(0.5625rem, calc(0.5625rem + ((1vw - 0.2rem) * 0.7589)), 1.625rem)",
  
  transform: "translateY(calc(0.9 * var(--height-gradient-line)))",
});
