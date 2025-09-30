"use client";

import React from "react";
import { Flex } from "@chakra-ui/react";
import { Sidebar } from "@/components/sidebar";
import { Header } from "@/components/header";

export const AppLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Flex h="100vh" bg="bg">
      <Sidebar />
      <Flex flex="1" direction="column">
        <Header />
        <Flex flex="1" direction="column" overflowY="auto">
          {children}
        </Flex>
      </Flex>
    </Flex>
  );
};
