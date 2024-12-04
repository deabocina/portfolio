import { icons } from "../assets/assets";
import "../config/i18n";
import { useTranslation } from "react-i18next";

const Home = () => {
  const projects = ["Simplify", "Weather or Not"];
  const { t, i18n } = useTranslation();

  const switchLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  return (
    <div className="h-screen">
      <header className="p-4 flex justify-between items-center">
        <div className="logo size-[150px] ml-5 transition-all duration-300 ease-in-out hover:scale-125">
          <a href="/">
            <img src={icons.logo} alt="Logo" />
          </a>
        </div>
        <div className="language-switch flex gap-3 mr-20">
          <img
            src={icons.en}
            alt="English"
            onClick={() => switchLanguage("en")}
            className="cursor-pointer w-12 h-12 transition-all duration-300 ease-in-out hover:ring-4 rounded-full hover:ring-purple-600"
          />
          <img
            src={icons.hr}
            alt="Hrvatski"
            onClick={() => switchLanguage("hr")}
            className="cursor-pointer w-12 h-12 transition-all duration-300 ease-in-out hover:ring-4 rounded-full hover:ring-purple-600"
          />
        </div>
      </header>

      <div className="flex flex-wrap mt-14 md:flex-row">
        <div className="basis-3/5 ml-10">
          <h1 className="text-9xl font-medium">{t("home.intro")}</h1>
          <p className="text-2xl mt-10">{t("home.about")}</p>

          <div className="flex cursor-pointer mt-10 justify-center">
            <a href="mailto:deabocina9@gmail.com">
              <img
                src={icons.email}
                alt="E-mail Account"
                className="size-14 mr-5 transition-all duration-300 ease-in-out hover:ring-4 rounded-full hover:ring-purple-600"
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
                className="size-14 mr-5 transition-all duration-300 ease-in-out hover:ring-4 rounded-full hover:ring-purple-600"
              />
            </a>
          </div>
        </div>

        <div className="flex-wrap mt-5 ml-20">
          <p className="uppercase font-medium tracking-wider text-gray-400 w-500 mb-5 transition-all duration-300 ease-in-out hover:scale-125">
            {t("home.projects")}
          </p>

          {projects.map((project, index) => (
            <div key={index} className="relative group font-medium w-72">
              <a href={`#${project.toLowerCase().replace(/\s+/g, "")}`}>
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
