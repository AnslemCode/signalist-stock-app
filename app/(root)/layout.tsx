import Header from "@/components/Header";
import React from "react";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <main className="min-h-screen text-gray-400">
      <Header />
      <div className="container py-10">{children}</div>
    </main>
  );
};

export default Layout;
