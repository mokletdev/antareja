"use client";

import { H2, H5 } from "@/app/components/global/Text";
import { useCountdown } from "@/app/hooks/useCountdown";

const endDate = new Date("10/12/2024");

function TimeFigure({
  time,
  title,
}: Readonly<{ time: number; title: string }>) {
  return (
    <figure className="flex flex-col items-center gap-3">
      <div className="p-[30px] rounded-[18px] w-[108px] h-[110px] bg-primary-500 drop-shadow-glow flex flex-col justify-center items-center">
        <span className="text-[50px] text-white font-bold leading-[1]">
          {time.toString().length >= 2 ? time : "0" + time.toString()}
        </span>
      </div>
      <H5>{title}</H5>
    </figure>
  );
}

export default function Countdown() {
  const [days, hours, minutes, seconds] = useCountdown(endDate);

  return (
    <figure className="flex flex-col gap-4">
      <H2>Waktu Tersisa Sebelum Hari-H</H2>
      <div className="flex gap-[17px] flex-wrap md:flex-nowrap w-full justify-center">
        <TimeFigure time={days} title="Hari" />
        <TimeFigure time={hours} title="Jam" />
        <TimeFigure time={minutes} title="Menit" />
        <TimeFigure time={seconds} title="Detik" />
      </div>
    </figure>
  );
}
