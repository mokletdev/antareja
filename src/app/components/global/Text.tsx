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
        "text-[44px] font-bold leading-[140%] sm:text-[44px] ",
        className
      )}
    >
      {children}
    </h1>
  );
}

export function LargeP({ children, className }: Readonly<TextProps>) {
  return <p className={cn("text-lg ", className)}>{children}</p>;
}

export function P({ children, className }: Readonly<TextProps>) {
  return (
    <p className={cn("text-base text-neutral-200", className)}>{children}</p>
  );
}

export function SmallP({ children, className }: Readonly<TextProps>) {
  return <p className={cn("text-sm ", className)}>{children}</p>;
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

export function H5({ children, className }: Readonly<TextProps>) {
  return (
    <h4 className={cn("text-[20px] font-bold text-black ", className)}>
      {children}
    </h4>
  );
}
