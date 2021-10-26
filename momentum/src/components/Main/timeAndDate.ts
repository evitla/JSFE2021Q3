import baseComponent from '../baseComponent';
import store from '../store';
import { showGreeting } from './greeting';

export const time = baseComponent('time', ['time']);
if (!store.blocks.includes('time')) time.classList.add('non-visible');

export const date = baseComponent('date', ['date']);
if (!store.blocks.includes('date')) date.classList.add('non-visible');

const getDay = (currentDate: Date) => {
  const currentDay = currentDate.toLocaleDateString(store.language, {
    dateStyle: 'full',
  });

  // in 'en' day has 'Sunday, October 24, 2021' format
  // in 'ru' day has 'воскресенье, 24 октября 2021 г.' format
  // return day without year
  return store.language === 'en'
    ? currentDay.split(', ').slice(0, 2).join(', ')
    : currentDay.split(' ').slice(0, 3).join(' ');
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
