"use client";

import React from "react";
import { Kanban } from "react-kanban-kit";
import { useTodos } from "@/hooks/use-todos";
import { toBoard } from "@/utils/todos-mapper";
import { TodoCard } from "./todo-card";
import type { BoardItem } from "react-kanban-kit";
import { Global } from "@emotion/react";
import { HStack, Square, Spacer, Text } from "@chakra-ui/react";
import { TaskSquare, Add } from "iconsax-reactjs";
import { Todo } from "@/types/todo";

type CardRenderProps = {
  data: BoardItem;
  column: BoardItem;
  index: number;
  isDraggable: boolean;
};

type ConfigMap = {
  [type: string]: {
    render: (props: CardRenderProps) => React.ReactNode;
    isDraggable?: boolean;
  };
};

interface CardMove {
  cardId: string;
  fromColumnId: string;
  toColumnId: string;
  taskAbove: string | null;
  taskBelow: string | null;
  position: number;
}

export function TodoKanban() {
  const { todos, updateTodo } = useTodos();

  const boardData = toBoard(todos);
  const configMap: ConfigMap = {
    "todo-card": {
      render: ({ data }: CardRenderProps) => <TodoCard todo={data.content} />,
    },
  };

  const handleCardMove = (move: CardMove) => {
    const { cardId, toColumnId } = move;
    updateTodo(cardId, { status: toColumnId as Todo["status"] });
  };

  return (
    <>
      <Kanban
        columnWrapperStyle={() => ({
          minWidth: "357px",
          maxWidth: "357px",
        })}
        columnStyle={() => ({
          backgroundColor: "#F7F7F7",
          borderRadius: "6px",
          padding: "5px",
          gap: "0px",
        })}
        renderColumnHeader={(column) => <ColumnHeader column={column} />}
        renderColumnFooter={() => <ColumnFooter />}
        dataSource={boardData}
        configMap={configMap}
        onCardMove={handleCardMove}
      />
      <Global
        styles={{
          ".rkk-column-wrapper": {
            gap: "0px !important",
          },
        }}
      />
    </>
  );
}

function ColumnHeader({ column }: { column: BoardItem }) {
  const bgMap = {
    todo: "brand.indigoLight",
    "in-progress": "brand.orangeLight",
    complete: "brand.aquaLight",
  };
  const iconMap = {
    todo: <TaskSquare size="20" color="#CFB7E8" variant="Bold" />,
    "in-progress": <TaskSquare size="20" color="#F6BE38" variant="Bold" />,
    complete: <TaskSquare size="20" color="#75C5C1" variant="Bold" />,
  };

  const bg = bgMap[column.id as keyof typeof bgMap];
  const icon = iconMap[column.id as keyof typeof iconMap];
  return (
    <HStack h="45px" borderTopRadius="6px" bg={bg} p="5px">
      <HStack h="full" gap="6px" align="start">
        <HStack h="30px" bg="bg" gap="8px" borderRadius="6px" p="5px" pr="8px">
          {icon}
          <Text
            color="fg.muted"
            fontSize="14px"
            fontWeight="600"
            lineHeight="100%"
            letterSpacing="-0.28px"
          >
            {column.title}
          </Text>
        </HStack>
        <Square size="30px" bg="bg" borderRadius="6px">
          <Text
            color="fg.muted"
            fontSize="14px"
            fontWeight="500"
            lineHeight="100%"
            letterSpacing="-0.28px"
          >
            ({column.totalChildrenCount})
          </Text>
        </Square>
      </HStack>
      <Spacer />
      <Square size="30px" bg="bg" borderRadius="6px">
        <Add size="20" color="#292D32" />
      </Square>
    </HStack>
  );
}

function ColumnFooter() {
  return (
    <HStack
      h="40px"
      borderRadius="6px"
      bg="bg"
      mt="5px"
      px="14px"
      py="10px"
      gap="14px"
    >
      <Square>
        <Add size="20" color="#292D32" />
      </Square>
      <Text
        color="fg.muted"
        fontSize="14px"
        fontWeight="500"
        lineHeight="normal"
      >
        Add Task
      </Text>
    </HStack>
  );
}
