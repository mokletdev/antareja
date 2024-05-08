import { Card } from "@/app/components/global/Icons";
import { H3, P } from "@/app/components/global/Text";
import SectionWrapper from "@/app/components/global/Wrapper";

export default function Kategori() {
  return (
    <SectionWrapper id="Kategori">
      <div className="w-full flex justify-between items-center">
        <div className="flex flex-col gap-3">
          <span className="flex flex-col">
            <H3 className="font-bold text-black">Kategori Perlombaan</H3>
            <H3 className="font-bold text-primary-500">Antareja 2024</H3>
          </span>
          <P>Antareja memiliki 2 kategori perlombaan</P>
        </div>
        <div className="flex gap-10">
          <figure className="bg-primary-500 p-[30px] rounded-3xl drop-shadow-glow">
            <div className="flex flex-col gap-6">
              <div className="flex gap-6 items-center">
                <div className="p-[19px] bg-white rounded-2xl w-[62px] h-[62px] flex justify-center items-center">
                  <Card />
                </div>
                <div className="flex flex-col gap-2">
                  <span className="font-bold text-[30px] text-white">
                    Rp 350.000
                  </span>
                  <span className="font-semibold text-[18px] text-white">
                    Kategori SMP Paskibra
                  </span>
                </div>
              </div>
              <P className="text-white">
                *Pendaftaran 20 Mei 2024 - 7 September 2024*
              </P>
            </div>
          </figure>
          <figure className="bg-primary-500 p-[30px] rounded-3xl drop-shadow-glow">
            <div className="flex flex-col gap-6">
              <div className="flex gap-6 items-center">
                <div className="p-[19px] bg-white rounded-2xl w-[62px] h-[62px] flex justify-center items-center">
                  <Card />
                </div>
                <div className="flex flex-col gap-2">
                  <span className="font-bold text-[30px] text-white">
                    Rp 400.000
                  </span>
                  <span className="font-semibold text-[18px] text-white">
                    Kategori SMA Paskibra
                  </span>
                </div>
              </div>
              <P className="text-white">
                *Pendaftaran 20 Mei 2024 - 7 September 2024*
              </P>
            </div>
          </figure>
        </div>
      </div>
    </SectionWrapper>
  );
}
