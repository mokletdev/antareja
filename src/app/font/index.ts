import localFont from "next/font/local";

const basierFont = localFont({
  src: [
    {
      path: "./BasierCircle-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./BasierCircle-Italic.woff2",
      weight: "400",
      style: "italic",
    },
    {
      path: "./BasierCircle-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "./BasierCircle-MediumItalic.woff2",
      weight: "500",
      style: "italic",
    },
    {
      path: "./BasierCircle-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "./BasierCircle-SemiBoldItalic.woff2",
      weight: "600",
      style: "italic",
    },
    {
      path: "./BasierCircle-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "./BasierCircle-BoldItalic.woff2",
      weight: "700",
      style: "italic",
    },
  ],
});

export default basierFont;
