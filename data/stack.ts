export interface StackItem {
  name: string;
  devicon: string;
}

export interface StackCategory {
  category: string;
  items: StackItem[];
}

export const stackData: StackCategory[] = [
  {
    category: "Frontend",
    items: [
      { name: "React", devicon: "devicon-react-original colored" },
      { name: "Next.js", devicon: "devicon-nextjs-plain" },
      { name: "TypeScript", devicon: "devicon-typescript-plain colored" },
      { name: "Tailwind CSS", devicon: "devicon-tailwindcss-original colored" },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", devicon: "devicon-nodejs-plain colored" },
      { name: "Fastify", devicon: "devicon-fastify-plain" },
      { name: "Spring Boot", devicon: "devicon-spring-plain colored" },
      { name: "Java", devicon: "devicon-java-plain colored" },
    ],
  },
  {
    category: "Database",
    items: [
      { name: "PostgreSQL", devicon: "devicon-postgresql-plain colored" },
      { name: "Supabase", devicon: "devicon-supabase-plain colored" },
    ],
  },
  {
    category: "Tools",
    items: [
      { name: "Git", devicon: "devicon-git-plain colored" },
      { name: "Docker", devicon: "devicon-docker-plain colored" },
      { name: "Prisma", devicon: "devicon-prisma-original" },
    ],
  },
];
