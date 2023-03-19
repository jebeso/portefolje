import { AppProps } from "next/app";
import "../styles/index.css";
import { Roboto } from "@next/font/google";
import { ThemeProvider } from "next-themes";

const ptSerif = Roboto({
  weight: "500",
  subsets: ["latin"],
});

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <Component className={ptSerif.className} {...pageProps} />
    </ThemeProvider>
  );
}
