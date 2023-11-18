"use client";

import { queryClient } from "@api/query-client";
import { QueryClientProvider } from "@tanstack/react-query";

export const TanstackProvider = ({ children }: any) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};
