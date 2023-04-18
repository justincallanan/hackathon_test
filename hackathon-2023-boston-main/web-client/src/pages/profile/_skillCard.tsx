import { Card, Flex, Text } from '@chakra-ui/react';
import React from 'react';

interface SkillCardProps {
  name: string;
  source: string;
  years: number;
  complexity: number;
}

const SkillCard: React.FC<SkillCardProps> = ({
  name,
  source,
  years,
  complexity,
}) => {
  return (
    <Card>
      <Text>{name}</Text>
      <Flex>
        <Text>{years} Years of Experience</Text>
        <Text>{complexity}</Text>
        <Text>Source: {source}</Text>
      </Flex>
    </Card>
  );
};

export default SkillCard;
