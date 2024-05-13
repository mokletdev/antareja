import { ReactNode } from "react";
import cn from "@/lib/clsx";

export default function SectionWrapper({
  children,
  id,
  className,
}: Readonly<{ children: ReactNode; id?: string; className?: string }>) {
  return (
    <section
      id={id}
      className={cn(
        "mb-[60px] xl:mb-[146px] mx-[27px] xl:mx-[51px] py-0 xl:py-[24px]",
        className
      )}
    >
      {children}
    </section>
  );
}
