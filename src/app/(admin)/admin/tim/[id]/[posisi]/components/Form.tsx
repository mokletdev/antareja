"use client";

import { PrimaryButton } from "@/app/components/global/Button";
import { H2, H3, P } from "@/app/components/global/Text";
import cn from "@/lib/clsx";
import { Anggota, Kelas } from "@prisma/client";
import Image from "next/image";
import { useRouter } from "next/navigation";

const kelas: { label: Kelas; value: Kelas }[] = [
  { label: "XII", value: "XII" },
  { label: "XI", value: "XI" },
  { label: "X", value: "X" },
  { label: "IX", value: "IX" },
  { label: "VIII", value: "VIII" },
  { label: "VII", value: "VII" },
];

export default function DisplayAnggota({
  anggota,
}: Readonly<{ anggota: Anggota }>) {
  const router = useRouter();

  return (
    <form className="mx-[20px] md:mx-[100px] my-[24px]">
      <H2 className="mb-4">Informasi Anggota</H2>
      <div className="w-full bg-white rounded-lg p-5 flex flex-col gap-8">
        <div className="w-full flex justify-center items-center">
          <Image
            alt={`${anggota.nama}'s photo`}
            src={anggota.foto}
            width={600}
            height={800}
            className="rounded-xl object-cover w-[40vw] md:w-[15vw] aspect-[2/3]"
          />
        </div>
        <div className="flex flex-col gap-1">
          <H3>Nama</H3>
          <P>{anggota.nama}</P>
        </div>
        <div className="flex flex-col gap-1">
          <H3>Email</H3>
          <P>{anggota.email}</P>
        </div>
        <div className="flex flex-col gap-1">
          <H3>Nomor Telepon</H3>
          <P>{anggota.telp}</P>
        </div>
        <div className="flex flex-col gap-1">
          <H3>Nisn</H3>
          <P>{anggota.nisn}</P>
        </div>
        <div className="flex flex-col gap-1">
          <H3>Kelas</H3>
          <P>{anggota.kelas}</P>
        </div>
      </div>
      <div className="w-full justify-end flex mt-4">
        <PrimaryButton type="button" onClick={() => router.back()}>
          back
        </PrimaryButton>
      </div>
    </form>
  );
}
