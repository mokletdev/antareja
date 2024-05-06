"use client";

import { Anggota, Tim } from "@prisma/client";
import TextField from "./parts/Input";
import SubmitButton from "./parts/Button";
import Select from "react-select";
import { toast } from "sonner";
import { redirect } from "next/navigation";
import { updateTimForm } from "@/actions/Tim";
import { H1 } from "../../../components/global/Text";
import AnggotaTable from "./parts/Anggota";

export default function TimForm({
  data,
  edit,
  id,
  dataAnggota,
}: {
  data?: Tim;
  edit?: boolean;
  id?: string;
  dataAnggota?: Anggota;
}) {
  const options = [
    { label: "SMP", value: "SMP" },
    { label: "SMA", value: "SMA" },
  ];

  async function Update(data: FormData) {
    const toastId = toast.loading("Loading...");
    const result = await updateTimForm(data, id!);
    if (!result.success) {
      toast.error("Gagal mengedit tim!", { id: toastId });
    } else {
      toast.success("Berhasil mengedit tim!", { id: toastId });
      redirect("/admin/tim");
    }
  }

  return (
    <form action={Update}>
      <div className="flex flex-col gap-5">
        <TextField
          id="nama_tim"
          type="text"
          label="Nama Tim"
          name="nama_tim"
          placeholder="Nama"
          value={data?.nama_tim}
          required={edit ? false : true}
          disabled={true}
        />
        <TextField
          id="asal_sekolah"
          type="text"
          label="Asal Sekolah"
          name="asal_sekolah"
          placeholder="Asal Sekolah"
          value={data?.asal_sekolah}
          required={edit ? false : true}
        />
        <TextField
          id="pelatih"
          type="text"
          label="Pelatih"
          name="pelatih"
          placeholder="Pelatih"
          value={data?.pelatih}
          required={edit ? false : true}
          disabled={true}
        />
        <div className="flex flex-col gap-2">
          <label htmlFor={"jenjang"} className="text-[16px]">
            Jenjang
          </label>
          <Select
            name="jenjang"
            unstyled
            defaultValue={{
              label: data?.jenjang.toString(),
              value: data?.jenjang.toString(),
            }}
            isDisabled={true}
            options={options}
            id="jenjang"
            placeholder="Jenjang"
            classNames={{
              control: () =>
                "rounded-[14px] border focus:bg-[#F1F6F9] border-neutral-400 px-[18px] active:border-black hover:border-black py-[14px] text-black placeholder-neutral-500 bg-white focus:outline-none transition-all duration-500 placeholder:text-[#C8C8C8]",
              menu: () =>
                "bg-white rounded-lg px-[18px] py-[14px] border border-neutral-400",
              multiValue: () =>
                "bg-primary-400 px-4 py-2 text-white rounded-2xl",
              valueContainer: () => "flex gap-2",
              menuList: () => "text-base flex flex-col gap-1",
              option: () =>
                "hover:bg-neutral-300 hover:cursor-pointer transition-all duration-500 rounded-lg p-2",
              input: () => "focus:bg-[#F1F6F9]",
            }}
          />
        </div>
        <div>

        </div>
        <TextField
          id="updated_at"
          type="text"
          label="Updated At"
          name="updated_at"
          placeholder="Updated At"
          value={data?.updated_at?.toString()}
          required={edit ? false : true}
          disabled={true}
        />
      </div>
      <div className="float-end mt-3">
        <SubmitButton />
      </div>
    </form>
  );
}
