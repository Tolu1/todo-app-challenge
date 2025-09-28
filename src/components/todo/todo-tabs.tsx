"use client";

import React, { useState } from "react";
import {
  Tabs,
  HStack,
  Center,
  Text as ChakraText,
  type TextProps,
} from "@chakra-ui/react";
import { TaskSquare, Status, TickCircle } from "iconsax-reactjs";

export function TodoTabs() {
  const [activeTab, setActiveTab] = useState("todo");

  function getIndicatorColor(tab: string) {
    switch (tab) {
      case "todo":
        return "brand.indigoMid";
      case "in-progress":
        return "brand.orange";
      case "complete":
        return "brand.aqua";
      default:
        return "transparent";
    }
  }

  return (
    <Tabs.Root
      defaultValue="todo"
      variant="plain"
      onValueChange={(details) => setActiveTab(details.value)}
    >
      <Tabs.List w="full" bg="bg.secondary" rounded="6px" p="10px" gap="10px">
        <Tabs.Trigger value="todo">
          <HStack
            h="40px"
            p="4px"
            pl="10px"
            justify="space-between"
            rounded="6px"
            gap="44px"
            bg={activeTab === "todo" ? "transparent" : "bg"}
          >
            <HStack gap="10px">
              <TaskSquare
                size="24"
                color={activeTab === "todo" ? "#FFFFFF" : "#CFB7E8"}
                variant="Bold"
              />
              <TabTitle color={activeTab === "todo" ? "white" : "fg.muted"}>
                To Do
              </TabTitle>
            </HStack>
            <Center w="47px" h="32px" rounded="6px" bg="brand.indigoLight">
              <TabCount>(20)</TabCount>
            </Center>
          </HStack>
        </Tabs.Trigger>
        <Tabs.Trigger value="in-progress">
          <HStack
            h="40px"
            p="4px"
            pl="10px"
            justify="space-between"
            rounded="6px"
            gap="44px"
            bg={activeTab === "in-progress" ? "transparent" : "bg"}
          >
            <HStack gap="10px">
              <Status
                size="24"
                color={activeTab === "in-progress" ? "#FFFFFF" : "#F6BE38"}
                variant="Bold"
              />
              <TabTitle
                color={activeTab === "in-progress" ? "white" : "fg.muted"}
              >
                In Progress
              </TabTitle>
            </HStack>
            <Center w="47px" h="32px" rounded="6px" bg="brand.orangeLight">
              <TabCount>(23)</TabCount>
            </Center>
          </HStack>
        </Tabs.Trigger>
        <Tabs.Trigger value="complete">
          <HStack
            h="40px"
            p="4px"
            pl="10px"
            justify="space-between"
            rounded="6px"
            gap="44px"
            bg={activeTab === "complete" ? "transparent" : "bg"}
          >
            <HStack gap="10px">
              <TickCircle
                size="24"
                color={activeTab === "complete" ? "#FFFFFF" : "#75C5C1"}
                variant="Bold"
              />
              <TabTitle color={activeTab === "complete" ? "white" : "fg.muted"}>
                Complete
              </TabTitle>
            </HStack>
            <Center w="47px" h="32px" rounded="6px" bg="brand.aquaLight">
              <TabCount>(18)</TabCount>
            </Center>
          </HStack>
        </Tabs.Trigger>
        <Tabs.Indicator
          bg={getIndicatorColor(activeTab)}
          rounded="6px"
          boxShadow="none"
        />
      </Tabs.List>
      <Tabs.Content value="todo">todo</Tabs.Content>
      <Tabs.Content value="in-progress">in-progress</Tabs.Content>
      <Tabs.Content value="complete">complete</Tabs.Content>
    </Tabs.Root>
  );
}

function TabTitle({ children, ...props }: TextProps) {
  return (
    <ChakraText
      color="fg.muted"
      fontSize="14px"
      fontWeight="600"
      lineHeight="100%"
      letterSpacing="-0.28px"
      {...props}
    >
      {children}
    </ChakraText>
  );
}

function TabCount({ children, ...props }: TextProps) {
  return (
    <ChakraText
      color="fg.muted"
      fontSize="14px"
      fontWeight="500"
      lineHeight="100%"
      letterSpacing="-0.28px"
      {...props}
    >
      {children}
    </ChakraText>
  );
}
