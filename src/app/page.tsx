"use client";
import React from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { Flex, Stack, HStack, Separator, Spacer } from "@chakra-ui/react";
import TodoHeader from "@/components/todo/todo-header";
import TodoSearchbar from "@/components/todo/todo-searchbar";
import TodoViewToggle from "@/components/todo/todo-view-toggle";
import { TodoTableView } from "@/components/todo/todo-table-view";
import { TodoKanbanView } from "@/components/todo/todo-kanban-view";

export default function Page() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const view = (searchParams.get("view") as "table" | "kanban") || "table";

  const handleViewChange = (view: "table" | "kanban") => {
    router.push(`/?view=${view}`);
  };

  return (
    <Flex
      direction="column"
      pt="30px"
      pb="50px"
      px="50px"
      flex="1"
      bg="bg.secondary"
    >
      <Stack flex="1" bg="bg" rounded="10px">
        <TodoHeader />
        <Separator borderColor="#CDD6E9" />
        <Stack flex="1" p="20px" gap="10px">
          <HStack p="10px" bg="brand.aquaLight" rounded="6px">
            <TodoSearchbar />
            <Spacer />
            <TodoViewToggle view={view} onViewChange={handleViewChange} />
          </HStack>
          {view === "table" ? <TodoTableView /> : <TodoKanbanView />}
        </Stack>
      </Stack>
    </Flex>
  );
}
