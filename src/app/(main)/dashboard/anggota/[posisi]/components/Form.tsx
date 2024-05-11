"use client";

import { upsertAnggotaForm } from "@/actions/Anggota";
import TextField from "@/app/components/global/Input";
import SubmitButton from "@/app/components/global/SubmitButton";
import { H2 } from "@/app/components/global/Text";
import { Anggota } from "@prisma/client";
import Select from "react-select";

const kelas = [
  { label: "XII", value: "XII" },
  { label: "XI", value: "XI" },
  { label: "X", value: "X" },
  { label: "IX", value: "IX" },
  { label: "VIII", value: "VIII" },
  { label: "VII", value: "VII" },
];

export default function EditAnggotaForm({
  anggota,
}: Readonly<{ anggota: Anggota }>) {
  return (
    <form className="mx-[100px] my-[24px]" action={upsertAnggotaForm}>
      <H2>
        {anggota.id === ""
          ? `Buat Posisi ${anggota.posisi.toUpperCase()}`
          : `Edit Posisi ${anggota.posisi.toUpperCase()}`}
      </H2>
      <div className="flex flex-col gap-4 mt-4">
        <TextField
          id="nama"
          name="nama"
          placeholder="Masukkan nama"
          type="text"
          className="w-full"
          value={anggota.nama}
          label="Nama"
          required
        />
        <TextField
          id="email"
          name="email"
          placeholder="Masukkan email"
          type="email"
          className="w-full"
          value={anggota.email}
          label="Email"
          required
        />
        <TextField
          id="telp"
          name="telp"
          placeholder="Masukkan nomor telepon"
          type="tel"
          className="w-full"
          value={anggota.telp}
          label="Nomor telepon"
          required
        />
        {anggota.posisi !== "OFFICIAL" && (
          <TextField
            id="nisn"
            name="nisn"
            placeholder="Masukkan NISN"
            type="text"
            className="w-full"
            value={anggota.nisn as string | undefined}
            label="NISN"
            required
          />
        )}
        <div className="flex flex-col gap-2">
          <label htmlFor={"size"} className="text-[16px]">
            Foto
          </label>
          <input
            type="file"
            className="border border-neutral-200 py-4 px-3 rounded-xl file:bg-primary-500 file:text-white file:rounded-md file:border-none file:py-1 file:hover:bg-opacity-85 file:transition-all file:duration-300 hover:cursor-pointer file:hover:cursor-pointer"
            title="Pilih foto"
            accept="image/*"
            name="foto"
            placeholder={`${anggota.foto === "" ? "Upload foto" : "Ubah foto"}`}
            required
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor={"size"} className="text-[16px]">
            Kelas
          </label>
          <Select
            name="kelas"
            unstyled
            required
            options={kelas}
            id="kelas"
            placeholder="Pilih kelas"
            classNames={{
              placeholder: () => "text-[#C8C8C8]",
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
      <div className="w-full justify-end flex mt-4">
        <SubmitButton text="Tambah" className="float-end mt-4" />
      </div>
    </form>
  );
}
