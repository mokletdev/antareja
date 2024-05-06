import cn from "@/lib/clsx";
import { ReactNode } from "react";

interface TextProps {
  children?: ReactNode;
  className?: string;
}

export function H1({ children, className }: Readonly<TextProps>) {
  return (
    <h1
      className={cn(
        "text-[36px] font-bold leading-[140%] sm:text-[44px] ",
        className
      )}
    >
      {children}
    </h1>
  );
}

export function P({ children, className }: Readonly<TextProps>) {
  return <p className={cn("text-[#858585] ", className)}>{children}</p>;
}

export function Pblk({ children, className }: Readonly<TextProps>) {
  return <p className={cn("text-black ", className)}>{children}</p>;
}

export function Li({ children, className }: Readonly<TextProps>) {
  return <li className={cn("text-black ", className)}>{children}</li>;
}

export function H2({ children, className }: Readonly<TextProps>) {
  return (
    <h2
      className={cn(
        "text-[30px] md:leading-[120%] font-bold text-black ",
        className
      )}
    >
      {children}
    </h2>
  );
}

export function H3({ children, className }: Readonly<TextProps>) {
  return (
    <h3 className={cn("text-[24px] font-bold text-black ", className)}>
      {children}
    </h3>
  );
}

export function H4({ children, className }: Readonly<TextProps>) {
  return (
    <h4 className={cn("text-2xl font-bold text-black ", className)}>
      {children}
    </h4>
  );
}
