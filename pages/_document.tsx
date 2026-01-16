import NextDocument, { Html, Main, NextScript, Head } from "next/document"

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="en" dir="ltr">
        <Head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <link rel="shortcut icon" type="image/png" href="https://cribflyer-publicsite.s3.amazonaws.com/favicon/256.png" />
          <link rel="apple-touch-icon" href="https://cribflyer-publicsite.s3.amazonaws.com/favicon/256.png" />
          {/* Allow indexing + large image previews (critical for Photos + rich results) */}
          <meta
            name="robots"
            content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
          />
          <meta name="author" content="Dr. Jan Duffy, REALTOR" />
          {/* Google Analytics */}
          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=G-RZ48JCVXWJ"
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                // Google Analytics 4 property
                gtag('config', 'G-RZ48JCVXWJ', {
                  page_location: typeof window !== 'undefined' ? window.location.href : 'https://www.turnberryplaceforsale.com'
                });
                // Universal Analytics property
                gtag('config', 'UA-46249003-1', {
                  page_path: typeof window !== 'undefined' ? window.location.pathname : '/'
                });
                gtag('config', 'AW-859648231');
              `,
            }}
          />
        </Head>
        <body data-spy="scroll" data-target=".card-top-nav" data-offset="80">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
