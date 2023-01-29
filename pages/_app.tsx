import { AppProps } from 'next/app'
import '../styles/index.css'
import { Playfair_Display } from '@next/font/google'

const playfairDisplay = Playfair_Display({
  weight: '400',
  subsets: ['latin'],
})


export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component className={playfairDisplay.className} {...pageProps} />
}
