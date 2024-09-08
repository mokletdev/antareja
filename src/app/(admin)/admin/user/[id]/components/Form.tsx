"use client";

import { User } from "@prisma/client";
import TextField from "@/app/components/global/Input";
import SubmitButton from "@/app/components/global/SubmitButton";
import Select from "react-select";
import { toast } from "sonner";
import { createUserForm, updateUserForm } from "@/actions/User";
import { redirect } from "next/navigation";

export default function UserForm({
  data,
  edit,
  id,
}: {
  data?: User;
  edit?: boolean;
  id?: string;
}) {
  const options = [
    { label: "USER", value: "USER" },
    { label: "ADMIN", value: "ADMIN" },
  ];

  const optionsVerified = [
    { label: "true", value: "true" },
    { label: "false", value: "false" },
  ];

  async function Create(data: FormData) {
    const toastId = toast.loading("Loading...");
    const result = await createUserForm(data);
    if (!result.success) {
      toast.error("Gagal menambahkan user!", { id: toastId });
    } else {
      toast.success("Berhasil menambahkan user!", { id: toastId });
      redirect("/admin/user");
    }
  }

  async function Update(data: FormData) {
    const toastId = toast.loading("Loading...");
    const result = await updateUserForm(data, id!);
    if (!result.success) {
      toast.error("Gagal mengedit user!", { id: toastId });
    } else {
      toast.success("Berhasil mengedit user!", { id: toastId });
      redirect("/admin/user");
    }
  }

  return (
    <form action={edit ? Update : Create}>
      <div className="flex flex-col gap-5">
        <TextField
          id="nama"
          type="text"
          label="Nama"
          name="nama"
          placeholder="Nama"
          value={data?.nama}
          required={edit ? false : true}
        />
        <TextField
          id="email"
          type="email"
          label="Email"
          name="email"
          placeholder="Email"
          value={data?.email}
          required={edit ? false : true}
        />
        <TextField
          id="password"
          type="password"
          label="Password"
          name="password"
          placeholder="Password"
          required={edit ? false : true}
        />
        <div className="flex flex-col gap-2">
          <label htmlFor={"role"} className="text-[16px]">
            Role
          </label>
          <Select
            name="role"
            unstyled
            defaultValue={{
              label: data?.role.toString(),
              value: data?.role.toString(),
            }}
            options={options}
            id="role"
            placeholder="Role"
            classNames={{
              control: () =>
                "rounded-[14px] border focus:bg-[#F1F6F9] border-neutral-400 px-[18px] active:border-black hover:border-black py-[14px] text-black placeholder-neutral-500 bg-white focus:outline-none transition-all duration-500 placeholder:text-[#C8C8C8]",
              menu: () =>
                "bg-white rounded-lg px-[18px] py-[14px] border border-neutral-400",
              multiValue: () =>
                "bg-primary-400 px-4 py-2 text-white rounded-2xl",
              valueContainer: () => "flex gap-2",
              menuList: () => "text-base flex flex-col gap-1",
              option: () =>
                "hover:bg-neutral-300 hover:cursor-pointer transition-all duration-500 rounded-lg p-2",
              input: () => "focus:bg-[#F1F6F9]",
            }}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor={"verified"} className="text-[16px]">
            Verified
          </label>
          <Select
            name="verified"
            unstyled
            defaultValue={{
              label: data?.verified.toString(),
              value: data?.verified.toString(),
            }}
            options={optionsVerified}
            id="verified"
            placeholder="Verified"
            classNames={{
              control: () =>
                "rounded-[14px] border focus:bg-[#F1F6F9] border-neutral-400 px-[18px] active:border-black hover:border-black py-[14px] text-black placeholder-neutral-500 bg-white focus:outline-none transition-all duration-500 placeholder:text-[#C8C8C8]",
              menu: () =>
                "bg-white rounded-lg px-[18px] py-[14px] border border-neutral-400",
              multiValue: () =>
                "bg-primary-400 px-4 py-2 text-white rounded-2xl",
              valueContainer: () => "flex gap-2",
              menuList: () => "text-base flex flex-col gap-1",
              option: () =>
                "hover:bg-neutral-300 hover:cursor-pointer transition-all duration-500 rounded-lg p-2",
              input: () => "focus:bg-[#F1F6F9]",
            }}
          />
        </div>
      </div>
      <div className="w-full flex justify-end mt-3">
        <SubmitButton text="Create" />
      </div>
    </form>
  );
}
