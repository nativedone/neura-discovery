import { styled } from "@theme";
import { InstagramIcon } from './instagramIcon';
import { YoutubeIcon } from './youtubeIcon';
import { TwitterIcon } from './twitterIcon';
import { FacebookIcon } from './facebookIcon';
import { VisuallyHidden } from "@components/visually-hidden";
import { LogoNew } from './logoNew';
import { LogoIcon } from './logoIcon';

export function Footer() {
  return (
    <SemanticFooter>
      <SemanticContainer>
        <ExternalLinksNav>
          <Rights><p>©2022 NeuRA - All Rights Reserved</p></Rights>
          <Links>
              <a    
                href="https://www.neura.edu.au/disclaimer/"
                target="_blank"
                rel="noreferrer" 
              ><p>DISCLAIMER</p></a> 
              <Space> | </Space>
              <a
              href="https://foundation.neura.edu.au/privacy/"
              target="_blank"
              rel="noreferrer" 
              ><p>PRIVACY</p></a> 
              <Space> | </Space>
              <a
                href="https://www.neura.edu.au/scientific-facility/gra/contact-us-2/"
                target="_blank"
                rel="noreferrer" 
              ><p>CONTACT US</p></a> 
              <Space> | </Space>
              <a
              href="https://www.neura.edu.au/about/"
              target="_blank"
              rel="noreferrer" 
              ><p>ABOUT US</p></a>
          </Links>
        </ExternalLinksNav>
        <LogoControl>
          <li className="li">
            <a
              href="https://www.neura.edu.au/"
              target="_blank"
              rel="noreferrer"
            >
            <LogoIcon />
            <VisuallyHidden>Visit our Webpage</VisuallyHidden>
            </a>
          </li>
        </LogoControl>
        <SocialLinksNav>
          <Span>           
            <li className="logo">
              <a
                href="https://www.neura.edu.au/"
                target="_blank"
                rel="noreferrer"
              >
                <LogoNew />
                <VisuallyHidden>Visit our Webpage</VisuallyHidden>
              </a>
            </li>             
            <li className="li">
              <a
                href="https://www.facebook.com/NeuroscienceResearchAustralia/"
                target="_blank"
                rel="noreferrer"
              >
                <FacebookIcon/>
                <VisuallyHidden>Visit our facebook page</VisuallyHidden>
              </a>
            </li>
            <li className="li">
              <a
                href="https://www.instagram.com/neuraustralia/"
                target="_blank"
                rel="noreferrer"
              >
                <InstagramIcon/>
                <VisuallyHidden>Visit our instagram page</VisuallyHidden>
              </a>
            </li>
            <li className="li">
              <a
                href="https://twitter.com/neuraustralia/"
                target="_blank"
                rel="noreferrer"
              >
                <TwitterIcon/> 
                <VisuallyHidden>Visit our twitter page</VisuallyHidden>
              </a>
            </li>
            <li className="li">
              <a
                href="https://www.youtube.com/user/neuraustralia/"
                target="_blank"
                rel="noreferrer"
              >
                <YoutubeIcon/>  
                <VisuallyHidden>Visit our youtube page</VisuallyHidden>
              </a>
            </li>
          </Span>
        </SocialLinksNav>
      </SemanticContainer>
    </SemanticFooter>
  );
}

const Space = styled("div", {
  display: "inline-block",
  // paddingLeft: "25px", // 5px - 320px / 25px - 2560px
  // paddingRight: "25px", // 5px - 320px / 25px - 2560px
  paddingLeft: "clamp(0.3125rem, calc(0.3125rem + ((1vw - 0.2rem) * 0.8929)), 1.5625rem)",
  paddingRight: "clamp(0.3125rem, calc(0.3125rem + ((1vw - 0.2rem) * 0.8929)), 1.5625rem)",
  transform: "translate(0, -.1em)",
});

const SemanticFooter = styled("footer", {
  display: "flex",
  justifyContent:"center",
  backgroundColor: "#fff",
  zIndex: "$50",
  // padding: "$3x_2 0",
  padding: "calc($x * 1.5)",
});

const LogoControl = styled("ul",{
  // fontSize: "29.85px", //320
  // fontSize: "35px", //575
  /* 1.865625rem(29.85px) @ 20rem(320px) increasing to 2.1875rem(35px) @ 35.9375rem(575px) */
  fontSize: "clamp(1.865625rem, calc(1.865625rem + ((1vw - 0.2rem) * 2.0196)), 2.1875rem)",

  paddingBottom: "7px",

  /* Safari resize fix */
  minHeight: "0vw",
  display: "flex",
  textAlign:"center",
  alignItems: "center",
  justifyContent:"center",
  marginTop:"1rem",
  marginBottom:"1rem",
  ".li" : {
    listStyle: "none",
  },
  "@0":{
    display: "block"
    
  },
  "@3": {
    display: "none"
  }
});

const SemanticContainer = styled("div", {
  width: "60vw",
  "@3": { 
    width: "45vw",
  }
});

const ExternalLinksNav = styled("nav", {
/* 0.625rem(10px) @ 20rem(320px) increasing to 2rem(32px) @ 160rem(2560px) */
  fontSize: "clamp(0.625rem, calc(0.625rem + ((1vw - 0.2rem) * 0.9821)), 2rem)", 

  /* Safari resize fix */
  minHeight: "0vw",

  fontWeight: "regular",
  textAlign:"center",
});

const SocialLinksNav = styled("nav", {   
  display: "flex",
  flexDirection: "column",
  // paddingLeft: "18px", // 320px
  // paddingLeft: "30px", // 574px
  paddingLeft:"clamp(1.125rem, calc(1.125rem + ((1vw - 0.2rem) * 4.7244)), 1.875rem)",
  /* Safari resize fix */
  minHeight: "0vw",
  "@3":{
    paddingLeft:"0",
  }
});

const Span = styled("ul", {
  display: "flex",
  justifyContent:"space-between",
  alignItems: "center",

  /* 1.28125rem(20.5px) @ 20rem(320px) increasing to 3.75rem(60px) @ 160rem(2560px) */
  fontSize: "clamp(1.28125rem, calc(1.28125rem + ((1vw - 0.2rem) * 1.7634)), 3.75rem)", 

  /* Safari resize fix */
  minHeight:" 0vw",
  maxWidth: '50vw',

".li" : {
  listStyle: "none",
},

".logo" : {
  // fontSize: "22px", //576
  // fontSize: "52.8px", //2560
  /* 1.375rem(22px) @ 36rem(576px) increasing to 3.3rem(52.8px) @ 160rem(2560px) */
  fontSize: "clamp(1.375rem, calc(1.375rem + ((1vw - 0.36rem) * 1.5524)), 3.3rem)",

  // paddingBottom: "4.6px", // 576
  // paddingBottom: "7px", // 2560
  /* 0.2875rem(4.6px) @ 36rem(576px) increasing to 0.4375rem(7px) @ 160rem(2560px) */
  paddingBottom: "clamp(0.2875rem, calc(0.2875rem + ((1vw - 0.36rem) * 0.121)), 0.4375rem)",

  listStyle: "none",
  "@0":{
    display: "none"
  },
  "@3": {
    display: "block"
  }
},
});

const Rights = styled("div",{
  paddingBottom:"10px",
})

const Links = styled("div",{
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  paddingBottom:".5rem",
  whiteSpace: "nowrap",
  "@3": { 
  paddingBottom:"calc($x * 0.75)",
  }
})




