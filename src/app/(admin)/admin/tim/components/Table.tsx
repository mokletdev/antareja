"use client";
import { TimWithRelations } from "@/types/entityRelations";
import { useRouter } from "next-nprogress-bar";
import { useEffect, useState } from "react";
import DataTable, { TableColumn } from "react-data-table-component";
import { FaRegTrashCan } from "react-icons/fa6";
import { toast } from "sonner";
import { deleteTimForm } from "@/actions/Tim"; 

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
    {
      name: "Hapus",
      cell: (row: TimWithRelations) => (
        <div className="flex justify-center items-center">
          <button
            onClick={async () => {
              const confirmDelete = confirm(
                "Apakah anda yakin ingin menghapus tim?"
              );
              if (confirmDelete) {
                const toastId = toast.loading("Loading...");
                const result = await deleteTimForm(row.id);
                if (!result.success) {
                  toast.error("Gagal menghapus tim!", { id: toastId });
                } else {
                  toast.success("Berhasil menghapus tim!", { id: toastId });
                }
              }
            }}
          >
            <FaRegTrashCan className="hover:text-[#afafaf] transition-all duration-500 text-[20px]" />
          </button>
        </div>
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
        onRowClicked={(row: TimWithRelations) =>
          router.push(`/admin/tim/${row.id}`)
        }
      />
    </div>
  );
}
