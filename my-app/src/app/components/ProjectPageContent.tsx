// components/Project.js
import projects from "../data/projects.json";

export default function ProjectPageContent({ id }: { id: string }) {
  // Find the project with the matching ID
  const project = projects.find((project) => project.id === id);

  // If no project was found, return a 404 page
  if (!project) {
    return <h1>404 - Project Not Found</h1>;
  }

  return (
    <div>
      <h1>{project.title}</h1>
      <p>{project.description}</p>
    </div>
  );
}