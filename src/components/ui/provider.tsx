"use client";

import {
  ChakraProvider,
  type ChakraProviderProps,
  defaultSystem,
} from "@chakra-ui/react";

type ProviderProps = Omit<ChakraProviderProps, "value">;

export function Provider({ children, ...props }: ProviderProps) {
  return (
    <ChakraProvider {...props} value={defaultSystem}>
      {children}
    </ChakraProvider>
  );
}
