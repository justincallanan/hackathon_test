export interface SkillData {
  name: string;
  'i-number': string;
  profilePictureURL: string;
  skills: Skill[];
  interests: Interest[];
}

export interface Interest {
  name: string;
}

export interface Skill {
  name: string;
  complexity: number;
  years: number;
  source: string;
}
