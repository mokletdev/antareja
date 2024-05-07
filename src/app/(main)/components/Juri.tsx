import { H3, P } from "@/app/components/global/Text";
import SectionWrapper from "@/app/components/global/Wrapper";
import Image from "next/image";

const dummy = {
  image: "/image/girl1.png",
  name: "Sucipto S.Pd",
  title: "Professional cummer",
};

interface JuriCardProps {
  image: string;
  name: string;
  title: string;
}

export function JuriCard({ image, name, title }: Readonly<JuriCardProps>) {
  return (
    <figure className="">
      <div className="relative bg-primary-500 w-[191px] h-[258px] rounded-[24px] overflow-x-hidden overflow-y-visible">
        <Image
          src={image}
          alt={`${name}'s Photo`}
          width={274.68}
          height={416.7}
          className="absolute bottom-0 left-1/2 -translate-x-1/2 object-cover"
        />
      </div>
    </figure>
  );
}

export default function Juri() {
  return (
    <SectionWrapper id="juri">
      <div className="w-full flex flex-col gap-[40px] text-end">
        <div>
          <H3 className="text-[#272727] font-bold">
            Juri LKBB <span className="text-primary-500">Antareja 2024</span>
          </H3>
          <P className="text-wrap text-neutral-200">
            Yuk kenalan dulu dengan tim juri LKBB Antareja tahun 2024
          </P>
        </div>
        <div className="relative w-full rounded-[30px] bg-white min-h-[293px]">
          <JuriCard image={dummy.image} name={dummy.name} title={dummy.title} />
        </div>
      </div>
    </SectionWrapper>
  );
}
