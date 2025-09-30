"use client";

import React, { useState } from "react";
import {
  Box,
  Stack,
  Text,
  StackProps,
  Collapsible,
  HStack,
  Image,
  Square,
} from "@chakra-ui/react";
import {
  ArrowDown2,
  Category,
  Stickynote,
  Folder2,
  People,
  Note1,
  TaskSquare,
  Call,
  NotificationBing,
  MenuBoard,
  Edit,
  MessageEdit,
} from "iconsax-reactjs";

export function Sidebar(props: StackProps) {
  return (
    <Stack
      display={{ base: "none", md: "flex" }}
      borderRightWidth="1px"
      borderRightColor="#CDD6E9"
      minW="250px"
      h="100vh"
      gap="0px"
      {...props}
    >
      <SidebarHeader />

      <Box flex={1} overflowY="auto" py="30px">
        <NavItem>
          <Category size="18px" color="#7988A9" />
          Home
        </NavItem>

        <NavItem>
          <Stickynote size="18px" color="#7988A9" />
          MKVanBinnen
        </NavItem>

        <NavItem>
          <Folder2 size="18px" color="#7988A9" />
          Document Management
        </NavItem>

        <NavItem>
          <People size="18px" color="#7988A9" />
          Patient Information
        </NavItem>

        <NavItem>
          <Note1 size="18px" color="#7988A9" />
          Agenda
        </NavItem>

        <Collapsible.Root defaultOpen={true}>
          <Collapsible.Trigger width="full">
            <NavItem pr="22px" justifyContent="space-between">
              <HStack gap="14px">
                <TaskSquare size="18px" color="#7988A9" />
                My Department
              </HStack>
              <Collapsible.Context>
                {(context) => (
                  <Box
                    transform={context.open ? "rotate(0deg)" : "rotate(-90deg)"}
                    transition="transform 0.2s"
                  >
                    <ArrowDown2 size="18px" color="#464B50" />
                  </Box>
                )}
              </Collapsible.Context>
            </NavItem>
          </Collapsible.Trigger>

          <Collapsible.Content px="30px">
            <NavSubItem>News</NavSubItem>
            <NavSubItem>Members</NavSubItem>
            <NavSubItem active>To - Do</NavSubItem>
            <NavSubItem>Form Task</NavSubItem>
            <NavSubItem>Agenda</NavSubItem>
            <NavSubItem>Follow up system</NavSubItem>
            <NavSubItem gap="15px">
              Group Settings
              <ArrowDown2 size="18px" color="#464B50" />
            </NavSubItem>
          </Collapsible.Content>
        </Collapsible.Root>

        <NavItem>
          <Call size="18px" color="#7988A9" />
          Phone numbers
        </NavItem>

        <NavItem>
          <TaskSquare size="18px" color="#7988A9" />
          My to do Protocols
        </NavItem>

        <NavItem>
          <NotificationBing size="18px" color="#7988A9" />
          My Notifications
        </NavItem>

        <NavItem>
          <MenuBoard size="18px" color="#7988A9" />
          Knowledge Base
        </NavItem>

        <NavItem>
          <MessageEdit size="18px" color="#7988A9" />
          Super Admin
        </NavItem>

        <Collapsible.Root defaultOpen={true}>
          <Collapsible.Trigger width="full">
            <NavItem pr="22px" justifyContent="space-between">
              <HStack gap="14px">
                <Edit size="18px" color="#7988A9" />
                Admin
              </HStack>
              <Collapsible.Context>
                {(context) => (
                  <Box
                    transform={context.open ? "rotate(0deg)" : "rotate(-90deg)"}
                    transition="transform 0.2s"
                  >
                    <ArrowDown2 size="18px" color="#464B50" />
                  </Box>
                )}
              </Collapsible.Context>
            </NavItem>
          </Collapsible.Trigger>

          <Collapsible.Content px="30px">
            <NavSubItem>Agenda</NavSubItem>
            <NavSubItem>News</NavSubItem>
            <NavSubItem>Poll</NavSubItem>
            <NavSubItem>Department Rules</NavSubItem>
            <NavSubItem>Follow up system</NavSubItem>
          </Collapsible.Content>
        </Collapsible.Root>
      </Box>

      <SidebarFooter />
    </Stack>
  );
}

function SidebarHeader() {
  return (
    <HStack h="90px" pt="12px" pl="30px">
      <HStack align="center" w="full" gap="30px">
        <Image src="logos/mkv.png" alt="mkv logo" w="153px" h="62px" />
        <Square size="30px" bg="bg.secondary" borderRadius="6px">
          <svg
            width="15"
            height="14"
            viewBox="0 0 15 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.63512 1.58569L0.989685 7.1121L5.63512 12.6385"
              stroke="#1A1C1E"
              strokeWidth="1.3"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M13.9998 7.11209H1.11963"
              stroke="#1A1C1E"
              strokeWidth="1.3"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Square>
      </HStack>
    </HStack>
  );
}

interface NavItemProps extends StackProps {
  active?: boolean;
  children: React.ReactNode;
}

function NavItem({ children, active = false, ...props }: NavItemProps) {
  return (
    <HStack
      h="48px"
      gap="14px"
      pl="22px"
      mx="8px"
      borderRadius="10px"
      cursor="pointer"
      bg={active ? "brand.aquaLight" : "transparent"}
      _hover={{
        bg: active ? "brand.aquaLight" : "gray.50",
      }}
      color={active ? "brand.aqua" : "fg.muted"}
      fontSize="14px"
      fontWeight="600"
      lineHeight="normal"
      letterSpacing="-0.28px"
      {...props}
    >
      {children}
    </HStack>
  );
}

function NavSubItem({ children, active = false, ...props }: NavItemProps) {
  return (
    <HStack h="42px" py="2px" cursor="pointer" className="group">
      <HStack
        h="full"
        w="full"
        gap="14px"
        pl="32px"
        borderRadius="10px"
        bg={active ? "brand.aquaLight" : "transparent"}
        _groupHover={{
          bg: active ? "brand.aquaLight" : "gray.50",
        }}
        color={active ? "brand.aqua" : "fg.muted"}
        fontSize="14px"
        fontWeight="500"
        lineHeight="normal"
        letterSpacing="-0.28px"
        {...props}
      >
        {children}
      </HStack>
    </HStack>
  );
}

function SidebarFooter() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <Box p="30px">
      <Stack
        py="10px"
        px="14px"
        bg="bg.secondary"
        borderWidth="1px"
        borderColor="#CDD6E9"
        borderRadius="10px"
        gap="10px"
      >
        <HStack
          h="30px"
          px="10px"
          py="5px"
          bg="bg"
          borderRadius="6px"
          gap="10px"
          cursor="pointer"
        >
          <Image src="images/flag.svg" alt="flag" w="20px" h="20px" />
          <Text
            color="#6C7278"
            fontSize="12px"
            fontWeight="600"
            lineHeight="140%"
            letterSpacing="-0.24px"
            flex={1}
          >
            English
          </Text>
          <ArrowDown2 size="14px" color="#464B50" />
        </HStack>

        <HStack
          h="30px"
          px="10px"
          py="5px"
          bg="bg"
          borderRadius="6px"
          gap="10px"
          cursor="pointer"
          justify="space-between"
        >
          <Text
            color="#6C7278"
            fontSize="12px"
            fontWeight="500"
            lineHeight="140%"
            letterSpacing="-0.24px"
          >
            Dark mode
          </Text>
          <Box
            as="button"
            onClick={() => setDarkMode(!darkMode)}
            position="relative"
            w="30px"
            h="18px"
            borderRadius="full"
            bg={darkMode ? "brand.aqua" : "gray.200"}
            transition="background-color 0.2s"
          >
            <Box
              position="absolute"
              top="2px"
              left={darkMode ? "14px" : "2px"}
              w="14px"
              h="14px"
              bg="white"
              borderRadius="full"
              transition="left 0.2s"
            />
          </Box>
        </HStack>
      </Stack>
    </Box>
  );
}
