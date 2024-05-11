"use client";

import { signIn, useSession, signOut } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { SecondaryButton } from "./Button";
import { TertiaryLinkButton } from "./LinkButton";
import { usePathname } from "next/navigation";
import { P } from "./Text";

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
  const { status, data: session } = useSession();
  const pathname = usePathname();

  useEffect(() => {
    setIsOpened(false);
  }, [pathname]);

  return (
    <nav className="w-full -mt-[88px] h-[88px] bg-neutral-500 flex items-center justify-between px-[50px] py-[22px] fixed z-[999]">
      <Link href={"/"}>
        <Image src={"/logo.png"} alt="logo" width={64} height={64} />
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
          {status === "authenticated" ? (
            <div className="relative">
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
              <div
                className={`absolute w-[275px] bg-white right-0 flex flex-col rounded-2xl drop-shadow-md shadow-black py-5 px-3 gap-2 ${
                  isOpened ? "" : "hidden"
                }`}
              >
                <div className="flw=ex flex-col gap-2 px-2 text-wrap">
                  <P className="text-sm font-bold text-wrap line-clamp-1">
                    {session.user?.nama}
                  </P>
                  <P className="text-sm text-wrap line-clamp-1">
                    {session.user?.email}
                  </P>
                </div>
                <Link
                  href={
                    session.user?.role === "ADMIN" ? "/admin" : "/dashboard"
                  }
                  className="w-full text-black bg-white hover:bg-neutral-300 px-2 rounded-lg transition-all duration-300 py-3"
                >
                  {session.user?.role === "ADMIN" ? "Admin" : "Dashboard"}
                </Link>
                <button
                  onClick={() => signOut()}
                  className="w-full text-primary-500 bg-white text-start flex justify-start hover:bg-neutral-300 px-2 rounded-lg transition-all duration-300 py-3"
                >
                  Sign Out
                </button>
              </div>
            </div>
          ) : status === "loading" ? (
            <></>
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
