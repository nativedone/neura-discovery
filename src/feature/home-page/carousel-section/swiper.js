import { styled } from "@theme";
import React, { useCallback, useRef, useState } from "react";
import { CarouselArrowsNavigation } from "./carouselArrowsNavigation";
import { CarouselPagination } from "./carouselPagination";
import Image from "next/image";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Keyboard } from "swiper";

import { useSources } from "@hooks/use-sources";

const data = [
  {
    id: "carousel-item1",
    subheading: "The Brain Atlas",
    paragraph: `Like all explorers, neuroscientists need maps to guide their path to success. World-renowned brain cartographer and NeuRA scientist Professor George Paxinos AO made medical history in 2019 when he launched the most comprehensive atlas of the human brainstem ever made. His work has assisted in the development of treatments for conditions like Parkinson’s and Alzheimer’s disease and is now considered the foundation for all neuroscientific research.`,

    portrait: {
      url: "/assets/Brain Atlas - 320x235px - Mobile.jpg",
      width: 320,
      height: 235,
    },
    landscape: {
      url: "/assets/Brain Atlas-Desktop.jpg",
      width: 2560,
      height: 1256,
    },
  },
  {
    id: "carousel-item2",
    subheading: "Connecting young & old",
    paragraph: `Inspired by the ABC’s Old People’s Home for 4 Year Olds, NeuRA scientists launched an intergenerational integration study that placed older Australians with pre-schoolers to see what physical, cognitive and social benefits could be brought to both groups. Early research suggests that coming together for purposeful activities could reduce frailty and feelings of loneliness in older people, while boosting social and language skills for children.`,

    portrait: {
      url: "/assets/DSC07357.jpeg",
      width: 320,
      height: 235,
    },
    landscape: {
      url: "/assets/Connecting Young & Old-Desktop.jpg",
      width: 2560,
      height: 1256,
    },
  },
  {
    id: "carousel-item3",
    subheading: "Sydney Brain Bank",
    paragraph: `Can you imagine a bank that houses not money, but human brain and spinal cord tissue? Well, the Sydney Brain Bank does exactly that. This NeuRA facility collects, stores and distributes tissue samples for research into conditions such as Alzheimer’s, Parkinson’s and motor neuron disease. The bank currently holds brain tissue from over 700 donors and donates around 6,000 specimens every year to research groups here and overseas to facilitate advances in medical research.`,

    portrait: {
      url: "/assets/Brain Bank - 320x235px - Mobile.jpg",
      width: 320,
      height: 235,
    },
    landscape: {
      url: "/assets/Brain Bank - Desktop.jpg",
      width: 2560,
      height: 1256,
    },
  },

  {
    id: "carousel-item4",
    subheading: "The MUGgLE Study",
    paragraph: `In the world of Harry Potter, Muggles didn’t have any magical abilities. But at NeuRA, MUGgLEs have very special powers — they help researchers understand more about how muscles grow and develop in children with cerebral palsy. More than 34,000 Australians live with this condition, which has no known cure. Data from the 320 participants aged 5–14 will help researchers track muscles over time, creating a vital foundation for further investigation. Pretty magical stuff!`,

    portrait: {
      url: "/assets/Muggle - 320x235px - Mobile.jpg",
      width: 320,
      height: 235,
    },
    landscape: {
      url: "/assets/Muggle - Desktop.jpg",
      width: 2560,
      height: 1256,
    },
  },
  {
    id: "carousel-item5",
    subheading: "Supporting schizophrenia",
    paragraph: `One in 100 people live with schizophrenia, a serious mental disorder that causes people to misinterpret reality. Current treatments only partially address psychotic symptoms and don’t restore people to their full potential. NeuRA’s Schizophrenia Research Institute is the only national institute solely dedicated to discovering ways to treat, prevent and cure this disorder and in 2020, our scientists made a discovery that opened a new avenue for more effective treatment.`,

    portrait: {
      url: "/assets/Supporting Schizophrenia - 320x235px - Mobile.jpg",
      width: 320,
      height: 235,
    },
    landscape: {
      url: "/assets/Supporting Schizophrenia-Desktop.jpg",
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
          ref={swiperRef}
          speed={1200}
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
              <CarouselItemContainer {...item} priority={index === 0}>
                <TextContainer>
                  <CarouselSubheading>{item.subheading}</CarouselSubheading>
                  <CarouselParagraph>{item.paragraph}</CarouselParagraph>
                </TextContainer>

                <ImageContainer>
                  <Image
                    src={item[source].url}
                    alt={item.subheading}
                    width={item[source].width}
                    height={item[source].height}
                    layout="responsive"
                    // objectFit="cover"
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

const CarouselContainer = styled("div", {
  display: "flex",
  justifyContent: "center",
  position: "relative",
  margin: "0 auto",
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

const CarouselSubheading = styled("span", {
  zIndex: "$40",
  fontSize: "$5",
  lineHeight: "1",
  fontWeight: "$bold",
  background:
    "-webkit-linear-gradient(0deg, var(--color-red-left), var(--color-red-middle) 50%, var(--color-red-right) 100%)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",

  paddingTop: "$x_2",
  paddingBottom: "$x_2",
  "@3": {
    paddingTop: "0px",

    /* 0.0625rem(1px) @ 36rem(576px) increasing to 7.75rem(124px) @ 160rem(2560px) */
    paddingBottom:
      "clamp(0.0625rem, calc(0.0625rem + ((1vw - 0.36rem) * 6.1996)), 7.75rem)",

    whiteSpace: "nowrap",

    display: "inline-block",
    minWidth: '20ch',
  },
});
const CarouselParagraph = styled("p", {
  zIndex: "$40",
  fontSize: "$0",
  lineHeight: "$tight",
  fontWeight: "$normal",
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


  paddingBottom: '46px', // TODO: fix me when we have a new content or design solution

  zIndex: "100",
  "@3": {
    margin: "unset",

    width: "50%",
    textAlign: "left",

    paddingBottom: '0px',
    /* 1px @ 576px increasing to 371px @ 2560px */
    paddingTop:
      "clamp(0.0625rem, calc(0.0625rem + ((1vw - 0.36rem) * 18.6492)), 23.1875rem)",

    paddingRight: "10%",
  },
  "@8": {
    paddingRight: "25%",
  },
});
