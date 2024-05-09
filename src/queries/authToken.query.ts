import prisma from "@/lib/prisma";

export async function findToken(userId: string) {
  const token = await prisma.authToken.findUnique({ where: { userId } });
  return token;
}
