import baseComponent from '../baseComponent';
import unorderedList from '../unorderedList';

const navbar = (items: string[]): HTMLElement => {
  const element = baseComponent('nav', ['nav']);

  const ul = unorderedList(items, ['nav-list']);

  element.appendChild(ul);
  return element;
};

export default navbar;
