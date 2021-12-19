import React from "react";
import type { AppProps } from "next/app";
import Layout from "../components/Layout";
import "../styles/styles.css";
import NProgress from "nprogress";
import { useRouter } from "next/router";
import "../styles/nprogress.css";

/*
  using a library called nprogress which makes the loading top bar

*/

const App = ({ Component, pageProps, ...appProps }: AppProps) => {
  const router = useRouter();

  {
    /* nprogress configuration and setup*/
  }
  NProgress.configure({ showSpinner: false });
  React.useEffect(() => {
    const handleStart = (url: string) => {
      console.log(`Loading: ${url}`);
      NProgress.start();
    };
    const handleStop = () => {
      NProgress.done();
    };

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleStop);
    router.events.on("routeChangeError", handleStop);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleStop);
      router.events.off("routeChangeError", handleStop);
    };
  }, [router]);

  {
    /* nprogress ->end*/
  }

  {
    /* diffferent layouts for different pages */
  }
  switch (appProps.router.route) {
    case "/anime/[id]":
      return <Component {...pageProps} />;
    case "/404":
      return <Component {...pageProps} />;
    case "/auth":
      return <Component {...pageProps} />;
    default:
      return (
        <Layout>
          <Component {...pageProps} />;
        </Layout>
      );
  }
};

export default App;
