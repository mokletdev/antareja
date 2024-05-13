"use client";

import { Pengumuman } from "@prisma/client";
import TextField from "@/app/components/global/Input";
import SubmitButton from "@/app/components/global/SubmitButton";
import { toast } from "sonner";
import { redirect } from "next/navigation";
import { createPengumumanForm } from "@/actions/Pengumuman";

export default function UserForm({ data }: { data?: Pengumuman }) {
  async function Create(data: FormData) {
    const toastId = toast.loading("Loading...");
    const result = await createPengumumanForm(data);
    if (!result.success) {
      toast.error("Gagal menambahkan pengumuman!", { id: toastId });
    } else {
      toast.success("Berhasil menambahkan pengumuman!", { id: toastId });
      redirect("/admin/pengumuman");
    }
  }

  return (
    <form action={Create}>
      <div className="flex flex-col gap-5">
        <TextField
          id="content"
          type="text"
          label="Content"
          name="content"
          placeholder="Content"
          value={data?.content}
          required={true}
        />
      </div>
      <div className="float-end mt-3">
        <SubmitButton text="Create" />
      </div>
    </form>
  );
}
