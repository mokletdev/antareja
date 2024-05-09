import { PrismaClient } from "@prisma/client";

declare global {
  var prisma: PrismaClient;

  namespace NodeJS {
    interface ProcessEnv {
      NEXTAUTH_URL: string;
      CLOUDINARY_URL: string;
      DATABASE_URL: string;
      GOOGLE_APP_PASSWORD: string;
      GOOGLE_EMAIL: string;
    }
  }
}
