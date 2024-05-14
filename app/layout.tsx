import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next";
import Navbar from "./Sections/Navbar";
import StoreProvider from "./StoreProvider";
import Datahandler from "./components/Datahandler";
import Footer from "./Sections/Footer";


const inter = Manrope({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "GUSTAVSSON DEV | Home",
  description: "A portfolio website for Gustavsson Development Studio, Specialising in web development and integration.",
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
