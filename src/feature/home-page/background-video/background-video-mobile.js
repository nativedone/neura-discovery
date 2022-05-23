import { useViewportScroll, motion, useTransform } from "framer-motion";
import { styled } from "@theme";

import { useSources } from "@hooks/use-sources";

export function BackgroundVideoMobile() {
  const { scrollYProgress } = useViewportScroll();
  const scale = useTransform(scrollYProgress, [0, 0.025], [0.5, 1.4]);
  const y = useTransform(scrollYProgress, [0, 0.025], ["-8%", "28%"]);

  const source = useSources({
    mediaQueryType: "portrait",
    matchingSuccessData: "/assets/mobile--1000k.mp4",
    matchingFailData: "", // we don't let the browser to download the mobile video if user is on desktop
  });

  return (
    <Video
      key={source}
      autoPlay={true}
      preload="auto"
      muted={true}
      loop={true}
      playsInline={true}
      style={{ scale, y }}
    >
      <source src={source} type="video/mp4" />
    </Video>
  );
}

const Video = styled(motion.video, {
  width: "100%",
  height: "100%",
});
