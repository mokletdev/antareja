"use client";

import { H2, H3, P } from "@/app/components/global/Text";
import SectionWrapper from "@/app/components/global/Wrapper";
import { TimWithRelations } from "@/types/entityRelations";
import { ReactNode, useState } from "react";
import { AnggotaCard } from "./parts/AnggotaCard";
import cn from "@/lib/clsx";
import { updateTimForm } from "@/actions/Tim";
import TextField from "@/app/components/global/Input";
import Field from "../components/parts/input";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import SubmitButton from "@/app/components/global/SubmitButton";
import { findPenilaian } from "@/queries/penilaian.query";

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

function AnggotaCardsWrapper({
  children,
  className,
}: Readonly<{ children: ReactNode; className?: string }>) {
  return (
    <div className={cn("flex items-center justify-center gap-16 ", className)}>
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
  const [cerdas_cermat1] = useState(
    tim.anggotas.find((value) => value.posisi === "CERDAS_CERMAT1")
  );
  const [cerdas_cermat2] = useState(
    tim.anggotas.find((value) => value.posisi === "CERDAS_CERMAT2")
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
      <div className="py-16 px-10 bg-neutral-300 rounded-lg flex flex-col gap-12">
        {tim.jenjang === "SMP" && (
          <div className="pb-10">
            <AnggotaCardsWrapper className="flex flex-wrap gap-10">
              <AnggotaCard
                href={`/dashboard/anggota/cerdas_cermat1`}
                image={
                  cerdas_cermat1?.foto ?? "/placeholder-profile-picture.jpg"
                }
                name={cerdas_cermat1?.nama ?? "Belum diisi"}
                posisi={"CERDAS CERMAT"}
                key={"CC1"}
              />
              <AnggotaCard
                href={`/dashboard/anggota/cerdas_cermat2`}
                image={
                  cerdas_cermat2?.foto ?? "/placeholder-profile-picture.jpg"
                }
                name={cerdas_cermat2?.nama ?? "Belum diisi"}
                posisi={"CERDAS CERMAT"}
                key={"CC2"}
              />
            </AnggotaCardsWrapper>
          </div>
        )}
        <AnggotaCardsWrapper className="flex flex-wrap gap-10">
          <AnggotaCard
            href={`/dashboard/anggota/danton`}
            image={danton?.foto ?? "/placeholder-profile-picture.jpg"}
            name={danton?.nama ?? "Belum diisi"}
            key={"danton"}
            posisi={danton?.posisi ?? "DANTON"}
          />
          <AnggotaCard
            href={`/dashboard/anggota/official`}
            image={official?.foto ?? "/placeholder-profile-picture.jpg"}
            name={official?.nama ?? "Belum diisi"}
            key={"official"}
            posisi={official?.posisi ?? "OFFICIAL"}
          />
          {tim.jenjang === "SMA" && (
            <AnggotaCard
              href={`/dashboard/mascot`}
              image={
                tim.foto_mascot && tim.foto_mascot !== ""
                  ? tim.foto_mascot
                  : "/placeholder-profile-picture.jpg"
              }
              name={tim.foto_mascot ? "Mascot " + tim.nama_tim : "Belum diisi"}
              posisi={"MASCOT"}
              key={"mascot"}
            />
          )}
        </AnggotaCardsWrapper>
        {tim.tipe_tim === "NORMAL"
          ? rowsMapNormal.map((row, i) => (
            <AnggotaCardsWrapper
              key={"n" + i}
              className="flex flex-wrap gap-10"
            >
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
            <AnggotaCardsWrapper
              key={"s" + i}
              className="flex flex-wrap gap-10"
            >
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

export default async function ProfileTim({
  tim,
}: Readonly<{ tim: TimWithRelations }>) {
  const router = useRouter();

  async function submitForm(formData: FormData) {
    const toastId = toast.loading(
      tim.link_berkas === "" ? "Membuat link..." : "Memperbarui link..."
    );
    const result = await updateTimForm(tim.id, formData);

    if ("message" in result) {
      if (result.success) {
        toast.success(result.message, { id: toastId });
        router.refresh();
      } else {
        toast.error(result.message, { id: toastId });
      }
    } else {
      toast.error("An error occurred", { id: toastId });
    }
  }

  const trygetPenilaian = await findPenilaian({ tim_id: tim.id });

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
          <H3>No.Telp Pelatih</H3>
          <P>{tim.no_pelatih}</P>
        </div>
        <div className="flex flex-col gap-1 mb-4">
          <H3>Terkonfirmasi (Pembayaran)</H3>
          <P
            className={`font-bold ${tim.confirmed ? "text-green-600" : "text-red-600"
              }`}
          >
            {tim.confirmed ? "Sudah" : "Belum"}
          </P>
        </div>
        {tim.confirmed ? (
          <form action={submitForm} className="mb-4">
            <H3 className="mb-4">Video Tiktok + Foto Pasukan</H3>
            <TextField
              id="link_video"
              name="link_video"
              placeholder="Masukkan link drive video tiktok + foto pasukan"
              type="url"
              className="w-full mb-4"
              value={tim.link_video ?? ""}
            />
            <H3 className="mb-4">Link Berkas</H3>
            <TextField
              id="link_berkas"
              name="link_berkas"
              placeholder="Masukkan link drive..."
              type="url"
              className="w-full"
              value={tim.link_berkas ?? ""}
            />
            <div className="w-full justify-end flex mt-4">
              <SubmitButton text={"Submit"} className="float-end mt-4" />
            </div>
          </form>
        ) : null}

        {trygetPenilaian?.published === true ? <><div className="flex flex-col gap-1 mb-4">
          <H3 className="pb-4">Hasil Penilaian</H3>
          <Field
            id="link_penilaian"
            type="url"
            label=""
            name="link_penilaian"
            placeholder="Link Hasil Penilaian"
            value={trygetPenilaian.detail_url}
            disabled={true}
          />
        </div>
          <div className="flex flex-col gap-1 mb-4">
            <H3 className="pb-4">Cacatan Juri</H3>
            <Field
              id="note"
              type="text"
              label=""
              name="note"
              placeholder="Cacatan Juri"
              value={trygetPenilaian.note}
              disabled={true}
            />
          </div></>
          : null}

        {tim.confirmed ? (
          <TimLayout tim={tim} />
        ) : (
          <SectionWrapper className="!pt-[100px] flex items-center justify-center">
            <H3 className="text-center">
              Silahkan untuk menunggu konfirmasi pembayaran dari admin
            </H3>
          </SectionWrapper>
        )}
      </div>
    </SectionWrapper>
  );
}
