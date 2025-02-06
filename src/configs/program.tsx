type ProgramType = {
  id: "monday" | "tuesday" | "wednesday" | "thursday" | "friday" | "saturday" | "sunday";
  lessons: LessonType[];
};

type LessonType = {
  id: string;
  week: "par" | "imp" | null;
  professor?: string;
  room?: string;
  type?: "lab" | "curs" | "sem";
} | null;

export function useProgramHook(): { program: ProgramType[] } {
  const getLessonId = (index: number) => JSON.parse(localStorage.getItem("discipline") as string)[index];

  return {
    program: [
      {
        id: "monday",
        lessons: [
          null,
          {
            id: getLessonId(1),
            professor: getLessonId(1) === "GA" ? "D. Pugaci" : "O. Ciornei",
            room: getLessonId(1) === "GA" ? "423/4" : "218/4a",
            type: "lab",
            week: getLessonId(1) === "GA" ? "imp" : null,
          },
          {
            id: "PHP",
            professor: "N. Nartea",
            room: "350/4",
            type: "lab",
            week: "par",
          },
          {
            id: "PHP",
            professor: "N. Nartea",
            room: "350/4",
            type: "lab",
            week: null,
          },
        ],
      },
      {
        id: "tuesday",
        lessons: [
          null,
          {
            id: "CNMO",
            professor: "I. Verlan",
            room: "143/4",
            type: "lab",
            week: null,
          },
          {
            id: "CNMO",
            professor: "I. Verlan",
            room: "401/4",
            type: "curs",
            week: null,
          },
          null,
        ],
      },
      {
        id: "wednesday",
        lessons: [
          {
            id: getLessonId(1),
            professor: getLessonId(1) === "GA" ? "D. Pugaci" : "O. Ciornei",
            room: getLessonId(1) === "GA" ? "423/4" : "145/4",
            type: "lab",
            week: getLessonId(1) === "SF" ? "par" : null,
          },
          {
            id: getLessonId(1),
            professor: getLessonId(1) === "GA" ? "D. Pugaci" : "O. Ciornei",
            room: getLessonId(1) === "GA" ? "214/4" : "404/4",
            type: "curs",
            week: null,
          },
          {
            id: "PSI",
            professor: "M. Butnaru",
            room: "254/4",
            type: "lab",
            week: null,
          },
          {
            id: "CNMO",
            professor: "I. Verlan",
            room: "216a/4a",
            type: "lab",
            week: "par",
          },
        ],
      },
      {
        id: "thursday",
        lessons: [
          null,
          null,
          {
            id: "EF",
            week: "par",
          },
          {
            id: "PHP",
            professor: "N. Nartea",
            room: "213a/4",
            type: "curs",
            week: null,
          },
        ],
      },
      {
        id: "friday",
        lessons: [
          {
            id: "SGBD",
            professor: "Cr. Ulmanu",
            room: "143/4",
            type: "lab",
            week: null,
          },
          {
            id: "PSI",
            professor: "A. Gladei",
            room: "113/4",
            type: "curs",
            week: null,
          },
          {
            id: getLessonId(0),
            professor: getLessonId(0) === "CV" ? "M. Croitor" : "N. Nartea",
            room: getLessonId(0) === "CV" ? "326/4" : "423/4",
            type: getLessonId(0) === "CV" ? "lab" : "curs",
            week: null,
          },
          getLessonId(0) === "WR"
            ? {
                id: "WR",
                professor: "N. Nartea",
                room: "423/4",
                type: "lab",
                week: null,
              }
            : null,
          getLessonId(0) === "WR"
            ? {
                id: getLessonId(0),
                professor: "N. Nartea",
                room: "423/4",
                type: "lab",
                week: "imp",
              }
            : null,
        ],
      },
      {
        id: "saturday",
        lessons: [
          null,
          {
            id: "SGBD",
            professor: "Cr. Ulmanu",
            room: "404/4",
            type: "curs",
            week: null,
          },
          getLessonId(0) === "CV"
            ? {
                id: "CV",
                professor: "M. Croitor",
                room: "214/4",
                type: "curs",
                week: null,
              }
            : null,
          getLessonId(0) === "CV"
            ? {
                id: "CV",
                professor: "M. Croitor",
                room: "326/4",
                type: "lab",
                week: "par",
              }
            : null,
        ],
      },
      {
        id: "sunday",
        lessons: [null, null, null, null],
      },
    ],
  };
}
