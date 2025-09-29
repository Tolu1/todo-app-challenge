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
import { Flag } from "iconsax-reactjs";
import type { Todo } from "@/types/todo";

interface TodoTableProps {
  todos: Todo[];
}

export function TodoTable({ todos }: TodoTableProps) {
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
    <Stack h="full" border="1px solid #CDD6E9" rounded="10px" overflow="hidden">
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
                  <IconButton
                    aria-label="More actions"
                    variant="surface"
                    w="40px"
                    h="30px"
                    bg="bg.secondary"
                    borderRadius="6px"
                    boxShadow="none"
                    textAlign="right"
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
