import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Progress } from "../ui/progress";

interface Project {
  id: string;
  name: string;
  progress: number;
  status: string;
  dueDate: string;
}

interface ProjectOverviewProps {
  projects?: Project[];
}

const ProjectOverview = ({
  projects = [
    {
      id: "1",
      name: "Website Redesign",
      progress: 75,
      status: "In Progress",
      dueDate: "2024-04-15",
    },
    {
      id: "2",
      name: "Mobile App Development",
      progress: 30,
      status: "In Progress",
      dueDate: "2024-05-01",
    },
    {
      id: "3",
      name: "E-commerce Platform",
      progress: 90,
      status: "Review",
      dueDate: "2024-03-30",
    },
  ],
}: ProjectOverviewProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Active Projects</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {projects.map((project) => (
            <div key={project.id} className="space-y-2">
              <div className="flex justify-between items-center">
                <h3 className="font-medium">{project.name}</h3>
                <span className="text-sm text-muted-foreground">
                  Due {new Date(project.dueDate).toLocaleDateString()}
                </span>
              </div>
              <Progress value={project.progress} className="h-2" />
              <div className="flex justify-between items-center text-sm">
                <span
                  className={`px-2 py-1 rounded-full ${getStatusColor(project.status)}`}
                >
                  {project.status}
                </span>
                <span>{project.progress}%</span>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

const getStatusColor = (status: string) => {
  switch (status.toLowerCase()) {
    case "completed":
      return "bg-green-100 text-green-800";
    case "in progress":
      return "bg-blue-100 text-blue-800";
    case "review":
      return "bg-yellow-100 text-yellow-800";
    default:
      return "bg-gray-100 text-gray-800";
  }
};

export default ProjectOverview;
