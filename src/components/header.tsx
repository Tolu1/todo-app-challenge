import React from "react";
import {
  HStack,
  Image,
  Square,
  Badge,
  Text,
  Center,
  Circle,
} from "@chakra-ui/react";
import { Searchbar } from "@/components/searchbar";
import { Link1, Notification } from "iconsax-reactjs";
import { UserProfile } from "@/components/user-profile";

export function Header() {
  return (
    <HStack
      h="90px"
      justify="center"
      gap="30px"
      borderBottom="1px solid #CDD6E9"
    >
      <Searchbar />
      <LogoGroup />
      <HStack gap="10px">
        <BadgeGroup />
        <Center
          w="40px"
          h="46px"
          border="1px solid #EEF1F9"
          borderRadius="10px"
          bg="bg.secondary"
        >
          <Link1 size={24} color="#464B50" />
        </Center>
      </HStack>
      <HStack gap="10px">
        <Circle size="46px" bg="bg.secondary">
          <Notification size="22" color="#292D32" />
        </Circle>
        <UserProfile />
      </HStack>
    </HStack>
  );
}

function LogoGroup() {
  return (
    <HStack gap="10px">
      <Square size="46px" border="1px solid #EEF1F9" borderRadius="10px">
        <Image
          src="logos/logo-1.png"
          alt="logo-1"
          w="30px"
          h="25.345px"
          objectFit="contain"
        />
      </Square>
      <Square size="46px" border="1px solid #EEF1F9" borderRadius="10px">
        <Image
          src="logos/logo-2.png"
          alt="logo-2"
          w="25px"
          h="25px"
          objectFit="contain"
        />
      </Square>
      <Square size="46px" border="1px solid #EEF1F9" borderRadius="10px">
        <Image
          src="logos/logo-3.png"
          alt="logo-3"
          w="30px"
          h="12.162px"
          objectFit="contain"
        />
      </Square>
      <Square size="46px" border="1px solid #EEF1F9" borderRadius="10px">
        <Image
          src="logos/logo-4.png"
          alt="logo-1"
          w="25px"
          h="25px"
          borderRadius="31px"
          objectFit="contain"
        />
      </Square>
    </HStack>
  );
}

function BadgeGroup() {
  const badges = [
    { text: "Melding maken", bg: "brand.indigo" },
    { text: "VIM", bg: "brand.aqua" },
    { text: "LMS", bg: "brand.aqua" },
    { text: "BHV", bg: "brand.aqua" },
    { text: "DataLek", bg: "brand.aqua" },
  ];

  return (
    <HStack
      gap="10px"
      bg="bg.secondary"
      border="1px solid #EEF1F9"
      p="4px"
      borderRadius="10px"
    >
      {badges.map((badge, index) => (
        <Badge key={index} p="10px 12px" bg={badge.bg} borderRadius="10px">
          <Text
            color="white"
            fontFamily="Plus Jakarta Sans"
            fontSize="14px"
            fontWeight="700"
            lineHeight="100%"
            letterSpacing="-0.28px"
          >
            {badge.text}
          </Text>
        </Badge>
      ))}
    </HStack>
  );
}
