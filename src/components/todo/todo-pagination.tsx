"use client";

import {
  HStack,
  Text,
  Select,
  createListCollection,
  Spacer,
  Portal,
  Box,
} from "@chakra-ui/react";
import {
  PaginationRoot,
  PaginationPrevTrigger,
  PaginationNextTrigger,
  PaginationItems,
  PaginationFirstTrigger,
  PaginationLastTrigger,
} from "@/components/ui/pagination";
import { ArrowDown2 } from "iconsax-reactjs";

const pageSizeOptions = createListCollection({
  items: [
    { label: "10", value: "10" },
    { label: "20", value: "20" },
    { label: "50", value: "50" },
    { label: "100", value: "100" },
  ],
});

interface TodoPaginationProps {
  totalItems: number;
  currentPage: number;
  pageSize: number;
  onPageChange: (page: number) => void;
  onPageSizeChange: (pageSize: number) => void;
}

export function TodoPagination({
  totalItems,
  currentPage,
  pageSize,
  onPageSizeChange,
  onPageChange,
}: TodoPaginationProps) {
  return (
    <HStack w="full" p="20px">
      <PaginationRoot
        variant="default"
        count={totalItems}
        pageSize={pageSize}
        page={currentPage}
        onPageChange={(e) => onPageChange(e.page)}
        siblingCount={2}
      >
        <HStack h="40px" px="10px" bg="bg.secondary" borderRadius="20px">
          <HStack gap="10px">
            <PaginationFirstTrigger />
            <PaginationPrevTrigger />
          </HStack>
          <PaginationItems />
          <HStack gap="10px">
            <PaginationNextTrigger />
            <PaginationLastTrigger />
          </HStack>
        </HStack>
      </PaginationRoot>
      <Spacer />
      <HStack gap="12px">
        <Text
          fontFamily="pagination"
          fontSize="16px"
          fontWeight="600"
          lineHeight="normal"
        >
          Rows Per page:
        </Text>
        <Select.Root
          collection={pageSizeOptions}
          value={[pageSize.toString()]}
          onValueChange={(e) => onPageSizeChange(Number(e.value[0]))}
          w="86px"
        >
          <Select.Control>
            <Select.Trigger
              w="full"
              h="40px"
              borderWidth="1px"
              borderColor="brand.aqua"
              borderRadius="20px"
              bg="bg.secondary"
              display="flex"
              flexDir="row"
              px="20px"
              py="15px"
              position="relative"
            >
              <Text
                w="35px"
                fontFamily="pagination"
                fontSize="14px"
                fontWeight="600"
                lineHeight="normal"
              >
                <Select.ValueText />
              </Text>
              <Box
                position="absolute"
                right="20px"
                top="50%"
                transform="translateY(-50%)"
              >
                <ArrowDown2 size="18px" color="#1A1C1E" />
              </Box>
            </Select.Trigger>
          </Select.Control>
          <Portal>
            <Select.Positioner>
              <Select.Content>
                {pageSizeOptions.items.map((option) => (
                  <Select.Item item={option} key={option.value}>
                    {option.label}
                    <Select.ItemIndicator />
                  </Select.Item>
                ))}
              </Select.Content>
            </Select.Positioner>
          </Portal>
        </Select.Root>
      </HStack>
    </HStack>
  );
}
