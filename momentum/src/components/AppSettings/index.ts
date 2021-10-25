import baseComponent from '../baseComponent';
import unorderedList from '../unorderedList';
import switchButton from '../SwitchButton';

import './style.scss';
import { date, time } from '../Main/timeAndDate';
import greetingContainer from '../Main/greeting';
import quoteBlock from '../Footer/quoteBlock';
import weather from '../Weather';
import player from '../Player';

const appSettings = baseComponent('div', ['settings']);

const settingSwitchButton = (label: string, target: HTMLElement) =>
  switchButton(label, target, ['settings-switch-button']);

const timeSetting = settingSwitchButton('Time', time);
const dateSetting = settingSwitchButton('Date', date);
const greetingSetting = settingSwitchButton('Greeting', greetingContainer);
const quoteSetting = settingSwitchButton('Quote', quoteBlock);
const weatherSetting = settingSwitchButton('Weather', weather);
const audioSetting = settingSwitchButton('Audio', player);

const settings = [
  timeSetting,
  dateSetting,
  greetingSetting,
  quoteSetting,
  weatherSetting,
  audioSetting,
];

const settingsList = unorderedList(settings, ['settings-list']);

const gearButton = baseComponent('button', ['gear-icon']);

appSettings.append(settingsList, gearButton);

export default appSettings;
