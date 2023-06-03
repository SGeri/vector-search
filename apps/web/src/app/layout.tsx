import Navbar from "@/components/Navbar";

import "../styles/globals.css";

import { Montserrat } from "next/font/google";

export const metadata = {
  title: "Vector Search",
  description: "Advanced Search Mechanism with Generative Answering",
};

/* Initialize Fonts */

export const MontserratFont = Montserrat({
  subsets: ["latin-ext"],
  display: "swap",
  variable: "--font-montserrat",
});

/* Root Layout */

type RootProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootProps) {
  return (
    <html lang="en">
      <body
        className={`overflow-x-hidden bg-gradient-to-tr from-blue-600 to-purple-600 bg-fixed bg-no-repeat ${MontserratFont.variable} font-montserrat text-white`}
      >
        <Navbar />

        {children}
      </body>
    </html>
  );
}
