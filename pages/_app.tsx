import { AppProps } from "next/app";
import "../styles/index.css";
import { Roboto } from "@next/font/google";

const ptSerif = Roboto({
  weight: "500",
  subsets: ["latin"],
});

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component className={ptSerif.className} {...pageProps} />;
}
