import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  fonts: {
    body: "Poppins",
    heading: "Poppins",
  },
  styles: {
    global: {
      body: {
        bg: "gray.50",
        color: "#47585B",
      },
    },
  },
});
