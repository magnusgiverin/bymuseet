import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import { Analytics } from "@vercel/analytics/react";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bymuseet i Levanger",
  description:
    "Den offisielle hovednettsiden for Bymuseet i Levanger, Norge. Her kan du lese om arbeidet vi gjør for Levanger som historisk by.",
  keywords: [
    "museum",
    "bymuseum",
    "levanger",
    "trøndelag",
    "trondelag",
    "historie",
    "trebygg",
    "fredet",
    "kulturminne",
    "skogn",
    "nord",
    "norge",
    "frivillig",
    "læring",
    "dampskipsbrygga",
    "skolemuseet",
    "brusve gård",
    "reinslyst",
    "emilies hus",
    "hveding auto",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
      </head>
      <body className={inter.className}>
        <Analytics />
        <Navbar />
        <main className="px-2 flex w-full flex-col items-center min-h-screen">
          <div className="md:w-3/4 w-full">{children}</div>
        </main>
        <Footer />
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-EKDJ22KSK8"
        />
        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-EKDJ22KSK8');
          `}
        </Script>
      </body>
    </html>
  );
}
