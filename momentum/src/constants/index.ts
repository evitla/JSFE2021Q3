import audio1 from '../assets/sounds/Aqua Caelestis.mp3';
import audio2 from '../assets/sounds/River Flows In You.mp3';
import audio3 from '../assets/sounds/Ennio Morricone.mp3';
import audio4 from '../assets/sounds/Summer Wind.mp3';

export const weatherAppId = '424b258116dc401184f3ac801fce0559';

export const unsplashId = 'dgnmXfNfMrIJS6ZvugyxF7sNNxvwXxvDsd9MKXIOy2s';

export const pexelsId =
  '563492ad6f91700001000001a0fc71945fbe4b398d2c36669668d2ed';

export const playList = [
  {
    title: 'Aqua Caelestis',
    src: audio1,
    duration: '00:40',
  },
  {
    title: 'River Flows In You',
    src: audio2,
    duration: '01:37',
  },
  {
    title: 'Ennio Morricone',
    src: audio3,
    duration: '01:37',
  },
  {
    title: 'Summer Wind',
    src: audio4,
    duration: '01:50',
  },
];

export const timesOfDay = {
  night: 'Доброй ночи,',
  morning: 'Доброе утро,',
  afternoon: 'Добрый день,',
  evening: 'Добрый вечер,',
};

export const settingBlocks = {
  language: 'язык',
  time: 'время',
  date: 'дата',
  greeting: 'приветствие',
  quote: 'цитата',
  weather: 'погода',
  audio: 'аудио',
  background: 'фон',
};
