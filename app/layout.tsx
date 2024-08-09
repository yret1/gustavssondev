import type { Metadata } from "next";
import { Manrope } from "next/font/google";

import "./globals.css";

import Navbar from "./Sections/Navbar";
import StoreProvider from "./StoreProvider";
import Datahandler from "./components/Datahandler";
import Footer from "./Sections/Footer";

const inter = Manrope({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "GUSTAVSSON DEV",
  description:
    "Gustavsson Development Studio, Specialising in modern web development and integration.",
  applicationName: "Gustavsson Dev",
  authors: [{ name: "Simon Gustavsson" }],
  creator: "Simon Gustavsson",
  publisher: "Gustavsson Development Studio",

  openGraph: {
    images: ["/imagebase.png"],
    title: "GUSTAVSSON DEV",
    description:
      "Gustavsson Development Studio, Specialising in modern web development and integration.",
    url: "https://gustavsson.dev",
    type: "website",
    siteName: "GUSTAVSSON DEV",
    locale: "en_US",
  },
  twitter: {
    images: ["/imagebase.png"],
    creator: "@gustavsson_dev",
    site: "@gustavsson_dev",
    card: "summary_large_image",
  },
  keywords: [
    "frontend",
    "web development",
    "react",
    "tailwindcss",
    "nextjs",
    "upwork",
    "freelancer",
    "portfolio",
    "gustavsson dev",
    "mjukvara",
    "mjukvaruutvecklare",
  ],
  icons: [
    {
      rel: "icon",
      url: "/favicon.svg",
    },
  ],

  robots: "index, follow",
  verification: {
    google: "ENGJvqgQzeVw_jXWKkhBTI_n0sdXeWdVd8gz_RduOik",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  //Base Layout and Metadata for the entire site, Will add Google-site verification, analytics and other metadata here.
  return (
    <html lang="en">
      <StoreProvider>
        <body
          className={`${inter.className} bg-slate-900 text-white scroll-smooth overflow-x-hidden`}
        >
          <Datahandler />
          <Navbar />
          {children}
          <Footer />
        </body>
      </StoreProvider>
    </html>
  );
}
