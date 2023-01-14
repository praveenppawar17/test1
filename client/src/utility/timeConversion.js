export const date_diff_indays = (dt1, date2) => {
  let dt2 = new Date(date2);
  let day = Math.floor(
    (Date.UTC(dt2.getFullYear(), dt2.getMonth(), dt2.getDate()) -
      Date.UTC(dt1.getFullYear(), dt1.getMonth(), dt1.getDate())) /
      (1000 * 60 * 60 * 24)
  );
  if (day >= -7) {
    return "New";
  } else {
    return `${Math.abs(day)} days ago`;
  }
};
