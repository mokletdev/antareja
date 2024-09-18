"use client";
import { TimWithRelations } from "@/types/entityRelations";
import { useRouter } from "next-nprogress-bar";
import { useEffect, useState } from "react";
import DataTable, { TableColumn } from "react-data-table-component";

export default function TimTable({ data }: { data: TimWithRelations[] }) {
  const [loader, setLoader] = useState(true);
  const router = useRouter();

  const columns: TableColumn<TimWithRelations>[] = [
    {
      name: "Nama tim",
      selector: (row: TimWithRelations) => row.nama_tim,
      sortable: true,
    },
    {
      name: "Asal Sekolah",
      selector: (row: TimWithRelations) => row.asal_sekolah,
      sortable: true,
    },
    {
      name: "Jenjang",
      selector: (row: TimWithRelations) => row.jenjang,
      sortable: true,
    },
    {
      name: "Pelatih",
      selector: (row: TimWithRelations) => row.pelatih,
      sortable: false,
    },
    {
      name: "Tipe",
      selector: (row: TimWithRelations) => row.tipe_tim,
      sortable: false,
    },
    {
      name: "Total Anggota",
      cell: (row: TimWithRelations) => (
        <span className={"bg-[#]"}>{row.anggotas.length}</span>
      ),
      selector: (row: TimWithRelations) => row.anggotas.length,

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
        onRowClicked={(row: TimWithRelations) =>
          router.push(`/admin/tim/${row.id}`)
        }
      />
    </div>
  );
}
