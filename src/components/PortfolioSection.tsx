import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { motion } from "framer-motion";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  type: string;
  githubUrl: string;
  liveUrl: string;
}

interface PortfolioSectionProps {
  projects?: Project[];
}

const defaultProjects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A modern e-commerce platform with advanced features",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500",
    technologies: ["React", "Node.js", "MongoDB"],
    type: "Full Stack",
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
  },
  {
    id: 2,
    title: "Portfolio Website",
    description: "A responsive portfolio website with animations",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500",
    technologies: ["React", "Tailwind", "Framer Motion"],
    type: "Frontend",
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
  },
  {
    id: 3,
    title: "Task Management App",
    description: "A collaborative task management application",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=500",
    technologies: ["React", "Express", "PostgreSQL"],
    type: "Full Stack",
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
  },
  {
    id: 4,
    title: "Weather Dashboard",
    description: "Real-time weather monitoring dashboard",
    image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=500",
    technologies: ["React", "TypeScript", "API Integration"],
    type: "Frontend",
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
  },
  {
    id: 5,
    title: "Blog Platform",
    description: "A modern blogging platform with CMS",
    image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=500",
    technologies: ["Next.js", "Prisma", "PostgreSQL"],
    type: "Full Stack",
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
  },
  {
    id: 6,
    title: "Analytics Dashboard",
    description: "Data visualization and analytics platform",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500",
    technologies: ["React", "D3.js", "Node.js"],
    type: "Full Stack",
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
  },
];

const PortfolioSection = ({
  projects = defaultProjects,
}: PortfolioSectionProps) => {
  const [filter, setFilter] = useState("all");

  const filteredProjects = projects.filter((project) => {
    if (filter === "all") return true;
    return project.type.toLowerCase() === filter.toLowerCase();
  });

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section className="w-full py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">
          Featured Projects
        </h2>

        <Tabs defaultValue="all" className="w-full mb-8">
          <TabsList className="flex justify-center">
            <TabsTrigger value="all" onClick={() => setFilter("all")}>
              All
            </TabsTrigger>
            <TabsTrigger value="frontend" onClick={() => setFilter("frontend")}>
              Frontend
            </TabsTrigger>
            <TabsTrigger
              value="full stack"
              onClick={() => setFilter("full stack")}
            >
              Full Stack
            </TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="mt-8">
            <motion.div
              variants={container}
              initial="hidden"
              animate="show"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filteredProjects.map((project) => (
                <motion.div key={project.id} variants={item}>
                  <ProjectCard
                    title={project.title}
                    description={project.description}
                    image={project.image}
                    technologies={project.technologies}
                    githubUrl={project.githubUrl}
                    liveUrl={project.liveUrl}
                  />
                </motion.div>
              ))}
            </motion.div>
          </TabsContent>

          <TabsContent value="frontend">
            <motion.div
              variants={container}
              initial="hidden"
              animate="show"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filteredProjects.map((project) => (
                <motion.div key={project.id} variants={item}>
                  <ProjectCard
                    title={project.title}
                    description={project.description}
                    image={project.image}
                    technologies={project.technologies}
                    githubUrl={project.githubUrl}
                    liveUrl={project.liveUrl}
                  />
                </motion.div>
              ))}
            </motion.div>
          </TabsContent>

          <TabsContent value="full stack">
            <motion.div
              variants={container}
              initial="hidden"
              animate="show"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filteredProjects.map((project) => (
                <motion.div key={project.id} variants={item}>
                  <ProjectCard
                    title={project.title}
                    description={project.description}
                    image={project.image}
                    technologies={project.technologies}
                    githubUrl={project.githubUrl}
                    liveUrl={project.liveUrl}
                  />
                </motion.div>
              ))}
            </motion.div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default PortfolioSection;
