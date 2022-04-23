import { styled } from "@theme";

// TODO: fix my styles and content

export function Footer() {
  return (
    <SemanticFooter>
      <span>©2022 NeuRA - All Rights Reserved DISCLAIMER</span>

      <ExternalLinksNav>
        <span>DISCLAIMER | PRIVACY | CONTACT US | ABOUT US</span>
      </ExternalLinksNav>

      {/* Neura logo */}
     
      <SocialLinksNav>
        <span>facebook | twitter | instagram | youtube</span>
      </SocialLinksNav>
    </SemanticFooter>
  );
}

const SemanticFooter = styled("footer", {
  backgroundColor: "#fff",

  zIndex: "$50",
  padding: "$3x_2 0",
});

const ExternalLinksNav = styled("nav", {});
const SocialLinksNav = styled("nav", {});
