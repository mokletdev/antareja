import { Person } from "@/app/components/global/Icons";
import { H3, P } from "@/app/components/global/Text";
import SectionWrapper from "@/app/components/global/Wrapper";
import Image from "next/image";

const dummy = {
  image: "/image/juri1.png",
  name: "Adi prasetyo utomo",
  title: "Juri",
};

const comingSoon = {
  image: "/image/juri_placeholder.png",
  name: "Coming Soon!",
  title:  "",
}

interface JuriCardProps {
  image: string;
  name: string;
  title: string;
}

export function JuriCard({ image, name, title }: Readonly<JuriCardProps>) {
  return (
    <figure className="relative w-full lg:w-[294px] flex items-center justify-center bg-white rounded-[20px] lg:bg-transparent lg:rounded-none py-6 lg:py-0">
      <div className="relative bg-primary-500 w-[191px] h-[258px] rounded-[24px]">
        <Image
          src={image}
          alt={`${name}'s Photo`}
          width={274.68}
          height={416.7}
          className="absolute -bottom-[1px] left-1/2 -translate-x-1/2 w-[160%] h-[140%] object-cover"
        />
      </div>
      <div className="absolute rounded-3xl p-5 bg-white drop-shadow-md flex items-center justify-between gap-6 -bottom-4">
        <div className="p-[14px] rounded-2xl bg-primary-500 drop-shadow-glow">
          <Person />
        </div>
        <div className="block text-start">
          <P className="font-bold text-black mb-1">{name}</P>
          <P>{title}</P>
        </div>
      </div>
    </figure>
  );
}

export default function Juri() {
  return (
    <SectionWrapper id="juri">
      <div className="w-full flex flex-col gap-[40px] text-end">
        <div className="mb-24 w-full flex flex-col items-end">
          <H3 className="text-[#272727] font-bold">
            Juri LKBB <span className="text-primary-500">Antareja 2024</span>
          </H3>
          <P className="text-wrap text-neutral-200 max-w-[300px] lg:max-w-none">
            Yuk kenalan dulu dengan tim juri LKBB Antareja tahun 2024
          </P>
        </div>
        <div className="relative flex justify-center items-center gap-28 lg:gap-4 flex-col lg:flex-row">
          <div className="absolute w-full rounded-[30px] bg-white min-h-[293px] -top-14 hidden lg:block"></div>
          <JuriCard image={comingSoon.image} name={comingSoon.name} title={comingSoon.title} />
          <JuriCard image={dummy.image} name={dummy.name} title={dummy.title} />
          <JuriCard image={comingSoon.image} name={comingSoon.name} title={comingSoon.title} />
        </div>
      </div>
    </SectionWrapper>
  );
}
