import Navbar from "../Navbar/Navbar";
import Head from "next/head";
import { useState } from "react";

const Layout = ({ children }: any) => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = (e) => {
    if (document.getElementById("sidebar").contains(e.target)) {
      console.log(e.target);
      setSidebar(!sidebar);
    } else {
      if (sidebar == true) {
        setSidebar(false);
      }
    }
  };

  return (
    <div onClick={showSidebar}>
      <Head>
        <link rel="icon" type="image/png" href="/favicon.png" />
      </Head>
      <Navbar sidebar={sidebar} showSidebar={showSidebar}></Navbar>
      {children}
    </div>
  );
};

export default Layout;
