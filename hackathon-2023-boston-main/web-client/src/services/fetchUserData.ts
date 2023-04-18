import { wrapPromise } from './utils';
import mockData from '@/data/mockSkillData.json';

const fetchUserData = (_iNumber: string) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockData[0]);
    }, 1500);
  });
};

export default fetchUserData;
