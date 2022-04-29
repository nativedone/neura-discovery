import { styled } from "@theme";
import React, { useCallback, useRef, useState } from "react";
import { CarouselNavigation } from "./carouselNavigation";
import { CarouselMobileNavigation } from "./carouselMobileNavigation";
import Image from 'next/image';

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";


// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";

import { useSources } from '@hooks/use-sources'

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

console.log(data, 'data');
  
export function CarouselSwiper() {
    const swiperRef = useRef(null);
    const [index, setIndex] = useState(0); // mobile

    const slideTo = useCallback( // mobile
      (value) => {
        //   console.log("useCallback value", value);
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

    if(!source) {
      return null;
    }

  return (
    <>
      <CarouselDesktopContainer>
        <Swiper
          ref={swiperRef}
          // cssMode={true}
          // navigation={true}
          speed= {1200}
          slidesPerView={1}
          // pagination={true}
          // mousewheel={true}
          keyboard={true}
          modules={[Navigation, Pagination, Mousewheel, Keyboard]}
          // className="mySwiper"
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
                              width={item[source].width}
                              height={item[source].height}
                              // layout="responsive"
                              objectFit=" cover"
                          />
                      </ImageContainer>    
                  </CarouselItemContainer> 
              </SwiperSlide>
          ))}
        </Swiper>
        <CarouselNavigation prevSlide={prevSlide} nextSlide={nextSlide} />
        <CarouselMobileNavigation index={index} data={data} slideTo={slideTo} />
      </CarouselDesktopContainer>
    </>
  );
};

const CarouselDesktopContainer = styled("div", {
  display: "flex",
  // width: "67vw",
  justifyContent: "center",
  position: "relative",
  margin: "0 auto",
  "@media (hover: hover) and (pointer: fine)": {
    "&:hover": {
      "button.prev-carousel-desktop-navigation": {
        opacity: 1,
      },
      "button.next-carousel-desktop-navigation": {
        opacity: 1,
      },
    },
  },
});

const CarouselItemContainer = styled("div", {
  display: "flex",
  flexDirection: "column-reverse",
  // position: "relative",
  magin: "0 auto",
  // width: "50vw",
  // height: "50vw",
  "@3": {
    display: "flex",
    flexDirection: "row-reverse",  
    alignItens: "center",
    width: "100vw",
    // aspectRatio: "2574/998",
    // height: "calc( (998 / 2574) * 100vw )",
    height: "calc( (998 / 2574) * 100vw )",
  },
});

const CarouselSubheading = styled("span", {
  zIndex: "$40",
  fontSize: "$5",
  fontWeight: "$bold",
  background:
    "-webkit-linear-gradient(0deg, var(--color-red-left), var(--color-red-middle) 50%, var(--color-red-right) 100%)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
});
const CarouselParagraph = styled("p", {
  zIndex: "$40",
  fontSize: "$0",
  lineHeight: "$tight",
  fontWeight: "$normal",

  // paddingTop:"80px", // 2560
  // paddingTop:"1px", // 1010
  paddingTop:"clamp(0.0625rem, calc(0.0625rem + ((1vw - 0.63125rem) * 5.0968)), 5rem)", // 1px at 1010 - 80px at 2560
});

const ImageContainer = styled("div", {
  display: "flex",
  justifyContent:"center",
  width: "100vw",
  // height: "calc( (235 / 320) * 100vw )",
  // aspectRatio: "1",
  "@3": {
    justifyContent:"initial",
    height: "calc( (998 / 2574) * 100vw )",
    position: "absolute",
    top:0,
    left:0,
    right:0,
    bottom: 0,
  },
});

const TextContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  // alignItens:"center",
  textAlign:"center",
  width: "85vw",
  magin: "0 auto",

  // paddingLeft: "40px;", // 320
  // paddingLeft: "90px;", // 574
  paddingLeft: "clamp(2.5rem, calc(2.5rem + ((1vw - 0.2rem) * 19.685)), 5.625rem)", // 40px at 320 - 90px at 574

  // paddingRight:"0",
  backgroundColor: "#fff",
  paddingTop:".5rem",
  paddingBottom: "3.8rem",
  "@3": {
    width: "50%",
    zIndex:"100",
    textAlign:"left",
    background: "-webkit-linear-gradient(0deg, rgba(255, 255, 255, 0),  rgba(255, 255, 255, 0.9) 50%, rgba(255, 255, 255, 1) 70%)",
    
    // paddingTop:"$3x",
    // paddingTop:"90px", // 2560
    // paddingTop:"0px", // 1280
    // paddingTop:"clamp(1px, calc(0.0625rem + ((1vw - 10.1px) * 14.129)), 220px)", // 1px at 1010 - 240px at 2560 - test image
    paddingTop:"clamp(0.0625rem, calc(0.0625rem + ((1vw - 0.5rem) * 5.0568)), 5.625rem)", // 1px at 800 - 90px at 2560
    
    // paddingRight: "$3x",
    // paddingRight: "580px", // 2560
    // paddingRight: "120px", // 1280
    // paddingRight: "0px", // 800
    // paddingRight: "clamp(1.875rem, calc(1.875rem + ((1vw - 0.63125rem) * 16.7742)), 18.125rem)", // 30px at 1010 - 290px at 2560 - test image
    paddingRight: "clamp(0.0625rem, calc(0.0625rem + ((1vw - 0.5rem) * 32.8977)), 36.25rem)", // 1px at 800 - 580 at 2560
    paddingLeft:"0px",
  },  
});

