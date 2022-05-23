import Document, { Html, Head, Main, NextScript } from "next/document";
import { getCssText } from "@theme";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en-AU">
        <Head>
          <style
            id="stitches"
            dangerouslySetInnerHTML={{ __html: getCssText() }}
          />
          <link
            rel="preload"
            as="font"
            type="font/woff2"
            href="/fonts/neo-sans-regular-400.woff2"
            crossOrigin=""
          />
          <link
            rel="preload"
            as="font"
            type="font/woff2"
            href="/fonts/neo-sans-medium-500.woff2"
            crossOrigin=""
          />
        </Head>
        <body>
          <Main />
          {/* Here we will mount our modal portal */}
          <div id="modal" />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
