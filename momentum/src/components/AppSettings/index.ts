import baseComponent from '../baseComponent';

import './style.scss';

const appSettings = baseComponent('div', ['settings']);

const gearButton = baseComponent('button', ['gear-icon']);

appSettings.append(gearButton);

export default appSettings;
