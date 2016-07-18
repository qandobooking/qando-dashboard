function TimeUtils() {
  const svc = {}

  const weekDays = [0,1,2,3,4,5,6];
  svc.getWeekDays = () => {
    return weekDays;
  };

  svc.getWeekDaysNames = () => {
    const wdays = moment.weekdays()
    wdays.push(wdays.shift())
    return wdays;
  };

  svc.getMonthsByName = () => {
    return moment.months()
  };

  return svc;
}

export default TimeUtils;
