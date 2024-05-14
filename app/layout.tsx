import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import { GoogleAnalytics } from '@next/third-parties/google'

import "./globals.css";
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next";
import Navbar from "./Sections/Navbar";
import StoreProvider from "./StoreProvider";
import Datahandler from "./components/Datahandler";
import Footer from "./Sections/Footer";


const inter = Manrope({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "GUSTAVSSON DEV",
  description: "A portfolio website for Gustavsson Development Studio, Specialising in web development and integration.",
  applicationName: "Gustavsson Dev",
  authors: [{name: "Simon Gustavsson"}]
  ,
  creator: "Simon Gustavsson",
  publisher: "Gustavsson Development Studio",

  openGraph: {
    images: ["https://i.gyazo.com/4d9b773e408f8ace866803348476f6d6.png"],
    title: "GUSTAVSSON DEV",
    description: "A portfolio website for Gustavsson Development Studio, Specialising in web development and integration.",
    url: "https://gustavsson.dev",
    type: "website",
    siteName: "GUSTAVSSON DEV",
    locale: "en_US",
  },
  twitter: {
    images : ["https://i.gyazo.com/4d9b773e408f8ace866803348476f6d6.png"],
    creator: "@gustavsson_dev",
    site: "@gustavsson_dev",
    card: "summary_large_image",
  },
  keywords: ["frontend", "web development", "react", "tailwindcss", "nextjs", "upwork", "freelancer", "portfolio", "gustavsson dev","mjukvara", "mjukvaruutvecklare"],
  icons: [
    {
      rel: "icon",
      url: "/favicon.svg",
    },
  ],

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  //Base Layout and Metadata for the entire site, Will add Google-site verification, analytics and other metadata here.
  return (
    <html lang="en">
      <GoogleAnalytics gaId="G-NVQ14GWF14" />
      <Analytics />
      <SpeedInsights />
      <StoreProvider>
      <body className={`${inter.className} bg-slate-900 text-white scroll-smooth`}>
       
        <Datahandler />
        <Navbar />
        {children}
        <Footer />

        
        </body>
      </StoreProvider>
    </html>
  );
}
