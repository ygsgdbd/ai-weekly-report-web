"use client";

import { useNowQuery } from "@/app/api/ai";
import ExportLog from "@/app/Weekly/ExportLog";
import UploadLog from "@/app/Weekly/UploadLog";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/shadcn/components/ui/card";

export default function Weekly() {
  const nowQuery = useNowQuery();

  return (
    <div className={"grid gap-4"}>
      <Card>
        <CardHeader>
          <CardTitle>导出 Git 日志 CSV 文件</CardTitle>
          <CardDescription>
            项目根目录下运行命令导出
            <span className={"text-red-500"}>本周</span>
            周报
          </CardDescription>
        </CardHeader>
        <CardContent className={"grid gap-4"}>
          <ExportLog />
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Git 日志生成周报</CardTitle>
          <CardDescription>上传 CSV 日志文件并点击生成按钮</CardDescription>
        </CardHeader>
        <CardContent className={"grid gap-4"}>
          <UploadLog />
        </CardContent>
      </Card>
    </div>
  );
}
