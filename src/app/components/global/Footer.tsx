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
  {
    icon: <FaTiktok />,
    href: "https://www.tiktok.com/@lpkbb.antareja?_t=8m7ZSCGDxVC&_r=1",
  },
  {
    icon: <FaInstagram />,
    href: "https://www.instagram.com/lpkbb.antareja?igsh=MWRtamhocHQ1aGt2bg==",
  },
  {
    icon: <FaYoutube />,
    href: "https://youtube.com/@lkbb.antareja?si=Rg13cGu9_Qyn2k-l",
  },
];

export default function Footer() {
  return (
    <footer className="pt-[56px] pb-[39px] px-[21px] sm:px-[52px] bg-white">
      <div className="flex flex-col gap-6 lg:gap-[50px]">
        <div className="flex justify-normal lg:justify-between lg:flex-row flex-col lg:gap-0 gap-6">
          <div className="flex flex-col gap-[10px] lg:gap-6 max-w-[408px]">
            <Image
              src={"/logo-text.svg"}
              alt="logo"
              width={125}
              height={44}
              className="w-14 h-[19px] lg:w-[125px] lg:h-[44px]"
            />
            <P className="text-base text-wrap text-neutral-200">
              Website resmi LKBB Antareja tingkat Jawa Timur yang
              diselenggarakan oleh SMK Telkom Malang.
            </P>
          </div>
          <div className="flex flex-col gap-6 lg:gap-[72px] items-start lg:items-end">
            <div className="flex gap-[17px] sm:gap-10">
              {FootOptions.map((nav) => (
                <Link href={nav.href} key={nav.label}>
                  <p className="text-neutral-600 text-sm hover:text-neutral-400 transition-all duration-300 font-semibold">
                    {nav.label}
                  </p>
                </Link>
              ))}
            </div>
            <div className="flex gap-2 sm:gap-3">
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
