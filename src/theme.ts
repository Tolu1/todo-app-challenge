import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";

const config = defineConfig({
  theme: {
    tokens: {
      colors: {
        brand: {
          aqua: { value: "#75C5C1" },
          aquaLight: { value: "#E9F5F7" },
          indigo: { value: "#41245F" },
          indigoMid: { value: "#CFB7E8" },
          indigoLight: { value: "#F9F3FF" },
          orange: { value: "#F6BE38" },
          orangeLight: { value: "#FBF4E4" },
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
          muted: { value: "#464B50" },
        },
      },
    },
  },
});

export default createSystem(defaultConfig, config);
