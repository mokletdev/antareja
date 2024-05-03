"use client";
import { Tim } from "@prisma/client";
import { useRouter } from "next-nprogress-bar";
import { useEffect, useState } from "react";
import DataTable, { TableColumn } from "react-data-table-component";
import { TimWithAnggotas } from "@/types/entityRelations";

export default function TimTable({ data }: { data: TimWithAnggotas[] }) {
  const [loader, setLoader] = useState(true);
  const router = useRouter();

  const columns: TableColumn<TimWithAnggotas>[] = [
    {
      name: "Nama tim",
      selector: (row: TimWithAnggotas) => row.nama_tim,
      sortable: true,
    },
    {
      name: "Jenjang",
      selector: (row: TimWithAnggotas) => row.jenjang,
      sortable: true,
    },
    {
      name: "Pelatih",
      selector: (row: TimWithAnggotas) => row.pelatih,

      sortable: false,
    },
    {
      name: "Total Anggota",
      cell: (row: TimWithAnggotas) => (
        <span className={"bg-[#]"}>{row.anggotas.length}</span>
      ),

      sortable: false,
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
        onRowClicked={(row: TimWithAnggotas) =>
          router.push(`/admin/tim/${row.id}`)
        }
      />
    </div>
  );
}
