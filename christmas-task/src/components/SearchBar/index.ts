import BaseComponent from '../BaseComponent';

import searchIcon from '../../assets/svg/search.svg';

import './style.scss';

class SearchBar extends BaseComponent {
  parentNode: HTMLElement;

  constructor(parentNode: HTMLElement) {
    super('div', ['search-bar']);

    this.parentNode = parentNode;
  }

  render(): void {
    this.element.innerHTML = `
      <input class="search-input" type="text" placeholder="Search">
      <img src=${searchIcon} alt="search-icon">
    `;

    this.parentNode.appendChild(this.element);
  }
}

export default SearchBar;
