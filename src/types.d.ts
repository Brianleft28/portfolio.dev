import { Category } from './context/Category';

export interface ProjectDetails {
  id: number;
  key: number;
  category: Category;
  title: string;
  github: string;
  description: string;
  href: string;
  badge: string[];
  img: string[];
}

export interface Project {
  es: ProjectDetails;
  en: ProjectDetails;
}

interface SkillDetails {
  id: number;
  name: string;
  description: string;
  img?: string;
  subSkills: SubSkill[];
}
type SubSkill = SkillDetails;

export interface Skill {
  es: SkillDetails;
  en: SkillDetails;
}

export interface Certificate {
  es: CertificateDetails;
  en: CertificateDetails;
}

interface CertificateDetails {
  id: number;
  name: string;
  institution: string;
  category: string;
  date: string;
  description: string;
  link: string;
  logo: string;
}
