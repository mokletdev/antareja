import { findPenilaians } from "@/queries/penilaian.query";
import { PrimaryLinkButton } from "@/app/components/global/LinkButton";
import { H1 } from "@/app/components/global/Text";
import PenilaianTable from "./components/Table";

export default async function Penilaian() {
  const penilaians = await findPenilaians();

  return (
    <div className="py-6">
      <div className="flex items-center justify-between">
        <H1>Penilaian</H1>
        <PrimaryLinkButton href="/admin/penilaian/new">New</PrimaryLinkButton>
      </div>
      <div className="mt-4">
        <PenilaianTable data={penilaians} />
      </div>
    </div>
  );
}
