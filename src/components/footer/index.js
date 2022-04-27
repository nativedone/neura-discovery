import { styled } from "@theme";
import Image from 'next/image';

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
          <Image src="/assets/NeuRA_Favicon.svg" width="120px" height="60px"/>
        </div>
        <SocialLinksNav>
          <Span>
            <Image src="/assets/Facebook Icon.svg" width="80px" height="80px"/> 
            <Space>|</Space>  
            <Image src="/assets/Twitter Icon.svg" width="80px" height="80px"/>
            <Space>|</Space> 
            <Image src="/assets/Instagram Icon.svg" width="80px" height="80px"/>
            <Space>|</Space> 
            <Image src="/assets/Youtube Icon.svg" width="80px" height="80px"/> 
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

const SemanticContainer = styled("div", {});

const ExternalLinksNav = styled("nav", {});

const SocialLinksNav = styled("nav", {});

const Span = styled("span", {
  display: "flex",
  justifyContent:"center",

});

const Space = styled("div", {
  display: "flex",
  justifyContent:"center",
  alignItens: "center",
});
