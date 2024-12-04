import { icons } from "../assets/assets";
import { useTranslation } from "react-i18next";

const Projects = () => {
  const { t } = useTranslation();

  const projects = {
    simplify: {
      name: t("projects.simplify.name"),
      logo: icons.logoSimplify,
      description: t("projects.simplify.description"),
      technologies: t("projects.simplify.technologies"),
      keyFeatures: t("projects.simplify.keyFeatures"),
      deployLink: "https://deabocina.github.io/simplify/",
    },
    weatherOrNot: {
      name: t("projects.weatherOrNot.name"),
      logo: icons.logoWeather,
      description: t("projects.weatherOrNot.description"),
      technologies: t("projects.weatherOrNot.technologies"),
      keyFeatures: t("projects.weatherOrNot.keyFeatures"),
      deployLink: "https://deabocina.github.io/weather-or-not/",
    },
  };

  return (
    <div className="min-h-screen bg-gray-50 py-10 flex justify-center mb-10">
      <div className="space-y-14">
        {Object.entries(projects).map(([key, project]) => (
          <div key={key} id={key} className="text-xl mt-12 px-4 max-w-3xl">
            <div className="flex items-center mb-10 space-x-6 bg-white p-6 rounded-2xl shadow-md transition-all duration-300 ease-in-out hover:shadow-lg ">
              <div className="w-20 h-20 p-3 bg-white rounded-full ring-4 ring-black transition-all duration-300 ease-in-out hover:ring-purple-600">
                <a
                  href={project.deployLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={project.logo}
                    alt={project.name}
                    className="object-cover w-full h-full"
                  />
                </a>
              </div>

              <div>
                <h1 className="text-3xl font-medium text-gray-800 tracking-wide">
                  {project.name}
                </h1>
                <small className="uppercase text-sm font-medium tracking-wider text-gray-400">
                  {project.technologies}
                </small>
              </div>
            </div>
            <p className="text-gray-700">{project.description}</p>

            <div className="mt-8 text-sm font-medium">
              {project.keyFeatures.split(", ").map((tag, key) => (
                <span
                  key={key}
                  className="inline-block mr-5 mb-2 bg-gray-200 rounded-3xl p-2 transition-all duration-300 ease-in-out hover:scale-110"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
