import { FileUpIcon } from "lucide-react";

export default function UploadLog() {
  return (
    <div>
      <label className={"grid cursor-pointer gap-2 border border-dotted"}>
        <FileUpIcon />
        <input accept={"text/csv"} className={"file:hidden"} type={"file"} />
      </label>
    </div>
  );
}
