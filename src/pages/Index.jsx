import { Box, Flex, VStack, Text, Link, Icon } from "@chakra-ui/react";
import { FaHome, FaChartBar, FaCog } from "react-icons/fa";

const Sidebar = () => (
  <Box
    as="nav"
    pos="fixed"
    top="0"
    left="0"
    h="100%"
    w="200px"
    bg="gray.800"
    color="white"
    p={4}
  >
    <VStack spacing={4} align="stretch">
      <Link href="#" _hover={{ textDecor: "none" }}>
        <Flex align="center">
          <Icon as={FaHome} mr={2} />
          <Text>Home</Text>
        </Flex>
      </Link>
      <Link href="#" _hover={{ textDecor: "none" }}>
        <Flex align="center">
          <Icon as={FaChartBar} mr={2} />
          <Text>Dashboard</Text>
        </Flex>
      </Link>
      <Link href="#" _hover={{ textDecor: "none" }}>
        <Flex align="center">
          <Icon as={FaCog} mr={2} />
          <Text>Settings</Text>
        </Flex>
      </Link>
    </VStack>
  </Box>
);

const Index = () => {
  return (
    <Flex>
      <Sidebar />
      <Box ml="200px" p={4} w="full">
        <Text fontSize="2xl" mb={4}>Welcome to the Dashboard</Text>
        <Text>This is a generic dashboard application with a nice sidebar for navigation.</Text>
      </Box>
    </Flex>
  );
};

export default Index;