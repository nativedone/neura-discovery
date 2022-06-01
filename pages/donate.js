import { SEO } from "@components/seo";
import { Layout } from "@components/layout";
import { styled } from "@theme";

import { BackgroundVideo } from "../src/feature/home-page/background-video";

import Script from "next/script";

export default function DonateRoute() {
  return (
    <>
      <SEO  title="Donate to Neura discovery"/>
      <Layout>
        <GivingFormContainer>
          <GivingForm id="blackbaud-donation-form_dac3f66e-18f7-4d4b-87f9-96a1a4761f4e" />
          <script
            async
            src="https://sky.blackbaudcdn.net/static/donor-form-loader/1/main.js"
          />

          <Script
            id="id-BBDonorFormLoader"
            strategy="lazyOnload"
            dangerouslySetInnerHTML={{
              __html: `
              window.BBDonorFormLoader = window.BBDonorFormLoader || {};
              if(typeof  BBDonorFormLoader.newBlackbaudDonationFormZoned === 'function'){
                BBDonorFormLoader.newBlackbaudDonationFormZoned('renxt','p-s7Lu0uYOtU-B7WwWoPeu7A', 'dac3f66e-18f7-4d4b-87f9-96a1a4761f4e','aus');
              }
          `,
            }}
          />
        </GivingFormContainer>
        <BackgroundVideo />
      </Layout>
    </>
  );
}

const GivingFormContainer = styled("div", {
  marginTop: "15vh",
  marginBottom: "5vh",
  width: "100vw",
  zIndex: 999999,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",

  "> div": {
   
    minHeight: "80vh",
    backgroundColor: 'white',
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "90vw",
    "@3": {
      width: "42vw",
    },
  
    "@8": {
      width: "30vw",
      minHeight: "65vh",
      // backgroundColor: 'red',
    },
  
    "@9": {
      width: "26vw",
      minHeight: "50vh",
      // backgroundColor: 'blue',
    },
  
    iframe: {
      minWidth: '300px !important'
    }
  }
});

const GivingForm = styled("div", {});
