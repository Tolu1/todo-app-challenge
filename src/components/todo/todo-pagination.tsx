"use client";

import {
  HStack,
  Text,
  Select,
  createListCollection,
  Spacer,
} from "@chakra-ui/react";
import {
  PaginationRoot,
  PaginationPrevTrigger,
  PaginationNextTrigger,
  PaginationItems,
  PaginationFirstTrigger,
  PaginationLastTrigger,
} from "@/components/ui/pagination";

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
        <Text fontSize="14px" fontWeight="500" color="fg.muted">
          Rows Per page:
        </Text>
        <Select.Root
          collection={pageSizeOptions}
          value={[pageSize.toString()]}
          onValueChange={(e) => onPageSizeChange(Number(e.value[0]))}
          size="sm"
          width="80px"
        >
          <Select.Control>
            <Select.Trigger>
              <Select.ValueText />
            </Select.Trigger>
          </Select.Control>
          <Select.Content>
            {pageSizeOptions.items.map((option) => (
              <Select.Item item={option} key={option.value}>
                {option.label}
              </Select.Item>
            ))}
          </Select.Content>
        </Select.Root>
      </HStack>
    </HStack>
  );
}
