"use client";

import { signIn } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { SecondaryButton } from "./Button";
import { TertiaryLinkButton } from "./LinkButton";
import { useSession } from "next-auth/react";
import { useState } from "react";

interface NavOption {
  label: string;
  href: string;
}

const NavOptions: NavOption[] = [
  { label: "Beranda", href: "/#hero" },
  { label: "Antareja", href: "/#antareja" },
  { label: "Video", href: "/#video" },
  { label: "Pendaftaran", href: "/#daftar" },
  { label: "Juri", href: "/#juri" },
  { label: "Throwback", href: "/#throwback" },
];

export default function Navbar() {
  const [isOpened, setIsOpened] = useState(false);
  const { data: Session } = useSession();

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
          {Session ? (
            <button
              className="w-[40px] h-[40px] rounded-full overflow-hidden"
              onClick={() => setIsOpened(!isOpened)}
            >
              <Image
                alt="User"
                src={
                  "https://st3.depositphotos.com/6672868/13701/v/450/depositphotos_137014128-stock-illustration-user-profile-icon.jpg"
                }
                unoptimized
                width={40}
                height={40}
                className="object-cover w-full h-full"
              />
            </button>
          ) : (
            <>
              <SecondaryButton
                onClick={() => signIn()}
                type="button"
                className="font-bold drop-shadow-glow"
              >
                Log in
              </SecondaryButton>
              <TertiaryLinkButton href="/auth/register" className="font-bold">
                Sign up
              </TertiaryLinkButton>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
