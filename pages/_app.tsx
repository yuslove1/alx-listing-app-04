import Layout from "@/components/layout/Layout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

function App({ Component, pageProps }: AppProps) {
// return <Component {...pageProps} />;
//update main structure of the app to wrap all page
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default App;