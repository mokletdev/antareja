import { Prisma } from "@prisma/client";
import prisma from "@/lib/prisma";

export async function createUser(data: Prisma.UserCreateInput) {
  const createdUser = await prisma.user.create({
    data,
  });
  return createdUser;
}

export async function findUsers(where?: Prisma.UserWhereInput) {
  const users = await prisma.user.findMany({ where });
  return users;
}

export async function findUser(where: Prisma.UserWhereUniqueInput) {
  const user = await prisma.user.findUnique({ where });
  return user;
}

export async function updateUser(
  where: Prisma.UserWhereUniqueInput,
  data: Prisma.UserUncheckedUpdateInput
) {
  const updatedUser = await prisma.user.update({ where, data });
  return updatedUser;
}

export async function deleteUser(where: Prisma.UserWhereUniqueInput) {
  const deletedUser = await prisma.user.delete({ where });
  return deletedUser;
}
