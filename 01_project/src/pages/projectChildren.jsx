import { Link, useParams } from "react-router-dom";
import { projectsViews } from "../projectsMapping";

const ProjectChildren = () => {
  const { projectId } = useParams();
  const ProjectView = projectsViews[projectId];

  if (!ProjectView) {
    return (
      <div>
        <h1 className="text-2xl font-bold text-slate-900">
          Project not found
        </h1>
        <Link to="/projects" className="mt-4 inline-block text-blue-600">
          Back to projects
        </Link>
      </div>
    );
  }

  return <ProjectView />;
};

export default ProjectChildren;
