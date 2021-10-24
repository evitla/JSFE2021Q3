import baseComponent from '../baseComponent';
import { showGreeting } from './greeting';

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

const showTimeDateAndGreeting = () => {
  const currentDate = new Date();
  const currentDay = getDay(currentDate);
  const currentTime = currentDate.toLocaleTimeString();

  time.textContent = currentTime;
  date.textContent = currentDay;
  showGreeting(currentDate);
  setTimeout(showTimeDateAndGreeting, 1000);
};

showTimeDateAndGreeting();
