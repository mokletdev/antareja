import { findUsers } from "@/queries/user.query";
import { PrimaryLinkButton } from "../components/global/LinkButton";
import { H1 } from "../components/global/Text";
import UserTable from "./components/Table";

export default async function Users() {
  const users = await findUsers();

  return (
    <div>
      <div className="flex items-center justify-between">
        <H1>User</H1>
        <PrimaryLinkButton type="button" href="/admin/user/new">
          New
        </PrimaryLinkButton>
      </div>
      <div className="flex flex-col gap-3">
        <UserTable data={users} />
      </div>
    </div>
  );
}
