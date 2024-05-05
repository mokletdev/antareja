import { findPenilaian } from "@/queries/penilaian.query";
import { Penilaian } from "@prisma/client";
import { notFound } from "next/navigation";
import { findTims } from "@/queries/tim.query";
import PenilaianForm from "./components/Form";

export default async function UserEdit({ params }: { params: { id: string } }) {
  let penilaian: Penilaian;

  if (params.id !== "new") {
    const trygetPenilaian = await findPenilaian({ id: params.id });

    if (trygetPenilaian) {
      penilaian = trygetPenilaian;
      const trygetTims = await findTims();
      return (
        <PenilaianForm
          data={penilaian}
          edit={true}
          id={params.id}
          tims={trygetTims}
        />
      );
    } else return notFound();
  } else {
    const trygetTims = await findTims({ penilaian: null });
    return <PenilaianForm tims={trygetTims} />;
  }
}
