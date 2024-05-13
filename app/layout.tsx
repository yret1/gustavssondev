import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react"
import Navbar from "./components/Navbar";
import StoreProvider from "./StoreProvider";
import Datahandler from "./components/Datahandler";
import Footer from "./components/Footer";

const inter = Manrope({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "GUSTAVSSON DEV | Home",
  description: "A portfolio website for Gustavsson Development Studio, Specialising in web development and integration.",
  keywords: ["frontend", "web development", "react", "tailwindcss", "nextjs", "upwork", "freelancer", "portfolio", "gustavsson dev","mjukvara", "mjukvaruutvecklare"],
  icons: [
    {
      rel: "icon",
      url: "/favicon.ico",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Analytics />
      <StoreProvider>
      <body className={`${inter.className} text-white scroll-smooth`}>
        <Datahandler />
        <Navbar />
        {children}
        <Footer />
        </body>
      </StoreProvider>
    </html>
  );
}
