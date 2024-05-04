import { findPenilaians } from "@/queries/penilaian.query";
import { H1 } from "../components/global/Text";
import PenilaianTable from "./components/Table";

export default async function Penilaian() {
  const penilaians = await findPenilaians();

  return (
    <div>
      <H1>Penilaian</H1>
      <div className="flex flex-col gap-3">
        <PenilaianTable data={penilaians} />
      </div>
    </div>
  );
}
