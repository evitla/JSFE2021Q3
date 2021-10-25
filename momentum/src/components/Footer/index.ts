import baseComponent from '../baseComponent';
import { getRandomNumber } from '../utils';

import './style.scss';

const footer = baseComponent('footer', ['footer']);

const changeQuoteButton = baseComponent('button', ['change-quote']);
const quoteContainer = baseComponent('div');
const quoteText = baseComponent('div', ['quote']);
const author = baseComponent('div', ['author']);

const getQuotes = async (lang: 'en' | 'ru') => {
  const url = './quotes.json';
  const quotes: QuotesProps[] = (await (await fetch(url)).json())[lang];
  return quotes;
};

const writeQuote = (quote: QuotesProps) => {
  quoteText.textContent = quote.text;
  author.textContent = quote.author;
};

getQuotes('en').then((quotes) => {
  let quoteId = getRandomNumber(0, quotes.length);

  writeQuote(quotes[quoteId]);

  changeQuoteButton.onclick = () => {
    quoteId = getRandomNumber(0, quotes.length);
    writeQuote(quotes[quoteId]);
  };
});

quoteContainer.append(quoteText, author);
footer.append(changeQuoteButton, quoteContainer);

export default footer;

interface QuotesProps {
  text: string;
  author: string;
}
