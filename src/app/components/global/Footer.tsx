import Image from "next/image";
import { P } from "./Text";
import Link from "next/link";
import { FaTiktok, FaInstagram, FaYoutube } from "react-icons/fa";

interface FootOption {
  label: string;
  href: string;
}

interface SocialOption {
  icon: JSX.Element;
  href: string;
}

const FootOptions: FootOption[] = [
  { label: "Beranda", href: "/" },
  { label: "Antareja", href: "#antareja" },
  { label: "Video", href: "#video" },
  { label: "Pendaftaran", href: "#daftar" },
];

const SocialOptions: SocialOption[] = [
  { icon: <FaTiktok />, href: "#antareja" },
  { icon: <FaInstagram />, href: "#video" },
  { icon: <FaYoutube />, href: "#daftar" },
];

export default function Footer() {
  return (
    <footer className="mt-[56px] mb-[39px] mx-[52px] bg-white">
      <div className="flex flex-col gap-[50px]">
        <div className="flex justify-between">
          <div className="flex flex-col gap-6 max-w-[408px]">
            <Image src={"/logo.svg"} alt="logo" width={125} height={44} />
            <P className="text-base text-wrap">
              Website resmi LKBB Antareja tingkat Jawa Timur yang
              diselenggarakan oleh SMK Telkom malang
            </P>
          </div>
          <div className="flex flex-col gap-[72px] items-end">
            <div className="flex gap-10">
              {FootOptions.map((nav) => (
                <Link href={nav.href} key={nav.label}>
                  <p className="text-neutral-600 text-sm hover:text-neutral-400 transition-all duration-300 font-semibold">
                    {nav.label}
                  </p>
                </Link>
              ))}
            </div>
            <div className="flex gap-3">
              {SocialOptions.map((soc) => (
                <Link
                  href={soc.href}
                  target="_blank"
                  key={soc.href}
                  className="p-[14px] bg-neutral-400 text-primary-500 text-[18px] rounded-2xl"
                >
                  {soc.icon}
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className="w-full">
          <div className="w-full h-[1px] bg-[#D9E1EE]"></div>
          <P className="text-sm text-neutral-600 mt-[10px]">
            Copyright&copy; Antareja 2024
          </P>
        </div>
      </div>
    </footer>
  );
}
