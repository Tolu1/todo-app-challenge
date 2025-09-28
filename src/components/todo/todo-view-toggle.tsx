import React from "react";
import { HStack, Center } from "@chakra-ui/react";
import { RowVertical, RowHorizontal } from "iconsax-reactjs";

function TodoViewToggle() {
  return (
    <HStack h="40px" p="6px" bg="bg" gap="6px" borderRadius="6px">
      <Center w="32px" h="28px" borderRadius="4px" bg="bg.secondary">
        <RowVertical size="20" color="#7988A9" />
      </Center>
      <Center w="32px" h="28px" borderRadius="4px" bg="brand.aqua">
        <RowHorizontal size="20" color="white" />
      </Center>
    </HStack>
  );
}

export default TodoViewToggle;
