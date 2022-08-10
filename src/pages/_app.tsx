import "../styles/globals.scss";
import { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";
import type { AppProps } from "next/app";
import Link from "next/link";
import { useRouter } from "next/router";
import Script from "next/script";
import { NextSeo } from "next-seo";

import Nav from "../components/Nav";
import { OptionLegsProvider } from "../contexts/OptionLegs";
import * as ga from "../lib/google-analytics";

function App({ Component, pageProps }: AppProps) {
  const { asPath, events } = useRouter();

  const [showMenu, setShowMenu] = useState(false);
  useEffect(() => {
    const handleRouteChange = (url: string) => {
      ga.pageview(url);
    };

    //When the component is mounted, subscribe to router changes and log those page views
    events.on("routeChangeComplete", handleRouteChange);

    // If the component is unmounted, unsubscribe from the event with the `off` method
    return () => {
      events.off("routeChangeComplete", handleRouteChange);
    };
  }, [events]);

  const title = "Option payoff charts";
  const description =
    "Interactive option payoff charts. Compare payoffs for customizeable option spreads and see what happens when something changes.";
  const host = process.env.NEXT_PUBLIC_SITE_URL;
  const url = host + asPath;
  const twitter = "@boxtrades";
  return (
    <>
      <NextSeo
        title={title}
        titleTemplate={`%s | OptionCharts.net`}
        description={description}
        canonical={url}
        openGraph={{
          url,
          title,
          description,
          images: [
            {
              url: `${host}/open-graph${asPath == "/" ? "/index" : asPath}.png`,
              width: 1200,
              height: 630,
              alt: "Preview OptionCharts.net",
              type: "image/png",
            },
          ],
        }}
        twitter={{
          handle: twitter,
          site: twitter,
          cardType: "summary_large_image",
        }}
        additionalMetaTags={[
          {
            property: "charSet",
            content: "utf-8",
          },
          {
            name: "viewport",
            content: "width=device-width, initial-scale=1, shrink-to-fit=no",
          },
          {
            name: "theme-color",
            content: "#000000",
          },
        ]}
        additionalLinkTags={[
          {
            rel: "apple-touch-icon",
            sizes: "180x180",
            href: "/apple-touch-icon.png",
          },
          {
            rel: "icon",
            type: "image/png",
            sizes: "32x32",
            href: "/favicon-32x32.png",
          },
          {
            rel: "shortcut icon",
            type: "image/png",
            sizes: "16x16",
            href: "/favicon-16x16.png",
          },
          {
            rel: "manifest",
            href: "/manifest.json",
          },
        ]}
      />

      <div className="container d-flex h-100 p-3 mx-auto flex-column">
        <nav className="navbar navbar-light">
          <Link href="/">
            <a className="navbar-brand">
              <img
                className="d-inline-block align-top"
                src="/optioncharts.svg"
                width="30"
                height="30"
                alt="OptionCharts.net logo"
              />
              <h1 className="fs-4 d-inline-block navbar-title m-0 ms-n2">
                OptionCharts.net
              </h1>
            </a>
          </Link>
          <button
            className="btn float-end d-inline-block d-lg-none"
            role="button"
            aria-label="Close"
            onClick={() => setShowMenu(!showMenu)}
          >
            <FaBars />
          </button>
        </nav>

        <main role="main" className="d-flex flex-row">
          <div
            className={`${
              showMenu
                ? "offcanvas offcanvas-start show visible"
                : "d-none d-lg-block me-5"
            }`}
            style={{ maxWidth: "80vw" }}
          >
            <div
              className="offcanvas-body"
              style={{ maxHeight: showMenu ? "inherit" : "80vh" }}
            >
              <Nav />
            </div>
          </div>
          <div className="flex-grow-1">
            <OptionLegsProvider>
              <Component {...pageProps} />
            </OptionLegsProvider>
          </div>
        </main>
      </div>

      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
        strategy="afterInteractive"
      />
      <Script id="gtag-init" strategy="afterInteractive">
        {`
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());

                  gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}');
                `}
      </Script>
    </>
  );
}

export default App;
