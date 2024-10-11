"use client";

import { createPenilaianForm, updatePenilaianForm } from "@/actions/Penilaian";
import TextField from "@/app/components/global/Input";
import SubmitButton from "@/app/components/global/SubmitButton";
import { TimWithRelations } from "@/types/entityRelations";
import { Penilaian } from "@prisma/client";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import Select from "react-select";
import { toast } from "sonner";

export default function PenilaianForm({
  data,
  edit,
  id,
  tims,
}: {
  tims?: TimWithRelations[];
  data?: Penilaian;
  edit?: boolean;
  id?: string;
}) {
  const publishOptions = [
    { label: "Published", value: "true" },
    { label: "Unpublised", value: null },
  ];

  const timOptions = tims?.map((tim) => ({
    label: `${tim.nama_tim} - ${tim.asal_sekolah}`,
    value: `${tim.id}`,
  }));

  const { data: Session } = useSession();

  async function Create(data: FormData) {
    const toastId = toast.loading("Loading...");
    const result = await createPenilaianForm(data, Session?.user?.id!);
    if (!result.success) {
      toast.error("Gagal menambahkan penilaian!", { id: toastId });
    } else {
      toast.success("Berhasil menambahkan penilaian!", { id: toastId });
      redirect("/admin/penilaian");
    }
  }

  async function Update(data: FormData) {
    const toastId = toast.loading("Loading...");
    const result = await updatePenilaianForm(data, id!);
    if (!result.success) {
      toast.error("Gagal mengedit penilaian!", { id: toastId });
    } else {
      toast.success("Berhasil mengedit penilaian!", { id: toastId });
      redirect("/admin/penilaian");
    }
  }

  return (
    <form action={edit ? Update : Create} className="py-5">
      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-2">
          <label htmlFor={"tim"} className="text-[16px]">
            Nama Tim
          </label>
          <Select
            name="tim"
            unstyled
            defaultValue={{
              label: timOptions?.find((tim) => tim.value === data?.tim_id)
                ?.label,
              value: data?.tim_id,
            }}
            options={timOptions}
            id="tim"
            isDisabled={edit ?? false}
            placeholder="Nama Tim"
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
        <TextField
          id="pbb"
          type="number"
          label="PBB"
          name="pbb"
          placeholder="Nilai PBB"
          value={data?.pbb ?? 0} // Set default value to 0
          required={edit ?? false}
          onWheel={(e) => e.currentTarget.blur()}
        />
        <TextField
          id="variasi"
          type="number"
          label="Variasi"
          name="variasi"
          placeholder="Nilai Variasi"
          value={data?.variasi ?? 0} // Set default value to 0
          required={edit ?? false}
          onWheel={(e) => e.currentTarget.blur()}
        />
        <TextField
          id="formasi"
          type="number"
          label="Formasi"
          name="formasi"
          value={data?.formasi ?? 0} // Set default value to 0
          placeholder="Nilai Formasi"
          required={edit ?? false}
          onWheel={(e) => e.currentTarget.blur()}
        />
        <TextField
          id="danpas"
          type="number"
          label="Danpas"
          name="danpas"
          value={data?.danpas ?? 0} // Set default value to 0
          placeholder="Nilai Danpas"
          required={edit ?? false}
          onWheel={(e) => e.currentTarget.blur()}
        />
        <TextField
          id="pasukan"
          type="number"
          label="Pasukan"
          name="pasukan"
          value={data?.pasukan ?? 0} // Set default value to 0
          placeholder="Nilai Pasukan"
          required={edit ?? false}
          onWheel={(e) => e.currentTarget.blur()}
        />
        <TextField
          id="pbb_tambahan"
          type="number"
          label="PBB Tambahan"
          name="pbb_tambahan"
          value={data?.pbb_tambahan ?? 0} // Set default value to 0
          placeholder="Nilai PBB Tambahan"
          required={edit ?? false}
          onWheel={(e) => e.currentTarget.blur()}
        />
        <TextField
          id="mascot"
          type="number"
          label="Mascot"
          name="mascot"
          value={data?.mascot ?? 0} // Set default value to 0
          placeholder="Nilai Mascot"
          required={edit ?? false}
          onWheel={(e) => e.currentTarget.blur()}
        />
        <TextField
          id="cerdas_cermat"
          type="number"
          label="Cerdas Cermat"
          name="cerdas_cermat"
          value={data?.cerdas_cermat ?? 0} // Set default value to 0
          placeholder="Nilai Cerdas Cermat"
          required={edit ?? false}
          onWheel={(e) => e.currentTarget.blur()}
        />
        <TextField
          id="detail"
          type="url"
          label="URL Detail Penilaian"
          name="detail"
          value={data?.detail_url}
          placeholder="https://example.com/...."
          required={edit ?? false}
        />
        <TextField
          id="note"
          type="text"
          label="Catatan Juri"
          name="note"
          value={data?.note}
          placeholder="Note Juri"
          required={edit ?? false}
        />
        <div className="flex flex-col gap-2">
          <label htmlFor={"publish"} className="text-[16px]">
            Status Publish
          </label>
          <Select
            name="isPublished"
            unstyled
            defaultValue={{
              label: data?.published ? "Published" : "Unpublished",
              value: data?.published ? "true" : null,
            }}
            options={publishOptions}
            id="publish"
            placeholder="Published/Unpublished"
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
      </div>
      <div className="w-full justify-end flex mt-5">
        <SubmitButton text="Submit" />
      </div>
    </form>
  );
}
