import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bymuseet i Levanger",
  description: "Hovednettsiden for Bymuseet i Levanger, Norge",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Navbar />
          <main className="px-2 flex w-full flex-col items-center mb-10 min-h-screen">
            <div className="md:w-4/5 w-full">
              {children}
            </div>
          </main>
      <Footer />
      </body>
    </html>
  );
}
