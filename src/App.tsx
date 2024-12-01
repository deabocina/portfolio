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
        <div className="logo size-[150px]">
          <img src={icons.logo} alt="Logo" />
        </div>
        <div className="language-switch flex gap-3 mr-10">
          <img
            src={icons.en}
            alt="English"
            onClick={() => switchLanguage("en")}
            className="cursor-pointer"
          />
          <img
            src={icons.hr}
            alt="Hrvatski"
            onClick={() => switchLanguage("hr")}
            className="cursor-pointer"
          />
        </div>
      </header>
      <h1>{t("header.welcome")}</h1>
    </div>
  );
};

export default App;
