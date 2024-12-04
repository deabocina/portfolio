import { icons } from "../assets/assets";
import "../config/i18n";
import { useTranslation } from "react-i18next";

const Home = () => {
  const projects = ["Simplify", "Weather or Not"];
  const { t, i18n } = useTranslation();

  const switchLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
  };
  const langEffect =
    "cursor-pointer aspect-square lg:w-12 md:w-10 w-9 transition-all duration-300 ease-in-out hover:ring-4 rounded-full hover:ring-purple-600";

  return (
    <div className="min-h-screen mb-10">
      <header className="p-4 flex justify-between items-center">
        <div className="ml-5 transition-all duration-300 ease-in-out hover:scale-125">
          <a href="/portfolio/">
            <img
              src={icons.logo}
              alt="Logo"
              className="lg:w-36 md:w-28 sm:w-20 w-16"
            />
          </a>
        </div>
        <div className="flex gap-3 lg:mr-20 mr-5">
          <img
            src={icons.en}
            alt="English"
            onClick={() => switchLanguage("en")}
            className={langEffect}
          />
          <img
            src={icons.hr}
            alt="Hrvatski"
            onClick={() => switchLanguage("hr")}
            className={langEffect}
          />
          <img
            src={icons.de}
            alt="German"
            onClick={() => switchLanguage("de")}
            className={langEffect}
          />
          <img
            src={icons.fr}
            alt="French"
            onClick={() => switchLanguage("fr")}
            className={langEffect}
          />
        </div>
      </header>

      <div className="flex flex-wrap mt-14 lg:ml-5">
        <div className="lg:basis-3/5 size-9/12 mx-10">
          <h1 className="lg:text-9xl md:text-8xl text-7xl font-medium">
            {t("home.intro")}
          </h1>
          <p className="lg:text-2xl text-xl mt-10">{t("home.about")}</p>

          <div className="flex cursor-pointer mt-10 justify-center">
            <a href="mailto:deabocina9@gmail.com">
              <img
                src={icons.email}
                alt="E-mail Account"
                className="aspect-square lg:w-14 md:w-12 w-10 mr-5 transition-all duration-300 ease-in-out hover:ring-4 rounded-full hover:ring-purple-600"
              />
            </a>
            <a
              href="https://github.com/deabocina"
              target="_blank"
              rel="noreferrer nofollow"
            >
              <img
                src={icons.github}
                alt="Github Profile"
                className="aspect-square lg:w-14 md:w-12 w-10 mr-5 transition-all duration-300 ease-in-out hover:ring-4 rounded-full hover:ring-purple-600"
              />
            </a>
          </div>
        </div>

        <div className="xl:ml-20 mx-auto">
          <p className="uppercase mt-20 font-medium tracking-wider text-gray-400 w-500 mb-5 transition-all duration-300 ease-in-out hover:animate-bounce">
            {t("home.projects")}
          </p>

          {projects.map((project, index) => (
            <div key={index} className="relative group font-medium w-72">
              <a href={`#${project.toLowerCase().replace(/\s+/g, "-")}`}>
                <p className="py-2 border-b-2 border-gray-100 transition-all duration-300 ease-in-out hover:border-gray-400 cursor-pointer">
                  {project}
                </p>
              </a>

              <img
                src={icons.rightArrow}
                className="absolute top-0 right-0 w-5 h-5 mt-3 opacity-0 transition-all duration-300 ease-in-out group-hover:opacity-100 cursor-pointer"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
