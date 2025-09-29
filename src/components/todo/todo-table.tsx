"use client";

import React from "react";
import {
  HStack,
  IconButton,
  Stack,
  Table,
  Text,
  Spacer,
} from "@chakra-ui/react";
import { Avatar } from "@/components/ui/avatar";
import { Flag, TaskSquare, Status, TickCircle } from "iconsax-reactjs";
import type { Todo } from "@/types/todo";
import {
  MenuRoot,
  MenuTrigger,
  MenuContent,
  MenuItem,
} from "@/components/ui/menu";

interface TodoTableProps {
  todos: Todo[];
  onUpdateTodo: (id: string, updates: Partial<Omit<Todo, "id">>) => void;
}

export function TodoTable({ todos, onUpdateTodo }: TodoTableProps) {
  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "Urgent":
        return "#FF515D";
      case "Important":
        return "#F6BE38";
      case "Medium":
        return "#75C5C1";
      default:
        return "#75C5C1";
    }
  };

  return (
    <Stack flex="1" border="1px solid #CDD6E9" rounded="10px" overflow="hidden">
      <Table.Root unstyled tableLayout="fixed" w="100%">
        <Table.Header>
          <Table.Row
            h="72px"
            bg="bg.secondary"
            borderBottom="1px solid #CDD6E9"
          >
            <Table.ColumnHeader
              borderRight="2px solid #CDD6E999"
              pl="40px"
              w="30%"
            >
              <Text
                fontSize="14px"
                fontWeight="700"
                lineHeight="100%"
                letterSpacing="-0.28px"
                textAlign="left"
              >
                Name
              </Text>
            </Table.ColumnHeader>
            <Table.ColumnHeader
              borderRight="2px solid #CDD6E999"
              pl="14px"
              w="24%"
            >
              <Text
                fontSize="14px"
                fontWeight="700"
                lineHeight="100%"
                letterSpacing="-0.28px"
                textAlign="left"
              >
                Date
              </Text>
            </Table.ColumnHeader>
            <Table.ColumnHeader
              borderRight="2px solid #CDD6E999"
              pl="14px"
              w="18%"
            >
              <Text
                fontSize="14px"
                fontWeight="700"
                lineHeight="100%"
                letterSpacing="-0.28px"
                textAlign="left"
              >
                Assignee
              </Text>
            </Table.ColumnHeader>
            <Table.ColumnHeader pl="14px" w="28%">
              <Text
                fontSize="14px"
                fontWeight="700"
                lineHeight="100%"
                letterSpacing="-0.28px"
                textAlign="left"
              >
                Priority
              </Text>
            </Table.ColumnHeader>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {todos.map((todo) => (
            <Table.Row key={todo.id} h="80px" borderBottom="1px solid #CDD6E9">
              <Table.Cell pl="40px">
                <Text
                  color="fg.muted"
                  fontSize="14px"
                  fontWeight="600"
                  lineHeight="100%"
                  letterSpacing="-0.28px"
                  textAlign="left"
                >
                  {todo.name}
                </Text>
              </Table.Cell>
              <Table.Cell pl="14px">
                <Text
                  color="fg.muted"
                  fontSize="14px"
                  fontWeight="500"
                  lineHeight="100%"
                  letterSpacing="-0.28px"
                  textAlign="left"
                >
                  {todo.date}
                </Text>
              </Table.Cell>
              <Table.Cell pl="14px">
                <HStack gap="0px" spaceX="-3px">
                  {todo.assignees.slice(0, 2).map((assignee) => (
                    <Avatar
                      key={assignee.id}
                      name={assignee.name}
                      src={assignee.avatar}
                      w="20px"
                      h="20px"
                      border={
                        ["1", "2", "3"].includes(assignee.id)
                          ? "none"
                          : "2px solid white"
                      }
                      rounded="full"
                    />
                  ))}
                  {todo.assignees.length > 2 && (
                    <Avatar
                      variant="solid"
                      w="20px"
                      h="20px"
                      bg="brand.indigoLight"
                      border="2px solid white"
                      rounded="full"
                      fallback={
                        <Text
                          color="fg.muted"
                          fontSize="10px"
                          fontWeight="500"
                          lineHeight="100%"
                        >
                          +{todo.assignees.length - 2}
                        </Text>
                      }
                    />
                  )}
                </HStack>
              </Table.Cell>
              <Table.Cell pl="14px">
                <HStack pr="20px">
                  <HStack gap="14px">
                    <Flag
                      size="18"
                      color={getPriorityColor(todo.priority)}
                      variant="Bold"
                    />
                    <Text
                      color="fg.muted"
                      fontSize="14px"
                      fontWeight="400"
                      lineHeight="100%"
                    >
                      {todo.priority}
                    </Text>
                  </HStack>
                  <Spacer />
                  <MenuRoot>
                    <MenuTrigger asChild>
                      <IconButton
                        aria-label="More actions"
                        variant="surface"
                        w="40px"
                        h="30px"
                        bg="bg.secondary"
                        borderRadius="6px"
                        boxShadow="none"
                      >
                        <svg
                          width="20"
                          height="4"
                          viewBox="0 0 20 4"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <circle cx="2" cy="2" r="2" fill="#6C7278" />
                          <circle cx="10" cy="2" r="2" fill="#6C7278" />
                          <circle cx="18" cy="2" r="2" fill="#6C7278" />
                        </svg>
                      </IconButton>
                    </MenuTrigger>
                    <MenuContent
                      minW="180px"
                      p="4px"
                      bg="white"
                      border="1px solid #E2E8F0"
                      borderRadius="8px"
                      boxShadow="0px 4px 12px rgba(0, 0, 0, 0.1)"
                    >
                      {todo.status !== "todo" && (
                        <MenuItem
                          value="todo"
                          onClick={() =>
                            onUpdateTodo(todo.id, { status: "todo" })
                          }
                          p="8px 12px"
                          borderRadius="6px"
                          _hover={{ bg: "bg.secondary" }}
                          cursor="pointer"
                        >
                          <HStack gap="8px">
                            <TaskSquare
                              size="16"
                              color="#CFB7E8"
                              variant="Bold"
                            />
                            <Text
                              color="fg.muted"
                              fontSize="14px"
                              fontWeight="500"
                            >
                              Move to To Do
                            </Text>
                          </HStack>
                        </MenuItem>
                      )}
                      {todo.status !== "in-progress" && (
                        <MenuItem
                          value="in-progress"
                          onClick={() =>
                            onUpdateTodo(todo.id, { status: "in-progress" })
                          }
                          p="8px 12px"
                          borderRadius="6px"
                          _hover={{ bg: "bg.secondary" }}
                          cursor="pointer"
                        >
                          <HStack gap="8px">
                            <Status size="16" color="#F6BE38" variant="Bold" />
                            <Text
                              color="fg.muted"
                              fontSize="14px"
                              fontWeight="500"
                            >
                              Move to In Progress
                            </Text>
                          </HStack>
                        </MenuItem>
                      )}
                      {todo.status !== "complete" && (
                        <MenuItem
                          value="complete"
                          onClick={() =>
                            onUpdateTodo(todo.id, { status: "complete" })
                          }
                          p="8px 12px"
                          borderRadius="6px"
                          _hover={{ bg: "bg.secondary" }}
                          cursor="pointer"
                        >
                          <HStack gap="8px">
                            <TickCircle
                              size="16"
                              color="#75C5C1"
                              variant="Bold"
                            />
                            <Text
                              color="fg.muted"
                              fontSize="14px"
                              fontWeight="500"
                            >
                              Move to Complete
                            </Text>
                          </HStack>
                        </MenuItem>
                      )}
                    </MenuContent>
                  </MenuRoot>
                </HStack>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
      <Spacer />
    </Stack>
  );
}
