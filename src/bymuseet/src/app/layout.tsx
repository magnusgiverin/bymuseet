import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";

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
          <main className="flex w-full flex-col items-center mb-10 min-h-screen">
            <div className="lg:w-2/3 md:w-4/5 w-full p-4 md:p-0">
              {children}
            </div>
          </main>
      </body>
      <Footer />

    </html>
  );
}
