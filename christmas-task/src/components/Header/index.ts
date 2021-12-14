import BaseComponent from '../BaseComponent';
import ButtonGroup from './buttonGroup';
import Logo from './logo';
import Navbar from './navbar';
import SearchBar from '../SearchBar';

import './style.scss';

class Header extends BaseComponent {
  parentNode: HTMLElement;

  wrapper = new BaseComponent('div', ['wrapper', 'header-wrapper']);

  leftSide = new BaseComponent('div', ['header-left-side']);

  rightSide = new BaseComponent('div', ['header-right-side']);

  logo = new Logo(this.leftSide.element);

  navbar = new Navbar(this.leftSide.element);

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

    this.wrapper.element.appendChild(this.leftSide.element);
    this.wrapper.element.appendChild(this.rightSide.element);
    this.element.appendChild(this.wrapper.element);
    this.parentNode.appendChild(this.element);
  }

  afterRender(): void {
    this.navbar.afterRender();
    this.buttonGroup.afterRender();

    this.logo.element.onclick = () => {
      this.navbar.toys.classList.remove('active');
      this.navbar.tree.classList.remove('active');
    };
  }
}

export default Header;
