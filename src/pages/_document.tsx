import { Html, Head, Main, NextScript } from 'next/document'
import ResponsiveAppBar from '@/components/header'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <ResponsiveAppBar />
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
