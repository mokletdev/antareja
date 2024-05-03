"use client";

import { ReactNode } from "react";
import { SessionProvider as NextAuthSessionProvider } from "next-auth/react";

interface SessionProviderProps {
  children?: ReactNode;
}

export default function SessionProvider({
  children,
}: Readonly<SessionProviderProps>) {
  return (
    <NextAuthSessionProvider
      refetchOnWindowFocus
      refetchInterval={500}
      basePath="/api/auth"
    >
      {children}
    </NextAuthSessionProvider>
  );
}
