import { AppProps } from 'next/app'
import '../styles/index.css'
import { PT_Serif } from '@next/font/google'

const ptSerif = PT_Serif({
  weight: '400',
  subsets: ['latin'],
})


export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component className={ptSerif.className} {...pageProps} />
}
