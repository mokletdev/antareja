import { H3, P } from "@/app/components/global/Text";
import SectionWrapper from "@/app/components/global/Wrapper";
import Image from "next/image";
import Link from "next/link";

export function SponsorCard({
  ImageSponsor,
  Height=34,
  Width=154
}: {
  ImageSponsor: string;
  Height?: number;
  Width?: number;
}) {
  return (
    <Link target="_blank" href={"https://www.kemenpora.go.id/"} className="py-[23px] sm:py-[28px] px-[18px] sm:px-6 bg-white rounded-[20px] justify-center items-center flex flex-col w-[145px] sm:w-[206px] hover:scale-105 duration-500 transition-all">
      <Image
        src={ImageSponsor}
        alt={"waw"}
        width={Width}
        height={Height}
        unoptimized
      />
    </Link>
  );
}

export default function Sponsor() {
  return (
    <SectionWrapper id="sponsor">
      <div className="flex w-full flex-col gap-10 justify-center items-center">
        <div className="flex flex-col gap-3 text-center">
          <H3>Sponsorship dan Media Partner</H3>
          <P>Sampai bertemu di hari perlombaan!</P>
        </div>
        <div className="w-full flex gap-[10px] sm:gap-6 justify-center items-center flex-wrap">
          <SponsorCard ImageSponsor={"sponsors/Kemenpora.png"} Height={34} Width={29}/>
          
        </div>
      </div>
    </SectionWrapper>
  );
}
