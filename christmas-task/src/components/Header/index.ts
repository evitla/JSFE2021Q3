import BaseComponent from '../BaseComponent';
import ButtonGroup from './buttonGroup';
import Logo from './logo';
import Navbar from './navbar';
import SearchBar from '../SearchBar';

import './style.scss';

class Header extends BaseComponent {
  parentNode: HTMLElement;

  wrapper = new BaseComponent('div', ['wrapper', 'header-wrapper']);

  rightSide = new BaseComponent('div', ['header-right-side']);

  logo = new Logo(this.wrapper.element);

  navbar = new Navbar(this.wrapper.element);

  buttonGroup = new ButtonGroup(this.rightSide.element);

  searchBar = new SearchBar(this.rightSide.element);

  constructor(parentNode: HTMLElement) {
    super('header', ['header']);

    this.parentNode = parentNode;
  }

  render(): void {
    this.logo.render();
    this.navbar.render();
    this.buttonGroup.render();
    this.searchBar.render();

    this.wrapper.element.appendChild(this.rightSide.element);
    this.element.appendChild(this.wrapper.element);
    this.parentNode.appendChild(this.element);
  }

  afterRender(): void {
    this.navbar.afterRender();
    this.buttonGroup.afterRender();
  }
}

export default Header;
