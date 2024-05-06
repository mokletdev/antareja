"use client";
import { Anggota as AnggotaWithRelations } from "@prisma/client";
import { useRouter } from "next-nprogress-bar";
import { useEffect, useState } from "react";
import DataTable, { TableColumn } from "react-data-table-component";

export default function AnggotaTable({ data }: { data: AnggotaWithRelations[] }) {
  const [loader, setLoader] = useState(true);
  const router = useRouter();

  const columns: TableColumn<AnggotaWithRelations>[] = [
    {
      name: "Nama",
      selector: (row: AnggotaWithRelations) => row.nama,
      sortable: true,
    },
    {
      name: "Email",
      selector: (row: AnggotaWithRelations) => row.foto,
      sortable: true,
    },
    {
      name: "Posisi",
      selector: (row: AnggotaWithRelations) => row.posisi,
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
        onRowClicked={(row: AnggotaWithRelations) =>
          router.push(`/admin/tim/${row.id}`)
        }
      />
    </div>
  );
}
