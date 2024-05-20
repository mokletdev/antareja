import Image from "next/image";
import Navbar from "./components/global/Navbar";
import { P } from "./components/global/Text";

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main className="mt-[58px] xl:mt-[88px] overflow-hidden h-[70vh] flex flex-col justify-center items-center">
        <Image
          src="/notfound.svg"
          alt="Not Found"
          loading="lazy"
          width={400}
          height={400}
        />
        <P>Halaman tidak tersedia.</P>
      </main>
    </>
  );
}
