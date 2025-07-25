import { Geist, Geist_Mono } from "next/font/google";
import "../styles/globals.css";
import Header from "@/components/layout/Header";
import HomePageGrid from "@/components/home/HomePageGrid";
import Footer from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Daybreak Clone",
  description: "Generated by create next app",
  icons: {
    icon: "/favicon.svg", // Correct relative path from `public/`
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased bg-[linear-gradient(0deg,_#fff5e6,_#fff0eb_25%,_#faebf5_50%,_#f5f0ff_75%,_#fafaff)]">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
