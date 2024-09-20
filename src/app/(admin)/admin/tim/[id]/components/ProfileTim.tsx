"use client";

import { H2, H3, P } from "@/app/components/global/Text";
import SectionWrapper from "@/app/components/global/Wrapper";
import { TimWithRelations } from "@/types/entityRelations";
import { ReactNode, useState } from "react";
import { AnggotaCard } from "./parts/AnggotaCard";
import { Posisi } from "@prisma/client";

const rowsMapNormal = [
  ["b1s1", "b1s2", "b1s3"],
  ["b2s1", "b2s2", "b2s3"],
  ["b3s1", "b3s2", "b3s3"],
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

function AnggotaCardsWrapper({ children }: Readonly<{ children?: ReactNode }>) {
  return (
    <div className="flex items-center justify-center gap-5 sm:gap-20 flex-wrap">
      {children}
    </div>
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

  const [cc1] = useState(
    tim.anggotas.find((value) => value.posisi === "CERDAS_CERMAT1")
  );
  const [cc2] = useState(
    tim.anggotas.find((value) => value.posisi === "CERDAS_CERMAT2")
  );

  const tim_id = tim.id;

  return (
    <div className="block mt-5">
      {tim.jenjang === "SMA" ? (
        <H3
          className={`${
            anggotas.length !== sizeMap[tim.tipe_tim] ? "" : "mb-4"
          }`}
        >
          Informasi Anggota ({sizeMap[tim.tipe_tim]} Pasukan + Danton + Official
          + Mascot)
        </H3>
      ) : (
        <H3
          className={`${
            anggotas.length !== sizeMap[tim.tipe_tim] ? "" : "mb-4"
          }`}
        >
          Informasi Anggota ({sizeMap[tim.tipe_tim]} Pasukan + Danton + Official
          + Cerdas Cermat)
        </H3>
      )}

      {anggotas.length !== sizeMap[tim.tipe_tim] + 2 && (
        <P className="text-yellow-600 mb-4 animate-pulse">
          (Data belum lengkap)
        </P>
      )}
      <div className="py-5 right-0 rounded-lg flex flex-col gap-5 sm:gap-12 mb-10">
        {tim.jenjang === "SMA" ? (
          <AnggotaCardsWrapper>
            <AnggotaCard
              image={
                tim.foto_mascot && tim.foto_mascot !== ""
                  ? tim.foto_mascot
                  : "/placeholder-profile-picture.jpg"
              }
              name={
                tim.foto_mascot && tim.foto_mascot !== ""
                  ? "Mascot " + tim.nama_tim
                  : "Belum Diisi"
              }
              posisi={"MASCOT"}
            />
          </AnggotaCardsWrapper>
        ) : (
          <AnggotaCardsWrapper>
            <AnggotaCard
              href={`/admin/tim/${tim_id}/cerdas_cermat1`}
              image={cc1?.foto ?? "/placeholder-profile-picture.jpg"}
              name={
                cc1?.foto ? "cerdas cermat 1 " + tim.nama_tim : "Belum Diisi"
              }
              posisi={"Cerdas Cermat 1"}
            />
            <AnggotaCard
              href={`/admin/tim/${tim_id}/cerdas_cermat2`}
              image={cc2?.foto ?? "/placeholder-profile-picture.jpg"}
              name={
                cc2?.foto ? "cerdas cermat 2 " + tim.nama_tim : "Belum Diisi"
              }
              posisi={"Cerdas Cermat 2"}
            />
          </AnggotaCardsWrapper>
        )}

        <AnggotaCardsWrapper>
          <AnggotaCard
            href={`/admin/tim/${tim_id}/danton`}
            image={danton?.foto ?? "/placeholder-profile-picture.jpg"}
            name={danton?.nama ?? "Belum diisi"}
            posisi={danton?.posisi ?? "DANTON"}
          />
          <AnggotaCard
            href={`/admin/tim/${tim_id}/official`}
            image={official?.foto ?? "/placeholder-profile-picture.jpg"}
            name={official?.nama ?? "Belum diisi"}
            posisi={official?.posisi ?? "OFFICIAL"}
          />
        </AnggotaCardsWrapper>
        {tim.tipe_tim === "NORMAL"
          ? rowsMapNormal.map((row, i) => (
              <AnggotaCardsWrapper key={i}>
                {row.map((pos, i) => {
                  const anggotaInPos = anggotas.find(
                    (value) => value.posisi === (pos.toUpperCase() as Posisi)
                  );

                  return (
                    <AnggotaCard
                      href={`/admin/tim/${tim_id}/${pos}`}
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
                    (value) => value.posisi === (pos.toUpperCase() as Posisi)
                  );

                  return (
                    <AnggotaCard
                      href={`/admin/tim/${tim_id}/${pos}`}
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
  return <TimLayout tim={tim} />;
}
