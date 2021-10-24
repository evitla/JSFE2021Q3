import baseComponent from '../baseComponent';

export const time = baseComponent('time', ['time']);
export const date = baseComponent('date', ['date']);

const getDay = (currentDate: Date) => {
  const currentDay = currentDate.toLocaleDateString('en-US', {
    dateStyle: 'full',
  });

  // day has 'weekday, month day, year' format
  // return day without year
  return currentDay.split(', ').slice(0, 2).join(', ');
};

const showTimeAndDate = () => {
  const currentDate = new Date();
  const currentDay = getDay(currentDate);
  const currentTime = currentDate.toLocaleTimeString();

  time.textContent = currentTime;
  date.textContent = currentDay;
  setTimeout(showTimeAndDate, 1000);
};

showTimeAndDate();
