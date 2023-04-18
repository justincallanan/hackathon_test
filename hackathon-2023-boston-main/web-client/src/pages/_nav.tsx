import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import {
  Button,
  Flex,
  HStack,
  Image,
  Text,
  chakra,
  useColorMode,
} from '@chakra-ui/react';

export default function NavBar() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <chakra.header id="header">
      <Flex w="100%" px="6" py="5" align="center" justify="space-between">
        <Flex>
          <Image src="logo.png" alt="App logo." width={30} />
          <Text padding={2}>Skill Search</Text>
        </Flex>
        <HStack as="nav" spacing="5">
          <Button onClick={() => toggleColorMode()}>
            {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
          </Button>
        </HStack>
      </Flex>
    </chakra.header>
  );
}
