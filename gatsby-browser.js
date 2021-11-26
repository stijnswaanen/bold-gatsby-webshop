import { QueryClient, QueryClientProvider } from "react-query";
import React from "react";

export const wrapPageElement = ({ element, props }) => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>{element}</QueryClientProvider>
  );
};
