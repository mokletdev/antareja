import SectionWrapper from "@/app/components/global/Wrapper";
import { H3, P } from "@/app/components/global/Text";
import Image from "next/image";

export default function Timeline() {
  return (
    <SectionWrapper id="daftar">
      <div className="relative w-full flex flex-col gap-10">
        <div className="flex flex-col gap-3">
          <H3 className="text-[#272727] font-bold">
            <span className="text-primary-500">Timeline</span> Perlombaan
          </H3>
          <P>Timeline perlombaan Antareja 2024</P>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex flex-col items-center gap-3 w-[214px]">
            <div className="flex justify-center items-center bg-primary-500 px-[14px] py-[10px] rounded-2xl">
              <span className="text-white font-bold">Pendaftaran</span>
            </div>
            <div className="flex flex-col items-center gap-1 w-full">
              <span className="text-black font-bold">
                22 Juni - 5 Agustus 2024
              </span>
              <span className="text-[#858585] text-sm">
                Pembukaan pendaftaran
              </span>
            </div>
          </div>
          <div className="w-[111px] h-[3px] rounded-[13px] bg-[#FFC8CA]"></div>
          <div className="flex flex-col items-center gap-3 w-[214px]">
            <div className="flex justify-center items-center bg-primary-500 px-[14px] py-[10px] rounded-2xl">
              <span className="text-white font-bold">Tutup Pendaftaran</span>
            </div>
            <div className="flex flex-col items-center gap-1 w-full">
              <span className="text-black font-bold">
                22 Juni - 5 Agustus 2024
              </span>
              <span className="text-[#858585] text-sm">
                Pembukaan pendaftaran
              </span>
            </div>
          </div>
          <div className="w-[111px] h-[3px] rounded-[13px] bg-[#FFC8CA]"></div>
          <div className="flex flex-col items-center gap-3 w-[214px]">
            <div className="flex justify-center items-center bg-primary-500 px-[14px] py-[10px] rounded-2xl">
              <span className="text-white font-bold">Technical Meeting</span>
            </div>
            <div className="flex flex-col items-center gap-1 w-full">
              <span className="text-black font-bold">
                22 Juni - 5 Agustus 2024
              </span>
              <span className="text-[#858585] text-sm">
                Pembukaan pendaftaran
              </span>
            </div>
          </div>
          <div className="w-[111px] h-[3px] rounded-[13px] bg-[#FFC8CA]"></div>
          <div className="flex flex-col items-center gap-3 w-[214px]">
            <div className="flex justify-center items-center bg-primary-500 px-[14px] py-[10px] rounded-2xl">
              <span className="text-white font-bold">Perlombaan</span>
            </div>
            <div className="flex flex-col items-center gap-1 w-full">
              <span className="text-black font-bold">
                22 Juni - 5 Agustus 2024
              </span>
              <span className="text-[#858585] text-sm">
                Pembukaan pendaftaran
              </span>
            </div>
          </div>
        </div>
        <Image
          src={"/image/timelinelogo.png"}
          alt="logo"
          width={800}
          height={801}
          className="absolute -z-[999] -right-[445px] -top-[265px]"
        />
      </div>
    </SectionWrapper>
  );
}
