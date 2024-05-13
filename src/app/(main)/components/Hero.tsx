import { RightArrow } from "@/app/components/global/Icons";
import { SecondaryLinkButton } from "@/app/components/global/LinkButton";
import { H1, H3, LargeP, P } from "@/app/components/global/Text";
import Image from "next/image";

import dynamic from "next/dynamic";

const Countdown = dynamic(() => import("./parts/Countdown"), { ssr: false });

export default function Hero() {
  return (
    <section
      className="relative w-full md:h-screen h-[175vw] mb-[550px] md:mb-[450px] xl:mb-[336px] flex flex-col justify-center"
      id="hero"
    >
      <div className="absolute bg-gradient-to-tr from-primary-700 to-transparent to-50% w-full h-full"></div>
      <div className="absolute bg-gradient-to-tl from-primary-700 to-transparent to-50% w-full h-full"></div>
      <Image
        src={"/image/herologo.png"}
        width={660}
        height={663}
        alt={"logo"}
        className="absolute -z-[999] -top-[250px] -left-[350px]"
      />
      <Image
        src={"/image/kategorilogo.png"}
        width={660}
        height={663}
        alt={"logo"}
        className="absolute -z-[999] bottom-0 -right-[315px] opacity-40"
      />
      <Image
        src={"/image/paskihero.jpg"}
        alt="paski"
        width={1510}
        height={689}
        className="absolute object-cover w-full h-full -z-[99999]"
      />
      <Countdown />
      <figure className="flex absolute w-screen px-[28px] md:px-[50px] items-center -bottom-[300px] sm:-bottom-[400px] md:-bottom-[425px] xl:-bottom-[200px] justify-center flex-col xl:flex-row">
        <div
          className="bg-white rounded-[30px] z-[99] w-full py-[40px] md:py-[50px] px-[26px] md:px-[88px]"
          id="antareja"
        >
          <div className="w-full flex gap-[68px] sm:gap-[136px] xl:gap-[95px] items-start xl:items-center xl:justify-between flex-col xl:flex-row">
            <div className="flex gap-6 max-h-[100px] flex-col xl:flex-row">
              <div className="flex items-center justify-center py-[20px] p-[15px] sm:p-6 bg-primary-500 drop-shadow-glow rounded-[8.5px] sm:rounded-2xl max-w-[71px] max-h-[71px] sm:max-h-full sm:max-w-[100px]">
                <Image
                  src={"/logomin.svg"}
                  width={55}
                  height={57}
                  alt="logo"
                  className="w-[30px] h-[30px] sm:w-[62px] sm:h-[55px]"
                />
              </div>
              <div className="flex flex-col gap-2">
                <P className="text-[#858585]">kenalan dulu yuk</P>
                <span className="flex flex-col">
                  <H3 className="font-bold text-black">
                    Apa sih makna <br />
                    <span className="text-primary-500">Antareja Itu?</span>
                  </H3>
                </span>
              </div>
            </div>
            <P className="font-normal sm:font-semibold text-wrap max-w-full xl:max-w-[635px] text-neutral-200">
              Antareja merupakan tokoh pewayangan yang memiliki sifat rela
              berkorban dan memiliki rasa percaya yang besar. <br />
              <br /> Sedangkan Jaware mamiliki makna sang juara yang dipandang
              hebat. Inti dibalik semua usnur Antareja adalah barisan yang
              beraksi dengan penuh semangat dan percaya bahwa menjadi sang
              pemenang yang dipadang hebat.
            </P>
          </div>
        </div>
      </figure>
      <div className="flex items-center justify-between px-6 lg:px-[118px] absolute bottom-[150px] md:bottom-[117px] w-full">
        <div className="block max-w-[644px] w-full">
          <H1 className="text-white mb-3">
            AKSI TELKOM
            <br />
            BARISAN <span className="italic">JAWARA</span>
          </H1>
          <SecondaryLinkButton
            href="/auth/register"
            target="_blank"
            className="group inline-flex py-[12px] px-[20px] justify-center items-center"
          >
            <span className="flex gap-2 text-sm font-bold">
              Daftar Sekarang
              <RightArrow className="group-hover:translate-x-2 transition-all duration-300" />
            </span>
          </SecondaryLinkButton>
        </div>
        <div className="hidden lg:block max-w-[557px] text-right text-white">
          <P className="px-2 py-1 rounded-full bg-white/40 font-bold mb-7 inline-flex text-white">
            Antareja 2024
          </P>
          <LargeP className="font-semibold">
            Selamat datang di website official lomba keterampilan baris berbaris
            dari paskibra SMK Telkom Malang
          </LargeP>
        </div>
      </div>
    </section>
  );
}
