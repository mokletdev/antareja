import { H1 } from "../components/global/Text";
import { findTims } from "@/queries/tim.query";
import { createAnggota } from "@/queries/anggota.query";
import { TimWithAnggotas } from "@/types/entityRelations";
import TimTable from "./components/Table";
// import UserTable from "./_components/Table";

export default async function User() {
  const tims = (await findTims()) as TimWithAnggotas[];

  return (
    <div>
      <H1>Tim</H1>
      <div className="flex flex-col gap-3">
        <TimTable data={tims} />
      </div>
    </div>
  );
}
