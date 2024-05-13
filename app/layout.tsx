import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import StoreProvider from "./StoreProvider";
import Datahandler from "./components/Datahandler";
import Footer from "./components/Footer";

const inter = Manrope({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "GUSTAVSSON DEV | Home",
  description: "A portfolio website for Gustavsson Development Studio, Specialising in web development and integration.",
  keywords: ["frontend", "web development", "react", "tailwindcss", "nextjs", "upwork", "freelancer", "portfolio", "gustavsson dev","mjukvara", "mjukvaruutvecklare"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
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
