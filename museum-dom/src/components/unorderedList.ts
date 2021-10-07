import baseComponent from './baseComponent';

const unorderedList = (
  items: string[],
  styles: string[] = [],
  hrefs: string[] = []
): HTMLElement => {
  const element = baseComponent('ul', styles);

  element.innerHTML = items
    .map((item, index) => `<li><a href="${hrefs[index]}">${item}</a></li>`)
    .join('');

  return element;
};

export default unorderedList;
