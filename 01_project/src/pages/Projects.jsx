import React from "react";
import { Link } from "react-router-dom";

const ProjectData = [
  {
    title: "Closures & Stale Closures",
    description:
      "Practice JavaScript closures, stale closure behavior, and how values are captured over time.",
    link: "/projects/closures-and-stale-closures",
    status: "Implemented"
  },
  {
    title: "Custom Hooks",
    description:
      "Build reusable hooks with fetch, debounce, search, loading states, and paginated product data.",
    link: "/projects/custom-hooks",
    status: "Implemented"
  },
  {
    title: "Component Patterns",
    description:
      "Reusable React patterns we are implementing as separate focused examples.",
    subLinks: [
      {
        title: "Compound Components",
        description:
          "Share state between related components while keeping the public API readable.",
        link: "/projects/compound-components"
      },
      {
        title: "Headless Components",
        description:
          "Separate behavior from styling so the UI can be fully customized.",
        link: "/projects/headless-components"
      },
      {
        title: "HOC Components",
        description:
          "Wrap components with reusable behavior using higher-order components.",
        link: "/projects/hoc-components"
      },
      {
        title: "Polymorphic Components",
        description:
          "Create flexible components that can render as different HTML elements.",
        link: "/projects/polymorphic-components"
      }
    ],
    status: "Implemented"
  }
];

const Projects = () => {
  return (
    <div className="pt-14">
      <div className="mb-8">
        <p className="text-sm font-semibold uppercase tracking-wide text-blue-600">
          React Practice
        </p>
        <h1 className="mt-2 text-3xl font-bold text-slate-950">Projects</h1>
        <p className="mt-2 max-w-2xl text-slate-600">
          A small index of the concepts and UI patterns we are implementing in
          this project.
        </p>
      </div>

      <div className="space-y-5">
        {ProjectData.map((project, idx) => (
          <section
            key={project.title}
            className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm"
          >
            <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
              <div className="flex gap-4">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded bg-slate-950 text-sm font-bold text-white">
                  {idx + 1}
                </span>
                <div>
                  {project.link ? (
                    <Link
                      to={project.link}
                      className="text-xl font-bold text-slate-950 transition hover:text-blue-600"
                    >
                      {project.title}
                    </Link>
                  ) : (
                    <h2 className="text-xl font-bold text-slate-950">
                      {project.title}
                    </h2>
                  )}
                  <p className="mt-1 text-sm leading-6 text-slate-600">
                    {project.description}
                  </p>
                </div>
              </div>

              {project.status && (
                <span className="w-fit rounded bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
                  {project.status}
                </span>
              )}
            </div>

            {project.subLinks && (
              <div className="mt-5 grid gap-3 border-t border-slate-100 pt-5 md:grid-cols-2">
                {project.subLinks.map((subLink) => (
                  <Link
                    key={subLink.link}
                    to={subLink.link}
                    className="rounded-lg border border-slate-200 p-4 transition hover:border-blue-300 hover:bg-blue-50"
                  >
                    <h3 className="font-semibold text-slate-950">
                      {subLink.title}
                    </h3>
                    <p className="mt-1 text-sm leading-6 text-slate-600">
                      {subLink.description}
                    </p>
                  </Link>
                ))}
              </div>
            )}
          </section>
        ))}
      </div>
    </div>
  );
};

export default Projects;
