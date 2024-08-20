"use client";

import { useNowQuery } from "@/app/api/ai";
import ExportLog from "@/app/Weekly/ExportLog";
import UploadLog from "@/app/Weekly/UploadLog";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/shadcn/components/ui/card";

export default function Weekly() {
  const nowQuery = useNowQuery();

  return (
    <Card>
      <CardHeader>
        <CardTitle>Git 日志生成周报</CardTitle>
      </CardHeader>
      <CardContent className={"grid gap-4 p-4"}>
        <ExportLog />
        <UploadLog />
      </CardContent>
    </Card>
  );
}
