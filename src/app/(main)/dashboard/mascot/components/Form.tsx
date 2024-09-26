"use client";

import { upsertFotoMascotForm } from "@/actions/Mascot";
import SubmitButton from "@/app/components/global/SubmitButton";
import { H2 } from "@/app/components/global/Text";
import { Tim } from "@prisma/client";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export default function EditFotoMascotForm({ tim }: Readonly<{ tim: Tim }>) {
  const router = useRouter();

  async function submitForm(data: FormData) {
    const toastId = toast.loading(
      tim.id === "" ? "Membuat foto mascot..." : "Memperbarui foto mascot..."
    );
    const result = await upsertFotoMascotForm(data, tim.id);

    if (result.success) {
      toast.success(result.message, { id: toastId });
      router.push("/dashboard");
    } else {
      toast.error(result.message, { id: toastId });
    }
  }

  return (
    <form className="mx-[100px] my-[24px] h-[50vh]" action={submitForm}>
      <H2>Edit Foto Mascot (Max. 10MB)</H2>
      <div className="flex flex-col gap-4 mt-4">
        <input
          id="fotomascot"
          type="file"
          className="border border-neutral-200 py-4 px-3 rounded-xl file:bg-primary-500 file:text-white file:rounded-md file:border-none file:py-1 file:hover:bg-opacity-85 file:transition-all file:duration-300 hover:cursor-pointer file:hover:cursor-pointer"
          title="Pilih foto mascot"
          accept="image/*"
          name="fotomascot"
          placeholder="Pilih foto mascot"
          required
        />
      </div>
      <div className="w-full justify-end flex mt-4">
        <SubmitButton
          text={tim.id === "" ? "Tambah" : "Ubah"}
          className="float-end mt-4"
        />
      </div>
    </form>
  );
}
