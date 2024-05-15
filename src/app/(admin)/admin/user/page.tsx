import { findUsers } from "@/queries/user.query";
import { PrimaryLinkButton } from "@/app/components/global/LinkButton";
import { H1 } from "@/app/components/global/Text";
import UserTable from "./components/Table";

export default async function Users() {
  const users = await findUsers();

  return (
    <div className="py-6">
      <div className="flex items-center justify-between">
        <H1>User</H1>
        <PrimaryLinkButton href="/admin/user/new">New</PrimaryLinkButton>
      </div>
      <div className="mt-4">
        <UserTable data={users} />
      </div>
    </div>
  );
}
