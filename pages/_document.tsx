import React from 'react';
import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          {/* Ajoute tes balises <meta>, <link>, etc. ici */}
          <script
            type="text/javascript"
            dangerouslySetInnerHTML={{
              __html: `
                var _paq = window._paq || [];
                _paq.push(['trackPageView']);
                _paq.push(['enableLinkTracking']);
                (function() {
                  var u="https://mifuro.matomo.cloud/";
                  _paq.push(['setTrackerUrl', u+'matomo.php']);
                  _paq.push(['setSiteId', '1']);
                  var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
                  g.type='text/javascript'; g.async=true; g.src='//cdn.matomo.cloud/mifuro.matomo.cloud/matomo.js'; s.parentNode.insertBefore(g,s);
                })();
              `,
            }}
          />
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" />

        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
