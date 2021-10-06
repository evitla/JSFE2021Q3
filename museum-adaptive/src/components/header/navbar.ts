import baseComponent from '../baseComponent';
import unorderedList from '../unorderedList';

const navbar = (
  items: string[],
  styles: string[] = [],
  hrefs: string[] = []
): HTMLElement => {
  const element = baseComponent('nav', ['nav']);

  const ul = unorderedList(items, styles, hrefs);

  element.appendChild(ul);
  return element;
};

export default navbar;
