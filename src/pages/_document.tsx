import Document, { Html, Head, Main, NextScript } from "next/document";
import i18n from "../i18n/i18n";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    const { req } = ctx;

    // Determine the language based on the user's request
    const language = req?.language || "en";

    // Preload translations for the determined language
    await i18n.changeLanguage(language);

    return {
      ...initialProps,
    };
  }

  render() {
    return (
      <Html lang={this.props.__NEXT_DATA__.props?.pageProps?.language || "en"}>
        <Head>{/* Include any necessary meta tags, stylesheets, etc. */}</Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
