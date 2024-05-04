"use client";
import { deleteUserForm } from "@/actions/User";
import { User } from "@prisma/client";
import { useRouter } from "next-nprogress-bar";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";
import DataTable, { TableColumn } from "react-data-table-component";
import { FaRegTrashCan } from "react-icons/fa6";
import { toast } from "sonner";

export default function TimTable({ data }: { data: User[] }) {
  const [loader, setLoader] = useState(true);
  const router = useRouter();

  const columns: TableColumn<User>[] = [
    {
      name: "Nama User",
      selector: (row: User) => row.nama,
      sortable: true,
    },
    {
      name: "Email",
      selector: (row: User) => row.email,
      sortable: true,
    },
    {
      name: "Role",
      selector: (row: User) => row.role,

      sortable: true,
    },
    {
      name: "Hapus",
      cell: (row: User) => (
        <div className="flex justify-center items-center">
          <button
            className=""
            onClick={async () => {
              const confirmDelete = confirm(
                "Apakah anda yakin ingin menghapus user?"
              );
              if (confirmDelete) {
                const toastId = toast.loading("Loading...");
                const result = await deleteUserForm(row.id);
                if (!result.success) {
                  toast.error("Gagal menghapus user!", { id: toastId });
                } else {
                  toast.success("Berhasil menghapus user!", { id: toastId });
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
        onRowClicked={(row: User) => router.push(`/admin/user/${row.id}`)}
      />
    </div>
  );
}
