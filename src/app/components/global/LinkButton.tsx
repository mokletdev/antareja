import cn from "@/lib/clsx";
import Link from "next/link";
import { ReactNode } from "react";

export function PrimaryLinkButton({
  children,
  href,
  type,
  className,
}: {
  children: ReactNode;
  href?: string;
  type?: "submit" | "reset" | "button";
  className?: string;
}) {
  return (
    <Link
      type={type}
      href={href!}
      className={cn(
        "bg-primary-500 hover:bg-secondary duration-300 transition-all py-3 px-6 text-white rounded-full ",
        className
      )}
    >
      {children}
    </Link>
  );
}
