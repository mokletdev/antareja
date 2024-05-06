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
    <figure className="rounded-3xl py-[30px] ps-[20px] bg-white h-[181px] w-[222px]">
      <div className="flex flex-col gap-6">
        <div className="w-12 h-12 rounded-2xl bg-primary-500 flex items-center justify-center">
          <P className="text-white font-bold">{nomor}</P>
        </div>
        <div className="flex flex-col gap-1">
          <P className="text-black font-bold">{step}</P>
          <P className="text-[#858585] text-sm">{detail}</P>
        </div>
      </div>
    </figure>
  );
}
