// import { useEffect } from "react";
import Script from "next/script";
// import { useRouter } from "next/router";

import * as gtag from "@lib/gtm";
import "@styles/globals.css";

function MyApp({ Component, pageProps }) {
  // const router = useRouter();
  // useEffect(() => {
  //   const handleRouteChange = (url) => {
  //     gtag.pageView(url);
  //   };
  //   router.events.on("routeChangeComplete", handleRouteChange);
  //   return () => {
  //     router.events.off("routeChangeComplete", handleRouteChange);
  //   };
  // }, [router.events]);

  return (
    <>
      {/* Global Site Tag (gtag.js) - Google Analytics */}
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
      />
      <Script
        id="gtag-init"
        strategy="lazyOnload"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gtag.GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
      <Script
        id="donate"
        strategy="lazyOnload"
        dangerouslySetInnerHTML={{
          __html: `
          (function(w,d,s,n,a){if(!w[n]){var l='call,catch,on,once,set,then,track'
          .split(','),i,o=function(n){return'function'==typeof n?o.l.push([arguments])&&o
          :function(){return o.l.push([n,arguments])&&o}},t=d.getElementsByTagName(s)[0],
          j=d.createElement(s);j.async=!0;j.src='https://cdn.fundraiseup.com/widget/'+a;
          t.parentNode.insertBefore(j,t);o.s=Date.now();o.v=4;o.h=w.location.href;o.l=[];
          for(i=0;i<7;i++)o[l[i]]=o(l[i]);w[n]=o}
          })(window,document,'script','FundraiseUp','AGZKYDGZ');
          `,
        }}
      />

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
