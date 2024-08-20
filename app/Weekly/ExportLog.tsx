"use client";

import { FileUpIcon } from "lucide-react";
import { IBM_Plex_Mono, Inter } from "next/font/google";

import { Button } from "@/shadcn/components/ui/button";
import { Textarea } from "@/shadcn/components/ui/textarea";
import { cn } from "@/shadcn/lib/utils";

const ibmPlexMono = IBM_Plex_Mono({ weight: ["400"] });

export default function ExportLog() {
  return (
    <div>
      <div className={"grid gap-2"}>
        <Textarea
          className={cn(ibmPlexMono.className)}
          readOnly
          value={"git log --pretty=format:%h,%an,%ae,%s > log.csv"}
        />
        <Button>复制</Button>
      </div>
    </div>
  );
}
