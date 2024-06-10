import type { Metadata } from "next";
import { Poppins } from "next/font/google";

import Navbar from "./components/Navbar/Navbar";
import "./globals.scss";

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
