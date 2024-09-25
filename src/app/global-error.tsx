"use client";

import Image from "next/image";
import Navbar from "./components/global/Navbar";
import { P } from "./components/global/Text";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html>
      <body>
        <Navbar />
        <main className="mt-[58px] xl:mt-[88px] overflow-hidden h-[70vh] flex flex-col justify-center items-center">
          <Image
            src="/globalerror.svg"
            alt="Error"
            loading="lazy"
            width={400}
            height={400}
          />
          <P>Terjadi Kesalahan</P>
          <P>Silahkan Hubungi Administrator</P>
        </main>
      </body>
    </html>
  );
}
