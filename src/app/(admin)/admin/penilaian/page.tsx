import { findPenilaians } from "@/queries/penilaian.query";
import { H1 } from "../components/global/Text";
import PenilaianTable from "./components/Table";
import Link from "next/link";

export default async function Penilaian() {
  const penilaians = await findPenilaians();

  return (
    <div>
      <div className="flex items-center justify-between">
        <H1>Penilaian</H1>
        <Link
          href={"/admin/penilaian/new"}
          className="px-5 py-3 bg-red-500 hover:bg-red-300 transition-all duration-300 rounded-full text-white"
        >
          New
        </Link>
      </div>
      <div className="flex flex-col gap-3">
        <PenilaianTable data={penilaians} />
      </div>
    </div>
  );
}
