import prisma from "@/lib/prisma";

export async function getPengumumans() {
  const pengumumans = await prisma.pengumuman.findMany({
    orderBy: { createdAt: "desc" },
  });
  return pengumumans;
}
