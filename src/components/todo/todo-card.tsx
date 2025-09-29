import React from "react";
import { Stack, HStack, Text } from "@chakra-ui/react";
import { Calendar, ProfileCircle, Flag } from "iconsax-reactjs";
import { Avatar } from "@/components/ui/avatar";
import type { Todo } from "@/types/todo";

interface TodoCardProps {
  todo: Todo;
}

export function TodoCard({ todo }: TodoCardProps) {
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
    <Stack
      bg="bg"
      p="14px"
      gap="16px"
      borderRadius="10px"
      cursor="grab"
      _hover={{ boxShadow: "xs" }}
      transition="box-shadow 0.2s"
    >
      <Text
        color="fg.muted"
        fontSize="14px"
        fontWeight="600"
        lineHeight="normal"
      >
        {todo.name}
      </Text>

      <HStack gap="14px">
        <Calendar size="16" color="#BAC1CC" />
        <Text fontSize="14px" fontWeight="400" color="#6B7280">
          {todo.date}
        </Text>
      </HStack>

      <HStack gap="8px">
        <ProfileCircle size="16" color="#9CA3AF" />
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
                  lineHeight="normal"
                >
                  +{todo.assignees.length - 2}
                </Text>
              }
            />
          )}
        </HStack>
      </HStack>

      <HStack gap="8px">
        <Flag
          size="18"
          color={getPriorityColor(todo.priority)}
          variant="Bold"
        />
        <Text
          color="fg.muted"
          fontSize="14px"
          fontWeight="400"
          lineHeight="normal"
        >
          {todo.priority}
        </Text>
      </HStack>
    </Stack>
  );
}
