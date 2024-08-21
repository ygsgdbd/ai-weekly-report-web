import { FileUpIcon, RefreshCcwIcon, RefrigeratorIcon } from "lucide-react";
import { useState } from "react";
import { useCopyToClipboard, useLocalStorage } from "react-use";
import { toast } from "sonner";

import { useOpenAIBatchMutation } from "@/app/api/ai";
import { Button } from "@/shadcn/components/ui/button";
import { Label } from "@/shadcn/components/ui/label";
import { Textarea } from "@/shadcn/components/ui/textarea";
import { cn } from "@/shadcn/lib/utils";

export default function UploadLog() {
  const [logFile, setLogFile] = useState<File>();
  const mutation = useOpenAIBatchMutation();
  const [systemMsg, setSystemMsg] = useLocalStorage<string>(
    "x-system-msg",
    `这是一个虚拟币交易所 Web 项目，基于 React 构建，请根据本周的 Git 提交日志生成一份简短的周报。周报应按以下顺序包括内容：：
1. 主要完成的工作和功能更新；
2. 修复的 Bug 及其相关背景；
3. 进行的优化或改进。

请确保周报内容控制在 10 条以内的普通文本，按上述顺序排列。如果内容过多，请缩减优化文案；
请直接按序列号输出文本，不要使用 Markdown 格式，行与行之间不要空行，也不要显示提交哈希和日期。`,
  );
  const [result, setResult] = useState<string>();
  const [, copy] = useCopyToClipboard();

  return (
    <div className={"grid gap-4"}>
      <div className={"grid gap-2"}>
        <Label>AI 提示词</Label>
        <Textarea
          className={"min-h-32"}
          disabled={mutation.isLoading}
          onChange={(e) => setSystemMsg(e.target.value)}
          value={systemMsg}
        />
        {/* 等待文件上传 */}
        <label
          className={
            "flex cursor-pointer gap-2 rounded-md border border-input p-3"
          }
        >
          <FileUpIcon />
          <input
            accept={"text/csv"}
            className={"file:hidden"}
            onChange={(e) => {
              setLogFile(e.target.files?.[0]);
            }}
            type={"file"}
          />
        </label>
      </div>
      {logFile && (
        <>
          <Button
            className={"flex gap-2"}
            disabled={mutation.isLoading}
            onClick={async () => {
              const logText = await logFile?.text();
              if (!logText) return;
              mutation.mutate(
                {
                  inputs: [`${systemMsg}\r\n ${logText}`],
                  openAI: {},
                },
                {
                  onSuccess(data) {
                    setResult(data.data.data);
                  },
                },
              );
            }}
          >
            {mutation.isLoading && (
              <RefreshCcwIcon className={cn("size-4 animate-spin")} />
            )}
            提交
          </Button>
          {result && (
            <>
              <Textarea className={"min-h-32"} value={result} />
              <Button
                onClick={() => {
                  copy(result);
                  toast.success("周报复制成功");
                }}
              >
                复制结果
              </Button>
            </>
          )}
        </>
      )}
    </div>
  );
}
