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
      image: icons.showcaseSimplify,
      deployLink: "https://deabocina.github.io/simplify/",
    },
    weather: {
      name: t("projects.weather.name"),
      logo: icons.logoWeather,
      description: t("projects.weather.description"),
      technologies: t("projects.weather.technologies"),
      keyFeatures: t("projects.weather.keyFeatures"),
      image: icons.showcaseWeather,
      deployLink: "https://deabocina.github.io/weather-or-not/",
    },
  };

  return (
    <>
      {Object.entries(projects).map(([key, project]) => (
        <div key={key} className="project">
          <h1>{project.name}</h1>
          <img src={project.logo} alt={project.name} />
          <a
            href={project.deployLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            Deploy Link
          </a>
          <p>{project.description}</p>
          <p>{project.technologies}</p>
          <p>{project.keyFeatures}</p>
          <img src={project.image} alt={`${project.name} showcase`} />
        </div>
      ))}
    </>
  );
};

export default Projects;
