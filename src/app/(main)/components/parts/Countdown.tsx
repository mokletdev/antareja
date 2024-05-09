"use client";

import { H2, H5 } from "@/app/components/global/Text";
import { useCountdown } from "@/app/hooks/useCountdown";

const endDate = new Date("09/07/2024");

function TimeFigure({
  time,
  title,
}: Readonly<{ time: number; title: string }>) {
  return (
    <figure className="flex flex-col items-center gap-3">
      <div className="p-[30px] rounded-[18px] w-[108px] h-[110px] bg-white  flex flex-col justify-center items-center">
        <span className="text-[50px] text-neutral-700 font-bold leading-[1]">
          {time.toString().length >= 2 ? time : "0" + time.toString()}
        </span>
        <H5 className="text-neutral-700">{title}</H5>
      </div>
    </figure>
  );
}

export default function Countdown() {
  const [days, hours, minutes, seconds] = useCountdown(endDate);

  return (
    <figure
      suppressHydrationWarning
      className="absolute w-[510px] h-[210px] flex flex-col justify-center items-center gap-4 left-1/2 -translate-x-1/2 top-[20%]"
    >
      <H2 className="text-white">Tutup Pendaftaran</H2>
      <div className="flex gap-[17px]">
        <TimeFigure time={days} title="Hari" />
        <TimeFigure time={hours} title="Jam" />
        <TimeFigure time={minutes} title="Menit" />
        <TimeFigure time={seconds} title="Detik" />
      </div>
    </figure>
  );
}
