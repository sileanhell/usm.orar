import { Fragment, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router";
import { useProgramHook } from "../configs/program";
import { time } from "../configs/time";
import { getDayDifference } from "../utils/getDayDifference";
import { isEvenWeek } from "../utils/isEvenWeek";

export function HomePage() {
  const [datetime, setDatetime] = useState<Date>(new Date());
  const { program } = useProgramHook();
  const { t } = useTranslation();

  const dayOfWeek = (datetime.getDay() + 6) % 7;
  const getOpacity = (date: Date, week: "par" | "imp" | null) => (week && week !== isEvenWeek(date) ? "opacity-10" : undefined);
  const changeDay = (days: number) => setDatetime((d) => new Date(d.setDate(d.getDate() + days)));

  return (
    <div className="p-4 fixed w-full h-full flex justify-center items-center">
      <div className="w-full sm:w-fit flex flex-col justify-center items-center gap-4">
        <div className="w-full flex justify-between items-center">
          <span className="pl-2 flex justify-center items-center text-3xl font-bold">{t(program[dayOfWeek].id)}</span>
          <Link to="/settings" className="p-3 border-2 border-neutral-950 hover:bg-neutral-950 cursor-pointer duration-200">
            <svg fill="currentColor" viewBox="0 0 512 512" height="18" width="18" xmlns="http://www.w3.org/2000/svg">
              <path d="M256 176a80 80 0 1 0 80 80 80.24 80.24 0 0 0-80-80zm172.72 80a165.53 165.53 0 0 1-1.64 22.34l48.69 38.12a11.59 11.59 0 0 1 2.63 14.78l-46.06 79.52a11.64 11.64 0 0 1-14.14 4.93l-57.25-23a176.56 176.56 0 0 1-38.82 22.67l-8.56 60.78a11.93 11.93 0 0 1-11.51 9.86h-92.12a12 12 0 0 1-11.51-9.53l-8.56-60.78A169.3 169.3 0 0 1 151.05 393L93.8 416a11.64 11.64 0 0 1-14.14-4.92L33.6 331.57a11.59 11.59 0 0 1 2.63-14.78l48.69-38.12A174.58 174.58 0 0 1 83.28 256a165.53 165.53 0 0 1 1.64-22.34l-48.69-38.12a11.59 11.59 0 0 1-2.63-14.78l46.06-79.52a11.64 11.64 0 0 1 14.14-4.93l57.25 23a176.56 176.56 0 0 1 38.82-22.67l8.56-60.78A11.93 11.93 0 0 1 209.94 26h92.12a12 12 0 0 1 11.51 9.53l8.56 60.78A169.3 169.3 0 0 1 361 119l57.2-23a11.64 11.64 0 0 1 14.14 4.92l46.06 79.52a11.59 11.59 0 0 1-2.63 14.78l-48.69 38.12a174.58 174.58 0 0 1 1.64 22.66z"></path>
            </svg>
          </Link>
        </div>
        <div className="w-full grid grid-cols-[auto_1fr_auto] border-b-2 border-neutral-950">
          {program[dayOfWeek].lessons.map((item, index) => (
            <Fragment key={index}>
              <div className="p-4 border-2 border-b-0 border-neutral-950">
                <div className={`${item && getOpacity(datetime, item.week)} flex flex-col justify-center items-center`}>
                  {time[index].map((item, index) => (
                    <p key={index}>{item}</p>
                  ))}
                </div>
              </div>

              <div className="p-4 w-full border-t-2 border-neutral-950">
                <div className={`${item && getOpacity(datetime, item.week)} flex flex-col justify-between items-start`}>
                  {item ? (
                    <>
                      <span className="font-semibold">{t(item.id)}</span>
                      <span className="text-neutral-400">{item.professor}</span>
                    </>
                  ) : (
                    <div className="w-full sm:w-[20rem]" />
                  )}
                </div>
              </div>
              <div className="p-4 border-2 border-b-0 border-neutral-950">
                <div className={`${item && getOpacity(datetime, item.week)} flex flex-col justify-between items-center`}>
                  {item ? (
                    <>
                      <span className="font-semibold uppercase">{item.type}</span>
                      <span className="text-neutral-400">{item.room}</span>
                    </>
                  ) : (
                    <div className="w-[3rem]" />
                  )}
                </div>
              </div>
            </Fragment>
          ))}
        </div>
        <div className="w-full grid grid-cols-[auto_1fr_auto] gap-2">
          <button onClick={() => changeDay(-1)} className="px-4 py-2 bg-neutral-950 cursor-pointer hover:bg-neutral-900">
            <svg fill="currentColor" viewBox="0 0 320 512" height="18" width="18" xmlns="http://www.w3.org/2000/svg">
              <path d="M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z"></path>
            </svg>
          </button>
          <button onClick={() => setDatetime(new Date())} className="w-full py-2 bg-neutral-950 cursor-pointer hover:bg-neutral-900">
            Reset
          </button>
          <button onClick={() => changeDay(1)} className="px-4 py-2 bg-neutral-950 cursor-pointer hover:bg-neutral-900">
            <svg fill="currentColor" viewBox="0 0 320 512" height="18" width="18" xmlns="http://www.w3.org/2000/svg">
              <path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"></path>
            </svg>
          </button>
        </div>
        <div className="px-4 py-2 w-full grid grid-cols-3 gap-2 border-2 border-neutral-950">
          <div className="flex flex-col justify-center items-start">
            <span className="text-neutral-500">Now</span>
            <span className="italic">{new Date().toLocaleDateString("ru-RU")}</span>
          </div>
          <div className="flex flex-col justify-center items-center">
            <span className="text-neutral-500">Selected</span>
            <span className="italic">{datetime.toLocaleDateString("ru-RU")}</span>
          </div>
          <div className="flex flex-col justify-center items-end">
            <span className="text-neutral-500">Offset</span>
            <span className="italic">{getDayDifference(new Date(), datetime)}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
