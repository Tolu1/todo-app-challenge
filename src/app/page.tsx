import React from "react";
import { Flex, Stack, HStack, Separator, Spacer } from "@chakra-ui/react";
import TodoHeader from "@/components/todo/todo-header";
import TodoSearchbar from "@/components/todo/todo-searchbar";
import TodoViewToggle from "@/components/todo/todo-view-toggle";

export default function Page() {
  return (
    <Flex direction="column" p="30px 50px" bg="bg.secondary" h="full">
      <Stack bg="bg" borderRadius="10px">
        <TodoHeader />
        <Separator borderColor="#CDD6E9" />
        <Stack p="20px" gap="10px">
          <HStack p="10px" bg="brand.aquaLight" borderRadius="6px">
            <TodoSearchbar />
            <Spacer />
            <TodoViewToggle />
          </HStack>
          Todo App
        </Stack>
      </Stack>
    </Flex>
  );
}
