import { Fira_Code as FontMono, Inter as FontSans } from "next/font/google";
import localFont from "next/font/local";

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const fontMono = FontMono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const fontYekan = localFont({
  src: [
    { path: "./../public/font/reg.woff2", weight: "300" },
    { path: "./../public/font/med.woff", weight: "400" },
    { path: "./../public/font/bold.woff2", weight: "500" },
    { path: "./../public/font/exbold.woff", weight: "600" },
  ],
});
