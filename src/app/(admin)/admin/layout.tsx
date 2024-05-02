"use client";

import Sidebar from "./components/Sidenav";
import { Fragment, useState } from "react";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isActive, setIsActive] = useState(false);
  const { data: session } = useSession();
  const pathname = usePathname().split("/");
  pathname.shift();

  return (
    <main className="flex w-full h-screen overflow-hidden bg-slate-100">
      <Sidebar active={isActive} session={session!} />
      <div
        id="main-content"
        className="relative h-full w-full overflow-y-auto ps-10 lg:ps-24 py-4 lg:ml-64"
      >
        <nav className="w-max rounded-lg bg-gray-200 p-2 font-sans text-sm capitalize md:p-3">
          <ol className="flex">
            <li>
              <Link href="/" className="font-bold text-primary-400">
                home
              </Link>
            </li>
            {pathname.map((path, i) => {
              const last = i + 1 == pathname.length;
              return (
                <Fragment key={path}>
                  <li>
                    <span className="mx-2">/</span>
                  </li>
                  <li>
                    <Link
                      className={`${last ? "" : "text-primary-400"} font-bold`}
                      href={"/" + pathname.slice(0, i + 1).join("/")}
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
          <div className="md:px-4 pe-10 pt-6">{children}</div>
        </main>
      </div>
    </main>
  );
}
