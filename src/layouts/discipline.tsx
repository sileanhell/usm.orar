import { ReactNode, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

export function DisciplineLayout({ children }: { children: ReactNode }) {
  const [value, setValue] = useState<string[]>(JSON.parse(localStorage.getItem("discipline") || "[]"));
  const [firstTime, setFirstTime] = useState(true);
  const { t } = useTranslation();

  useEffect(() => {
    if (value[0] && value[1]) {
      localStorage.setItem("discipline", JSON.stringify(value));
      setFirstTime(false);
    }
  }, [value]);

  return !firstTime ? (
    children
  ) : (
    <div className="fixed w-full h-full flex flex-col justify-center items-center gap-4">
      <div className="px-4 bg-neutral-900">
        <select onChange={(e) => setValue((old) => [e.target.value, old[1]])} defaultValue="" className="pr-4 py-2 bg-transparent outline-none">
          <option value="" disabled hidden>
            --Please choose an option--
          </option>
          <option className="bg-neutral-800" value="CV">
            {t("CV")}
          </option>
          <option className="bg-neutral-800" value="WR">
            {t("WR")}
          </option>
        </select>
      </div>
      <div className="px-4 bg-neutral-900">
        <select onChange={(e) => setValue((old) => [old[0], e.target.value])} defaultValue="" className="pr-4 py-2 bg-transparent outline-none">
          <option value="" disabled hidden>
            --Please choose an option--
          </option>
          <option className="bg-neutral-800" value="GA">
            {t("GA")}
          </option>
          <option className="bg-neutral-800" value="SF">
            {t("SF")}
          </option>
        </select>
      </div>
    </div>
  );
}
