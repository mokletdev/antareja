import { findTims } from "@/queries/tim.query";
import { H1 } from "../components/global/Text";
import TimTable from "./components/Table";

export default async function User() {
  const tims = await findTims();

  return (
    <div>
      <H1>Tim</H1>
      <div className="flex flex-col gap-3">
        <TimTable data={tims} />
      </div>
    </div>
  );
}
