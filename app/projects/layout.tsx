import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "../globals.css";


const inter = Manrope({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "GUSTAVSSON DEV | Projects",
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
  return (
        <main>

            {children}
        </main>
    
  
 
  );
}
