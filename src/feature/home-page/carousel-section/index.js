import { styled } from "@theme";
import { CarouselSwiper } from "./swiper";
import { motion } from "framer-motion";

export function CarouselSection() {
  return (
    <CarouselSectionContainer
      onViewportEnter={() => {
        const header = document.getElementById("header")
        header.classList.add("totally-hidden");
      }}
      onViewportLeave={() => {
        const header = document.getElementById("header")
        header.classList.remove("totally-hidden");
      }}
      viewport={{ once: false }}
    >
      <CarouselSwiper />
    </CarouselSectionContainer>
  );
}

const CarouselSectionContainer = styled(motion.section, {
  zIndex: "$20",

  backgroundColor: "white", 
});