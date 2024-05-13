"use client";
import { deletePengumumanForm } from "@/actions/Pengumuman";
import { Pengumuman } from "@prisma/client";
import { useRouter } from "next-nprogress-bar";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";
import DataTable, { TableColumn } from "react-data-table-component";
import { FaRegTrashCan } from "react-icons/fa6";
import { toast } from "sonner";

export default function PengumumanTable({ data }: { data: Pengumuman[] }) {
  const [loader, setLoader] = useState(true);
  const router = useRouter();

  const columns: TableColumn<Pengumuman>[] = [
    {
      name: "ID Pengumuman",
      selector: (row: Pengumuman) => row.id,
      sortable: true,
    },
    {
      name: "Content",
      selector: (row: Pengumuman) => row.content,
      sortable: true,
    },
    {
      name: "Hapus",
      cell: (row: Pengumuman) => (
        <div className="flex justify-center items-center">
          <button
            className=""
            onClick={async () => {
              const confirmDelete = confirm(
                "Apakah anda yakin ingin menghapus pengumuman?"
              );
              if (confirmDelete) {
                const toastId = toast.loading("Loading...");
                const result = await deletePengumumanForm(row.id);
                if (!result.success) {
                  toast.error("Gagal menghapus pengumuman!", { id: toastId });
                } else {
                  toast.success("Berhasil menghapus pengumuman!", {
                    id: toastId,
                  });
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
      />
    </div>
  );
}
