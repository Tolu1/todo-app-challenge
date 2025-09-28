import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";

const config = defineConfig({
  theme: {
    tokens: {
      colors: {
        brand: {
          aqua: { value: "#75C5C1" },
          aquaLight: { value: "#E9F5F7" },
          indigo: { value: "#41245F" },
          indigoLight: { value: "#F9F3FF" },
        },
      },
    },
    semanticTokens: {
      colors: {
        bg: {
          DEFAULT: { value: "{colors.white}" },
          secondary: { value: "#F7F7F7" },
        },
        fg: {
          DEFAULT: { value: "#1A1C1E" },
        },
      },
    },
  },
});

export default createSystem(defaultConfig, config);
