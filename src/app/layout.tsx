import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/header/header";
import Footer from "@/components/layout/footer/footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Sky Appliances Ghana",
  description: "Quality Home Appliances and Electronics in Ghana",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-mono  antialiased`}>
        <main className=" flex-col font-inter tracking-wider mx-auto  bg-white  hidden lg:flex">
          <Header />
          {children}
          <Footer />
        </main>
        <main className=" flex-col font-semibold tracking-wide text-4xl font-inter items-center justify-center bg-white h-screen flex lg:hidden">
          Building...
        </main>
      </body>
    </html>
  );
}
