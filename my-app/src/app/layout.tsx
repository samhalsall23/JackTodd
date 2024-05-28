import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.scss";
import Navbar from "./components/navbar";
import Sidebar from "./components/Sidebar";
// import React, { Suspense } from "react";

// const Navbar = React.lazy(() => import("./components/navbar"));

const roboto = Poppins({
  weight: "400",
  subsets: ["latin"],
});
export const metadata: Metadata = {
  title: "Todd Design",
  description: "Jack Todd's Portfolio Website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
