import { getLocalStorage } from '../utils';

export default {
  language: getLocalStorage('language') || 'en',
  city: getLocalStorage('city') || 'Minsk',
  username: getLocalStorage('username'),
  photoSource: getLocalStorage('photo-source') || 'github',
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
