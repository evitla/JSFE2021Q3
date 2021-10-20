import baseComponent from './baseComponent';

const unorderedList = (items: string[], styles: string[] = []): HTMLElement => {
  const element = baseComponent('ul', styles);

  element.innerHTML = items.map((item) => `<li>${item}</li>`).join('');

  return element;
};

export default unorderedList;
