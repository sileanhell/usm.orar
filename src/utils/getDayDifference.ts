export const getDayDifference = (date1: Date, date2: Date) => {
  const d1 = new Date(date1);
  const d2 = new Date(date2);
  d1.setHours(0, 0, 0, 0);
  d2.setHours(0, 0, 0, 0);
  const diffInMs = d2.getTime() - d1.getTime();
  return Math.floor(diffInMs / (1000 * 60 * 60 * 24));
};
