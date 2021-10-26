import baseComponent from '../baseComponent';
import unorderedList from '../unorderedList';
import switchButton from '../SwitchButton';

import './style.scss';
import { date, time } from '../Main/timeAndDate';
import greetingContainer from '../Main/greeting';
import quoteBlock, { quoteTranslation } from '../Footer/quoteBlock';
import weather, { weatherTranslation } from '../Weather';
import player from '../Player';
import store, { Block } from '../store';
import toggleButtonGroup from '../ToggleButtonGroup';
import button from '../Button';
import { setLocalStorage } from '../utils';
import { settingBlocks } from '../../constants';

const appSettings = baseComponent('div', ['settings']);

const enLang = button('en');
const ruLang = button('ru');

if (store.language === 'en') enLang.classList.add('active');
else ruLang.classList.add('active');

const settingSwitchButton = (label: Block, target: HTMLElement) =>
  switchButton(label, target, ['settings-blocks']);

const timeSetting = settingSwitchButton('time', time);
const dateSetting = settingSwitchButton('date', date);
const greetingSetting = settingSwitchButton('greeting', greetingContainer);
const quoteSetting = settingSwitchButton('quote', quoteBlock);
const weatherSetting = settingSwitchButton('weather', weather);
const audioSetting = settingSwitchButton('audio', player);

const languageSetting = baseComponent('div', ['settings-blocks']);
languageSetting.innerHTML = '<span class="setting-label">Language</span>';

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

const settingLabels = settings.map((setting) =>
  setting.querySelector('.setting-label')
);

const settingsTranslation = (lang: string) => {
  const blocks =
    lang === 'en' ? Object.keys(settingBlocks) : Object.values(settingBlocks);

  blocks.forEach((block, index) => {
    settingLabels[index].textContent = block;
  });
};

settingsTranslation(store.language);

const handleLanguageSetting = (target: HTMLElement) => {
  const language = target.children[0].textContent;
  setLocalStorage('language', language);
  store.language = language;

  quoteTranslation();
  weatherTranslation();
  settingsTranslation(language);
};
const buttons = toggleButtonGroup([enLang, ruLang], handleLanguageSetting);
languageSetting.append(buttons);

appSettings.append(settingsList, gearButton);

export default appSettings;
