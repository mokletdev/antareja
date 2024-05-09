import { findUser } from "@/queries/user.query";
import { User } from "@prisma/client";
import { notFound } from "next/navigation";
import UserForm from "./components/Form";

export default async function UserEdit({ params }: { params: { id: string } }) {
  let user: User = {
    id: "",
    email: "",
    nama: "",
    password: "",
    role: "USER",
    token: "",
    verified: false,
  };

  if (params.id !== "new") {
    const trygetUser = await findUser({ id: params.id });

    if (trygetUser) {
      user = trygetUser;
      return <UserForm data={user} edit={true} id={params.id} />;
    } else return notFound();
  } else {
    return <UserForm />;
  }
}
