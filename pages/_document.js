import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {

  return (
    <Html>
      <Head>
        <link rel="icon" href="favicon.png" />
      </Head>
      <body className="bg-gray-100 text-gray-800">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
