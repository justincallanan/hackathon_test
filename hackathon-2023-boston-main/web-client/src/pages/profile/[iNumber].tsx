import fetchUserData from '@/services/fetchUserData';
import Fallback from '@/sharedComponents/fallback';
import { SkillData } from '@/types/skillData';
import { SimpleGrid } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const ProfilePage = () => {
  const router = useRouter();
  const iNumber = router.query.iNumber as string;
  const [userData, setUserData] = useState<SkillData>();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    fetchUserData(iNumber)
      .then((d) => setUserData(d as SkillData))
      .finally(() => setIsLoading(false));
  }, [iNumber, userData, isLoading]);

  return userData ? (
    <>
      <SimpleGrid></SimpleGrid>
    </>
  ) : (
    <Fallback isLoading={isLoading} />
  );
};

export default ProfilePage;
