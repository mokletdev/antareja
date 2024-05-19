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
      name: "Tipe Pembayran",
      cell: (row: TimWithRelations) =>
        row.pembayaran?.isDP ? (
          <span className="bg-primary-500 text-white rounded-2xl py-2 px-3 text-center text-sm">
            DP 50%
          </span>
        ) : (
          <span className="bg-green-500 text-white rounded-2xl py-2 px-3 text-center text-sm">
            Full
          </span>
        ),
      selector: (row: TimWithRelations) => row.pembayaran?.isDP!,
      sortable: true,
    },
    {
      name: "Status",
      cell: (row: TimWithRelations) =>
        row.confirmed ? (
          <span className="bg-green-500 text-white rounded-2xl py-2 px-3 text-center text-sm">
            Terkonfirmasi
          </span>
        ) : (
          <span className="bg-primary-500 text-white rounded-2xl py-2 px-3 text-center text-sm">
            Belum Terkonfirmasi
          </span>
        ),
      selector: (row: TimWithRelations) => row.confirmed,
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
          router.push(`/admin/pembayaran/${row.id}`)
        }
      />
    </div>
  );
}
