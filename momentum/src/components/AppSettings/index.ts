import baseComponent from '../baseComponent';
import unorderedList from '../unorderedList';
import switchButton from '../SwitchButton';

import './style.scss';
import { date, time } from '../Main/timeAndDate';
import greetingContainer from '../Main/greeting';
import quoteBlock from '../Footer/quoteBlock';
import weather from '../Weather';
import player from '../Player';
import store, { Block } from '../store';
import toggleButtonGroup from '../ToggleButtonGroup';
import button from '../Button';
import { setLocalStorage } from '../utils';

const appSettings = baseComponent('div', ['settings']);

const enLang = button('en', ['active']);
const ruLang = button('ru');

const handleLanguageSetting = (target: HTMLElement) => {
  const language = target.children[0].textContent;
  setLocalStorage('language', language);
  store.language = language;
};

const languageSetting = baseComponent('div', ['settings-blocks']);
const buttons = toggleButtonGroup([enLang, ruLang], handleLanguageSetting);
languageSetting.innerHTML = '<span>Language</span>';
languageSetting.append(buttons);

const settingSwitchButton = (label: Block, target: HTMLElement) =>
  switchButton(label, target, ['settings-blocks']);

const timeSetting = settingSwitchButton('time', time);
const dateSetting = settingSwitchButton('date', date);
const greetingSetting = settingSwitchButton('greeting', greetingContainer);
const quoteSetting = settingSwitchButton('quote', quoteBlock);
const weatherSetting = settingSwitchButton('weather', weather);
const audioSetting = settingSwitchButton('audio', player);

const settings = [
  languageSetting,
  timeSetting,
  dateSetting,
  greetingSetting,
  quoteSetting,
  weatherSetting,
  audioSetting,
];

const settingsList = unorderedList(settings, ['settings-list']);

const gearButton = baseComponent('button', ['gear-icon']);

gearButton.onclick = () => {
  gearButton.classList.toggle('active');

  settingsList.style.display = gearButton.classList.contains('active')
    ? 'block'
    : 'none';
};

document.body.onclick = (e: MouseEvent) => {
  const path = e.composedPath && e.composedPath();
  if (!path.includes(appSettings)) {
    gearButton.classList.remove('active');
    settingsList.style.display = 'none';
  }
};

appSettings.append(settingsList, gearButton);

export default appSettings;
