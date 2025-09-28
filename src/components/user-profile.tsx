import React from "react";
import { HStack, Text } from "@chakra-ui/react";
import { Avatar } from "@/components/ui/avatar";
import { ArrowDown2 } from "iconsax-reactjs";

export function UserProfile() {
  return (
    <HStack w="134px" h="46px" p="3px" bg="bg.secondary" borderRadius="50px">
      <HStack gap="8px">
        <Avatar src="images/profile.svg" />
        <HStack gap="16px">
          <Text
            fontSize="14px"
            fontWeight="600"
            lineHeight="140%"
            letterSpacing="-0.28px"
          >
            Hi Paul
          </Text>
          <ArrowDown2 size="14" color="#6C7278" variant="Bold" />
        </HStack>
      </HStack>
    </HStack>
  );
}
