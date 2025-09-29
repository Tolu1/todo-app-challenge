import React from "react";
import { HStack, Center } from "@chakra-ui/react";
import { RowVertical, RowHorizontal } from "iconsax-reactjs";

interface TodoViewToggleProps {
  view: "table" | "kanban";
  onViewChange: (view: "table" | "kanban") => void;
}

function TodoViewToggle({ view, onViewChange }: TodoViewToggleProps) {
  return (
    <HStack h="40px" p="6px" bg="bg" gap="6px" borderRadius="6px">
      <Center
        w="32px"
        h="28px"
        borderRadius="4px"
        bg={view === "table" ? "brand.aqua" : "bg.secondary"}
        cursor="pointer"
        onClick={() => onViewChange("table")}
        _hover={{ opacity: 0.8 }}
      >
        <RowVertical size="20" color={view === "table" ? "white" : "#7988A9"} />
      </Center>
      <Center
        w="32px"
        h="28px"
        borderRadius="4px"
        bg={view === "kanban" ? "brand.aqua" : "bg.secondary"}
        cursor="pointer"
        onClick={() => onViewChange("kanban")}
        _hover={{ opacity: 0.8 }}
      >
        <RowHorizontal
          size="20"
          color={view === "kanban" ? "white" : "#7988A9"}
        />
      </Center>
    </HStack>
  );
}

export default TodoViewToggle;
