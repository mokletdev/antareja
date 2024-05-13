import { P } from "@/app/components/global/Text";

interface Props {
  nomor: string;
  step: string;
  detail: string;
}

export default function PendaftaranCard({
  nomor,
  step,
  detail,
}: Readonly<Props>) {
  return (
    <figure className="rounded-[15px] sm:rounded-3xl py-[19px] sm:py-[30px] ps-[12px] sm:ps-[20px] bg-white h-[124px] sm:h-[181px] w-[140px] sm:w-[222px]">
      <div className="flex flex-col gap-[15px] sm:gap-6">
        <div className="sm:w-12 sm:h-12 w-8 h-8 rounded-[10px] sm:rounded-2xl bg-primary-500 flex items-center justify-center">
          <P className="text-white font-bold">{nomor}</P>
        </div>
        <div className="flex flex-col gap-1">
          <P className="text-black font-bold sm:text-base text-xs">{step}</P>
          <P className="text-[#858585] sm:text-sm text-[10px]">{detail}</P>
        </div>
      </div>
    </figure>
  );
}
