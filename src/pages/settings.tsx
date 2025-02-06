import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router";

export function SettingsPage() {
  const [value, setValue] = useState<string[]>(JSON.parse(localStorage.getItem("discipline") || "[]"));
  const { t, i18n } = useTranslation();

  const changeLang = (lang: string) => {
    localStorage.setItem("lang", lang);
    i18n.changeLanguage(lang);
  };

  useEffect(() => {
    localStorage.setItem("discipline", JSON.stringify(value));
  }, [value]);

  return (
    <div className="p-4 fixed w-full h-full flex justify-center items-center">
      <div className="flex flex-col justify-center items-center gap-4">
        <div className="w-full flex justify-between items-center gap-4">
          <span className="pl-2 flex justify-center items-center text-3xl font-bold">{t("settings")}</span>
          <Link to="/" className="p-3 border-2 border-neutral-950 hover:bg-neutral-950 cursor-pointer duration-200">
            <svg fill="currentColor" viewBox="0 0 512 512" height="18" width="18" xmlns="http://www.w3.org/2000/svg">
              <path d="M321.94 98 158.82 237.78a24 24 0 0 0 0 36.44L321.94 414c15.57 13.34 39.62 2.28 39.62-18.22v-279.6c0-20.5-24.05-31.56-39.62-18.18z"></path>
            </svg>
          </Link>
        </div>
        <div className="flex flex-col justify-center items-start gap-4">
          <div className="w-full px-4 border-2 border-neutral-950">
            <select onChange={(e) => setValue((old) => [e.target.value, old[1]])} defaultValue={value[0]} className="w-full py-2 bg-transparent outline-none">
              <option className="bg-neutral-800" value="CV">
                {t("CV")}
              </option>
              <option className="bg-neutral-800" value="WR">
                {t("WR")}
              </option>
            </select>
          </div>
          <div className="w-full px-4 border-2 border-neutral-950">
            <select onChange={(e) => setValue((old) => [old[0], e.target.value])} defaultValue={value[1]} className="w-full py-2 bg-transparent outline-none">
              <option className="bg-neutral-800" value="GA">
                {t("GA")}
              </option>
              <option className="bg-neutral-800" value="SF">
                {t("SF")}
              </option>
            </select>
          </div>
          <div className="w-full px-4 border-2 border-neutral-950">
            <select onChange={(e) => changeLang(e.target.value)} defaultValue={localStorage.getItem("lang") || "ro"} className="w-full py-2 bg-transparent outline-none">
              <option className="bg-neutral-800 flex justify-center items-start" value="ru">
                Русский
              </option>
              <option className="bg-neutral-800" value="ro">
                Română
              </option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}
