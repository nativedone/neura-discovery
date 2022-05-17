import React, { useCallback, useRef, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Keyboard } from "swiper";
// Import Swiper styles
import "swiper/css";

import { styled, keyframes } from "@theme";
import { useSources } from "@hooks/use-sources";

import { CarouselArrowsNavigation } from "./carouselArrowsNavigation";
import { CarouselPagination } from "./carouselPagination";

const data = [
  {
    id: "carousel-item1",
    subheading: "The Brain Atlas",
    paragraph: `Like all explorers, neuroscientists need maps to guide their path to success. World-renowned brain cartographer and NeuRA scientist Professor George Paxinos AO made medical history in 2019 when he launched the most comprehensive atlas of the human brainstem ever made. His work has assisted in the development of treatments for conditions like Parkinson’s and Alzheimer’s disease.`,

    portrait: {
      url: "/assets/Brain Atlas - 320x235px - Mobile.jpg",
      width: 320,
      height: 235,
    },
    landscape: {
      url: "/assets/BrainAtlas-DesktopNew.jpg",
      width: 2560,
      height: 1256,
    },
  },
  {
    id: "carousel-item2",
    subheading: "Connecting young & old",
    paragraph: `Inspired by a TV show, NeuRA scientists launched a study that placed older Australians with pre-schoolers to see what physical, cognitive and social benefits could be brought to both groups. Early research suggests that coming together for purposeful activities could reduce frailty and feelings of loneliness in older people, while boosting social and language skills for children.`,

    portrait: {
      url: "/assets/ConnectingYoung&Old-MobileNew2.jpg",
      width: 320,
      height: 235,
    },
    landscape: {
      url: "/assets/ConnectingYoung&Old-DesktopNew2.jpg",
      width: 2560,
      height: 1256,
    },
  },
  {
    id: "carousel-item3",
    subheading: "Sydney Brain Bank",
    paragraph: `Can you imagine a bank that houses not money, but human brain? The Sydney Brain Bank at NeuRA does just that. The facility collects, stores and distributes tissue samples for research into conditions such as Alzheimer’s and Parkinson’s disease. Currently they have brain tissue from over 700 donors and donate around 6,000 specimens each year to research groups to aid in medical research.`,

    portrait: {
      url: "/assets/Brain Bank-320x235px-MobileNew2.jpg",
      width: 320,
      height: 235,
    },
    landscape: {
      url: "/assets/BrainBank-DesktopNew2.jpg",
      width: 2560,
      height: 1256,
    },
  },

  {
    id: "carousel-item4",
    subheading: "The MUGgLE Study",
    paragraph: `In the world of Harry Potter, Muggles didn’t have any magical abilities. But at NeuRA, MUGgLEs have very special powers — they help researchers understand more about how muscles grow and develop in children with cerebral palsy. Data from the 320 participants aged 5–14 will help researchers track muscles over time, creating a foundation for further investigation. Pretty magical stuff!`,

    portrait: {
      url: "/assets/Muggle-320x235px-MobileNew2.jpg",
      width: 320,
      height: 235,
    },
    landscape: {
      url: "/assets/Muggle-DesktopNew2.jpg",
      width: 2560,
      height: 1256,
    },
  },
  {
    id: "carousel-item5",
    subheading: "Supporting schizophrenia",
    paragraph: `1 in 100 people live with schizophrenia - a serious mental disorder. Currently there is no cure and treatments only help manage psychotic symptoms. NeuRA’s Schizophrenia Research Institute is the only national institute solely dedicated to discovering ways to treat, prevent and possibly cure this disorder - and in 2020, our scientists made an incredible discovery that gets us closer.`,

    portrait: {
      url: "/assets/SupportingSchizophrenia-320x235px-MobileNew2.jpg",
      width: 320,
      height: 235,
    },
    landscape: {
      url: "/assets/SupportingSchizophrenia-DesktopNew2.jpg",
      width: 2560,
      height: 1256,
    },
  },
];

export function CarouselSwiper() {
  const swiperRef = useRef(null);
  const [index, setIndex] = useState(0);

  const slideTo = useCallback(
    (value) => {
      swiperRef.current?.swiper.slideTo(value);
    },
    [swiperRef]
  );

  const prevSlide = useCallback(() => {
    swiperRef.current?.swiper.slidePrev();
  }, [swiperRef]);

  const nextSlide = useCallback(() => {
    swiperRef.current?.swiper.slideNext();
  }, [swiperRef]);

  const source = useSources({
    mediaQueryType: "landscape",
    matchingSuccessData: "landscape",
    matchingFailData: "portrait",
    defaultData: undefined,
  });

  if (!source) {
    return null;
  }

  return (
    <>
      <CarouselContainer>
        <Swiper
          longSwipes={false}
          grabCursor={true}
          ref={swiperRef}
          speed={2300}
          slidesPerView={1}
          keyboard={true}
          modules={[Keyboard]}
          key={source}
          // onChange={(value) => setCurrentSlide(value)}
          onSlideChange={(a) => {
            // console.log("slide change", a);
            // console.log("slide change realIndex", a.realIndex);
            setIndex(a.realIndex);
          }}
        >
          {data?.map((item, index) => (
            <SwiperSlide key={`slide key.id ${index}`}>
              <CarouselItemContainer>
                <TextContainer className="slider-text-container">
                  <BackgroundSubheading>
                    <CarouselSubheading >
                      {item.subheading}
                    </CarouselSubheading>
                  </BackgroundSubheading>
                  <CarouselParagraph className="slider-paragraph-container"
                  >
                    {item.paragraph}
                  </CarouselParagraph>
                </TextContainer>
                <ImageContainer>
                  <Image
                    src={item[source].url}
                    alt={item.subheading}
                    width={item[source].width}
                    height={item[source].height}
                    layout="responsive"
                  />
                </ImageContainer>
              </CarouselItemContainer>
            </SwiperSlide>
          ))}
        </Swiper>
        <CarouselArrowsNavigation prevSlide={prevSlide} nextSlide={nextSlide} />
        <CarouselPagination index={index} data={data} slideTo={slideTo} />
      </CarouselContainer>
    </>
  );
}

const fadeInSlow = keyframes({
  '0%': {  opacity: 0 },
  '20%': {  opacity: 0.1 },
  '100%': {  opacity: 1 },
});

const fadeOutFast = keyframes({
  // '0%': {  opacity: 1 },
  // '20%': {  opacity: 0.4 },
  // '100%': {  opacity: 0 },
});

const CarouselContainer = styled("div", {
  display: "flex",
  justifyContent: "center",
  position: "relative",
  margin: "0 auto",

  "@media (hover: hover) and (pointer: fine)": {
    "&:hover": {
      ".navigation-arrow": {
        opacity: "1",
      },
    },
  },

  ".swiper-slide-active .slider-text-container": {
    animationName: `${fadeInSlow}`,
    animationDuration: `2s`,
    animationDelay: `0.3s`,
  },
  
  ".swiper-slide-active .slider-paragraph-container" :{
    animationName: `${fadeInSlow}`,
    animationDuration: `2.8s`,
    animationDelay: `0.5s`,
  },
  ".swiper-slide-prev .slider-text-container": {
    animation: `${fadeOutFast} 0.1s`,
  },
  ".swiper-slide-next .slider-text-container": {
    animation: `${fadeOutFast} 0.1s`,
  },
});

const CarouselItemContainer = styled("div", {
  display: "flex",
  flexDirection: "column-reverse",
  "@3": {
    display: "flex",
    flexDirection: "row-reverse",
    width: "100vw",
    height: "calc( (1256 / 2560) * 100vw )",
  },
});

const BackgroundSubheading = styled("span", {
  paddingTop: "$x_2",
  paddingBottom: "$x_2",
  background:
    "-webkit-linear-gradient(0deg, rgba(255, 255, 255, 0),  rgba(255, 255, 255, 0.9) 50%, rgba(255, 255, 255, 1) 70%)",
  "@3": {
    display: "flex",
    alignItems: "center",
    // justifyContent: "center",
    minWidth: "50vw",
    paddingTop: "$x_4",
    paddingBottom: "$x_2",
    marginBottom: "$_2",

    // outline: "1px solid red",
  },
});

const CarouselSubheading = styled("span", {
  zIndex: "$40",
  fontSize: "$5",
  lineHeight: "1",
  fontWeight: "$bold",
  // color: "red",
  background:
    "-webkit-linear-gradient(0deg, var(--color-red-left), var(--color-red-middle) 50%, var(--color-red-right) 100%)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  "@3": {
    whiteSpace: "nowrap",
    display: "inline-block",
    // minWidth: '34ch',
    lineHeight: "1",
    paddingBottom: "$x_8",
    paddingTop: "$x_4",
    paddingLeft: "$x_2",
    // width: "100%",
    transform: "translate3d(0, 0.1em, 0)",
    display: "inline-block",
    textAlign: "left",
  },
});

const CarouselParagraph = styled("p", {

  zIndex: "$40",
  fontSize: "$0",
  lineHeight: "$tight",
  fontWeight: "$normal",
  paddingTop: "$x_4",
  "@6": {
    paddingTop: "$x_2",
    paddingLeft: "$x_2",
  },
});

const ImageContainer = styled("div", {
  width: "100vw",
  height: "calc( (235 / 320) * 100vw )",
  "@3": {
    justifyContent: "initial",
    height: "calc( (1256 / 2560) * 100vw )",
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});

const TextContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
  textAlign: "center",
  width: "85vw",
  margin: "0 auto",

  paddingBottom: "46px", // TODO: fix me when we have a new content or design solution

  zIndex: "100",
  "@3": {
    margin: "unset",

    width: "50%",
    textAlign: "left",

    paddingBottom: "0px",
    /* 1px @ 576px increasing to 371px @ 2560px */
    paddingTop:
      "clamp(0.0625rem, calc(0.0625rem + ((1vw - 0.36rem) * 18.6492)), 23.1875rem)",

    paddingRight: "10%",
  },
  "@8": {
    paddingRight: "25%",
  },
});
