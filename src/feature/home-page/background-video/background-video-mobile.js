import { useViewportScroll, motion, useTransform } from "framer-motion";
import { styled } from "@theme";

export function BackgroundVideoMobile() {
  const { scrollYProgress } = useViewportScroll();
  const scale = useTransform(scrollYProgress, [0, 0.025], [0.5, 1.4]);
  const y = useTransform(scrollYProgress, [0, 0.025], ["-8%", "28%"]);
  return (
    <Video
      autoPlay={true}
      preload="auto"
      muted={true}
      loop={true}
      playsInline={true}
      style={{ scale, y }}
    >
      <source
        src="/assets/TONE-NeuRa-LandingPage-922x1920-v02.mp4"
        type="video/mp4"
      />
    </Video>
  );
}

const Video = styled(motion.video, {
  width: "100%",
  height: "100%",
});