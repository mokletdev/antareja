"use client";

import { H2, H3, P } from "@/app/components/global/Text";
import SectionWrapper from "@/app/components/global/Wrapper";
import { TimWithRelations } from "@/types/entityRelations";
import { ReactNode, useState } from "react";
import { AnggotaCard } from "./parts/AnggotaCard";

const rowsMapNormal = [
  ["b1s1", "b1s2", "b1s3"],
  ["b2s1", "b2s2", "b2s3"],
  ["b3s3", "b3s3", "b3s3"],
  ["b4s1", "b4s2", "b4s3"],
  ["b5s1", "b5s2", "b5s3"],
];
const rowsMapSmall = [
  ["b1s1", "b1s2", "b1s3"],
  ["b2s1", "b2s2", "b2s3"],
  ["b3s1", "b3s2", "b3s3"],
  ["b4s1", "b4s2", "b4s3"],
];
const sizeMap = {
  SMALL: 12,
  NORMAL: 15,
};

function AnggotaCardsWrapper({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <div className="flex items-center justify-center gap-16">{children}</div>
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
      <H3
        className={`${anggotas.length !== sizeMap[tim.tipe_tim] ? "" : "mb-4"}`}
      >
        Anggota Tim ({sizeMap[tim.tipe_tim]} Pasukan + Danton + Official)
      </H3>
      {anggotas.length !== sizeMap[tim.tipe_tim] + 2 && (
        <P className="text-yellow-600 mb-4 animate-pulse">
          (Data belum lengkap)
        </P>
      )}
      <div className="py-5 px-10 bg-neutral-300 rounded-lg flex flex-col gap-12">
        <AnggotaCardsWrapper>
          <AnggotaCard
            href={`/dashboard/anggota/danton`}
            image={danton?.foto ?? "/placeholder-profile-picture.jpg"}
            name={danton?.nama ?? "Belum diisi"}
            posisi={danton?.posisi ?? "DANTON"}
          />
          <AnggotaCard
            href={`/dashboard/anggota/official`}
            image={official?.foto ?? "/placeholder-profile-picture.jpg"}
            name={official?.nama ?? "Belum diisi"}
            posisi={official?.posisi ?? "OFFICIAL"}
          />
          {tim.jenjang === "SMA" && (
            <AnggotaCard
              href={`/dashboard/mascot`}
              image={tim.foto_mascot ?? "/placeholder-profile-picture.jpg"}
              name={tim.foto_mascot ? "Mascot " + tim.nama_tim : "Belum diisi"}
              posisi={"MASCOT"}
            />
          )}
        </AnggotaCardsWrapper>
        {tim.tipe_tim === "NORMAL"
          ? rowsMapNormal.map((row, i) => (
              <AnggotaCardsWrapper key={i}>
                {row.map((pos, i) => {
                  const anggotaInPos = anggotas.find(
                    (value) => value.posisi === pos.toUpperCase()
                  );

                  return (
                    <AnggotaCard
                      href={`/dashboard/anggota/${pos}`}
                      image={
                        anggotaInPos?.foto ?? "/placeholder-profile-picture.jpg"
                      }
                      name={anggotaInPos?.nama ?? "Belum diisi"}
                      posisi={"Posisi " + (anggotaInPos?.posisi ?? pos)}
                      key={anggotaInPos?.id ?? i}
                    />
                  );
                })}
              </AnggotaCardsWrapper>
            ))
          : rowsMapSmall.map((row, i) => (
              <AnggotaCardsWrapper key={i}>
                {row.map((pos, i) => {
                  const anggotaInPos = anggotas.find(
                    (value) => value.posisi === pos.toUpperCase()
                  );

                  return (
                    <AnggotaCard
                      href={`/dashboard/anggota/${pos}`}
                      image={
                        anggotaInPos?.foto ?? "/placeholder-profile-picture.jpg"
                      }
                      name={anggotaInPos?.nama ?? "Belum diisi"}
                      posisi={anggotaInPos?.posisi ?? pos}
                      key={anggotaInPos?.id ?? i}
                    />
                  );
                })}
              </AnggotaCardsWrapper>
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
