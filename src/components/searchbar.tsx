import React from "react";
import { Box, Input, InputGroup } from "@chakra-ui/react";
import { SearchNormal1, CloseCircle } from "iconsax-reactjs";

export function Searchbar() {
  return (
    <InputGroup
      flex="1"
      maxW="220px"
      startOffset="-3px"
      endOffset="-3px"
      startElement={
        <Box ml={"14px"}>
          <SearchNormal1 size={18} color="#6C7278" />
        </Box>
      }
      endElement={
        <Box mr={"14px"}>
          <CloseCircle size={22} color="#464B50" />
        </Box>
      }
    >
      <Input
        h="46px"
        borderRadius="10px"
        borderColor="#CDD6E9"
        bgColor="bg.secondary"
        placeholder="M91"
      />
    </InputGroup>
  );
}
