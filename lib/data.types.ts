import type { StaticImageData } from "next/image";

export type Service = {
  title: string;
  problem: string;
  solution: string;
  benefit: string;
  stack: readonly string[];
};

export type WhyChooseItem = {
  title: string;
  desc: string;
};

export type Industry = {
  name: string;
  problems: string;
  solution: string;
};

export type JourneyStep = {
  step: string;
  detail: string;
};

export type Project = {
  name: string;
  url: string;
  image: StaticImageData;
  description: string;
  problem: string;
  tech: readonly string[];
};

export type TeamMember = {
  name: string;
  role: string;
  portfolio: string;
  image: StaticImageData;
  focus: readonly string[];
};

export type FAQItem = {
  q: string;
  a: string;
};

export type SiteData = {
  services: readonly Service[];
  whyChoose: readonly WhyChooseItem[];
  industries: readonly Industry[];
  journey: readonly JourneyStep[];
  projects: readonly Project[];
  team: readonly TeamMember[];
  faqs: readonly FAQItem[];
};
