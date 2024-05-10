"use server";

import cloudinary from "@/lib/cloudinary";
import { UploadApiResponse } from "cloudinary";

export async function imageUploader(file: Buffer) {
  try {
    const upload: UploadApiResponse | undefined = await new Promise(
      (resolve, reject) => {
        cloudinary.uploader
          .upload_stream(
            { upload_preset: "antareja" },
            (error, uploadResult) => {
              if (error) reject(error);
              return resolve(uploadResult);
            }
          )
          .end(file);
      }
    );

    if (!upload) return { error: true, message: "Terjadi kesalahan" };

    let data = {
      format: upload.format,
      url: upload.secure_url,
    };

    return { error: false, message: "Upload sukses", data };
  } catch (e) {
    console.error(e);
    const error = e as Error;
    return {
      error: true,
      message: error.message.includes("not allowed")
        ? error.message
        : "Terjadi kesalahan",
    };
  }
}
