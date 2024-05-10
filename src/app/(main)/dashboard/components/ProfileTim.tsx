"use client";

import { H2, H3, H5, P } from "@/app/components/global/Text";
import SectionWrapper from "@/app/components/global/Wrapper";
import { TimWithRelations } from "@/types/entityRelations";
import { Anggota } from "@prisma/client";
import Image from "next/image";
import { useState } from "react";

const rowsMapNormal = [
  ["b1s1", "b2s1", "b3s1", "b4s1", "b5s1"],
  ["b1s2", "b2s2", "b3s2", "b4s2", "b5s2"],
  ["b1s3", "b2s3", "b3s3", "b4s3", "b5s3"],
];
const rowsMapSmall = [
  ["b1s1", "b2s1", "b3s1", "b4s1"],
  ["b1s2", "b2s2", "b3s2", "b4s2"],
  ["b1s3", "b2s3", "b3s3", "b4s3"],
];

function AnggotaButton({
  anggota,
  special,
}: Readonly<{ anggota: Anggota; special?: boolean }>) {
  return (
    <button className="flex flex-col">
      <Image
        src={anggota.foto}
        alt={`Foto ${anggota.nama}`}
        width={120}
        height={160}
        unoptimized
        className="rounded-lg mb-1"
      />
      {special && (
        <H5 className="text-center w-full font-semibold">{anggota.posisi}</H5>
      )}
      <P className="text-center w-full line-clamp-1">{anggota.nama}</P>
    </button>
  );
}

function TimLayout({ tim }: Readonly<{ tim: TimWithRelations }>) {
  const [anggotas] = useState(tim.anggotas);
  const [danton] = useState(
    tim.anggotas.find((value) => value.posisi === "DANTON")
  );
  const [official] = useState(
    tim.anggotas.find((value) => value.posisi === "OFFICIAL")
  );

  return (
    <div className="block">
      <H3 className="mb-2">Anggota Tim</H3>
      <div className="py-5 px-10 bg-neutral-100 rounded-lg flex flex-col gap-8">
        <div className="flex items-center justify-center gap-16">
          <AnggotaButton anggota={danton!} special />
          <AnggotaButton anggota={official!} special />
        </div>
        {tim.tipe_tim === "NORMAL"
          ? rowsMapNormal.map((row, i) => (
              <div className="flex items-center justify-center gap-16" key={i}>
                {row.map((pos, i) => {
                  const anggotaInPos = anggotas.find(
                    (value) => value.posisi === pos
                  ) as Anggota;

                  return <AnggotaButton anggota={anggotaInPos} key={i} />;
                })}
              </div>
            ))
          : rowsMapSmall.map((row, i) => (
              <div className="flex items-center justify-center gap-16" key={i}>
                {row.map((pos, i) => {
                  const anggotaInPos = anggotas.find(
                    (value) => value.posisi === pos
                  ) as Anggota;

                  return <AnggotaButton anggota={anggotaInPos} key={i} />;
                })}
              </div>
            ))}
      </div>
    </div>
  );
}

export default function ProfileTim({
  tim,
}: Readonly<{ tim: TimWithRelations }>) {
  return (
    <SectionWrapper id="profile-tim">
      <H2 className="mb-2">Profil Tim Anda</H2>
      <div className="w-full bg-white rounded-lg p-5">
        <div className="flex flex-col gap-1 mb-4">
          <H3>Nama Tim</H3>
          <P>{tim.nama_tim}</P>
        </div>
        <div className="flex flex-col gap-1 mb-4">
          <H3>Asal Sekolah</H3>
          <P>{tim.asal_sekolah}</P>
        </div>
        <div className="flex flex-col gap-1 mb-4">
          <H3>Jenjang</H3>
          <P>{tim.jenjang}</P>
        </div>
        <div className="flex flex-col gap-1 mb-4">
          <H3>Pelatih</H3>
          <P>{tim.pelatih}</P>
        </div>
        <div className="flex flex-col gap-1 mb-4">
          <H3>Terkonfirmasi (Pembayaran)</H3>
          <P
            className={`font-bold ${
              tim.confirmed ? "text-green-600" : "text-red-600"
            }`}
          >
            {tim.confirmed ? "Sudah" : "Belum"}
          </P>
        </div>
        <TimLayout tim={tim} />
      </div>
    </SectionWrapper>
  );
}
