"use client";

import Image from "next/image";
import Link from "next/link";
import { TertiaryButton, SecondaryButton } from "./Button";
import { signIn } from "next-auth/react";

interface NavOption {
  label: string;
  href: string;
}

const NavOptions: NavOption[] = [
  { label: "Beranda", href: "#hero" },
  { label: "Antareja", href: "#antareja" },
  { label: "Video", href: "#video" },
  { label: "Pendaftaran", href: "#daftar" },
];

export default function Navbar() {
  return (
    <nav className="w-full -mt-[88px] h-[88px] bg-neutral-500 flex items-center justify-between px-[50px] py-[22px] fixed z-[999]">
      <Link href={"/"}>
        <Image src={"/logo.svg"} alt="logo" width={125} height={44} />
      </Link>
      <div className="flex gap-8">
        <div className="flex gap-[30px] items-center">
          {NavOptions.map((nav) => (
            <Link href={nav.href} key={nav.label}>
              <p className="text-[#858585] text-sm hover:opacity-75 transition-all duration-300">
                {nav.label}
              </p>
            </Link>
          ))}
        </div>
        <div className="flex gap-3">
          <SecondaryButton
            type="button"
            onClick={() => signIn()}
            className="shadow-lg shadow-primary-500/80 font-bold hover:shadow-none"
          >
            Log in
          </SecondaryButton>
          <TertiaryButton
            type="button"
            onClick={() => {}}
            className="font-bold"
          >
            Sign up
          </TertiaryButton>
        </div>
      </div>
    </nav>
  );
}
