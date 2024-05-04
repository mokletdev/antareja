import cn from "@/lib/clsx";
import Link from "next/link";
import { MouseEventHandler, ReactNode } from "react";

export function PrimaryLinkButton({
  children,
  href,
  type,
  className,
}: {
  children: ReactNode;
  href?: string;
  type: "submit" | "reset" | "button" | undefined;
  className?: string;
}) {
  return (
    <Link
      type={type}
      href={href!}
      className={cn(
        "bg-primary hover:bg-secondary duration-300 transition-all py-6 px-12 text-white rounded-[14px] ",
        className
      )}
    >
      {children}
    </Link>
  );
}
