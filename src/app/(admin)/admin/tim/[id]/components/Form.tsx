"use client";

import { updateTimForm, updateTimFormAdmin } from "@/actions/Tim";
import { Anggota, Tim } from "@prisma/client";
import { redirect } from "next/navigation";
import Select from "react-select";
import { toast } from "sonner";
import SubmitButton from "./parts/Button";
import TextField from "./parts/Input";
import { H1 } from "@/app/components/global/Text";
import { ExternalLinkButton } from "@/app/components/global/LinkButton";


export default function TimForm({
  data,
  edit,
  id,
  dataAnggota,
}: {
  data?: Tim;
  edit?: boolean;
  id?: string;
  dataAnggota?: Anggota[];
}) {
  const options = [
    { label: "SMP", value: "SMP" },
    { label: "SMA", value: "SMA" },
  ];

  const options_type = [
    { label: "12 Anggota", value: "SMALL" },
    { label: "15 Anggota", value: "NORMAL" },
  ];

  async function Update(data: FormData) {
    const toastId = toast.loading("Loading...");
    const result = await updateTimFormAdmin(data, id!);
    if (!result.success) {
      toast.error("Gagal mengedit tim!", { id: toastId });
    } else {
      toast.success("Berhasil mengedit tim!", { id: toastId });
      redirect("/admin/tim");
    }
  }


  return (
    <form action={Update}>
      <H1>Profile Tim</H1>
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
        <TextField
          id="nopelatih"
          type="text"
          label="No. Telp Pelatih"
          name="nopelatih"
          placeholder="nomor telepon pelatih"
          value={data?.no_pelatih}
          required={edit ? false : true}
          disabled={true}
        />
        <TextField
          id="link_berkas"
          type="url"
          label="Link Berkas"
          name="link_berkas"
          placeholder="Link Berkas"
          value={data?.link_berkas ?? ''}
          required={edit ? false : true}
          disabled={true}
        />

        {data?.link_berkas ? (
          <ExternalLinkButton href={data.link_berkas ?? ''}>
            Go to Link
          </ExternalLinkButton>
        ) : null}

        <TextField
          id="link_video"
          type="url"
          label="Link Video Tiktok + Foto Pasukan"
          name="link_video"
          placeholder="Link Video Tiktok + Foto Pasukan"
          value={data?.link_video ?? ''}
          required={edit ? false : true}
          disabled={true}
        />

        {data?.link_video ? (
          <ExternalLinkButton href={data.link_video ?? ''}>
            Go to Link
          </ExternalLinkButton>
        ) : null}

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

        <div className="flex flex-col gap-2">
          <label htmlFor={"tipe_tim"} className="text-[16px]">
            Tipe Tim
          </label>
          <Select
            name="tipe_tim"
            unstyled
            defaultValue={{
              label: data?.tipe_tim.toString() === "SMALL" ? "12 Anggota" : "15 Anggota",
              value: data?.tipe_tim.toString(),
            }}
            isDisabled={false}
            options={options_type}
            id="tipe_tim"
            placeholder="Tipe tim"
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
          id="updated_at"
          type="text"
          label="Updated At"
          name="updated_at"
          placeholder="Updated At"
          value={data?.updated_at?.toString()}
          required={edit ? false : true}
          disabled={true}
        />
        <div className="w-full justify-end flex mt-3">
          <SubmitButton />
        </div>
      </div>
    </form>
  );
}
