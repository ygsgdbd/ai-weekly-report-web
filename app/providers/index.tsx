"use client";

import { ReactNode, useMemo } from "react";
import { QueryClient, QueryClientProvider } from "react-query";

export default function Providers({
  children,
}: Readonly<{ children: ReactNode }>) {
  const queryClient = useMemo(() => new QueryClient(), []);

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
