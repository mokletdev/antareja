"use client";
import { PenilaianWithRelations } from "@/types/entityRelations";
import { useRouter } from "next-nprogress-bar";
import { useEffect, useState } from "react";
import DataTable, { TableColumn } from "react-data-table-component";

export default function PenilaianTable({
  data,
}: {
  data: PenilaianWithRelations[];
}) {
  const [loader, setLoader] = useState(true);
  const router = useRouter();

  const columns: TableColumn<PenilaianWithRelations>[] = [
    {
      name: "Nama tim",
      selector: (row: PenilaianWithRelations) => row.tim.nama_tim,
      sortable: true,
    },
    {
      name: "PBB",
      selector: (row: PenilaianWithRelations) => row.pbb,
      sortable: true,
    },
    {
      name: "Formasi",
      selector: (row: PenilaianWithRelations) => row.formasi,
      sortable: true,
    },
    {
      name: "Danpas",
      selector: (row: PenilaianWithRelations) => row.danpas,
      sortable: true,
    },
    {
      name: "Pasukan",
      selector: (row: PenilaianWithRelations) => row.pasukan,
      sortable: true,
    },
    {
      name: "PBB Tambahan",
      selector: (row: PenilaianWithRelations) => row.pbb_tambahan,
      sortable: true,
    },
    {
      name: "Detail URL",
      selector: (row: PenilaianWithRelations) => row.detail_url,
      sortable: true,
    },
    {
      name: "Note",
      selector: (row: PenilaianWithRelations) => row.note,
      sortable: true,
    },
  ];

  useEffect(() => {
    setLoader(false);
  }, []);

  if (loader) return <div>Loading</div>;

  return (
    <div className="p-2 rounded-md bg-white">
      <DataTable
        columns={columns}
        data={data}
        pagination
        highlightOnHover
        customStyles={{
          cells: {
            style: {
              "&:hover": {
                cursor: "pointer",
              },
            },
          },
        }}
        onRowClicked={(row: PenilaianWithRelations) =>
          router.push(`/admin/penilaian/${row.id}`)
        }
      />
    </div>
  );
}
