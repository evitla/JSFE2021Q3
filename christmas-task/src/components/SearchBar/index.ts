import BaseComponent from '../BaseComponent';

import searchIcon from '../../assets/svg/search.svg';

import './style.scss';

class SearchBar extends BaseComponent {
  parentNode: HTMLElement;

  input = document.createElement('input');

  icon = new Image();

  constructor(parentNode: HTMLElement) {
    super('div', ['search-bar']);

    this.parentNode = parentNode;
    this.input.className = 'search-input';
    this.icon.src = searchIcon;
    this.icon.alt = 'search-icon';
  }

  render(): void {
    this.element.append(this.input, this.icon);

    this.parentNode.appendChild(this.element);
  }
}

export default SearchBar;
