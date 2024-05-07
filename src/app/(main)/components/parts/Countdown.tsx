"use client";

import { H2, H5 } from "@/app/components/global/Text";
import { useCountdown } from "@/app/hooks/useCountdown";

const endDate = new Date("09/07/2024");

export default function Countdown() {
  const [days, hours, minutes, seconds] = useCountdown(endDate);

  return (
    <figure
      suppressHydrationWarning
      className="absolute w-[510px] h-[210px] flex flex-col justify-center items-center gap-4 left-1/2 -translate-x-1/2 top-[131px]"
    >
      <H2 className="text-white">Close Registrasi</H2>
      <div className="flex gap-[17px]">
        <figure className="flex flex-col items-center gap-3">
          <div className="p-[30px] rounded-[18px] w-[108px] h-[110px] bg-white bg-opacity-40 flex justify-center items-center">
            <span className="text-[50px] text-white font-bold">
              {days.toString().length >= 2 ? days : "0" + days.toString()}
            </span>
          </div>
          <H5 className="text-white">Hari</H5>
        </figure>
        <figure className="flex flex-col items-center gap-3">
          <div className="p-[30px] rounded-[18px] w-[108px] h-[110px] bg-white bg-opacity-40 flex justify-center items-center">
            <span className="text-[50px] text-white font-bold">
              {hours.toString().length >= 2 ? hours : "0" + hours.toString()}
            </span>
          </div>
          <H5 className="text-white">Jam</H5>
        </figure>
        <figure className="flex flex-col items-center gap-3">
          <div className="p-[30px] rounded-[18px] w-[108px] h-[110px] bg-white bg-opacity-40 flex justify-center items-center">
            <span className="text-[50px] text-white font-bold">
              {minutes.toString().length >= 2
                ? minutes
                : "0" + minutes.toString()}
            </span>
          </div>
          <H5 className="text-white">Menit</H5>
        </figure>
        <figure className="flex flex-col items-center gap-3">
          <div className="p-[30px] rounded-[18px] w-[108px] h-[110px] bg-white bg-opacity-40 flex justify-center items-center">
            <span className="text-[50px] text-white font-bold">
              {seconds.toString().length >= 2
                ? seconds
                : "0" + seconds.toString()}
            </span>
          </div>
          <H5 className="text-white">Detik</H5>
        </figure>
      </div>
    </figure>
  );
}
