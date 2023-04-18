import {
  Flex,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  Spacer,
  VStack,
} from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';
import SkillsetCardContainer from './_skillsetCardContainer';

export default function Home() {
  return (
    <>
      <VStack padding={10} spacing={5}>
        <Heading as="h1">Search for Skillset</Heading>
        <InputGroup>
          <Input />
          <InputLeftElement>
            <SearchIcon />
          </InputLeftElement>
        </InputGroup>
      </VStack>
      <Spacer />
      <SkillsetCardContainer />
    </>
  );
}
