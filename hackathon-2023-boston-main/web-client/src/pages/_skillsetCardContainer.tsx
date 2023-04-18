import React, { useEffect, useState } from 'react';
import { Alert, Box, Flex, SimpleGrid, Spinner } from '@chakra-ui/react';
import fetchSkillData from '@/services/fetchSkillData';
import SkillsetCard from './_skillsetCard';
import { SkillData } from '@/types/skillData';
import Fallback from '@/sharedComponents/fallback';

interface SkillCardListProps {
  skillsData: SkillData[];
}

const SkillsetCardList: React.FC<SkillCardListProps> = ({
  skillsData = [],
}) => {
  return (
    <>
      {skillsData.map((data, i) => {
        const { interests, ...rest } = data;
        return (
          <Box key={i}>
            <SkillsetCard {...rest} />
          </Box>
        );
      })}
    </>
  );
};

const SkillsetCardContainer = () => {
  const [skillData, setSkillData] = useState<SkillData[]>();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    fetchSkillData
      .then((data) => {
        setSkillData(data as SkillData[]);
      })
      .finally(() => setIsLoading(false));
  }, [skillData]);

  return skillData ? (
    <SimpleGrid
      columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
      spacing={20}
      padding={10}
    >
      <SkillsetCardList skillsData={skillData} />
    </SimpleGrid>
  ) : (
    <Fallback isLoading={isLoading} />
  );
};

export default SkillsetCardContainer;
