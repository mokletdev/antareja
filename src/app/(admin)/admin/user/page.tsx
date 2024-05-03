import { findUsers } from "@/queries/user.query";
import { H1 } from "../components/global/Text";

export default async function User() {
  const users = await findUsers();

  return (
    <div>
      <H1>User</H1>
      <div className="flex flex-col gap-3">
        {users.map((user) => (
          <figure>{user.nama}</figure>
        ))}
      </div>
    </div>
  );
}
