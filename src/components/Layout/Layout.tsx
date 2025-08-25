import React, { ReactNode } from "react";
import NavBar from "../navbar/NavBar";
import Footer from "../footer/Footer";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="layout">
      <NavBar />
      <main className="main-content">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
