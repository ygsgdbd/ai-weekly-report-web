import Weekly from "@/app/Weekly";
import { Toaster } from "@/shadcn/components/ui/sonner";

export default function Home() {
  return (
    <main className={"container p-6"}>
      <Weekly />
      <Toaster />
    </main>
  );
}
