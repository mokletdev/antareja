import cn from "@/lib/clsx";
import type { Metadata, Viewport } from "next";
import ProgressbarProvider from "./components/wrapper/ProgressbarProvider";
import SessionProvider from "./components/wrapper/SessionProvider";
import ToasterProvider from "./components/wrapper/ToasterProvider";
import "./globals.css";
import basierFont from "./font";

export const metadata: Metadata = {
  title: "LPKBB Antareja",
  description: "Official Website of LKBB Antareja",
  authors: [
    { name: "Ahsan Azizan", url: "https://ahsanzizan.xyz" },
    { name: "Teguh Bayu Pratama", url: "https://bayu.xtero.live" },
    { name: "Ibani Muhamad Hillabi", url: "" },
    { name: "Muhammad Fadhil Kholaf", url: "https://fadhilkholaf.my.id" },
    { name: "Pradita Cleine Abadi", url: "" },
  ],
  keywords: "antareja, lkbb, moklet, SMK, malang, telkom, paskibra",
  creator: "MokletDev Team",
  publisher: "SMK Telkom Malang",
  verification: { google: "5b4dyR8sHph6P_xwuaaNfnN4FMAlL4G_GsWznRP5tuA" },
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
      <body className={cn(basierFont.className + " relative")}>
        <SessionProvider>
          <ToasterProvider />
          <ProgressbarProvider>{children}</ProgressbarProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
