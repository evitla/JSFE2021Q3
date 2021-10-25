import baseComponent from '../baseComponent';

import './style.scss';

const footer = baseComponent('footer', ['footer']);

const changeQuoteButton = baseComponent('button', ['change-quote']);
const quoteContainer = baseComponent('div');
const quote = baseComponent('div', ['quote']);
const author = baseComponent('div', ['author']);

quoteContainer.append(quote, author);
footer.append(changeQuoteButton, quoteContainer);

export default footer;
