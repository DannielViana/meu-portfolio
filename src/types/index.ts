export interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  githubUrl: string;
  liveUrl?: string;
}

export interface SkillCategory {
  category: string;
  items: string[];
}