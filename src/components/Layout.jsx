import React from "react";
import Footer from "./Footer";
import Header from "./Headeer";
const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
