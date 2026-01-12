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
          <meta name="robots" content="noimageindex" />
          <meta name="author" content="Dr. Jan Duffy, REALTOR" />
          {/* Google Analytics */}
          {process.env.NEXT_PUBLIC_GA_ID && (
            <>
              <script
                async
                src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
              />
              <script
                dangerouslySetInnerHTML={{
                  __html: `
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}', {
                      page_location: window.location.href
                    });
                  `,
                }}
              />
            </>
          )}
        </Head>
        <body data-spy="scroll" data-target=".card-top-nav" data-offset="80">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
