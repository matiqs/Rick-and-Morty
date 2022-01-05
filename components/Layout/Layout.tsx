import Navbar from "../Navbar/Navbar";
import Head from "next/head";

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <link rel="icon" type="image/png" href="/favicon.png" />
      </Head>
      <Navbar></Navbar>
      {children}
    </>
  );
};

export default Layout;
