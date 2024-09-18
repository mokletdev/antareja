import cn from "@/lib/clsx";
import Link from "next/link";
import { HTMLAttributeAnchorTarget, ReactNode } from "react";

export function PrimaryLinkButton({
  children,
  href,
  className,
}: {
  children: ReactNode;
  href?: string;
  className?: string;
}) {
  return (
    <Link
      href={href!}
      className={cn(
        "bg-primary-500 drop-shadow-glow hover:opacity-75 duration-300 transition-all py-3 px-6 text-white rounded-full ",
        className
      )}
    >
      {children}
    </Link>
  );
}

export function SecondaryLinkButton({
  children,
  href,
  className,
  target,
}: Readonly<{
  children: ReactNode;
  href: string;
  className?: string;
  target?: HTMLAttributeAnchorTarget;
}>) {
  return (
    <Link
      href={href}
      target={target}
      className={cn(
        "bg-primary-500 drop-shadow-glow hover:bg-opacity-75 duration-300 transition-all py-4 px-[30px] text-white rounded-2xl text-sm ",
        className
      )}
    >
      {children}
    </Link>
  );
}

export function TertiaryLinkButton({
  children,
  href,
  className,
  target,
}: Readonly<{
  children: ReactNode;
  href: string;
  className?: string;
  target?: HTMLAttributeAnchorTarget;
}>) {
  return (
    <Link
      href={href}
      target={target}
      className={cn(
        "bg-primary-300 hover:bg-primary-500 hover:text-white duration-300 transition-all py-4 px-[30px] text-primary-500 rounded-2xl text-sm ",
        className
      )}
    >
      {children}
    </Link>
  );
}

export function ExternalLinkButton({
  children,
  href,
  className,
}: {
  children: ReactNode;
  href: string;
  className?: string;
}) {
  return (
    <Link
      href={href}
      target="_blank"
      className={cn(
        "bg-primary-500 drop-shadow-glow hover:opacity-75 duration-300 transition-all py-3 px-6 text-white rounded-full text-center",
        className
      )}
    >
      {children}
    </Link>
  );
}