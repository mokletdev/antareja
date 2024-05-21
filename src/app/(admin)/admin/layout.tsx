"use client";

import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Fragment, useEffect, useState } from "react";
import Sidebar from "./components/Sidebar";
import { HamburgerIcon } from "@/app/components/global/Icons";
import { protectedRoutes } from "@/utils/protectedRoutes";
import Image from "next/image";

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isExpanded, setIsExpanded] = useState(false);
  const { data: session } = useSession();
  const pathname = usePathname();
  const pathnameSplit = pathname.split("/");
  pathnameSplit.shift();
  const allowedRoutes = protectedRoutes.filter((item) =>
    item.roles.includes(session?.user?.role!)
  );
  useEffect(() => {
    setIsExpanded(false);
  }, [pathname]);

  return (
    <main className="flex w-full h-screen overflow-hidden bg-slate-100">
      <Sidebar active={false} session={session!} />
      <nav className="flex lg:hidden bg-white w-full fixed z-[99]">
        <div className="bg-white w-full h-[55px] justify-between items-center flex relative px-5 z-[999]">
          <Link href={"/admin"}>
            <Image
              src={"/logo.svg"}
              alt="logo"
              width={64}
              height={64}
              className="w-8 h-8"
            />
          </Link>
          <button onClick={() => setIsExpanded(!isExpanded)}>
            <HamburgerIcon />
          </button>
        </div>
        <div
          className={`block absolute lg:hidden w-full z-[800] bg-neutral-500 transition-all duration-500 py-6 px-6 ${
            isExpanded ? "mt-12" : " -mt-[570px]"
          }`}
        >
          <div className="flex flex-col gap-8 justify-center items-center w-full text-center">
            {allowedRoutes.map((navOption) => (
              <Link
                key={navOption.title}
                href={navOption.path}
                className={`rounded-full text-center text-[16px] transition-all duration-300 hover:text-primary-400`}
                onClick={() => setIsExpanded(false)}
              >
                {navOption.title}
              </Link>
            ))}
            <button
              className={`rounded-full text-center text-primary-500 text-[16px] transition-all duration-300 hover:text-primary-400`}
              onClick={() => signOut()}
            >
              Sign Out
            </button>
          </div>
        </div>
      </nav>
      <div
        id="main-content"
        className="relative h-full w-full overflow-y-auto px-4 sm:ps-10 lg:ps-24 py-4 lg:ml-64 md:mt-[25px] lg:mt-0 mt-[55px]"
      >
        <nav className="w-max rounded-lg bg-gray-200 p-2 font-sans text-sm capitalize md:p-3 hidden lg:block">
          <ol className="flex">
            <li>
              <Link href="/" className="font-bold text-primary-400">
                home
              </Link>
            </li>
            {pathnameSplit.map((path, i) => {
              const last = i + 1 == pathnameSplit.length;
              return (
                <Fragment key={path}>
                  <li>
                    <span className="mx-2">/</span>
                  </li>
                  <li>
                    <Link
                      className={`${last ? "" : "text-primary-400"} font-bold`}
                      href={"/" + pathnameSplit.slice(0, i + 1).join("/")}
                      key={path}
                    >
                      {path.replace(/-/g, " ").trim()}
                    </Link>
                  </li>
                </Fragment>
              );
            })}
          </ol>
        </nav>
        <main>
          <div className="md:px-4 pe-0 sm:pe-10 pt-0 sm:pt-6 sm:pb-0 pb-6">
            {children}
          </div>
        </main>
      </div>
    </main>
  );
}
