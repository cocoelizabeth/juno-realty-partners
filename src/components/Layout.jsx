import React from "react";
import GlobalStyles from "../styles/GlobalStyles";
import Header from "./Header";
import Footer from "./Footer";
import { useScrollRestoration } from "gatsby";

export default function Layout({ children }) {
    // const ulScrollRestoration = useScrollRestoration(`page-component-ul-list`);
  const scrollRestoration = useScrollRestoration();
  return (
    <>
      <GlobalStyles />
      <Header />
      {/* <div className="smooth-scroll-content"> */}
      <main {...scrollRestoration}>{children}</main>
      {/* </div> */}
      <Footer />
    </>
  );
}


