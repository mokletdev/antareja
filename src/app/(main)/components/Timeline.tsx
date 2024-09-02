import SectionWrapper from "@/app/components/global/Wrapper";
import { H3, P } from "@/app/components/global/Text";
import Image from "next/image";

function TimelineItem({
  title,
  dateString,
  description,
}: Readonly<{ title: string; dateString: string; description: string }>) {
  return (
    <div className="flex flex-col items-center gap-3 w-[214px]">
      <div className="flex justify-center items-center bg-primary-500 px-[14px] py-[10px] rounded-2xl">
        <span className="text-white font-bold">{title}</span>
      </div>
      <div className="flex flex-col items-center gap-1 w-full">
        <span className="text-black font-bold text-center">{dateString}</span>
        <span className="text-[#858585] text-sm text-center">
          {description}
        </span>
      </div>
    </div>
  );
}

function TimelineLine() {
  return <div className="w-[111px] h-[3px] rounded-[13px] bg-[#FFC8CA]"></div>;
}

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
        <div className="w-full flex flex-col gap-8 xl:hidden items-center">
          <div className="w-full flex gap-[38px] justify-center items-center">
            <TimelineItem
              title="Pendaftaran Peserta"
              dateString="20 Mei 2024 - 5 Oktober 2024"
              description="pendaftaran melalui website antareja.smktelkom-mlg.sch.id"
            />
            <TimelineLine />
          </div>
          <div className="w-full flex gap-[38px] justify-center items-center">
            <TimelineLine />
            <TimelineItem
              title="Technical Meeting"
              dateString="Sabtu, 7 September 2024"
              description="dilaksanakan di SMK Telkom Malang"
            />
          </div>
          <div className="w-full flex gap-[38px] justify-center items-center">
            <TimelineItem
              title="UCL (Uji Coba Lapangan)"
              dateString="Jumat, 11 Oktober 2024"
              description="15.00 - 18.00 WIB (Malang) 19.00 - 22.30 WIB (Luar Malang)"
            />
            <TimelineLine />
          </div>
          <div className="w-full flex gap-[38px] justify-center items-center">
            <TimelineLine />
            <TimelineItem
              title="Pelaksanaan Lomba"
              dateString="Sabtu, 12 Oktober 2024"
              description="06.00 WIB - selesai di SMK Telkom Malang"
            />
          </div>
        </div>
        <div className="xl:flex items-center justify-between hidden">
          <TimelineItem
            title="Pendaftaran Peserta"
            dateString="20 Mei - 5 Oktober 2024"
            description="pendaftaran melalui website antareja.smktelkom-mlg.sch.id"
          />
          <TimelineLine />
          <TimelineItem
            title="Technical Meeting"
            dateString="Sabtu, 7 September 2024"
            description="dilaksanakan di SMK Telkom Malang"
          />
          <TimelineLine />
          <TimelineItem
            title="Uji Coba Lapangan"
            dateString="Jumat, 11 Oktober 2024"
            description="15.00 - 18.00 WIB (Malang) 19.00 - 22.30 WIB (Luar Malang)"
          />
          <TimelineLine />
          <TimelineItem
            title="Pelaksanaan Lomba"
            dateString="Sabtu, 12 Oktober 2024"
            description="06.00 WIB - selesai di SMK Telkom Malang"
          />
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
