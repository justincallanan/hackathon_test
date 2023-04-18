import { Card, Flex, Image, Spacer, Tag, Text } from '@chakra-ui/react';
import { Skill } from '@/types/skillData';

export interface SkillCardProps {
  name: string;
  'i-number': string;
  profilePictureURL?: string;
  skills: Skill[];
}

const SkillsetCard: React.FC<SkillCardProps> = (props) => {
  const { name, profilePictureURL, skills } = props;
  const iNumber = props['i-number'];
  return (
    <Card padding={5}>
      <Flex>
        <Image
          src={profilePictureURL || 'anonymous_person.jpg'}
          alt={`Profile image for ${name} with I-Number ${iNumber}`}
          width={50}
        />
        <Flex paddingLeft={2} paddingRight={2} direction={'column'}>
          <Text>{name}</Text>
          <Text>{iNumber}</Text>
        </Flex>
      </Flex>
      <Flex paddingTop={5} gap={2}>
        {skills.map((s, i) => {
          return (
            <>
              <Tag colorScheme={'blue'} variant={'solid'}>
                {s.name}
              </Tag>
            </>
          );
        })}
      </Flex>
    </Card>
  );
};

export default SkillsetCard;
