import { getLocalStorage } from '../utils';

export default {
  language: getLocalStorage('language') || 'en',
  city: getLocalStorage('city') || 'Minsk',
  username: getLocalStorage('username'),
  background: getLocalStorage('background') || 'github',
  blocks:
    getLocalStorage('blocks') || 'empty time date greeting quote weather audio',
};

export type Block =
  | 'time'
  | 'date'
  | 'greeting'
  | 'quote'
  | 'weather'
  | 'audio';
