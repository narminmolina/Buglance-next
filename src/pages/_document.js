import Document, { Html, Head, Main, NextScript } from 'next/document';
//  Utils
import { integrations } from 'utils';

class MyDocument extends Document {
  static async getInitialProps(context) {
    const initialProps = await Document.getInitialProps(context);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="UTF-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js" integrity="sha512-bLT0Qm9VnAYZDflyKcBaQ2gg0hSYNQrJ8RilYldYQ1FxQYoCLtUjuuRuZo+fjqhx/qtq/1itJ0C2ejDxltZVFg==" crossOrigin="anonymous"></script>
          <script src="https://cdn.freshmarketer.com/736680/1786139.js"></script>
          <script async src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GTAG_ID}`}></script>
          <script dangerouslySetInnerHTML={{ __html: integrations.GTAG_CONFIG }} />
          <script dangerouslySetInnerHTML={{ __html: integrations.INTERCOM_SETTINGS }}></script>
          <script dangerouslySetInnerHTML={{ __html: integrations.INTERCOM_SCRIPT }}></script>
          <script dangerouslySetInnerHTML={{ __html: integrations.YANDEX_SCRIPT }}></script>
          <script dangerouslySetInnerHTML={{ __html: integrations.YANDEX_SCRIPT }}></script>
          <script nonce="7mPbCran" dangerouslySetInnerHTML={{ __html: integrations.FACEBOOK_PIXEL }}></script>
          <noscript>
            <img height="1" width="1" style={{ display: 'none' }} src="https://www.facebook.com/tr?id=3752305314819934&ev=PageView&noscript=1" />
          </noscript>
          {/* <script src="https://s7.addthis.com/js/300/addthis_widget.js#pubid=ra-5f7f25e47a695247"></script> */}
        </Head>
        <body>
          <Main />
          <NextScript />
          <script dangerouslySetInnerHTML={{ __html: integrations.GTAG_EVENT }} />
          <script type="text/javascript" charSet="UTF-8" src="//cdn.cookie-script.com/s/eddccf1e74e250fbb65fdc6514c717c2.js"></script>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
