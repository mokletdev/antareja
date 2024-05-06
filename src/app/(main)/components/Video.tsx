import { H3, P } from "@/app/components/global/Text";
import SectionWrapper from "@/app/components/global/Wrapper";
import PendaftaranCard from "./parts/PendaftaranCard";
import Image from "next/image";

const cards = [
  { number: "2", step: "Pilih Kategori", detail: "Pilih kategori tim anda" },
  { number: "3", step: "Isi Profile Tim", detail: "Isi administrasi Tim" },
  { number: "4", step: "Bukti Pembayaran", detail: "Unggah bukti" },
  { number: "5", step: "Kirim", detail: "Pendaftaran berhasil" },
];

export default function Video() {
  return (
    <SectionWrapper id="video">
      <div className="w-full relative flex gap-20">
        <Image
          src={"/image/kategorilogo.png"}
          width={660}
          height={663}
          alt={"logo"}
          className="absolute -z-[9999] -top-[350px] -left-[315px]"
        />
        <div className="flex flex-wrap gap-9 mt-[10px]">
          <figure className="rounded-3xl p-[30px] bg-primary-500 h-[181px] w-[222px]">
            <div className="flex flex-col gap-6">
              <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center">
                <P className="text-primary-500 font-bold">1</P>
              </div>
              <div className="flex flex-col gap-1">
                <P className="text-white font-bold">Daftar Akun</P>
                <P className="text-white text-sm">Klik tombol daftar diatas</P>
              </div>
            </div>
          </figure>
          {cards.map((card) => (
            <PendaftaranCard
              detail={card.detail}
              nomor={card.number}
              step={card.step}
              key={card.number}
            />
          ))}
        </div>
        <div className="flex flex-col items-end">
          <div className="w-[530px] text-end flex flex-col gap-3 mb-[40px]">
            <H3 className="text-[#272727] font-bold">
              Alur Pendaftaran{" "}
              <span className="text-primary-500">Antareja</span>
            </H3>
            <P className="text-wrap">
              Terdapat beberapa step pendaftaran yang harus dipenuhi agar semua
              rangkaian pendaftaran hingga seleksi berjalan dengan lancar.
            </P>
          </div>
          <iframe
            width="500"
            height="276"
            src="https://www.youtube.com/embed/Wocch2vTOd4?si=OaTXL4N8FDIoKABV"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            className="object-cover rounded-[20px]"
          />
        </div>
      </div>
    </SectionWrapper>
  );
}
