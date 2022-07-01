import { styled } from "@theme";
import { InstagramIcon } from "./instagramIcon";
import { YoutubeIcon } from "./youtubeIcon";
import { TwitterIcon } from "./twitterIcon";
import { FacebookIcon } from "./facebookIcon";
import { VisuallyHidden } from "@components/visually-hidden";

import { Logo } from "@components/logo";

export function Footer() {
  return (
    <SemanticFooter>
      <SemanticContainer>
        <ExternalLinksNav>
          <Rights>
            <p>©2022 NeuRA - All Rights Reserved</p>
          </Rights>
          <Links>
            <a
              href="https://www.neura.edu.au/disclaimer/"
              target="_blank"
              rel="noreferrer"
            >
              <p>DISCLAIMER</p>
            </a>
            <Space> | </Space>
            <a
              href="https://foundation.neura.edu.au/privacy/"
              target="_blank"
              rel="noreferrer"
            >
              <p>PRIVACY</p>
            </a>
            <Space> | </Space>
            <a
              href="https://www.neura.edu.au/scientific-facility/gra/contact-us-2/"
              target="_blank"
              rel="noreferrer"
            >
              <p>CONTACT US</p>
            </a>
            <Space> | </Space>
            <a
              href="https://www.neura.edu.au/about/"
              target="_blank"
              rel="noreferrer"
            >
              <p>ABOUT US</p>
            </a>
          </Links>
        </ExternalLinksNav>
        <SocialLinksNav>
          <SocialLinksGrid>
            <li className="logo">
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
            <li className="facebook">
              <a
                href="https://www.facebook.com/NeuroscienceResearchAustralia/"
                target="_blank"
                rel="noreferrer"
              >
                <FacebookIcon />
                <VisuallyHidden>Visit our facebook page</VisuallyHidden>
              </a>
            </li>
            <li className="instagram">
              <a
                href="https://www.instagram.com/neuraustralia/"
                target="_blank"
                rel="noreferrer"
              >
                <InstagramIcon />
                <VisuallyHidden>Visit our instagram page</VisuallyHidden>
              </a>
            </li>
            <li className="twitter">
              <a
                href="https://twitter.com/neuraustralia/"
                target="_blank"
                rel="noreferrer"
              >
                <TwitterIcon />
                <VisuallyHidden>Visit our twitter page</VisuallyHidden>
              </a>
            </li>
            <li className="youtube">
              <a
                href="https://www.youtube.com/user/neuraustralia/"
                target="_blank"
                rel="noreferrer"
              >
                <YoutubeIcon />
                <VisuallyHidden>Visit our youtube page</VisuallyHidden>
              </a>
            </li>
          </SocialLinksGrid>
        </SocialLinksNav>
      </SemanticContainer>
    </SemanticFooter>
  );
}

const Space = styled("div", {
  display: "inline-block",
  // paddingLeft: "25px", // 5px - 320px / 25px - 2560px
  // paddingRight: "25px", // 5px - 320px / 25px - 2560px
  paddingLeft:
    "clamp(0.3125rem, calc(0.3125rem + ((1vw - 0.2rem) * 0.8929)), 1.5625rem)",
  paddingRight:
    "clamp(0.3125rem, calc(0.3125rem + ((1vw - 0.2rem) * 0.8929)), 1.5625rem)",
  transform: "translate(0, -.1em)",
});

const SemanticFooter = styled("footer", {
  display: "flex",
  justifyContent: "center",
  backgroundColor: "#fff",
  zIndex: "$50",
  padding: "calc($x * 1.5)",
});

const LogoControl = styled("div", {
  width:
    /* 6.881875rem(110.11px) @ 20rem(320px) increasing to 8.07125rem(129.14px) @ 35.9375rem(575px) */
    "clamp(6.881875rem, calc(6.881875rem + ((1vw - 0.2rem) * 7.4627)), 8.07125rem)",

  height:
    /* 2.125rem(34px) @ 20rem(320px) increasing to 2.49125rem(39.86px) @ 35.9375rem(575px) */
    "clamp(2.125rem, calc(2.125rem + ((1vw - 0.2rem) * 2.298)), 2.49125rem)",

  /* 1.0625rem(17px) @ 20rem(320px) increasing to 1.125rem(18px) @ 35.9375rem(575px) */
  marginTop:
    "clamp(1.0625rem, calc(1.0625rem + ((1vw - 0.2rem) * 0.3922)), 1.125rem)",

  /* 1.75rem(28px) @ 20rem(320px) increasing to 1.8125rem(29px) @ 35.9375rem(575px) */
  marginBottom:
    "clamp(1.75rem, calc(1.75rem + ((1vw - 0.2rem) * 0.3922)), 1.8125rem)",

  "@3": {
    /* 5.0635rem(81.016px) @ 35.9375rem(575px) increasing to 12.1445rem(194.312px) @ 160rem(2560px) */
    width:
      "clamp(5.0635rem, calc(5.0635rem + ((1vw - 0.359375rem) * 5.7076)), 12.1445rem)",

    /* 2.1494375rem(34.391px) @ 35.9375rem(575px) increasing to 5.15625rem(82.5px) @ 160rem(2560px) */
    height:
      "clamp(2.1494375rem, calc(2.1494375rem + ((1vw - 0.359375rem) * 2.4236)), 5.15625rem)",

    /* 0.0625rem(1px) @ 35.9375rem(575px) increasing to 0.1875rem(3px) @ 160rem(2560px) */
    marginTop:
      "clamp(0.0625rem, calc(0.0625rem + ((1vw - 0.359375rem) * 0.1008)), 0.1875rem)",

    marginBottom: "unset",
  },

  minHeight: "0vw",
});

const SemanticContainer = styled("div", {
  width: "60vw",
  "@3": {
    width: "45vw",
  },
});

const ExternalLinksNav = styled("nav", {
  /* 0.625rem(10px) @ 20rem(320px) increasing to 2rem(32px) @ 160rem(2560px) */
  fontSize: "clamp(0.625rem, calc(0.625rem + ((1vw - 0.2rem) * 0.9821)), 2rem)",

  /* Safari resize fix */
  minHeight: "0vw",

  fontWeight: "regular",
  textAlign: "center",
});

const SocialLinksNav = styled("nav", {
  display: "flex",
  flexDirection: "column",
  // paddingLeft: "18px", // 320px
  // paddingLeft: "30px", // 574px
  paddingLeft:
    "clamp(1.125rem, calc(1.125rem + ((1vw - 0.2rem) * 4.7244)), 1.875rem)",
  /* Safari resize fix */
  minHeight: "0vw",
  "@3": {
    paddingLeft: "0",
  },
});

const SocialLinksGrid = styled("ul", {
  display: "grid",
  gridTemplateAreas:
    '"logo logo logo logo "\n "facebook instagram twitter youtube"',

  // gridTemplateColumns: "11.078px 23.672px 29.578px 33.109px",
  gridTemplateColumns: `${84.425/180.400}em 1em ${225.400/180.400}em ${252.312/180.400}em`,


  "@3": {
    gridTemplateAreas:
      '". . . . ."\n "logo facebook instagram twitter youtube"',
    gridTemplateRows: "unset",
    gridTemplateColumns: "unset",
  },

  justifyContent: "space-between",

  /* 1.28125rem(20.5px) @ 20rem(320px) increasing to 3.75rem(60px) @ 160rem(2560px) */
  fontSize:
    "clamp(1.28125rem, calc(1.28125rem + ((1vw - 0.2rem) * 1.7634)), 3.75rem)",

  /* Safari resize fix */
  minHeight: " 0vw",
  maxWidth: "50vw",

  li: {
    listStyle: "none",

    "&.logo": {
      gridArea: "logo",
      width: "100%",

      display: "flex",
      justifyContent: "center",
    },
    "&.facebook": {
      gridArea: "facebook",
    },
    "&.instagram": {
      gridArea: "instagram",
    },
    "&.twitter": {
      gridArea: "twitter",
    },
    "&.youtube": {
      gridArea: "youtube",
    },
  }
});

const Rights = styled("div", {
  paddingBottom: "10px",
});

const Links = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  paddingBottom: ".5rem",
  whiteSpace: "nowrap",
  "@3": {
    paddingBottom: "calc($x * 0.75)",
  },
});
