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
        <PrimaryLinkButton
          type="button"
          href="/admin/user/new"
          className="px-5 py-3 bg-red-500 hover:bg-red-300 transition-all duration-300 rounded-full text-white"
        >
          New
        </PrimaryLinkButton>
      </div>
      <div className="flex flex-col gap-3">
        <UserTable data={users} />
      </div>
    </div>
  );
}
