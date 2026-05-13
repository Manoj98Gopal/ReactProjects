import React from "react";
import { Link } from "react-router-dom";

const ProjectData = [
  {
    title: "Closures & Stale Closures",
    link: "/projects/closures-and-stale-closures"
  }
];

const Projects = () => {
  return (
    <div>
      {ProjectData?.map((data, idx) => {
        return (
          <div key={data.link} className="flex gap-2 items-center">
            <p>{idx + 1}</p>
            <Link to={data.link} className="text-blue-600">
              {data.title}
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default Projects;
