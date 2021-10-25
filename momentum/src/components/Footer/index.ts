import appSettings from '../AppSettings';
import baseComponent from '../baseComponent';
import quoteBlock from './quoteBlock';

import './style.scss';

const footer = baseComponent('footer', ['footer']);

footer.append(appSettings, quoteBlock);

export default footer;
