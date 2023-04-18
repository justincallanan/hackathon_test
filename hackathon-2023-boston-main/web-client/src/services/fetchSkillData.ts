import mockSkillData from '@/data/mockSkillData.json';

const fetchSkillData = new Promise((resolve) => {
  setTimeout(() => {
    resolve(mockSkillData);
  }, 1500);
});

export default fetchSkillData;
