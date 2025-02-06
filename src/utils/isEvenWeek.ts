export const isEvenWeek = (date: Date): "par" | "imp" => {
  const startOfYear = new Date(date.getFullYear(), 0, 1);

  const firstMonday = new Date(startOfYear);
  while (firstMonday.getDay() !== 1) {
    firstMonday.setDate(firstMonday.getDate() + 1);
  }

  if (date < firstMonday) {
    const lastDayOfPreviousYear = new Date(date.getFullYear() - 1, 11, 31);
    return isEvenWeek(lastDayOfPreviousYear);
  }

  const diffInMs = date.getTime() - firstMonday.getTime();
  const weekNumber = Math.floor(diffInMs / (1000 * 60 * 60 * 24 * 7)) + 1;
  return weekNumber % 2 === 0 ? "imp" : "par";
};
