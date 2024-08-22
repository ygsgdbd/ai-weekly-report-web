import "./globals.css";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ReactNode } from "react";

import Initialization from "@/app/initialization";
import Providers from "@/app/providers";
import { cn } from "@/shadcn/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Git 日志 AI 生成周报",
  description: "Git 日志 AI 生成周报",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="zh">
      <body className={cn(inter.className)}>
        <Providers>
          <Initialization />
          {children}
        </Providers>
      </body>
    </html>
  );
}
