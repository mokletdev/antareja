import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import SessionProvider from "./components/wrapper/SessionProvider";
import "./globals.css";
import ToasterProvider from "./components/wrapper/ToasterProvider";
import ProgressbarProvider from "./components/wrapper/ProgressbarProvider";

// Change Font
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "LKBB Antareja",
  description: "Official Website of LKBB Antareja",
  authors: [
    { name: "Ahsan Azizan", url: "https://ahsanzizan.xyz" },
    { name: "Teguh Bayu Pratama", url: "https://bayu.xtero.live" },
    { name: "Ibani Muhamad Hillabi", url: "https://iban.com" },
  ],
  keywords: "antareja, lkbb, moklet, SMK, malang, telkom, paskibra",
  creator: "MokletDev Team",
  publisher: "SMK Telkom Malang",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <SessionProvider>
          <ToasterProvider />
          <ProgressbarProvider>{children}</ProgressbarProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
