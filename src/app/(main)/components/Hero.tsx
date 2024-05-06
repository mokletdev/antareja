import Image from "next/image";

export default function Hero() {
  return (
    <section
      className="relative w-full h-[690px] overflow-hidden mb-[336px] flex flex-col justify-center"
      id="hero"
    >
      <div className="absolute bg-gradient-to-tr from-primary-500/60 to-transparent to-50% w-full h-full"></div>
      <div className="absolute bg-gradient-to-tl from-primary-500/60 to-transparent to-50% w-full h-full"></div>
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
        className="absolute object-cover w-full -mt-[300px] -z-[99999]"
      />
    </section>
  );
}
