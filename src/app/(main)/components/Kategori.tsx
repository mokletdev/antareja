import { Card } from "@/app/components/global/Icons";
import { H3, SmallP, P } from "@/app/components/global/Text";
import SectionWrapper from "@/app/components/global/Wrapper";

export default function Kategori() {
  return (
    <SectionWrapper id="Kategori">
      <div className="w-full flex justify-start md:justify-between items-start md:items-center flex-col md:flex-row gap-6 md:gap-0">
        <div className="flex flex-col gap-3">
          <span className="flex flex-col gap-1">
            <H3 className="font-bold text-black">Jenjang Perlombaan</H3>
            <H3 className="font-bold text-primary-500">Antareja 2024</H3>
          </span>
          <P>Antareja memiliki 2 Jenjang perlombaan</P>
        </div>
        <div className="w-full md:w-auto flex gap-10 flex-col xl:flex-row">
          <figure className="bg-primary-500 p-[30px] rounded-3xl drop-shadow-glow">
            <div className="flex flex-col gap-[17px] sm:gap-6">
              <div className="flex gap-6 items-center">
                <div className="p-[19px] bg-white rounded-2xl w-[62px] h-[62px] flex justify-center items-center">
                  <Card />
                </div>
                <div className="flex flex-col gap-2">
                  <span className="font-bold text-[20px] sm:text-[30px] text-white">
                    Rp 400.000
                  </span>
                  <span className="font-semibold text-xs sm:text-[18px] text-white">
                    Paskibra Jenjang SMP
                  </span>
                </div>
              </div>
              <SmallP className="text-white">
                *Pendaftaran 20 Mei 2024 - 5 Oktober 2024*
              </SmallP>
            </div>
          </figure>
          <figure className="bg-primary-500 p-[30px] rounded-3xl drop-shadow-glow">
            <div className="flex flex-col gap-[17px] sm:gap-6">
              <div className="flex gap-6 items-center">
                <div className="p-[19px] bg-white rounded-2xl w-[62px] h-[62px] flex justify-center items-center">
                  <Card />
                </div>
                <div className="flex flex-col gap-2">
                  <span className="font-bold text-[20px] sm:text-[30px] text-white">
                    Rp 400.000
                  </span>
                  <span className="font-semibold text-xs sm:text-[18px] text-white">
                    Paskibra Jenjang SMA
                  </span>
                </div>
              </div>
              <SmallP className="text-white">
                *Pendaftaran 20 Mei 2024 - 5 Oktober 2024*
              </SmallP>
            </div>
          </figure>
        </div>
      </div>
    </SectionWrapper>
  );
}
