import elaroseImg from "../assets/elarose.png";
import spreadFastImg from "../assets/spreadfast.png";
import graduateConsultancyImg from "../assets/graduate-consultancy.png";
import karaokeImg from "../assets/karaoke.png";
import recipeImg from "../assets/recipe.png";
import issueImg from "../assets/issue.png";

export const PROJECTS = [
  {
    id: "elarose",
    name: "ElaRose",
    tagline: "Clothing Brand E-commerce Platform",
    description:
      "Full-stack commercial platform that boosted brand sales by 30% and drives ~BDT 50,000 in monthly revenue through an optimized catalog and seamless COD flow.",
    stack: ["Next.js", "Node.js", "MongoDB", "Tailwind", "Firebase", "Cloudinary"],
    live: "https://ela-rose-fornt-end-production.vercel.app/",
    github: null,
    highlight: "+30% sales",
    year: "2024",
    type: "FULL STACK",
    image: elaroseImg,
    challenges: "Handling real-time inventory updates during flash sales required a robust transactional approach to prevent overselling. Additionally, optimizing the Cash-on-Delivery (COD) flow to reduce drop-offs involved extensive UX testing and iterations.",
    futurePlans: "Implement an AI-powered product recommendation engine based on user browsing history, and integrate an automated SMS gateway for real-time order tracking updates."
  },
  {
    id: "spread-fast",
    name: "Spread Fast",
    tagline: "Courier Delivery & Management System",
    description:
      "Serverless logistics platform with smart rider dispatching, real-time tracking, RBAC via Firebase Admin SDK, and Stripe checkout with optimistic UI.",
    stack: ["React", "Express", "MongoDB", "Stripe", "TanStack Query", "Firebase"],
    live: "https://spread-fast.web.app/",
    github: "https://github.com/NahidRuhan/Spread-Fast-Client",
    highlight: "Real-time",
    year: "2023",
    type: "FULL STACK",
    image: spreadFastImg,
    challenges: "Building a reliable real-time tracking system for dispatchers and customers was complex due to WebSocket connection drops. Managing Role-Based Access Control (RBAC) securely across a serverless architecture also required careful architectural planning.",
    futurePlans: "Develop a native mobile application using React Native for riders to manage deliveries on the go, and introduce route optimization algorithms to minimize delivery times."
  },
  {
    id: "graduate-consultancy",
    name: "Graduate Consultancy",
    tagline: "Digital Front Door for Consultancy Firm",
    description:
      "A modern, high-performance website serving as the digital front door for the firm. Features blazing fast SSR/SSG, SEO optimization, and lead-generating contact forms.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "React"],
    live: "https://next-graduate-consultancy.vercel.app/",
    github: "https://github.com/NahidRuhan/next-graduate-consultancy",
    highlight: "SEO Optimized",
    year: "2023",
    type: "FRONTEND",
    image: graduateConsultancyImg,
    challenges: "Achieving a perfect 100 Lighthouse score for SEO and Performance required aggressive asset optimization, careful font loading strategies, and minimizing client-side JavaScript payloads.",
    futurePlans: "Integrate a headless CMS (like Sanity or Contentful) to allow the consultancy team to easily publish blog posts and case studies without developer intervention."
  },
  {
    id: "issue-tracker-api",
    name: "Issue Tracker API",
    tagline: "REST API for Tracking Git Issues",
    description:
      "Strongly-typed REST API with PostgreSQL, JWT auth, RBAC, dynamic query filtering and a centralized error-handling architecture.",
    stack: ["TypeScript", "Node.js", "Express", "PostgreSQL", "JWT"],
    live: null,
    github: "https://github.com/NahidRuhan/Issue-tracker-API",
    highlight: "Typed API",
    year: "2023",
    type: "BACKEND",
    image: issueImg,
    challenges: "Designing a robust and scalable database schema for issues, comments, and role-based permissions was challenging. Implementing complex dynamic query filters (e.g., filtering by status, assignee, and tags simultaneously) required writing efficient SQL queries.",
    futurePlans: "Build a modern frontend client (React/Next.js) to consume this API, and implement webhooks to integrate seamlessly with GitHub repositories for automated issue syncing."
  },
  {
    id: "karaoke-maker",
    name: "Ruhan's Karaoke Maker",
    tagline: "AI-Powered Audio Stem Separator",
    description:
      "Full-stack web application that utilizes Facebook's Demucs AI model to isolate vocals, drums, and bass from uploaded songs with a synchronized multi-track playback UI.",
    stack: ["React", "Node.js", "Python", "PyTorch", "FFmpeg", "Tailwind CSS"],
    live: null,
    github: "https://github.com/NahidRuhan/Ruhans-Karaoke-Maker",
    highlight: "Demucs AI",
    year: "2022",
    type: "FULL STACK",
    image: karaokeImg,
    challenges: "Bridging the gap between a Node.js server and a Python-based PyTorch machine learning model was tricky. Handling large audio file uploads and processing them asynchronously without timing out the client requests required implementing a robust background job queue.",
    futurePlans: "Deploy the AI processing backend to a scalable GPU cloud instance (like AWS EC2 or RunPod) to drastically reduce processing times, and add support for exporting individual stems."
  },
  {
    id: "recipe-manager",
    name: "Recipe Manager",
    tagline: "Recipe Sharing & Social Platform",
    description:
      "A full-stack recipe management application featuring user authentication, recipe saving, and a social system allowing users to follow others for culinary inspiration.",
    stack: ["PHP", "MySQL", "HTML", "CSS"],
    live: "https://recipemanager.infinityfreeapp.com/",
    github: "https://github.com/NahidRuhan/recipe-save-with-php-sql",
    highlight: "Social Features",
    year: "2022",
    type: "FULL STACK",
    image: recipeImg,
    challenges: "Building a custom MVC architecture from scratch in PHP without using modern frameworks was a great learning experience but presented challenges in routing and state management across sessions.",
    futurePlans: "Rewrite the entire application using a modern tech stack (Next.js + Prisma + PostgreSQL) to improve performance, developer experience, and code maintainability."
  },
];
