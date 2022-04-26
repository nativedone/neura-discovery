import { styled } from "@theme";
import Image from 'next/image';

import logo from "../../../public/assets/logo.png";
import instagram from "../../../public/assets/instagram.png";
import facebook from "../../../public/assets/facebook.png";
import twitter from "../../../public/assets/twiter.png";
import youtube from "../../../public/assets/yt.PNG";

// TODO: fix my styles and content



export function Footer() {
  return (
    <SemanticFooter>
      <SemanticContainer>
        <span>©2022 NeuRA - All Rights Reserved DISCLAIMER</span>

        <ExternalLinksNav>
          <span>DISCLAIMER | PRIVACY | CONTACT US | ABOUT US</span>
        </ExternalLinksNav>
        <div>
          <NeuraLogo/>
        </div>
        <SocialLinksNav>
          <span><Facebook/> | <Twitter/> | <Instagram/> | <Youtube/></span>
        </SocialLinksNav>
      </SemanticContainer>
    </SemanticFooter>
  );
}

const NeuraLogo = () => {
  return (
    <Image
      src={logo}
      width="210px"
      height="70px"
      // layout="fill"
      priority={true}
      loading="eager"
    />
  )
}

const Instagram = () => {
  return (
    <Image
      src={instagram}
      width="40px"
      height="40px%"
      // layout="fill"
      priority={true}
      loading="eager"
    />
  )
}

const Facebook = () => {
  return (
    <Image
      src={facebook}
      width="40px"
      height="40px"
      // layout="fill"
      priority={true}
      loading="eager"
    />
  )
}

const Twitter = () => {
  return (
    <Image
      src={twitter}
      width="40px"
      height="40px"
      // layout="fill"
      priority={true}
      loading="eager"
    />
  )
}

const Youtube = () => {
  return (
    <Image
      src={youtube}
      width="40px"
      height="40px"
      // layout="fill"
      priority={true}
      loading="eager"
    />
  )
}

const SemanticFooter = styled("footer", {

  
  backgroundColor: "#fff",

  zIndex: "$50",
  padding: "$3x_2 0",
});

const SemanticContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItens:"center",
  margin: "0 auto",



});

const ExternalLinksNav = styled("nav", {});
const SocialLinksNav = styled("nav", {});
