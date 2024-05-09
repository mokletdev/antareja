import { PrismaClient } from "@prisma/client";

declare global {
  var prisma: PrismaClient;

  namespace NodeJS {
    interface ProcessEnv {
      NEXTAUTH_URL: string;
      CLOUDINARY_URL: string;
      DATABASE_URL: string;
      GOOGLE_CLIENT_ID: string;
      GOOGLE_CLIENT_SECRET: string;
      GOOGLE_REDIRECT_URI: string;
      GOOGLE_REFRESH_TOKEN: string;
    }
  }
}
