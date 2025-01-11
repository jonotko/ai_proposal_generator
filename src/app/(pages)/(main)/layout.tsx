import React from "react";
import Navbar from "@/components/shared/navbar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      {children}
    </div>
  );
};

export default Layout;
