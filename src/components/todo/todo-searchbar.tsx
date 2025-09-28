import React from "react";
import { Box, Input, InputGroup } from "@chakra-ui/react";
import { SearchNormal1, CloseCircle } from "iconsax-reactjs";

function TodoSearchbar() {
  return (
    <InputGroup
      flex="1"
      maxW="220px"
      startOffset="-4px"
      endOffset="30px"
      startElement={
        <Box ml={"10px"}>
          <SearchNormal1 size={24} color="#6C7278" />
        </Box>
      }
      endElement={<Box />}
    >
      <Input
        h="40px"
        borderRadius="6px"
        bgColor="bg"
        placeholder="Search for To-Do"
      />
    </InputGroup>
  );
}

export default TodoSearchbar;
