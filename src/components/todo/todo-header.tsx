import React from "react";
import { HStack, Circle, Heading, Square, Button } from "@chakra-ui/react";
import {
  ArrowCircleLeft2,
  Sort,
  Calendar,
  ExportCurve,
  AddCircle,
} from "iconsax-reactjs";

function TodoHeader() {
  return (
    <HStack justify="space-between" p="20px">
      <HStack gap="30px">
        <Circle size="46px" border="1px solid #CDD6E9">
          <ArrowCircleLeft2 size="26" color="#464B50" />
        </Circle>

        <Heading
          fontSize="30px"
          fontWeight="700"
          lineHeight="100%"
          letterSpacing="-0.6px"
        >
          Afdeling Kwaliteit
        </Heading>
      </HStack>
      <HStack gap="14px">
        <Square
          size="50px"
          bg="bg.secondary"
          border="1px solid #CDD6E933"
          borderRadius="10px"
        >
          <svg
            width="34"
            height="20"
            viewBox="0 0 34 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="34" height="20" rx="10" fill="#E1E0E1" />
            <circle cx="10" cy="10" r="8" fill="white" />
          </svg>
        </Square>
        <Square
          size="50px"
          bg="bg.secondary"
          border="1px solid #CDD6E933"
          borderRadius="10px"
        >
          <Sort size="24" color="#292D32" />
        </Square>
        <Square
          size="50px"
          bg="bg.secondary"
          border="1px solid #CDD6E933"
          borderRadius="10px"
        >
          <Calendar size="24" color="#292D32" />
        </Square>
        <Button
          h="50px"
          px="20px"
          border="1px solid ##CDD6E933"
          borderRadius="10px"
          bg="brand.indigo"
        >
          <ExportCurve size="24" /> Export xlsx
        </Button>
        <Button h="50px" px="20px" borderRadius="10px" bg="brand.aqua">
          <AddCircle size="24" /> Add Task
        </Button>
      </HStack>
    </HStack>
  );
}

export default TodoHeader;
