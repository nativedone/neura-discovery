import { useEffect, useRef } from "react";

import { SEO } from "@components/seo";
import { Layout } from "@components/layout";
import { styled } from "@theme";

import { BackgroundVideo } from "../src/feature/home-page/background-video";

import Script from "next/script";

export default function DonateRoute() {
  const donateButtonRef = useRef();

  useEffect(() => {
    // This is necessary in case the user navigates directly to this url
    (function (w, d, s, n, a) {
      if (!w[n]) {
        var l = "call,catch,on,once,set,then,track".split(","),
          i,
          o = function (n) {
            return "function" == typeof n
              ? o.l.push([arguments]) && o
              : function () {
                  return o.l.push([n, arguments]) && o;
                };
          },
          t = d.getElementsByTagName(s)[0],
          j = d.createElement(s);
        j.async = !0;
        j.src = "https://cdn.fundraiseup.com/widget/" + a;
        t.parentNode.insertBefore(j, t);
        o.s = Date.now();
        o.v = 4;
        o.h = w.location.href;
        o.l = [];
        for (i = 0; i < 7; i++) o[l[i]] = o(l[i]);
        w[n] = o;
      }
    })(window, document, "script", "FundraiseUp", "AFRMMDFA");

    donateButtonRef.current.click();
  }, []);

  return (
    <>
      <SEO title="Donate to Neura discovery" />
      <Layout>
        <GivingFormContainer>
          <a
            ref={donateButtonRef}
            href="/donate?form=discovery#now"
            style={{ display: "none" }}
          >
          </a>
          <a
            href="#XQJDKHZF"
            style={{ display: "block", zIndex: 9999999999 }}
          >
          </a>
          <Script
            id="id-FundraiseUp-script"
            strategy="beforeInteractive"
          >
            {`
            (function(w,d,s,n,a){if(!w[n]){var l='call,catch,on,once,set,then,track'
            .split(','),i,o=function(n){return'function'==typeof n?o.l.push([arguments])&&o
            :function(){return o.l.push([n,arguments])&&o}},t=d.getElementsByTagName(s)[0],
            j=d.createElement(s);j.async=!0;j.src='https://cdn.fundraiseup.com/widget/'+a;
            t.parentNode.insertBefore(j,t);o.s=Date.now();o.v=4;o.h=w.location.href;o.l=[];
            for(i=0;i<7;i++)o[l[i]]=o(l[i]);w[n]=o}
            })(window,document,'script','FundraiseUp','AFRMMDFA');
          `}
         
          </Script>
        </GivingFormContainer>
        <BackgroundVideo />
      </Layout>
    </>
  );
}

const GivingFormContainer = styled("div", {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginTop: "15vh", // Make sure the header is clickable
  paddingBottom: "var(--header-height)",
  width: "100vw",
  height: "85vh",
  zIndex: 999999,
  //   backgroundColor: 'yellow'
});
