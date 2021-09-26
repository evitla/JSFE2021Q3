import baseComponent from './baseComponent';

const unorderedList = (items: string[], styles: string[] = []): HTMLElement => {
  const element = baseComponent('ul', styles);

  element.innerHTML = items
    .map((item) => `<li><a href="#">${item}</a></li>`)
    .join('');

  return element;
};

export default unorderedList;
