import React, { useEffect } from "react";
import ReactGA from "react-ga";
import { Analytics } from "@vercel/analytics/react";
import { NavBar } from "../components/NavBar/NavBar";
import { Footer } from "../components/Footer/Footer";
import styles from "../styles/_app.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect } from "react";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    ReactGA.initialize("G-GPV6RRTG6T"); // Replace with your Tracking ID
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  return (
    <>
      <Analytics />
      <NavBar />
      <div id={styles.container}>
        <Component {...pageProps} />
      </div>
      <Footer />
    </>
  );
}

export default MyApp;
