import { findPenilaians } from "@/queries/penilaian.query";
import { PrimaryLinkButton } from "@/app/components/global/LinkButton";
import { H1 } from "@/app/components/global/Text";
import PenilaianTable from "./components/Table";

export default async function Penilaian() {
  const penilaians = await findPenilaians();

  return (
    <div>
      <div className="flex items-center justify-between">
        <H1>Penilaian</H1>
        <PrimaryLinkButton type="button" href="/admin/penilaian/new">
          New
        </PrimaryLinkButton>
      </div>
      <div className="flex flex-col gap-3">
        <PenilaianTable data={penilaians} />
      </div>
    </div>
  );
}
