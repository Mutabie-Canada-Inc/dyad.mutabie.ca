import type { AppProps } from 'next/app';
import { Toaster } from 'react-hot-toast';
import ConsentBanner from "./components/ConsentBanner";
import AnalyticsWrapper from "./components/AnalyticsWrapper";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <AnalyticsWrapper />
      <ConsentBanner />
      <Toaster />
    </>
  );
}