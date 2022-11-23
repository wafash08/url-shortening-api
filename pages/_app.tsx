import type { AppProps } from "next/app";
import { Poppins } from "@next/font/google";
import "../styles/globals.css";

const poppins = Poppins({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-poppins",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${poppins.variable}`}>
      <Component {...pageProps} />
    </main>
  );
}
