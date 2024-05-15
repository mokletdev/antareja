import { PrimaryLinkButton } from "@/app/components/global/LinkButton";
import { H1 } from "@/app/components/global/Text";
import { getPengumumans } from "@/queries/pengumuman.query";
import PengumumanTable from "./components/Table";

export default async function Users() {
  const pengumumans = await getPengumumans();

  return (
    <div>
      <div className="flex items-center justify-between">
        <H1>Pengumuman</H1>
        <PrimaryLinkButton href="/admin/pengumuman/new">New</PrimaryLinkButton>
      </div>
      <div className="mt-4">
        <PengumumanTable data={pengumumans} />
      </div>
    </div>
  );
}
