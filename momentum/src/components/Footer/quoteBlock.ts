import baseComponent from '../baseComponent';
import store from '../store';
import { getRandomNumber } from '../utils';

const quoteBlock = baseComponent('div', ['quote-block']);

if (!store.blocks.includes('quote')) quoteBlock.classList.add('non-visible');

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
quoteBlock.append(changeQuoteButton, quoteContainer);

export default quoteBlock;

interface QuotesProps {
  text: string;
  author: string;
}
