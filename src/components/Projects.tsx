import { icons } from "../assets/assets";
import { useTranslation } from "react-i18next";
import { useCustomInView } from "../hooks/useCustomInView";

const Projects = () => {
  const { ref: projectsRef, inView: projectsInView } = useCustomInView(0.1);
  const { ref: footerRef, inView: footerInView } = useCustomInView(0.4);
  const { t } = useTranslation();

  const projects = {
    prythianRealEstate: {
      name: t("projects.prythianRealEstate.name"),
      logo: icons.logoPrythianRestEstate,
      description: t("projects.prythianRealEstate.description"),
      technologies: t("projects.prythianRealEstate.technologies"),
      keyFeatures: t("projects.prythianRealEstate.keyFeatures"),
      deployLink: "https://deabocina.github.io/prythian-real-estate/",
    },
    libris: {
      name: t("projects.libris.name"),
      logo: icons.logoLibris,
      description: t("projects.libris.description"),
      technologies: t("projects.libris.technologies"),
      keyFeatures: t("projects.libris.keyFeatures"),
      deployLink: "https://deabocina.github.io/libris/",
    },
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
    happyPaws: {
      name: t("projects.happyPaws.name"),
      logo: icons.logoHappyPaws,
      description: t("projects.happyPaws.description"),
      technologies: t("projects.happyPaws.technologies"),
      keyFeatures: t("projects.happyPaws.keyFeatures"),
      deployLink: "https://github.com/deabocina/happy-paws",
    },
    homeFurGood: {
      name: t("projects.homeFurGood.name"),
      logo: icons.logoHomeFurGood,
      description: t("projects.homeFurGood.description"),
      technologies: t("projects.homeFurGood.technologies"),
      keyFeatures: t("projects.homeFurGood.keyFeatures"),
      deployLink: "https://github.com/deabocina/home-fur-good",
    },
  };

  return (
    <>
      <div
        ref={projectsRef}
        className={`min-h-screen bg-gray-50 py-10 flex justify-center mb-20 transition-all duration-1000 ease-out ${
          projectsInView
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-20"
        }`}
      >
        <div className="space-y-14">
          {Object.entries(projects).map(([key, project]) => {
            const projectId = project.name.toLowerCase().replace(/\s+/g, "-");

            return (
              <div
                key={key}
                id={projectId}
                className="max-w-4xl mx-auto w-full bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 p-5 flex flex-col md:flex-row items-start gap-4"
              >
                <a
                  href={project.deployLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-16 h-16 flex-shrink-0 rounded-full overflow-hidden hover:ring-4 hover:ring-purple-600 ease-in-out transition-all duration-300"
                >
                  <img
                    src={project.logo}
                    alt={project.name}
                    className="w-full h-full object-contain"
                  />
                </a>

                <div className="flex-1 flex flex-col gap-1">
                  <h2 className="text-lg md:text-xl font-semibold text-gray-900">
                    {project.name}
                  </h2>
                  <small className="uppercase text-gray-500 text-xs md:text-sm">
                    {project.technologies}
                  </small>
                  <p className="text-gray-700 mt-2 text-sm md:text-base">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mt-3">
                    {project.keyFeatures.split(", ").map((tag, i) => (
                      <span
                        key={i}
                        className="bg-gray-100 px-2 py-1 rounded-full text-xs font-medium hover:bg-purple-100 hover:scale-110 transition-all"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <footer
        ref={footerRef}
        className={`lg:p-16 lg:text-xl lg:mx-44 md:mx-20 mx-10 uppercase transition-all duration-1000 ease-out ${
          footerInView
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10"
        }`}
      >
        <div className="flex justify-between">
          <span className="tracking-wider text-sm font-medium mt-5">
            &copy; Dea Bočina
          </span>
          <a
            href="#"
            className="bg-black rounded-full flex items-center w-12 h-12 p-2 transition-all duration-300 hover:animate-pulse"
          >
            <img src={icons.upArrow} className="object-contain w-8 h-6" />
          </a>
        </div>

        <div className="font-medium my-24">
          <p className="lg:text-xl md:text-lg text-base">{t("footer.ideas")}</p>
          <p className="lg:text-8xl md:text-6xl text-4xl text-gray-300">
            {t("footer.message")}
          </p>
        </div>
      </footer>
    </>
  );
};

export default Projects;
