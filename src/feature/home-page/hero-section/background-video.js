import { styled } from "@theme";

export function BackgroundVideo() {
  return (
    <Video autoPlay muted loop playsInline>
      <source
        src="/assets/TONE-NeuRa-LandingPage-1920x1080.mp4"
        type="video/mp4"
      />
    </Video>
  );
}

const Video = styled("video", {
  zIndex: "$10",

  position: "fixed",
  top: "0",
  left: "0",
  width: "100vw",
  height: "auto",
  // aspectRatio: "507 / 320",
});
