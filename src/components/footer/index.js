import { styled } from "@theme";

import { InstagramIcon } from './instagramIcon';
import { YoutubeIcon } from './youtubeIcon';
import { TwitterIcon } from './twitterIcon';
import { FacebookIcon } from './facebookIcon';
// import { LogoIcon } from './logoIcon';
import { LogoNew } from './logoNew';

// TODO: fix my styles and content

export function Footer() {
  return (
    <SemanticFooter>
      <SemanticContainer>
        <ExternalLinksNav>
          <Rights><span>©2022 NeuRA - All Rights Reserved</span></Rights>
          <Links><span>DISCLAIMER | PRIVACY | CONTACT US | ABOUT US</span></Links>
        </ExternalLinksNav>
        <SocialLinksNav>
          <LogoControl>
            <LogoNew/>
            {/* <LogoIcon/> */}
          </LogoControl>
          <Span> 
            <FacebookIcon/>           
            <InstagramIcon/>
            {/* <InstagramIcon/> */}
            <TwitterIcon/> 
            <YoutubeIcon/>       
          </Span>
        </SocialLinksNav>
      </SemanticContainer>
    </SemanticFooter>
  );
}

const SemanticFooter = styled("footer", {
  display: "flex",
  justifyContent:"center",
  backgroundColor: "#fff",
  zIndex: "$50",
  padding: "$3x_2 0",
});

const LogoControl = styled("div",{
 /* 2.125rem(34px) @ 20rem(320px) increasing to 5.35rem(85.6px) @ 160rem(2560px) */
  fontSize: "clamp(2.125rem, calc(2.125rem + ((1vw - 0.2rem) * 2.3036)), 5.35rem)",

  /* Safari resize fix */
  minHeight: "0vw",

  display: "flex",
  textAlign:"center",
  alignItens:"center",
  justifyContent:"center",
  marginTop:"1rem",
  marginBottom:"1rem",
  "@3": {
    marginBottom:"3rem",
    // display:"none",
  }

});

const SemanticContainer = styled("div", {
  width: "60vw",
  "@3": { 
    width: "45vw",
  }
});

const ExternalLinksNav = styled("nav", {
  fontSize: "$0",
  fontWeight: "regular",
  textAlign:"center",
});

const SocialLinksNav = styled("nav", {   
  display: "flex",
  flexDirection: "column",
});

const Span = styled("span", {
  display: "flex",
  justifyContent:"space-between",
 /* 1.28125rem(20.5px) @ 20rem(320px) increasing to 4.71875rem(75.5px) @ 160rem(2560px) */
  fontSize: "clamp(1.28125rem, calc(1.28125rem + ((1vw - 0.2rem) * 2.4554)), 4.71875rem)",

  /* Safari resize fix */
  minHeight:" 0vw",

});

const Rights = styled("div",{
  paddingBottom:"10px",
})

const Links = styled("div",{
  paddingBottom:".5rem",
  "@3": { 
  paddingBottom:"3rem",
  }
})