"use client";

import { H6, P } from "@/app/components/global/Text";
import "keen-slider/keen-slider.min.css";
import Image from "next/image";

interface GalleryItemProps {
  image: string;
  title: string;
  description: string;
}

const galleryItems: GalleryItemProps[] = [
  {
    image: "/image/galeri/image-1.jpg",
    title: "Serah Terima Piala",
    description: "Tim Angkasa 23 pada Antareja 2024",
  },
  {
    image: "/image/galeri/image-2.jpg",
    title: "Serah Terima Piala",
    description: "Tim Angkasa 23 pada Antareja 2024",
  },
  {
    image: "/image/galeri/image-3.jpg",
    title: "Serah Terima Piala",
    description: "Tim Angkasa 23 pada Antareja 2024",
  },
  {
    image: "/image/galeri/image-4.jpg",
    title: "Serah Terima Piala",
    description: "Tim Angkasa 23 pada Antareja 2024",
  },
  {
    image: "/image/galeri/image-5.jpg",
    title: "Serah Terima Piala",
    description: "Tim Angkasa 23 pada Antareja 2024",
  },
  {
    image: "/image/galeri/image-6.jpg",
    title: "Serah Terima Piala",
    description: "Tim Angkasa 23 pada Antareja 2024",
  },
  {
    image: "/image/galeri/image-7.jpg",
    title: "Serah Terima Piala",
    description: "Tim Angkasa 23 pada Antareja 2024",
  },
  {
    image: "/image/galeri/image-8.jpg",
    title: "Serah Terima Piala",
    description: "Tim Angkasa 23 pada Antareja 2024",
  },
  {
    image: "/image/galeri/image-9.jpg",
    title: "Serah Terima Piala",
    description: "Tim Angkasa 23 pada Antareja 2024",
  },
];

function GalleryItem({ item }: Readonly<{ item: GalleryItemProps }>) {
  return (
    <figure className="relative keen-slider__slide flex flex-col gap-7">
      <div className="relative rounded-xl w-full h-full overflow-hidden">
        <div className="absolute w-full h-full bg-gradient-to-t from-primary-700/80 to-transparent bottom-0 object-cover to-25%"></div>
        <Image
          src={item.image}
          alt={item.title}
          width={450}
          height={240}
          className="object-cover w-full h-full"
        />
      </div>
      <div className="h-[59px] flex flex-col gap-2">
        <H6>{item.title}</H6>
        <P className="text-neutral-200">{item.description}</P>
      </div>
    </figure>
  );
}

export default function Carousel() {
  return (
    <>
      {galleryItems.map((item) => (
        <GalleryItem item={item} key={item.title} />
      ))}
    </>
  );
}
