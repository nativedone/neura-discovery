import { useViewportScroll, motion, useTransform } from "framer-motion";
import { styled } from "@theme";

import { useSources } from "@hooks/use-sources";

export function BackgroundVideoDesktop() {
  const { scrollYProgress } = useViewportScroll();
  const scale = useTransform(scrollYProgress, [0, 0.05], [1, 1.4]);
  const y = useTransform(scrollYProgress, [0, 0.05], ["0%", "20%"]);

  const source = useSources({
    mediaQueryType: "landscape",
    // matchingSuccessData: "/assets/TONE-NeuRa-LandingPage-1920x1080-H.264-no-audio.mp4",
    // matchingSuccessData: "/assets/TONE-NeuRa-LandingPage-1920x1080.HEVC.P8.webm",
    matchingSuccessData: "/assets/video-landscape-1m-HEVC.P8.webm",
    matchingFailData: "", // we don't let the browser to download the desktop video if user is on mobile
  });

  return (
    <Video style={{ scale, y }} key={source} autoPlay muted loop playsInline>
      <source src={source} type="video/webm" />
      <source src={source} type="video/mp4" />
    </Video>
  );
}

const Video = styled(motion.video, {
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
