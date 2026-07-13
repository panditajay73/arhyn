import ajayImg from "./Ajay_profile.jpeg";
import harshImg from "./Harsh_profile.jpeg";
import rashidImg from "./Rashid_profile.jpeg";
import rupalHero from "./images/rupalfilms_hero.webp";
import cceHero from "./images/cce_hero.webp";
import mapsHero from "./images/googlemapscrapper_hero.webp";
import engineerHero from "./images/enginneros_hero.webp";
import workoutHero from "./images/workoutplanner_hero.webp";
import redstoreHero from "./images/redstore-hero.webp";
export const services = [
  {
    title: "Website Development",
    problem: "Most local businesses either have no website or one that hasn't been touched since 2016.",
    solution: "Fast, modern, mobile-first websites built to convert visitors into customers.",
    benefit: "A digital storefront that works 24/7, even when the shop is closed.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "Custom Software Development",
    problem: "Off-the-shelf tools rarely fit how a specific business actually operates.",
    solution: "Bespoke internal tools and platforms built around real workflows, not generic templates.",
    benefit: "Software that fits the business, instead of a business bending to fit the software.",
    stack: ["Python", ".NET", "Node.js"],
  },
  {
    title: "AI Automation",
    problem: "Repetitive admin work — scheduling, follow-ups, data entry — eats hours every week.",
    solution: "AI-driven automations that handle repetitive operational work in the background.",
    benefit: "Owners get their time back to focus on customers, not paperwork.",
    stack: ["OpenAI", "Claude", "Python"],
  },
  {
    title: "AI Chatbots",
    problem: "Missed calls and slow replies quietly lose bookings every single day.",
    solution: "Trained conversational assistants for websites, WhatsApp, and Instagram DMs.",
    benefit: "Instant, always-on responses that turn enquiries into confirmed bookings.",
    stack: ["OpenAI", "Claude", "Node.js"],
  },
  {
    title: "CRM Development",
    problem: "Customer details scattered across notebooks, spreadsheets, and someone's memory.",
    solution: "A single, simple CRM built around how the team actually follows up with people.",
    benefit: "No customer, lead, or follow-up ever falls through the cracks again.",
    stack: ["PostgreSQL", "Node.js", "React"],
  },
  {
    title: "ERP Systems",
    problem: "Inventory, staff, billing, and orders all live in disconnected tools.",
    solution: "Unified ERP systems that connect every operational moving part.",
    benefit: "One source of truth for the entire business, updated in real time.",
    stack: [".NET", "SQL Server", "Azure"],
  },
  {
    title: "Business Automation",
    problem: "Manual processes don't scale past a certain point without hiring more people.",
    solution: "End-to-end workflow automation across booking, billing, and communication.",
    benefit: "Growth without a proportional growth in overhead.",
    stack: ["Python", "Node.js", "AWS"],
  },
  {
    title: "Google Business Optimization",
    problem: "Incomplete or inactive Google Business profiles cost businesses local search visibility.",
    solution: "Full setup, optimization, and ongoing management of the Google Business presence.",
    benefit: "Higher visibility exactly when nearby customers are searching.",
    stack: ["Google Business", "SEO"],
  },
  {
    title: "SEO",
    problem: "A beautiful website nobody can find is a website that doesn't work.",
    solution: "Technical and content SEO built into the site from day one, not bolted on later.",
    benefit: "Consistent, compounding organic traffic instead of paid-ad dependency.",
    stack: ["Next.js", "Schema.org", "Search Console"],
  },
  {
    title: "Cloud Applications",
    problem: "On-premise systems break, don't scale, and are hard to access remotely.",
    solution: "Cloud-native applications built for reliability and remote access from anywhere.",
    benefit: "Business systems that stay online and accessible, wherever the owner is.",
    stack: ["AWS", "Azure", "Google Cloud"],
  },
  {
    title: "Database Solutions",
    problem: "Years of business data trapped in spreadsheets, unqueryable and unsafe.",
    solution: "Structured, secure databases designed around how the business actually reports and grows.",
    benefit: "Data that's finally usable for real decisions, not just storage.",
    stack: ["PostgreSQL", "SQL Server", "MongoDB"],
  },
  {
    title: "Mobile Applications",
    problem: "Customers expect an app-like experience, not just a mobile browser tab.",
    solution: "Native-feeling mobile apps for booking, loyalty, and customer engagement.",
    benefit: "A direct channel to customers' home screens.",
    stack: ["React Native", "TypeScript"],
  },
  {
    title: "UI/UX Design",
    problem: "Clunky, confusing interfaces quietly push customers toward competitors.",
    solution: "Interfaces designed around real user behavior, tested for clarity, not just looks.",
    benefit: "Every interaction feels effortless, which builds trust in the brand.",
    stack: ["Figma", "Design Systems"],
  },
  {
    title: "API Development",
    problem: "Tools that don't talk to each other create duplicate work and errors.",
    solution: "Clean, documented APIs that connect internal systems and third-party tools.",
    benefit: "One connected ecosystem instead of a patchwork of disconnected apps.",
    stack: ["Node.js", "Python", "REST/GraphQL"],
  },
  {
    title: "Dashboard & Analytics",
    problem: "Owners make decisions on gut feeling because the data isn't visible anywhere.",
    solution: "Real-time dashboards that surface the numbers that actually matter.",
    benefit: "Clear, confident decisions backed by live business data.",
    stack: ["React", "SQL Server", "MongoDB"],
  },
];

export const whyChoose = [
  { title: "Fast Delivery", desc: "Working software in weeks, not quarters." },
  { title: "Scalable Architecture", desc: "Built to handle growth from day one, not rebuilt later." },
  { title: "AI-first Mindset", desc: "Automation is designed in, not added as an afterthought." },
  { title: "Business-focused Approach", desc: "Every build starts with the business problem, not the tech." },
  { title: "Cloud Ready", desc: "Deployed on infrastructure that stays online and scales on demand." },
  { title: "SEO Optimized", desc: "Visibility engineered into the site's foundation." },
  { title: "Secure by Default", desc: "Modern security practices applied to every system we ship." },
  { title: "Fully Responsive", desc: "One experience, perfected across phone, tablet, and desktop." },
  { title: "Long-term Support", desc: "We stay on after launch — systems are maintained, not abandoned." },
  { title: "Custom Solutions", desc: "No templates pretending to be platforms. Built for you specifically." },
];

export const industries = [
  {
    name: "Restaurants",
    problems: "Manual reservations, no online ordering, inconsistent Google presence.",
    solution: "Online ordering, table booking, and a Google profile that actually converts.",
  },
  {
    name: "Cafes",
    problems: "Foot-traffic dependent with little to no digital repeat-customer channel.",
    solution: "Loyalty-friendly websites and social-ready menus that bring customers back.",
  },
  {
    name: "Healthcare Clinics",
    problems: "Phone-only booking causes missed appointments and long hold times.",
    solution: "Online appointment systems with automated reminders and patient records.",
  },
  {
    name: "Beauty Salons",
    problems: "Double-bookings and no-shows from manual, notebook-based scheduling.",
    solution: "Digital booking calendars with automated confirmations and reminders.",
  },
  {
    name: "Gyms & Fitness Studios",
    problems: "Manual membership tracking and no way to manage class capacity.",
    solution: "Membership CRMs, class scheduling, and automated renewal reminders.",
  },
  {
    name: "Retail Stores",
    problems: "No online storefront means all sales stop when the doors close.",
    solution: "E-commerce storefronts connected to real inventory and local pickup.",
  },
  {
    name: "Educational Institutes",
    problems: "Admissions and parent communication handled entirely on paper.",
    solution: "Admission portals, fee tracking, and automated parent communication.",
  },
  {
    name: "Manufacturers",
    problems: "Inventory and order tracking spread across disconnected spreadsheets.",
    solution: "ERP dashboards that unify inventory, orders, and production status.",
  },
  {
    name: "Real Estate Agencies",
    problems: "Listings scattered across platforms with no central lead pipeline.",
    solution: "Listing websites with integrated CRM to track every buyer lead.",
  },
  {
    name: "Logistics Businesses",
    problems: "Manual dispatch and tracking leads to delays and unhappy clients.",
    solution: "Dispatch dashboards and automated status updates for every shipment.",
  },
  {
    name: "Travel Agencies",
    problems: "Itineraries and payments managed manually across chats and calls.",
    solution: "Booking platforms with itinerary builders and integrated payments.",
  },
  {
    name: "Professional Services",
    problems: "Client intake and invoicing consume hours that should bill to clients.",
    solution: "Client portals that automate intake, scheduling, and invoicing.",
  },
];

export const journey = [
  { step: "Offline Business", detail: "Running well, but invisible online and buried in manual work." },
  { step: "Free Consultation", detail: "We map the business, the bottlenecks, and the opportunity." },
  { step: "Strategy", detail: "A clear plan: what to build first, and why it matters." },
  { step: "Design", detail: "Interfaces shaped around real customers and real staff." },
  { step: "Development", detail: "Production-grade software, built and tested properly." },
  { step: "Automation", detail: "The repetitive work gets handed to systems, not staff." },
  { step: "Launch", detail: "Live, monitored, and supported — not shipped and forgotten." },
  { step: "Growth", detail: "A digital foundation the business can keep building on." },
];

export const projects = [
  {
    name: "Rupal Films",
    url: "https://rupalfilms.com/",
    image: rupalHero,
    description:
      "Movies and cinematic portfolio platform showcasing premium films.",
    problem:
      "A premium photography studio had no platform matching the quality of its own work.",
    tech: ["Next.js", "Framer Motion", "Cloud Media"],
  },
  {
    name: "EngineerOS",
    url: "https://ajaypandey.is-a.dev/EngineerOS/",
    image: engineerHero,
    description:
      "Developer productivity workspace with AI-powered tools and dashboards.",
    problem:
      "Engineering workflows were fragmented across multiple disconnected tools.",
    tech: ["React", "AI", "Dashboards"],
  },
  {
    name: "Google Maps Lead Engine",
    url: "https://googlemapsscraper-uciu.onrender.com/",
    image: mapsHero,
    description:
      "Business lead generation platform for discovering local businesses.",
    problem:
      "Agencies needed a scalable way to identify businesses lacking digital presence.",
    tech: ["Python", "Playwright", "Flask"],
  },
  {
    name: "Crowd Controls eSports",
    url: "https://unrivaled-sprinkles-4bac85.netlify.app/",
    image: cceHero,
    description:
      "eSports platform with tournaments, brackets, teams, and gaming events.",
    problem:
      "Organizers needed a centralized platform for tournaments and event management.",
    tech: ["React", "Node.js", "MongoDB"],
  },
  {
    name: "Workout Planner",
    url: "https://ajaypandey.is-a.dev/workout-planner/",
    image: workoutHero,
    description:
      "Fitness planning application with personalized workout routines.",
    problem:
      "Generic plans failed to adapt to individual fitness goals.",
    tech: ["React", "TypeScript"],
  },
  {
    name: "RedStore",
    url: "https://ajaypandey.is-a.dev/redstore/",
    image: redstoreHero,
    description:
      "Responsive eCommerce storefront with a modern shopping experience.",
    problem:
      "Small retailers needed an engaging online shopping platform.",
    tech: ["React", "E-commerce UI"],
  },
];

export const team = [
  {
    name: "Ajay Pandey",
    role: "Software Engineer, Wipro",
    portfolio: "https://ajaypandey.is-a.dev/",
    image: ajayImg,
    focus: ["Backend", "AI", "Cloud", "Automation", ".NET", "Python"],
  },
  {
    name: "Harsh Raj",
    role: "Software Engineer, Wipro",
    portfolio: "https://harshraj9060.github.io/personalpage/",
    image: harshImg,
    focus: ["Frontend", "React", "UI Engineering", "Modern Web Applications"],
  },
  {
    name: "Rashid Ansari",
    role: "Data Engineer, Wipro",
    portfolio: "https://personal-portfolio-next-js-five.vercel.app/",
    image: rashidImg,
    focus: ["Data Engineering", "ETL", "Cloud Data Platforms", "Analytics"],
  },
];

export const faqs = [
  {
    q: "How long does a typical project take?",
    a: "A standard business website takes 2–3 weeks. Custom software, CRMs, or automation systems typically run 4–10 weeks depending on scope. We give a specific timeline after the free consultation, not a generic range.",
  },
  {
    q: "How does pricing work?",
    a: "Every business is different, so we scope and quote per project after understanding what's actually needed. There's no fixed package — you only pay for what moves your business forward.",
  },
  {
    q: "What happens after the site or system launches?",
    a: "We stay on. Long-term support means monitoring, updates, and fixes are part of the relationship, not a one-time handoff.",
  },
  {
    q: "What technologies do you build with?",
    a: "Depending on the project: Next.js, React, and TypeScript for the web; Python and .NET for backend systems; PostgreSQL, SQL Server, and MongoDB for data; and AWS, Azure, or Google Cloud for hosting.",
  },
  {
    q: "Do I own the final website or software?",
    a: "Yes. Once a project is delivered and paid for, the code, design, and infrastructure setup belong to you. We can also hand over full documentation and access.",
  },
  {
    q: "Can AI actually be integrated into a small business?",
    a: "Yes — usually in the form of a chatbot handling enquiries, or automation quietly handling scheduling, reminders, and follow-ups in the background. It doesn't need to be complicated to be useful.",
  },
  {
    q: "What if my business already has a website?",
    a: "We audit what exists first. Sometimes it needs a rebuild, sometimes just targeted fixes to speed, SEO, or booking flow. The free digital audit tells you which, honestly.",
  },
];
