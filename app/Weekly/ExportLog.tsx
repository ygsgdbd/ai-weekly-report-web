"use client";

import { FileUpIcon } from "lucide-react";
import moment from "moment";
import { IBM_Plex_Mono, Inter } from "next/font/google";
import { useCallback, useMemo, useState } from "react";
import { useCopyToClipboard, useStartTyping } from "react-use";
import { toast } from "sonner";

import { Button } from "@/shadcn/components/ui/button";
import { Textarea } from "@/shadcn/components/ui/textarea";
import { cn } from "@/shadcn/lib/utils";

const ibmPlexMono = IBM_Plex_Mono({ weight: ["400"], subsets: ["latin"] });

export default function ExportLog() {
  const [, copy] = useCopyToClipboard();

  const command = useMemo(() => {
    const today = moment().format("YYYY-MM-DD");
    const firstDayOfWeekWithTime = moment()
      .startOf("week")
      .format("YYYY-MM-DD");
    return `git log --since="${firstDayOfWeekWithTime}" --until="${today}" --pretty=format:"%h,%an,%ae,%ad,%s,%b" --date=iso > log.csv`;
  }, []);

  return (
    <div className={"grid gap-2"}>
      <Textarea
        className={cn(ibmPlexMono.className)}
        readOnly
        value={command}
      />
      <Button
        onClick={() => {
          copy(command);
          toast.success("命令复制成功");
        }}
      >
        复制
      </Button>
    </div>
  );
}
