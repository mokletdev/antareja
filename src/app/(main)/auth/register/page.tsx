import { H1, H3, H4, P } from "@/app/components/global/Text";
import TextField from "@/app/components/global/Input";
import SubmitButton from "@/app/components/global/SubmitButton";
import Image from "next/image";

export default function Login() {
  return (
    <form className="flex justify-between my-[54px] mx-[108px]">
      <div className="max-w-[635px] text-wrap flex flex-col gap-6 justify-center relative">
        <Image
          src={"/image/kategorilogo.png"}
          width={659}
          height={662}
          alt={"logo"}
          className="absolute -z-[9999] -left-[375px]"
        />
        <div className="bg-primary-500 w-[76.15px] h-[71.31px] flex flex-col justify-center items-center rounded-xl">
          <Image src={"/logomin.svg"} width={55} height={57} alt="logo" />
        </div>
        <H1>
          Buktikan Kemampuanmu
          <span className="text-primary-500">
            {" "}
            Bersama Aksi Telkom Barisan Jawara
          </span>
        </H1>
        <P>Sudah siap menjadi pemenang Antareja?</P>
      </div>
      <div className="bg-white w-[458px]  rounded-[24px] ">
        <div className="p-[30px] flex flex-col gap-[30px]">
          <div className="w-[65px] h-[32px] bg-primary-300 flex justify-center items-center py-1 px-2 rounded-2xl">
            <P className="rounded-[16px] text-primary-500">Daftar</P>
          </div>
          <div className="flex flex-col gap-3 max-w-[325px] text-wrap">
            <H3>Selamat Datang!</H3>
            <P>Yuk buat akun sebelum bergabung menjadi bagian dari Antareja!</P>
          </div>
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <P className="font-bold text-black">Email</P>
              <TextField
                id="Email"
                placeholder="Email"
                name="email"
                type="email"
                required
              />
            </div>
            <div className="flex flex-col gap-2">
              <P className="font-bold text-black">Password</P>
              <TextField
                id="Password"
                placeholder="Password"
                name="password"
                type="password"
                required
              />
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <SubmitButton
              text={"Daftar"}
              className="w-[398px] h-[60px] bg-primary-500 rounded-[14px]"
            />
            <SubmitButton
              text={"Masuk dengan Google"}
              className="w-[398px] h-[60px] bg-primary-300 rounded-[14px] text-primary-500"
            />
            <div className="w-full flex justify-center items-center">
              <P>
                Sudah Punya Akun?
                <span className="text-primary-500 font-bold"> Login</span>
              </P>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}
