import ajayImg from "./Ajay_profile.jpeg";
import harshImg from "./Harsh_profile.jpeg";
import rashidImg from "./Rashid_profile.jpeg";
import rupalHero from "./images/rupalfilms_hero.webp";
import cceHero from "./images/cce_hero.webp";
import mapsHero from "./images/googlemapscrapper_hero.webp";
import engineerHero from "./images/enginneros_hero.webp";
import workoutHero from "./images/workoutplanner_hero.webp";
import redstoreHero from "./images/redstore-hero.webp";

export const serviceStacks = [
  ["Next.js", "TypeScript", "Tailwind CSS"],
  ["Python", ".NET", "Node.js"],
  ["OpenAI", "Claude", "Python"],
  ["OpenAI", "Claude", "Node.js"],
  ["PostgreSQL", "Node.js", "React"],
  [".NET", "SQL Server", "Azure"],
  ["Python", "Node.js", "AWS"],
  ["Google Business", "SEO"],
  ["Next.js", "Schema.org", "Search Console"],
  ["AWS", "Azure", "Google Cloud"],
  ["PostgreSQL", "SQL Server", "MongoDB"],
  ["React Native", "TypeScript"],
  ["Figma", "Design Systems"],
  ["Node.js", "Python", "REST/GraphQL"],
  ["React", "SQL Server", "MongoDB"],
] as const;

export const projectAssets = [
  {
    name: "Rupal Films",
    url: "https://rupalfilms.com/",
    image: rupalHero,
    tech: ["Next.js", "Framer Motion", "Cloud Media"],
  },
  {
    name: "EngineerOS",
    url: "https://ajaypandey.is-a.dev/EngineerOS/",
    image: engineerHero,
    tech: ["React", "AI", "Dashboards"],
  },
  {
    name: "Google Maps Lead Engine",
    url: "https://googlemapsscraper-uciu.onrender.com/",
    image: mapsHero,
    tech: ["Python", "Playwright", "Flask"],
  },
  {
    name: "Crowd Controls eSports",
    url: "https://unrivaled-sprinkles-4bac85.netlify.app/",
    image: cceHero,
    tech: ["React", "Node.js", "MongoDB"],
  },
  {
    name: "Workout Planner",
    url: "https://ajaypandey.is-a.dev/workout-planner/",
    image: workoutHero,
    tech: ["React", "TypeScript"],
  },
  {
    name: "RedStore",
    url: "https://ajaypandey.is-a.dev/redstore/",
    image: redstoreHero,
    tech: ["React", "E-commerce UI"],
  },
] as const;

export const teamAssets = [
  {
    name: "Ajay Pandey",
    portfolio: "https://ajaypandey.is-a.dev/",
    image: ajayImg,
  },
  {
    name: "Harsh Raj",
    portfolio: "https://harshraj9060.github.io/personalpage/",
    image: harshImg,
  },
  {
    name: "Rashid Ansari",
    portfolio: "https://personal-portfolio-next-js-five.vercel.app/",
    image: rashidImg,
  },
] as const;
