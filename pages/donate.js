import { SEO } from "@components/seo";
import { Layout } from "@components/layout";

import { BackgroundVideo } from "../src/feature/home-page/background-video";

import Script from "next/script";

export default function DonateRoute() {
  return (
    <>
      <SEO />
      <Layout>
        <div
          className="body-block"
          style={{
            marginTop: "15vh",
            marginBottom: "5vh",
            width: "100vw",
            zIndex: 999999,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            id="blackbaud-donation-form_dac3f66e-18f7-4d4b-87f9-96a1a4761f4e"
            style={{
              width: "100vw",
              zIndex: 999999,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          ></div>
          <script
            async
            src="https://sky.blackbaudcdn.net/static/donor-form-loader/1/main.js"
          ></script>
          <Script
            id="gtag-init-----dsfbgkj--ffgff"
            strategy="lazyOnload"
            dangerouslySetInnerHTML={{
              __html: `
          window.BBDonorFormLoader = window.BBDonorFormLoader || [];
            BBDonorFormLoader.newBlackbaudDonationFormZoned('renxt','p-s7Lu0uYOtU-B7WwWoPeu7A', 'dac3f66e-18f7-4d4b-87f9-96a1a4761f4e','aus');
          `,
            }}
          />
        </div>
        <BackgroundVideo />
      </Layout>
    </>
  );
}
