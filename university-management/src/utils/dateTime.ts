export const generateYearOptions = (
  range = 10,
  startYear = new Date().getFullYear()
) => {
  const yearOptions = [];
  for (let i = 0; i <= range; i++) {
    yearOptions.push({ year: startYear + i });
  }
  return yearOptions;
};

export const academicName = [
  {
    name: "Autumn",
    value: "01",
  },
  {
    name: "Summer",
    value: "02",
  },
  {
    name: "Fall",
    value: "03",
  },
];

export const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
