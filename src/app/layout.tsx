import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Montserrat } from "next/font/google";
import "./globals.css";
import { Provider } from "@/components/ui/provider";
import { Header } from "@/components/header";
import { Flex } from "@chakra-ui/react";

const jakartaSans = Plus_Jakarta_Sans({
  variable: "--font-jakarta-sans",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Todo App",
  description: "A todo app built with Next.js and Chakra UI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${jakartaSans.className} ${montserrat.variable}`}>
        <Provider>
          <Flex direction="column" minH="100vh">
            <Header />
            <Flex direction="column" minH="calc(100vh - 90px)">
              {children}
            </Flex>
          </Flex>
        </Provider>
      </body>
    </html>
  );
}
