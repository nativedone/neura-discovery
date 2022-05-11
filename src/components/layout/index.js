import { styled } from "@theme";

import { Header } from "@components/header";
import { Footer } from "@components/footer";
import { Main } from "@components/main";

import { DevGuidelines } from "@components/dev-guidelines";

export function Layout({ children }) {
  return (
    <LayoutContainer>
      <Header />
      <Main>{children}</Main>
      <Footer />
      <DevGuidelines />
    </LayoutContainer>
  );
}

const LayoutContainer = styled("div", {
  width: "100%",
  minHeight: "100vh",
  position: "relative",
  display: "flex",
  flexDirection: "column",
});
