import React from "react";
import { Flex, Stack, HStack, Separator, Spacer } from "@chakra-ui/react";
import TodoHeader from "@/components/todo/todo-header";
import TodoSearchbar from "@/components/todo/todo-searchbar";
import TodoViewToggle from "@/components/todo/todo-view-toggle";
import { TodoTabs } from "@/components/todo/todo-tabs";

export default function Page() {
  return (
    <Flex direction="column" pt="30px" pb="50px" px="50px" flex="1">
      <Stack flex="1" bg="bg" rounded="10px">
        <TodoHeader />
        <Separator borderColor="#CDD6E9" />
        <Stack flex="1" p="20px" gap="10px">
          <HStack p="10px" bg="brand.aquaLight" rounded="6px">
            <TodoSearchbar />
            <Spacer />
            <TodoViewToggle />
          </HStack>
          <TodoTabs />
        </Stack>
      </Stack>
    </Flex>
  );
}
