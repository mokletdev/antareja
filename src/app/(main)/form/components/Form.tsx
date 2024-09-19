"use client";

import submitFormRegistrasi from "@/actions/registrationForm";
import TextField from "@/app/components/global/Input";
import SubmitButton from "@/app/components/global/SubmitButton";
import { H2, H3, P } from "@/app/components/global/Text";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Select from "react-select";
import { toast } from "sonner";

const jenjang = [
  { label: "SMA/Sederajat", value: "SMA" },
  { label: "SMP/Sederajat", value: "SMP" },
];

const size = [
  { label: "12 Pasukan", value: "SMALL" },
  { label: "15 Pasukan", value: "NORMAL" },
];

const paymentType = [
  { label: "DP 50%", value: "TRUE" },
  { label: "Full", value: "FALSE" },
];

export default function FormComponent({ id }: { id: string }) {
  const [isDP, setIsDP] = useState(false);
  const router = useRouter();

  async function submitForm(data: FormData) {
    const toastId = toast.loading("Membuat tim....");
    const result = await submitFormRegistrasi(data, id);

    if (result.success) {
      toast.success(result.message, { id: toastId });
      router.refresh();
    } else {
      toast.error(result.message, { id: toastId });
    }
  }

  return (
    <form className="mx-6 sm:mx-[100px] my-[24px]" action={submitForm}>
      <H2>Form Pendaftaran</H2>
      <div className="flex flex-col gap-4 mt-4">
        <TextField
          id="nama-tim"
          name="namatim"
          placeholder="Masukkan nama Tim"
          type="text"
          className="w-full"
          label="Nama Tim"
          required
        />
        <TextField
          id="nama-pelatih"
          name="pelatih"
          placeholder="Masukkan nama Pelatih"
          type="text"
          className="w-full"
          label="Nama Pelatih"
          required
        />
        <TextField
          id="no-pelatih"
          name="no-pelatih"
          placeholder="Masukkan Nomor Telepon Pelatih"
          type="text"
          className="w-full"
          label="No.Telp Pelatih"
          required
        />
        <TextField
          id="sekolah"
          name="asal"
          placeholder="Masukkan nama Sekolah"
          type="text"
          className="w-full"
          label="Asal Sekolah"
          required
        />
        <div className="flex flex-col gap-2">
          <label htmlFor={"jenjang"} className="text-[16px]">
            Jenjang
          </label>
          <Select
            name="jenjang"
            unstyled
            required
            options={jenjang}
            id="jenjang"
            placeholder="Pilih Jenjang"
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
        <div className="flex flex-col gap-2">
          <label htmlFor={"size"} className="text-[16px]">
            Jumlah Pasukan
          </label>
          <Select
            name="size"
            unstyled
            required
            options={size}
            id="size"
            placeholder="Pilih Jumlah Pasukan"
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
        <div className="flex flex-col gap-2">
          <label htmlFor={"tipe"} className="text-[16px]">
            Tipe Pembayaran
          </label>
          <Select
            name="tipe-pembayaran"
            unstyled
            required
            onChange={(e) =>
              e?.value === "TRUE" ? setIsDP(true) : setIsDP(false)
            }
            options={paymentType}
            id="tipe"
            placeholder="Pilih Tipe Pembayaran"
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
        <div>
          <div>
            <H3>Pembayaran</H3>
            <P>
              Lakukan pembayaran dengan nominal{" "}
              <span className="text-black font-bold">
                {isDP ? "Rp. 200.000,00" : "Rp. 400.000,00"}
              </span>{" "}
              ke:
            </P>
            <P className="text-black">
              1410024777096 <br />
              Bank Mandiri <br /> a.n Firman Hadi Amrullah Z
            </P>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <label htmlFor="bukti" className="text-[16px]">
              Bukti Transfer
            </label>
            <input
              id="bukti"
              type="file"
              className="border border-neutral-200 py-4 px-3 rounded-xl file:bg-primary-500 file:text-white file:rounded-md file:border-none file:py-1 file:hover:bg-opacity-85 file:transition-all file:duration-300 hover:cursor-pointer file:hover:cursor-pointer"
              title="Pilih bukti transfer"
              accept="image/*"
              name="bukti"
              placeholder="Pilih bukti transfer"
              required
            />
          </div>
          <TextField
            id="bank"
            name="namabank"
            placeholder="Masukkan nama Bank Pengirim Ex: BCA"
            type="text"
            className="w-full"
            label="Nama Bank Pengirim"
            required
          />
          <TextField
            id="namarek"
            name="namarek"
            placeholder="Masukkan nama pemilik rekening"
            type="text"
            className="w-full"
            label="Nama pemilik rekening"
            required
          />
        </div>
      </div>
      <div className="w-full justify-end flex mt-4">
        <SubmitButton text="Kirim" className="float-end mt-4" />
      </div>
    </form>
  );
}
