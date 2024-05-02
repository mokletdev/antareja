"use client";

import { AppProgressBar as ProgressBar } from "next-nprogress-bar";
import { ReactNode } from "react";

export default function ProgressbarProvider({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <>
      {children}
      <ProgressBar
        height="4px"
        color="#F70048"
        options={{ showSpinner: false }}
        shallowRouting
      />
    </>
  );
}
