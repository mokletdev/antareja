import { MouseEventHandler } from "react";
import { LeftArrow, RightArrow } from "./Icons";

interface props {
  onClick?: MouseEventHandler<HTMLButtonElement>;
  right?: boolean;
}

export default function GalleryNav({ onClick, right }: Readonly<props>) {
  return (
    <button
      className="bg-primary-500 px-[21px] py-[18px] rounded-2xl"
      onClick={onClick}
      type="button"
    >
      {right ? <RightArrow /> : <LeftArrow />}
    </button>
  );
}
