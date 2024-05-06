import { ReactNode } from "react";

export default function SectionWrapper({
  children,
  id,
}: Readonly<{ children: ReactNode; id: string }>) {
  return (
    <section id={id} className="mb-[146px] mx-[51px]">
      {children}
    </section>
  );
}
