"use client";

import { PrimaryButton } from "@/app/components/global/Button";
import { H3 } from "@/app/components/global/Text";
import { protectedRoutes } from "@/utils/protectedRoutes";
import { Session } from "next-auth";
import { signOut } from "next-auth/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaArrowRight } from "react-icons/fa";
import { DashboardIcon } from "./Icons";

interface Sidenavprops {
  active: boolean;
  session?: Session;
}

export default function Sidebar({ active, session }: Readonly<Sidenavprops>) {
  const pathname = usePathname();
  const allowedRoutes = protectedRoutes.filter((item) =>
    item.roles.includes(session?.user?.role!)
  );

  return (
    <aside
      id="sidebar"
      className={`fixed ${
        active ? "w-80" : "w-0 opacity-0"
      } left-0 bg-white top-0 z-20 h-full flex-shrink-0 transition-all duration-300 lg:w-80 lg:opacity-100 hidden lg:flex`}
      aria-label="Sidebar"
    >
      <div className="relative flex min-h-0 flex-1 flex-col border-r px-4 border-gray-200 bg-white pt-0">
        <div className="flex flex-1 flex-col overflow-y-auto pb-4 pt-5">
          <div className="flex-1 space-y-10 bg-white px-3">
            <Link href={"/"} className="block">
              <H3 className="text-[#F70048]">Admin Panel</H3>
            </Link>
            <ul className="space-y-4 pb-2 mt-8">
              <p className="font-semibold">Menu</p>
              {allowedRoutes.map((item) => (
                <li key={item.path}>
                  <Link
                    href={item.path}
                    className={
                      (pathname.split("/")[2] == item.path.split("/")[2]
                        ? "bg-red-100 "
                        : "") +
                      "group flex items-center rounded-lg p-2 text-base font-normal text-primary-400 hover:bg-red-200 transition-all"
                    }
                  >
                    {/* <div dangerouslySetInnerHTML={{ __html: item.icon }} /> */}
                    <p className="ml-3 whitespace-nowrap text-primary-400 font-semibold flex gap-3 items-center">
                      <FaArrowRight /> {item.title}
                    </p>
                  </Link>
                </li>
              ))}
            </ul>
            <PrimaryButton
              type="button"
              onClick={() => signOut({ callbackUrl: "/" })}
              className="w-full"
            >
              Sign Out
            </PrimaryButton>
          </div>
        </div>
      </div>
    </aside>
  );
}
