import { Role } from "@prisma/client";

export interface ProtectedRoutes {
  title: string;
  path: string;
  roles: Role;
}

export const protectedRoutes: ProtectedRoutes[] = [
  {
    title: "Dashboard",
    path: "/admin",
    roles: "ADMIN",
  },
  {
    title: "User",
    path: "/admin/user",
    roles: "ADMIN",
  },
  {
    title: "Tim",
    path: "/admin/tim",
    roles: "ADMIN",
  },
  {
    title: "Penilaian",
    path: "/admin/penilaian",
    roles: "ADMIN",
  },
];
