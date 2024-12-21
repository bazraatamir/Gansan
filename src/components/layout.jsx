import React from "react";
import NavBar from "./navbar";
import Footer from "./footer";

const Layout = ({children}) => {
  return (
    <div>
      <NavBar />
      <main className='w-full'>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
