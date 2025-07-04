import "@/styles/globals.css";
import "@mantine/core/styles.css";
import { createTheme, MantineProvider } from "@mantine/core";
import type { AppProps } from "next/app";
import { useEffect } from "react";

const theme = createTheme({
  colors: {
    deepBlue: [
      "#eef3ff",
      "#dce4f5",
      "#b9c7e2",
      "#94a8d0",
      "#748dc1",
      "#5f7cb8",
      "#5474b4",
      "#44639f",
      "#39588f",
      "#2d4b81",
    ],
  },
  shadows: {
    md: "1px 1px 3px rgba(0, 0, 0, .25)",
    xl: "5px 5px 3px rgba(0, 0, 0, .25)",
  },

  headings: {
    fontFamily: "Roboto, sans-serif",
  },
});

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    async function prepare() {
      if (typeof window === "undefined") {
        return;
      }
      const { worker } = await import("../mocks/browser");
      worker.start();
    }
    prepare();
  }, []);

  return (
    <MantineProvider theme={theme}>
      <Component {...pageProps} />
    </MantineProvider>
  );
}
