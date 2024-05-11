import { findTims } from "@/queries/tim.query";
import { H1 } from "@/app/components/global/Text";
import TimTable from "./components/Table";

export default async function Tim() {
  const tims = await findTims();

  return (
    <div>
      <H1>Konfirmasi Pembayaran</H1>
      <div className="flex flex-col gap-3">
        <TimTable data={tims} />
      </div>
    </div>
  );
}
