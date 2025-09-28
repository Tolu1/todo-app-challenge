"use client";

import { ChakraProvider, type ChakraProviderProps } from "@chakra-ui/react";
import theme from "@/theme";

type ProviderProps = Omit<ChakraProviderProps, "value">;

export function Provider({ children, ...props }: ProviderProps) {
  return (
    <ChakraProvider {...props} value={theme}>
      {children}
    </ChakraProvider>
  );
}
