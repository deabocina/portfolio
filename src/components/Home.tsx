import { icons } from "../assets/assets";
import "../config/i18n";
import { useTranslation } from "react-i18next";
import { useCustomInView } from "../hooks/useCustomInView";

const Home = () => {
  const projects = ["Prythian Real Estate", "Libris", "Simplify", "Weather or Not", "Happy Paws", "Home Fur Good"];
  const { ref, inView } = useCustomInView(0);
  const { t, i18n } = useTranslation();

  const switchLanguage = (lang: string) => i18n.changeLanguage(lang);

  const langEffect =
    "cursor-pointer aspect-square w-10 md:w-12 lg:w-12 transition-all duration-300 ease-in-out hover:ring-4 rounded-full hover:ring-purple-600";

  return (
    <div
      ref={ref}
      className={`min-h-screen mb-10 transition-all duration-1000 ease-out ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <header className="sticky top-0 z-50 backdrop-blur-md bg-white/70 p-4 flex justify-between items-center shadow-md">
        <div className="transition-all duration-300 ease-in-out hover:scale-105">
          <a href="/portfolio/">
            <img src={icons.logo} alt="Logo" className="w-16 md:w-28 lg:w-36" />
          </a>
        </div>
        <div className="flex gap-3">
          <img src={icons.en} alt="English" onClick={() => switchLanguage("en")} className={langEffect} />
          <img src={icons.hr} alt="Croatian" onClick={() => switchLanguage("hr")} className={langEffect} />
          <img src={icons.de} alt="German" onClick={() => switchLanguage("de")} className={langEffect} />
          <img src={icons.fr} alt="French" onClick={() => switchLanguage("fr")} className={langEffect} />
        </div>
      </header>

      <section className="flex flex-col lg:flex-row items-start lg:items-center justify-between px-6 lg:px-20 mt-20">
        <div className="flex-1">
          <h1 className="text-[clamp(2rem,8vw,5rem)] font-bold leading-tight text-gray-900">
            {t("home.intro")}
          </h1>
          <p className="mt-6 text-gray-700 text-lg md:text-xl">{t("home.about")}</p>

          <div className="flex gap-4 mt-8">
            <a href="mailto:deabocina9@gmail.com" className="hover:ring-4 hover:ring-purple-600 rounded-full transition-all duration-300">
              <img src={icons.email} alt="Email" className="w-10 md:w-12 lg:w-14" />
            </a>
            <a href="https://github.com/deabocina" target="_blank" rel="noreferrer" className="hover:ring-4 hover:ring-purple-600 rounded-full transition-all duration-300">
              <img src={icons.github} alt="Github" className="w-10 md:w-12 lg:w-14" />
            </a>
          </div>
        </div>

        <div className="mt-12 ml-12 lg:mt-0 flex-1">
          <p className="uppercase text-gray-400 font-medium tracking-wider mb-6">{t("home.projects")}</p>
          <div className="flex flex-col gap-4">
            {projects.map((project, index) => (
              <a
                key={index}
                href={`#${project.toLowerCase().replace(/\s+/g, "-")}`}
                className="flex justify-between items-center py-2 px-4 border-b border-gray-200 hover:border-gray-400 transition-all duration-300 rounded-lg group"
              >
                <span className="text-gray-800 font-medium">{project}</span>
                <img
                  src={icons.rightArrow}
                  alt=""
                  className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
