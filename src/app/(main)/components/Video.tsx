import { H3, P, SmallP } from "@/app/components/global/Text";
import SectionWrapper from "@/app/components/global/Wrapper";
import PendaftaranCard from "./parts/PendaftaranCard";
import Image from "next/image";
import { PrimaryLinkButton } from "@/app/components/global/LinkButton";
import { FaDownload } from "react-icons/fa";

const cards = [
  { number: "2", step: "Pilih Kategori", detail: "Pilih kategori tim anda" },
  { number: "3", step: "Isi Profile Tim", detail: "Isi administrasi Tim" },
  { number: "4", step: "Bukti Pembayaran", detail: "Unggah bukti" },
  { number: "5", step: "Kirim", detail: "Pendaftaran berhasil!" },
  {
    number: "6",
    step: "Selesai",
    detail: "Tunggu pengumuman selanjutnya di dashboard!",
  },
];

export default function Video() {
  return (
    <SectionWrapper id="video">
      <div className="w-full relative flex gap-20 items-center md:items-end justify-center xl:justify-between xl:flex-row flex-col">
        <Image
          src={"/image/kategorilogo.png"}
          width={660}
          height={663}
          alt={"logo"}
          className="absolute -z-[9999] -top-[350px] -left-[315px]"
        />
        <div className="xl:hidden flex flex-col items-end">
          <div className="w-full sm:w-[530px] text-end flex flex-col gap-3 mb-3">
            <H3 className="text-[#272727] font-bold">
              Alur Pendaftaran{" "}
              <span className="text-primary-500">Antareja</span>
            </H3>
            <P className="text-wrap">
              Terdapat beberapa step pendaftaran yang harus dipenuhi agar semua
              rangkaian pendaftaran hingga seleksi berjalan dengan lancar.
            </P>
          </div>
          <PrimaryLinkButton
            href="https://drive.google.com/file/d/1JdewtpA0-Tcye436lVckEu5lY940Yy13/view?usp=sharing"
            className="inline-flex gap-2 items-center mb-[40px]"
          >
            Unduh buku panduan <FaDownload />
          </PrimaryLinkButton>
          <iframe
            src="https://www.youtube.com/embed/MGh3e1AQRK0?si=YTTEeWeJ4qVEQ3em"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            className="object-cover rounded-[20px] sm:w-[500px] h-[250px] sm:h-[276px] w-full"
          />
        </div>
        <div className="max-w-full xl:max-w-[738px] flex flex-wrap gap-6 gap-y-6 xl:gap-y0 md:gap-9 mt-[10px] justify-center sm:justify-center md:justify-center items-center xl:justify-normal">
          <figure className="rounded-[15px] sm:rounded-3xl p-[19px] sm:p-[30px] bg-primary-500 h-[124px] sm:h-[181px] w-[140px] sm:w-[222px] drop-shadow-glow">
            <div className="flex flex-col gap-[15px] sm:gap-6">
              <div className="sm:w-12 sm:h-12 w-8 h-8 rounded-[10px] sm:rounded-2xl bg-white flex items-center justify-center">
                <P className="text-primary-500 font-bold">1</P>
              </div>
              <div className="flex flex-col gap-1 w-[180px]">
                <P className="text-white font-bold text-xs sm:text-base">
                  Daftar Akun
                </P>
                <SmallP className="text-white sm:text-sm text-[10px]">
                  Klik tombol daftar
                </SmallP>
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
        <div className="xl:flex hidden flex-col items-end">
          <div className="w-[530px] text-end flex flex-col gap-3 mb-3">
            <H3 className="text-[#272727] font-bold">
              Alur Pendaftaran{" "}
              <span className="text-primary-500">Antareja</span>
            </H3>
            <P className="text-wrap">
              Terdapat beberapa step pendaftaran yang harus dipenuhi agar semua
              rangkaian pendaftaran hingga seleksi berjalan dengan lancar.
            </P>
          </div>
          <PrimaryLinkButton
            href="https://drive.google.com/file/d/1JdewtpA0-Tcye436lVckEu5lY940Yy13/view?usp=sharing"
            className="inline-flex gap-2 items-center mb-[40px]"
          >
            Unduh buku panduan <FaDownload />
          </PrimaryLinkButton>
          <iframe
            width="500"
            height="276"
            src="https://www.youtube.com/embed/MGh3e1AQRK0?si=YTTEeWeJ4qVEQ3em"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            className="object-cover rounded-[20px] sm:w-[500px] h-[276px] w-full"
          />
        </div>
      </div>
    </SectionWrapper>
  );
}
