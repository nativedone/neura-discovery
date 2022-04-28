import { styled } from "@theme";
import { useSources } from "@hooks/use-sources";

export function BackgroundVideoDesktop() {
  const source = useSources({
    mediaQueryType: "landscape",
    matchingSuccessData: "/assets/TONE-NeuRa-LandingPage-1920x1080.mp4",
    matchingFailData: "", // we don't let the browser to download the desktop video if user is on mobile
  });

  return (
    <Video key={source} autoPlay muted loop playsInline>
      <source src={source} type="video/mp4" />
    </Video>
  );
}

const Video = styled("video", {
  // https://stackoverflow.com/questions/27850472/html5-video-background-keep-center-of-video-in-center
  position: "absolute",
  top: 0,
  bottom: 0,
  right: 0,
  left: 0,
  margin: "auto",
  minHeight: "50%",
  minWidth: "50%",
});
