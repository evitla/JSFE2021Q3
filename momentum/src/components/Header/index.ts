import baseComponent from '../baseComponent';
import player from '../Player';
import weather from '../Weather';

import './style.scss';

const header = baseComponent('header', ['header']);

header.appendChild(player);
header.appendChild(weather);

export default header;
