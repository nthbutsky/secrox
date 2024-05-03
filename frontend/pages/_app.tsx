import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Inter as FontSans } from "next/font/google";
import { cn } from "@/lib/utils";

import { AppLayout } from "@/components/Layout";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AppLayout>
      <main
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <Component {...pageProps} />
      </main>
    </AppLayout>
  );
}
