"use client";

import { H2, H5 } from "@/app/components/global/Text";
import { useCountdown } from "@/app/hooks/useCountdown";

const endDate = new Date("10/05/2024");

function TimeFigure({
  time,
  title,
}: Readonly<{ time: number; title: string }>) {
  return (
    <figure className="flex flex-col items-center gap-3">
      <div className="p-[30px] rounded-[18px] w-[76px] h-[72px] sm:w-[108px] sm:h-[110px] bg-white bg-opacity-60 flex flex-col justify-center items-center">
        <span className="text-[30px] sm:text-[50px] text-white font-bold leading-[1]">
          {time.toString().length >= 2 ? time : "0" + time.toString()}
        </span>
      </div>
      <H5 className="text-white sm">{title}</H5>
    </figure>
  );
}

export default function Countdown() {
  const [days, hours, minutes, seconds] = useCountdown(endDate);

  return (
    <figure
      suppressHydrationWarning
      className="absolute w-[510px] h-[210px] flex flex-col justify-center items-center gap-4 left-1/2 -translate-x-1/2 top-[13%] sm:top-[20%]"
    >
      <H2 className="text-white">Close Registrasi</H2>
      <div className="flex gap-[17px] flex-wrap max-w-[233px] md:max-w-none w-full justify-center">
        <TimeFigure time={days} title="Hari" />
        <TimeFigure time={hours} title="Jam" />
        <TimeFigure time={minutes} title="Menit" />
        <TimeFigure time={seconds} title="Detik" />
      </div>
    </figure>
  );
}
