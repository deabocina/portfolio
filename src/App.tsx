import "./App.css";
import { icons } from "./assets/assets";
import "./config/i18n";
import { useTranslation } from "react-i18next";

const App = () => {
  const { t, i18n } = useTranslation();

  const switchLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  return (
    <div>
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

      <div className="flex flex-wrap md:flex-row">
        <div className="basis-3/5 ml-10">
          <h1 className="text-9xl font-medium">{t("main.intro")}</h1>
          <p className="text-2xl mt-10">{t("main.about")}</p>
        </div>

        <div className="flex-wrap mt-5 ml-20">
          <p className="uppercase font-medium tracking-wider text-gray-400 w-500 mb-5 transition-all duration-300 ease-in-out hover:scale-125">
            {t("main.projects")}
          </p>
          <p className="font-medium py-2 border-b-2 border-gray-100">
            Weather or Not
          </p>
          <p className="font-medium py-2 border-b-2 border-gray-100">
            Simplify
          </p>
        </div>
      </div>
    </div>
  );
};

export default App;
