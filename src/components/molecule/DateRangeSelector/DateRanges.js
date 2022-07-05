import moment from "moment";

export const staticDateRanges = [
  // ...defaultStaticRanges,
  {
    label: "Last 7 Days",
    range: () => ({
      startDate: moment().subtract(7, "day").endOf("day").toDate(),
      endDate: moment().endOf("day").toDate(),
    }),
  },
  {
    label: "Last 30 Days",
    range: () => ({
      startDate: moment().subtract(1, "month").endOf("day").toDate(),
      endDate: moment().endOf("day").toDate(),
    }),
  },
  {
    label: "Last 3 Months",
    range: () => ({
      startDate: moment().subtract(3, "month").endOf("day").toDate(),
      endDate: moment().endOf("day").toDate(),
    }),
  },
  {
    label: "Custom Range",
    range: () => ({
      startDate: moment().endOf("day").toDate(),
      endDate: moment().endOf("day").toDate(),
      key: "rollup",
    }),
  },
];
export default staticDateRanges;
